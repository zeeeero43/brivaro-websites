#!/bin/bash
################################################################################
# SSL Setup Script (Let's Encrypt) - Direct Approach
#
# USAGE: ./setup-ssl.sh brivaro.de
################################################################################

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

if [ "$#" -ne 1 ]; then
    echo -e "${RED}Usage: $0 <domain>${NC}"
    echo "Example: $0 brivaro.de"
    exit 1
fi

DOMAIN=$1
EMAIL="info@${DOMAIN}"

echo -e "${GREEN}Setting up SSL for ${DOMAIN}...${NC}\n"

# Check if running as root
if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}This script must be run as root${NC}"
   exit 1
fi

# Check if DNS points to this server
echo -e "${YELLOW}Checking DNS...${NC}"
SERVER_IP=$(curl -s ifconfig.me)
DOMAIN_IP=$(dig +short $DOMAIN | tail -n1)

if [ "$SERVER_IP" != "$DOMAIN_IP" ]; then
    echo -e "${YELLOW}WARNING: DNS might not point to this server yet${NC}"
    echo "Server IP: $SERVER_IP"
    echo "Domain IP: $DOMAIN_IP"
    echo ""
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
else
    echo -e "${GREEN}✓ DNS points to this server${NC}"
fi

# Install Certbot
echo -e "${GREEN}Installing Certbot...${NC}"
apt-get update -qq
apt-get install -y -qq certbot python3-certbot-nginx

# Create certbot directory
mkdir -p /var/www/certbot

# Get certificate
echo -e "${GREEN}Requesting SSL certificate...${NC}"
certbot certonly --nginx \
    --non-interactive \
    --agree-tos \
    --email $EMAIL \
    -d $DOMAIN \
    -d www.$DOMAIN

# Update nginx config to enable HTTPS
echo -e "${GREEN}Enabling HTTPS in Nginx config...${NC}"

NGINX_CONF="/etc/nginx/sites-available/brivaro"

# Backup original
cp $NGINX_CONF ${NGINX_CONF}.bak

# Add HTTP to HTTPS redirect
sed -i '/# Proxy to Next.js/,/^    }$/c\    # Redirect to HTTPS\n    location / {\n        return 301 https://$server_name$request_uri;\n    }' $NGINX_CONF

# Uncomment HTTPS server block
sed -i '/# HTTPS Server (uncomment after SSL setup)/,/# }/s/^# //' $NGINX_CONF

# Test nginx config
echo -e "${GREEN}Testing Nginx configuration...${NC}"
nginx -t

# Reload nginx
echo -e "${GREEN}Reloading Nginx with SSL...${NC}"
systemctl reload nginx

# Setup auto-renewal
echo -e "${GREEN}Setting up auto-renewal...${NC}"
cat > /etc/cron.d/certbot-renew << EOF
0 3 * * * root certbot renew --quiet --deploy-hook "systemctl reload nginx"
EOF

# Test renewal process
echo -e "${GREEN}Testing renewal process...${NC}"
certbot renew --dry-run

# Final check
sleep 2
if systemctl is-active --quiet nginx; then
    echo -e "\n${GREEN}╔════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║      SSL Setup Complete! ✓             ║${NC}"
    echo -e "${GREEN}╚════════════════════════════════════════╝${NC}\n"

    echo -e "${YELLOW}Your site is now available at:${NC}"
    echo -e "  ${GREEN}https://$DOMAIN${NC}"
    echo -e "  ${GREEN}https://www.$DOMAIN${NC}\n"

    echo -e "${YELLOW}Certificate Info:${NC}"
    echo -e "  Auto-renews: Every day at 3am"
    echo -e "  Certificate location: /etc/letsencrypt/live/$DOMAIN/"
    echo -e "  Valid for: 90 days (auto-renews at 30 days)\n"

    echo -e "${YELLOW}Useful Commands:${NC}"
    echo -e "  certbot certificates           # List certificates"
    echo -e "  certbot renew --dry-run        # Test renewal"
    echo -e "  certbot renew                  # Force renewal"
    echo -e ""
else
    echo -e "\n${RED}✗ Nginx failed to start!${NC}"
    echo -e "Check logs: journalctl -u nginx -n 50"
    exit 1
fi
