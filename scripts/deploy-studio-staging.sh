#!/bin/bash
set -e

echo "🚀 Deploying Studio to staging..."

# Create staging config
cp sanity.config.production.ts sanity.config.staging.ts
sed -i '' 's/dataset: "production"/dataset: "staging"/' sanity.config.staging.ts

# Remove studioHost to allow selection
sed -i '' '/studioHost:/d' sanity.cli.ts

echo "When prompted, select 'hv-staging' hostname"
echo "Press Enter to continue..."
read

# Deploy with staging config
cp sanity.config.staging.ts sanity.config.ts
sanity deploy

# Restore production config
cp sanity.config.production.ts sanity.config.ts

# Restore CLI config
echo "  studioHost: 'hv-staging'" >> sanity.cli.ts.tmp
sed '/api: { projectId, dataset },/r sanity.cli.ts.tmp' sanity.cli.ts > sanity.cli.ts.new
mv sanity.cli.ts.new sanity.cli.ts
rm -f sanity.cli.ts.tmp

echo "✅ Staging Studio deployed to https://hv-staging.sanity.studio"