#!/bin/bash
################################################################################
# Brivaro VPS Setup Script
#
# Dieses Script richtet einen frischen VPS komplett ein:
# - Docker + Docker Compose
# - Nginx Reverse Proxy
# - SSL via Let's Encrypt
# - Firewall (UFW)
# - Fail2Ban (Security)
# - Auto-Updates
# - Monitoring (optional)
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
║               VPS Setup Script v1.0                          ║
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
echo -e "${GREEN}[1/10] Updating system...${NC}"
apt-get update -qq
apt-get upgrade -y -qq
apt-get autoremove -y -qq

################################################################################
# 2. Install Essential Packages
################################################################################
echo -e "${GREEN}[2/10] Installing essential packages...${NC}"
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
    lsb-release

################################################################################
# 3. Install Docker
################################################################################
echo -e "${GREEN}[3/10] Installing Docker...${NC}"

# Remove old versions
apt-get remove -y docker docker-engine docker.io containerd runc 2>/dev/null || true

# Add Docker's official GPG key
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
chmod a+r /etc/apt/keyrings/docker.gpg

# Add repository
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker
apt-get update -qq
apt-get install -y -qq docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Start Docker
systemctl start docker
systemctl enable docker

# Verify
docker --version

echo -e "${GREEN}✓ Docker installed${NC}"

################################################################################
# 4. Configure Firewall (UFW)
################################################################################
echo -e "${GREEN}[4/10] Configuring firewall...${NC}"

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
# 5. Setup Fail2Ban (Brute-Force Protection)
################################################################################
echo -e "${GREEN}[5/10] Setting up Fail2Ban...${NC}"

# Create custom config
cat > /etc/fail2ban/jail.local << 'EOF'
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
EOF

# Start Fail2Ban
systemctl start fail2ban
systemctl enable fail2ban

echo -e "${GREEN}✓ Fail2Ban configured${NC}"

################################################################################
# 6. Setup Auto-Updates
################################################################################
echo -e "${GREEN}[6/10] Enabling automatic security updates...${NC}"

cat > /etc/apt/apt.conf.d/50unattended-upgrades << 'EOF'
Unattended-Upgrade::Allowed-Origins {
    "${distro_id}:${distro_codename}-security";
};
Unattended-Upgrade::AutoFixInterruptedDpkg "true";
Unattended-Upgrade::MinimalSteps "true";
Unattended-Upgrade::Remove-Unused-Kernel-Packages "true";
Unattended-Upgrade::Remove-Unused-Dependencies "true";
Unattended-Upgrade::Automatic-Reboot "false";
EOF

cat > /etc/apt/apt.conf.d/20auto-upgrades << 'EOF'
APT::Periodic::Update-Package-Lists "1";
APT::Periodic::Unattended-Upgrade "1";
APT::Periodic::AutocleanInterval "7";
EOF

echo -e "${GREEN}✓ Auto-updates enabled${NC}"

################################################################################
# 7. Create Application Directory Structure
################################################################################
echo -e "${GREEN}[7/10] Creating application directories...${NC}"

mkdir -p /opt/brivaro/{app,nginx,data,logs,backups}
mkdir -p /opt/brivaro/data/{redis,postgres}

echo -e "${GREEN}✓ Directories created${NC}"

################################################################################
# 8. Create Docker Compose Configuration
################################################################################
echo -e "${GREEN}[8/10] Creating Docker Compose configuration...${NC}"

cat > /opt/brivaro/docker-compose.yml << 'EOF'
version: '3.8'

services:
  # Next.js Application
  app:
    image: node:18-alpine
    container_name: brivaro-app
    restart: unless-stopped
    working_dir: /app
    volumes:
      - ./app:/app
    environment:
      - NODE_ENV=production
      - PORT=3000
    command: sh -c "npm ci && npm run build && npm start"
    expose:
      - "3000"
    networks:
      - brivaro-network
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3

  # Nginx Reverse Proxy
  nginx:
    image: nginx:alpine
    container_name: brivaro-nginx
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./nginx/conf.d:/etc/nginx/conf.d:ro
      - ./nginx/ssl:/etc/nginx/ssl:ro
      - ./logs/nginx:/var/log/nginx
    depends_on:
      - app
    networks:
      - brivaro-network
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  # Redis (für Queue & Cache)
  redis:
    image: redis:7-alpine
    container_name: brivaro-redis
    restart: unless-stopped
    command: redis-server --appendonly yes --requirepass ${REDIS_PASSWORD:-changeme}
    volumes:
      - ./data/redis:/data
    expose:
      - "6379"
    networks:
      - brivaro-network
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 30s
      timeout: 10s
      retries: 3

  # PostgreSQL (für Daten)
  postgres:
    image: postgres:15-alpine
    container_name: brivaro-postgres
    restart: unless-stopped
    environment:
      POSTGRES_DB: ${POSTGRES_DB:-brivaro}
      POSTGRES_USER: ${POSTGRES_USER:-brivaro}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD:-changeme}
    volumes:
      - ./data/postgres:/var/lib/postgresql/data
    expose:
      - "5432"
    networks:
      - brivaro-network
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U brivaro"]
      interval: 30s
      timeout: 10s
      retries: 3

  # Watchtower (Auto-Updates für Docker Images)
  watchtower:
    image: containrrr/watchtower
    container_name: brivaro-watchtower
    restart: unless-stopped
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      - WATCHTOWER_CLEANUP=true
      - WATCHTOWER_POLL_INTERVAL=86400  # 24h
    networks:
      - brivaro-network

