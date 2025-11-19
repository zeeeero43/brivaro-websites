#!/bin/bash
################################################################################
# Brivaro Deployment Script - Direct Approach
#
# Deploys latest code changes to the VPS
# USAGE: ./deploy.sh
################################################################################

set -e  # Exit on error

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

APP_DIR="/opt/brivaro/app"
BACKUP_DIR="/opt/brivaro/backups"
SERVICE_NAME="brivaro"

echo -e "${GREEN}"
echo "╔════════════════════════════════════════╗"
echo "║     Brivaro Deployment Script          ║"
echo "╚════════════════════════════════════════╝"
echo -e "${NC}\n"

# Check if running as root
if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}This script must be run as root${NC}"
   exit 1
fi

# Check if app directory exists
if [ ! -d "$APP_DIR" ]; then
    echo -e "${RED}Error: App directory $APP_DIR does not exist${NC}"
    exit 1
fi

################################################################################
# 1. Backup current version
################################################################################
echo -e "${YELLOW}[1/6] Creating backup...${NC}"

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/backup_$TIMESTAMP.tar.gz"

mkdir -p "$BACKUP_DIR"

# Backup everything except node_modules and .next
tar -czf "$BACKUP_FILE" \
    --exclude='node_modules' \
    --exclude='.next' \
    --exclude='.git' \
    -C "$APP_DIR" . 2>/dev/null || true

echo -e "${GREEN}✓ Backup created: $BACKUP_FILE${NC}"

# Keep only last 5 backups
cd "$BACKUP_DIR"
ls -t backup_*.tar.gz | tail -n +6 | xargs rm -f 2>/dev/null || true

################################################################################
# 2. Pull latest code
################################################################################
echo -e "${YELLOW}[2/6] Pulling latest code...${NC}"

cd "$APP_DIR"

# Stash any local changes
su - brivaro -c "cd $APP_DIR && git stash" 2>/dev/null || true

# Pull from main branch
su - brivaro -c "cd $APP_DIR && git pull origin main"

echo -e "${GREEN}✓ Code updated${NC}"

################################################################################
# 3. Install dependencies (only if package.json changed)
################################################################################
echo -e "${YELLOW}[3/6] Checking dependencies...${NC}"

# Check if package.json was modified in the latest commit
PACKAGE_CHANGED=$(git diff HEAD~1 HEAD --name-only | grep -c "package.json" || echo "0")

if [ "$PACKAGE_CHANGED" -gt 0 ]; then
    echo -e "${YELLOW}package.json changed, installing dependencies...${NC}"
    su - brivaro -c "cd $APP_DIR && npm ci --production"
    echo -e "${GREEN}✓ Dependencies installed${NC}"
else
    echo -e "${GREEN}✓ No dependency changes, skipping npm install${NC}"
fi

################################################################################
# 4. Build application
################################################################################
echo -e "${YELLOW}[4/6] Building application...${NC}"

su - brivaro -c "cd $APP_DIR && npm run build"

echo -e "${GREEN}✓ Build complete${NC}"

################################################################################
# 5. Restart service
################################################################################
echo -e "${YELLOW}[5/6] Restarting service...${NC}"

systemctl restart "$SERVICE_NAME"

echo -e "${GREEN}✓ Service restarted${NC}"

################################################################################
# 6. Health check
################################################################################
echo -e "${YELLOW}[6/6] Performing health check...${NC}"

# Wait for service to start
sleep 3

# Check if service is running
if systemctl is-active --quiet "$SERVICE_NAME"; then
    echo -e "${GREEN}✓ Service is running${NC}"

    # Try to curl the app
    if curl -sf http://localhost:3000 > /dev/null; then
        echo -e "${GREEN}✓ Application is responding${NC}"
    else
        echo -e "${YELLOW}⚠ Service is running but not responding on port 3000${NC}"
        echo -e "${YELLOW}Check logs: journalctl -u $SERVICE_NAME -n 50${NC}"
    fi
else
    echo -e "${RED}✗ Service failed to start${NC}"
    echo -e "${RED}Check logs: journalctl -u $SERVICE_NAME -n 50${NC}"

    # Offer to rollback
    echo -e "\n${YELLOW}Do you want to rollback? (y/n)${NC}"
    read -r ROLLBACK
    if [ "$ROLLBACK" = "y" ]; then
        echo -e "${YELLOW}Rolling back...${NC}"
        tar -xzf "$BACKUP_FILE" -C "$APP_DIR"
        systemctl restart "$SERVICE_NAME"
        echo -e "${GREEN}✓ Rolled back to previous version${NC}"
    fi

    exit 1
fi

################################################################################
# Summary
################################################################################
echo -e "\n${GREEN}╔════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║      Deployment Successful! ✓          ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════╝${NC}\n"

echo -e "${YELLOW}Deployment Info:${NC}"
echo -e "  Timestamp: $TIMESTAMP"
echo -e "  Backup: $BACKUP_FILE"
echo -e "  Service: $SERVICE_NAME"
echo -e ""

echo -e "${YELLOW}Useful Commands:${NC}"
echo -e "  systemctl status $SERVICE_NAME    # Check status"
echo -e "  journalctl -u $SERVICE_NAME -f    # View logs"
echo -e "  systemctl restart $SERVICE_NAME   # Restart"
echo -e ""

echo -e "${GREEN}Your app is now live! 🚀${NC}\n"
