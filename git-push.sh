#!/bin/bash
# Quick push script with your GitHub token
# Usage: ./git-push.sh

TOKEN="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"

echo "Setting remote URL with token..."
git remote set-url origin https://${TOKEN}@github.com/zeeeero43/brivaro-websites.git

echo "Pushing to GitHub..."
git push origin main

echo "Done! Reverting to SSH remote..."
git remote set-url origin git@github.com:zeeeero43/brivaro-websites.git

echo "✅ Push complete!"
