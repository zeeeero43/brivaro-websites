#!/bin/bash
################################################################################
# Deployment Script
#
# Deploy updates to production server
#
# USAGE:
#   Local: ./deploy.sh
#   Or from anywhere: ssh root@your-server 'cd /opt/brivaro && ./deploy.sh'
################################################################################

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}Deploying Brivaro...${NC}\n"

cd /opt/brivaro/app

# Backup current version
echo -e "${YELLOW}[1/5] Creating backup...${NC}"
BACKUP_DIR="/opt/brivaro/backups/$(date +%Y%m%d_%H%M%S)"
mkdir -p $BACKUP_DIR
cp -r /opt/brivaro/app $BACKUP_DIR/ 2>/dev/null || true
echo -e "${GREEN}✓ Backup created: $BACKUP_DIR${NC}\n"

# Pull latest code
echo -e "${YELLOW}[2/5] Pulling latest code...${NC}"
git pull origin main
echo -e "${GREEN}✓ Code updated${NC}\n"

# Build new version
echo -e "${YELLOW}[3/5] Building application...${NC}"
cd /opt/brivaro
docker compose build app
echo -e "${GREEN}✓ Build complete${NC}\n"

# Restart services
echo -e "${YELLOW}[4/5] Restarting services...${NC}"
docker compose up -d app
echo -e "${GREEN}✓ Services restarted${NC}\n"

# Health check
echo -e "${YELLOW}[5/5] Running health check...${NC}"
sleep 5

if docker compose ps | grep -q "app.*Up"; then
    echo -e "${GREEN}✓ Deployment successful!${NC}\n"

    # Show logs
    echo -e "${YELLOW}Recent logs:${NC}"
    docker compose logs --tail=20 app

    echo -e "\n${GREEN}Access your site at: https://brivaro.de${NC}\n"
else
    echo -e "${RED}✗ Deployment failed!${NC}"
    echo -e "${YELLOW}Rolling back...${NC}"

    # Rollback
    rm -rf /opt/brivaro/app
    cp -r $BACKUP_DIR/app /opt/brivaro/
    docker compose up -d app

    echo -e "${RED}Rolled back to previous version${NC}"
    docker compose logs --tail=50 app
    exit 1
fi
