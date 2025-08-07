#!/bin/bash
set -e

echo "🚀 Deploying Studio to production..."

# Ensure we're using production config (should already be set)
cp sanity.config.production.ts sanity.config.ts

# Ensure CLI is set to production
sed -i '' 's/studioHost: "hv-staging"/studioHost: "hv-production"/' sanity.cli.ts

# Deploy
sanity deploy

echo "✅ Production Studio deployed to https://hv-production.sanity.studio"