#!/bin/bash
################################################################################
# SSL Setup Script (Let's Encrypt)
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
EMAIL="admin@${DOMAIN}"

echo -e "${GREEN}Setting up SSL for ${DOMAIN}...${NC}\n"

# Check if DNS points to this server
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
fi

cd /opt/brivaro

# Install Certbot
echo -e "${GREEN}Installing Certbot...${NC}"
apt-get update -qq
apt-get install -y -qq certbot

# Stop nginx temporarily
echo -e "${GREEN}Stopping Nginx...${NC}"
docker compose stop nginx

# Get certificate
echo -e "${GREEN}Requesting SSL certificate...${NC}"
certbot certonly --standalone \
    --non-interactive \
    --agree-tos \
    --email $EMAIL \
    -d $DOMAIN \
    -d www.$DOMAIN

# Copy certificates to nginx directory
mkdir -p /opt/brivaro/nginx/ssl
cp /etc/letsencrypt/live/$DOMAIN/fullchain.pem /opt/brivaro/nginx/ssl/
cp /etc/letsencrypt/live/$DOMAIN/privkey.pem /opt/brivaro/nginx/ssl/

# Update nginx config to enable HTTPS
echo -e "${GREEN}Enabling HTTPS in Nginx config...${NC}"
sed -i 's/# server_name brivaro.de/server_name brivaro.de/' /opt/brivaro/nginx/conf.d/brivaro.conf
sed -i 's/#     return 301/    return 301/' /opt/brivaro/nginx/conf.d/brivaro.conf
sed -i 's/# server {/server {/g' /opt/brivaro/nginx/conf.d/brivaro.conf
sed -i 's/#     listen/    listen/g' /opt/brivaro/nginx/conf.d/brivaro.conf
sed -i 's/#     ssl/    ssl/g' /opt/brivaro/nginx/conf.d/brivaro.conf
sed -i 's/#     add_header/    add_header/g' /opt/brivaro/nginx/conf.d/brivaro.conf
sed -i 's/#     location/    location/g' /opt/brivaro/nginx/conf.d/brivaro.conf
sed -i 's/# }/}/g' /opt/brivaro/nginx/conf.d/brivaro.conf

# Setup auto-renewal
echo -e "${GREEN}Setting up auto-renewal...${NC}"
cat > /etc/cron.d/certbot-renew << EOF
0 3 * * * root certbot renew --quiet --deploy-hook "cp /etc/letsencrypt/live/$DOMAIN/*.pem /opt/brivaro/nginx/ssl/ && cd /opt/brivaro && docker compose restart nginx"
EOF

# Restart nginx
echo -e "${GREEN}Starting Nginx with SSL...${NC}"
docker compose up -d nginx

echo -e "\n${GREEN}✓ SSL Setup Complete!${NC}\n"
echo -e "Your site is now available at:"
echo -e "  ${GREEN}https://$DOMAIN${NC}"
echo -e "  ${GREEN}https://www.$DOMAIN${NC}\n"
echo -e "Certificate auto-renews every 3am.\n"
