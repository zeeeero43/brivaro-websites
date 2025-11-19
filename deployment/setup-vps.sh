#!/bin/bash
################################################################################
# Brivaro VPS Setup Script - Direct Approach (No Docker)
#
# Richtet einen frischen Ubuntu 22.04 VPS für Next.js ein:
# - Node.js 20 LTS
# - nginx Reverse Proxy
# - SSL via Let's Encrypt (vorbereitet)
# - Firewall (UFW)
# - Fail2Ban (Security)
# - Auto-Updates
# - systemd Service
#
# USAGE:
# 1. Fresh Ubuntu 22.04 VPS
# 2. Als root: wget https://raw.githubusercontent.com/.../setup-vps.sh
# 3. chmod +x setup-vps.sh
# 4. ./setup-vps.sh
################################################################################

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}"
cat << "EOF"
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   ██████╗ ██████╗ ██╗██╗   ██╗ █████╗ ██████╗  ██████╗     ║
║   ██╔══██╗██╔══██╗██║██║   ██║██╔══██╗██╔══██╗██╔═══██╗    ║
║   ██████╔╝██████╔╝██║██║   ██║███████║██████╔╝██║   ██║    ║
║   ██╔══██╗██╔══██╗██║╚██╗ ██╔╝██╔══██║██╔══██╗██║   ██║    ║
║   ██████╔╝██║  ██║██║ ╚████╔╝ ██║  ██║██║  ██║╚██████╔╝    ║
║   ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝     ║
║                                                              ║
║          VPS Direct Setup v2.0 (No Docker)                   ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
EOF
echo -e "${NC}"

# Check if running as root
if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}This script must be run as root${NC}"
   exit 1
fi

echo -e "${YELLOW}Starting VPS setup...${NC}\n"

################################################################################
# 1. System Update
################################################################################
echo -e "${GREEN}[1/8] Updating system...${NC}"
apt-get update -qq
apt-get upgrade -y -qq
apt-get autoremove -y -qq

################################################################################
# 2. Install Essential Packages
################################################################################
echo -e "${GREEN}[2/8] Installing essential packages...${NC}"
apt-get install -y -qq \
    curl \
    wget \
    git \
    vim \
    htop \
    net-tools \
    ufw \
    fail2ban \
    unattended-upgrades \
    software-properties-common \
    ca-certificates \
    gnupg \
    build-essential

################################################################################
# 3. Install Node.js 20 LTS
################################################################################
echo -e "${GREEN}[3/8] Installing Node.js 20 LTS...${NC}"

# Remove old Node versions
apt-get remove -y nodejs npm 2>/dev/null || true

# Add NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -

# Install Node.js
apt-get install -y nodejs

# Verify installation
node --version
npm --version

echo -e "${GREEN}✓ Node.js installed${NC}"

################################################################################
# 4. Install nginx
################################################################################
echo -e "${GREEN}[4/8] Installing nginx...${NC}"

apt-get install -y nginx

# Stop default nginx
systemctl stop nginx

echo -e "${GREEN}✓ nginx installed${NC}"

################################################################################
# 5. Configure Firewall (UFW)
################################################################################
echo -e "${GREEN}[5/8] Configuring firewall...${NC}"

# Reset firewall
ufw --force reset

# Default policies
ufw default deny incoming
ufw default allow outgoing

# Allow SSH (WICHTIG: Sonst locked man sich aus!)
ufw allow 22/tcp comment 'SSH'

# Allow HTTP/HTTPS
ufw allow 80/tcp comment 'HTTP'
ufw allow 443/tcp comment 'HTTPS'

# Enable firewall
ufw --force enable

echo -e "${GREEN}✓ Firewall configured${NC}"
ufw status

################################################################################
# 6. Setup Fail2Ban (Brute-Force Protection)
################################################################################
echo -e "${GREEN}[6/8] Setting up Fail2Ban...${NC}"

# Create custom config
cat > /etc/fail2ban/jail.local << 'FAIL2BAN_EOF'
[DEFAULT]
bantime = 1h
findtime = 10m
maxretry = 5
destemail = root@localhost
sendername = Fail2Ban