networks:
  brivaro-network:
    driver: bridge
EOF

echo -e "${GREEN}✓ Docker Compose config created${NC}"

################################################################################
# 9. Create Nginx Configuration
################################################################################
echo -e "${GREEN}[9/10] Creating Nginx configuration...${NC}"

mkdir -p /opt/brivaro/nginx/conf.d

cat > /opt/brivaro/nginx/nginx.conf << 'EOF'
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;

events {
    worker_connections 1024;
    use epoll;
    multi_accept on;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';

    access_log /var/log/nginx/access.log main;

    # Performance
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
    client_max_body_size 20M;

    # Gzip
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript
               application/json application/javascript application/xml+rss
               application/rss+xml font/truetype font/opentype
               application/vnd.ms-fontobject image/svg+xml;

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    # Include site configs
    include /etc/nginx/conf.d/*.conf;
}
EOF

cat > /opt/brivaro/nginx/conf.d/brivaro.conf << 'EOF'
# Health check endpoint (für Docker healthcheck)
server {
    listen 80;
    server_name _;

    location /health {
        access_log off;
        return 200 "healthy\n";
        add_header Content-Type text/plain;
    }
}

# HTTP Server (wird später zu HTTPS redirect)
server {
    listen 80;
    server_name brivaro.de www.brivaro.de;

    # Let's Encrypt ACME Challenge
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    # Später: Redirect to HTTPS
    # location / {
    #     return 301 https://$server_name$request_uri;
    # }

    # Vorerst: Proxy to App
    location / {
        proxy_pass http://app:3000;
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
        proxy_pass http://app:3000;
        proxy_cache_valid 200 365d;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location /static {
        proxy_pass http://app:3000;
        proxy_cache_valid 200 365d;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}

# HTTPS Server (uncomment nach SSL-Setup)
# server {
#     listen 443 ssl http2;
#     server_name brivaro.de www.brivaro.de;
#
#     ssl_certificate /etc/nginx/ssl/fullchain.pem;
#     ssl_certificate_key /etc/nginx/ssl/privkey.pem;
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
#     location / {
#         proxy_pass http://app:3000;
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
#         proxy_pass http://app:3000;
#         add_header Cache-Control "public, max-age=31536000, immutable";
#     }
# }
EOF

echo -e "${GREEN}✓ Nginx config created${NC}"

################################################################################
# 10. Create Environment File Template
################################################################################
echo -e "${GREEN}[10/10] Creating environment file...${NC}"

cat > /opt/brivaro/.env.example << 'EOF'
# Database
POSTGRES_DB=brivaro
POSTGRES_USER=brivaro
POSTGRES_PASSWORD=CHANGE_ME_STRONG_PASSWORD

# Redis
REDIS_PASSWORD=CHANGE_ME_STRONG_PASSWORD

# Next.js
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://brivaro.de

# Optional: APIs für später
DEEPSEEK_API_KEY=
RUNWARE_API_KEY=
RESEND_API_KEY=
EOF

# Copy to actual .env
cp /opt/brivaro/.env.example /opt/brivaro/.env

echo -e "${GREEN}✓ Environment file created${NC}"

################################################################################
# Final Summary
################################################################################
echo -e "\n${GREEN}╔══════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║                    Setup Complete! ✓                         ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════════════════════════════╝${NC}\n"

echo -e "${YELLOW}Next Steps:${NC}\n"

echo -e "1. ${GREEN}Edit environment file:${NC}"
echo -e "   nano /opt/brivaro/.env"
echo -e "   → Change passwords!\n"

echo -e "2. ${GREEN}Upload your app code:${NC}"
echo -e "   cd /opt/brivaro/app"
echo -e "   git clone https://github.com/yourusername/brivaro-websites.git ."
echo -e "   # OR use scp/rsync\n"

echo -e "3. ${GREEN}Start the stack:${NC}"
echo -e "   cd /opt/brivaro"
echo -e "   docker compose up -d\n"

echo -e "4. ${GREEN}Check status:${NC}"
echo -e "   docker compose ps"
echo -e "   docker compose logs -f app\n"

echo -e "5. ${GREEN}Setup SSL (after DNS points to server):${NC}"
echo -e "   Run: /opt/brivaro/setup-ssl.sh brivaro.de\n"

echo -e "${YELLOW}Installed:${NC}"
echo -e "  ✓ Docker & Docker Compose"
echo -e "  ✓ Nginx Reverse Proxy"
echo -e "  ✓ PostgreSQL Database"
echo -e "  ✓ Redis Cache"
echo -e "  ✓ Firewall (UFW) - Ports 22, 80, 443 open"
echo -e "  ✓ Fail2Ban (Brute-force protection)"
echo -e "  ✓ Auto-Updates enabled\n"

echo -e "${YELLOW}Access:${NC}"
echo -e "  HTTP:  http://$(curl -s ifconfig.me)\n"

echo -e "${YELLOW}Useful Commands:${NC}"
echo -e "  docker compose logs -f       # View logs"
echo -e "  docker compose restart app   # Restart app"
echo -e "  docker compose down          # Stop all"
echo -e "  docker compose up -d         # Start all"
echo -e "  ufw status                   # Firewall status"
echo -e "  fail2ban-client status       # Security status\n"

echo -e "${RED}WICHTIG: Ändere die Passwörter in /opt/brivaro/.env!${NC}\n"
