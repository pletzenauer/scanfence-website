#!/bin/bash
cd /opt/scanfence-website
git pull origin main
docker compose build --no-cache
docker compose up -d
echo "Rebuild complete: $(date)"