[sshd]
enabled = true
port = 22
logpath = %(sshd_log)s
backend = %(sshd_backend)s

[nginx-http-auth]
enabled = true
port = http,https
logpath = /var/log/nginx/error.log

[nginx-limit-req]
enabled = true
port = http,https
logpath = /var/log/nginx/error.log
FAIL2BAN_EOF

# Start Fail2Ban
systemctl start fail2ban
systemctl enable fail2ban

echo -e "${GREEN}✓ Fail2Ban configured${NC}"

################################################################################
# 7. Setup Auto-Updates
################################################################################
echo -e "${GREEN}[7/8] Enabling automatic security updates...${NC}"

cat > /etc/apt/apt.conf.d/50unattended-upgrades << 'AUTOUPDATE_EOF'
Unattended-Upgrade::Allowed-Origins {
    "${distro_id}:${distro_codename}-security";
};
Unattended-Upgrade::AutoFixInterruptedDpkg "true";
Unattended-Upgrade::MinimalSteps "true";
Unattended-Upgrade::Remove-Unused-Kernel-Packages "true";
Unattended-Upgrade::Remove-Unused-Dependencies "true";
Unattended-Upgrade::Automatic-Reboot "false";
AUTOUPDATE_EOF

cat > /etc/apt/apt.conf.d/20auto-upgrades << 'AUTOCONFIG_EOF'
APT::Periodic::Update-Package-Lists "1";
APT::Periodic::Unattended-Upgrade "1";
APT::Periodic::AutocleanInterval "7";
AUTOCONFIG_EOF

echo -e "${GREEN}✓ Auto-updates enabled${NC}"

################################################################################
# 8. Setup Application
################################################################################
echo -e "${GREEN}[8/8] Setting up application...${NC}"

# Create dedicated user
useradd -r -s /bin/bash -d /opt/brivaro -m brivaro || true

# Create directory structure
mkdir -p /opt/brivaro/{app,backups,logs}
chown -R brivaro:brivaro /opt/brivaro

# Create systemd service file
cat > /etc/systemd/system/brivaro.service << 'SERVICE_EOF'
[Unit]
Description=Brivaro Next.js Application
After=network.target

[Service]
Type=simple
User=brivaro
WorkingDirectory=/opt/brivaro/app
Environment="NODE_ENV=production"
Environment="PORT=3000"
ExecStart=/usr/bin/npm start
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal
SyslogIdentifier=brivaro

[Install]
WantedBy=multi-user.target
SERVICE_EOF

# Create nginx config
mkdir -p /etc/nginx/sites-available
mkdir -p /etc/nginx/sites-enabled

cat > /etc/nginx/sites-available/brivaro << 'NGINX_EOF'
# Health check endpoint
server {
    listen 80 default_server;
    server_name _;

    location /health {
        access_log off;
        return 200 "healthy\n";
        add_header Content-Type text/plain;
    }
}

