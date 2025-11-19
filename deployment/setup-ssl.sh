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
apt-get install -y -qq certbot

# Stop nginx temporarily for standalone mode
echo -e "${GREEN}Stopping nginx temporarily...${NC}"
systemctl stop nginx

# Get certificate with standalone mode (bypasses nginx/DNS issues)
echo -e "${GREEN}Requesting SSL certificate...${NC}"
certbot certonly --standalone \
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

# Create new config with SSL enabled
cat > $NGINX_CONF << 'SSL_NGINX_EOF'
# Default server - blocks all unknown domains for security
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;

    location /health {
        access_log off;
        return 200 "healthy\n";
        add_header Content-Type text/plain;
    }

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 444;
    }
}

# HTTP Server - Redirect to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name brivaro.de www.brivaro.de;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$server_name$request_uri;
    }
}

# HTTPS Server
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name brivaro.de www.brivaro.de;

    ssl_certificate /etc/letsencrypt/live/brivaro.de/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/brivaro.de/privkey.pem;

    # SSL Settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # HSTS
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;

        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    location /_next/static {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location /static {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
SSL_NGINX_EOF

# Test nginx config
echo -e "${GREEN}Testing Nginx configuration...${NC}"
nginx -t

# Start nginx (was stopped for standalone mode)
echo -e "${GREEN}Starting Nginx with SSL...${NC}"
systemctl start nginx

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
