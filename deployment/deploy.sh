#!/bin/bash
################################################################################
# Deployment Script
#
# Deploy updates to production server
#
# USAGE:
#   On VPS: cd /root/brivaro-websites/deployment && ./deploy.sh
################################################################################

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}Deploying Brivaro...${NC}\n"

# Navigate to project root
cd /root/brivaro-websites

# Backup current version
echo -e "${YELLOW}[1/5] Creating backup...${NC}"
BACKUP_DIR="/opt/brivaro/backups/$(date +%Y%m%d_%H%M%S)"
mkdir -p $BACKUP_DIR
tar -czf $BACKUP_DIR/brivaro-backup.tar.gz -C /root brivaro-websites 2>/dev/null || true
echo -e "${GREEN}✓ Backup created: $BACKUP_DIR${NC}\n"

# Pull latest code
echo -e "${YELLOW}[2/5] Pulling latest code...${NC}"
git fetch origin
CURRENT_COMMIT=$(git rev-parse HEAD)
git pull origin main
NEW_COMMIT=$(git rev-parse HEAD)

if [ "$CURRENT_COMMIT" == "$NEW_COMMIT" ]; then
    echo -e "${YELLOW}Already up to date. No deployment needed.${NC}\n"
    exit 0
fi

echo -e "${GREEN}✓ Code updated: $CURRENT_COMMIT -> $NEW_COMMIT${NC}\n"

# Restart app container (will rebuild via npm ci)
echo -e "${YELLOW}[3/5] Restarting application...${NC}"
cd /opt/brivaro
docker compose restart app
echo -e "${GREEN}✓ Container restarted${NC}\n"

# Wait for container to be healthy
echo -e "${YELLOW}[4/5] Waiting for app to be ready...${NC}"
for i in {1..30}; do
    if docker compose ps app | grep -q "healthy"; then
        echo -e "${GREEN}✓ App is healthy${NC}\n"
        break
    fi
    if [ $i -eq 30 ]; then
        echo -e "${RED}✗ App failed to become healthy${NC}"
        docker compose logs --tail=50 app
        exit 1
    fi
    sleep 2
done

# Health check
echo -e "${YELLOW}[5/5] Final health check...${NC}"
sleep 3

if docker compose ps app | grep -q "Up"; then
    echo -e "${GREEN}✓ Deployment successful!${NC}\n"

    # Show logs
    echo -e "${YELLOW}Recent logs:${NC}"
    docker compose logs --tail=20 app

    echo -e "\n${GREEN}🎉 Deployment complete!${NC}"
    echo -e "Access your site at: ${GREEN}https://brivaro.de${NC}\n"
else
    echo -e "${RED}✗ Deployment failed!${NC}"
    echo -e "${YELLOW}Check logs with: docker compose logs -f app${NC}\n"
    exit 1
fi