# Main application
server {
    listen 80;
    server_name brivaro.de www.brivaro.de;

    # Let's Encrypt ACME Challenge
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    # Proxy to Next.js
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

        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Static files caching
    location /_next/static {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location /static {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}

# HTTPS Server (uncomment after SSL setup)
# server {
#     listen 443 ssl http2;
#     server_name brivaro.de www.brivaro.de;
#
#     ssl_certificate /etc/letsencrypt/live/brivaro.de/fullchain.pem;
#     ssl_certificate_key /etc/letsencrypt/live/brivaro.de/privkey.pem;
#
#     # SSL Settings
#     ssl_protocols TLSv1.2 TLSv1.3;
#     ssl_ciphers HIGH:!aNULL:!MD5;
#     ssl_prefer_server_ciphers on;
#     ssl_session_cache shared:SSL:10m;
#     ssl_session_timeout 10m;
#
#     # HSTS
#     add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
#
#     # Security Headers
#     add_header X-Frame-Options "SAMEORIGIN" always;
#     add_header X-Content-Type-Options "nosniff" always;
#     add_header X-XSS-Protection "1; mode=block" always;
#
#     location / {
#         proxy_pass http://localhost:3000;
#         proxy_http_version 1.1;
#         proxy_set_header Upgrade $http_upgrade;
#         proxy_set_header Connection 'upgrade';
#         proxy_set_header Host $host;
#         proxy_set_header X-Real-IP $remote_addr;
#         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
#         proxy_set_header X-Forwarded-Proto $scheme;
#         proxy_cache_bypass $http_upgrade;
#     }
#
#     location /_next/static {
#         proxy_pass http://localhost:3000;
#         add_header Cache-Control "public, max-age=31536000, immutable";
#     }
# }
NGINX_EOF

# Enable nginx site
ln -sf /etc/nginx/sites-available/brivaro /etc/nginx/sites-enabled/brivaro
rm -f /etc/nginx/sites-enabled/default

# Update main nginx config
cat > /etc/nginx/nginx.conf << 'NGINX_MAIN_EOF'
user www-data;
worker_processes auto;
pid /run/nginx.pid;
error_log /var/log/nginx/error.log warn;
include /etc/nginx/modules-enabled/*.conf;

events {
    worker_connections 1024;
    use epoll;
    multi_accept on;
}

http {
    # Basic Settings
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
    client_max_body_size 20M;

    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # Logging
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';
    access_log /var/log/nginx/access.log main;

    # Gzip
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript
               application/json application/javascript application/xml+rss
               application/rss+xml font/truetype font/opentype
               application/vnd.ms-fontobject image/svg+xml;

    # Security Headers (global)
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Virtual Host Configs
    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
NGINX_MAIN_EOF

# Test nginx config
nginx -t

# Start nginx
systemctl start nginx
systemctl enable nginx

echo -e "${GREEN}✓ Application setup complete${NC}"

################################################################################
# Final Summary
################################################################################
echo -e "\n${GREEN}╔══════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║                    Setup Complete! ✓                         ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════════════════════════════╝${NC}\n"

echo -e "${YELLOW}Next Steps:${NC}\n"

echo -e "1. ${GREEN}Clone your repository:${NC}"
echo -e "   cd /opt/brivaro/app"
echo -e "   git clone https://github.com/yourusername/brivaro-websites.git ."
echo -e "   chown -R brivaro:brivaro /opt/brivaro/app\n"

echo -e "2. ${GREEN}Install dependencies and build:${NC}"
echo -e "   su - brivaro"
echo -e "   cd /opt/brivaro/app"
echo -e "   npm ci --production"
echo -e "   npm run build\n"

echo -e "3. ${GREEN}Start the application:${NC}"
echo -e "   exit  # Exit from brivaro user"
echo -e "   systemctl start brivaro"
echo -e "   systemctl enable brivaro\n"

echo -e "4. ${GREEN}Check status:${NC}"
echo -e "   systemctl status brivaro"
echo -e "   journalctl -u brivaro -f\n"

echo -e "5. ${GREEN}Setup SSL (after DNS points to server):${NC}"
echo -e "   ./deployment/setup-ssl.sh brivaro.de\n"

echo -e "${YELLOW}Installed:${NC}"
echo -e "  ✓ Node.js $(node --version)"
echo -e "  ✓ npm $(npm --version)"
echo -e "  ✓ nginx"
echo -e "  ✓ Firewall (UFW) - Ports 22, 80, 443 open"
echo -e "  ✓ Fail2Ban (Brute-force protection)"
echo -e "  ✓ Auto-Updates enabled"
echo -e "  ✓ systemd service configured\n"

echo -e "${YELLOW}Access:${NC}"
echo -e "  HTTP:  http://$(curl -s ifconfig.me)\n"

echo -e "${YELLOW}Useful Commands:${NC}"
echo -e "  systemctl status brivaro      # Check service status"
echo -e "  systemctl restart brivaro     # Restart app"
echo -e "  systemctl stop brivaro        # Stop app"
echo -e "  journalctl -u brivaro -f      # View logs (live)"
echo -e "  journalctl -u brivaro -n 100  # View last 100 log lines"
echo -e "  systemctl status nginx        # Check nginx status"
echo -e "  nginx -t                      # Test nginx config"
echo -e "  ufw status                    # Firewall status"
echo -e "  fail2ban-client status        # Security status\n"

echo -e "${GREEN}Setup complete! Deploy your code and start the service.${NC}\n"
