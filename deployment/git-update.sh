#!/bin/bash
################################################################################
# Git Update Script
#
# Pull latest code from Git repository and restart services
#
# USAGE:
#   On VPS: cd /opt/brivaro && ./git-update.sh
#   Or remote: ssh root@your-server 'cd /opt/brivaro && ./git-update.sh'
################################################################################

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}Git Update - Pulling latest changes...${NC}\n"

# Check if we're in a git repository
if [ ! -d "/opt/brivaro/app/.git" ]; then
    echo -e "${RED}Error: Not a git repository${NC}"
    echo "Please initialize git first:"
    echo "  cd /opt/brivaro/app"
    echo "  git init"
    echo "  git remote add origin YOUR_REPO_URL"
    exit 1
fi

cd /opt/brivaro/app

# Check current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo -e "${YELLOW}Current branch: ${CURRENT_BRANCH}${NC}\n"

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo -e "${YELLOW}Warning: You have uncommitted changes${NC}"
    echo "Stashing changes..."
    git stash push -m "Auto-stash before update $(date +%Y%m%d_%H%M%S)"
    echo -e "${GREEN}✓ Changes stashed${NC}\n"
fi

# Fetch latest changes
echo -e "${YELLOW}Fetching latest changes...${NC}"
git fetch origin

# Check if there are updates
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/$CURRENT_BRANCH)

if [ "$LOCAL" = "$REMOTE" ]; then
    echo -e "${GREEN}✓ Already up to date!${NC}\n"
    echo "No restart needed."
    exit 0
fi

# Show what will be pulled
echo -e "${YELLOW}New commits available:${NC}"
git log HEAD..origin/$CURRENT_BRANCH --oneline --pretty=format:"  - %h %s (%an)"
echo -e "\n"

# Pull latest changes
echo -e "${YELLOW}Pulling changes...${NC}"
git pull origin $CURRENT_BRANCH

echo -e "${GREEN}✓ Code updated successfully${NC}\n"

# Check if package.json changed (need npm install)
if git diff HEAD@{1} HEAD --name-only | grep -q "package.json"; then
    echo -e "${YELLOW}package.json changed - dependencies need update${NC}"
    echo "Run: cd /opt/brivaro && docker compose build app"
fi

# Check if docker-compose.yml changed
if git diff HEAD@{1} HEAD --name-only | grep -q "docker-compose.yml"; then
    echo -e "${YELLOW}docker-compose.yml changed - services need restart${NC}"
fi

# Ask if user wants to restart services
echo -e "\n${YELLOW}Restart services now? (y/n)${NC}"
read -p "> " -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}Restarting services...${NC}"
    cd /opt/brivaro
    docker compose restart app

    # Wait a bit for restart
    sleep 3

    # Check if app is running
    if docker compose ps | grep -q "app.*Up"; then
        echo -e "${GREEN}✓ Services restarted successfully${NC}\n"

        # Show recent logs
        echo -e "${YELLOW}Recent logs:${NC}"
        docker compose logs --tail=15 app
    else
        echo -e "${RED}✗ Service restart failed${NC}"
        echo "Check logs: docker compose logs app"
        exit 1
    fi
else
    echo -e "${YELLOW}Skipped restart. Restart manually when ready:${NC}"
    echo "  cd /opt/brivaro"
    echo "  docker compose restart app"
fi

echo -e "\n${GREEN}✓ Git update complete!${NC}\n"
