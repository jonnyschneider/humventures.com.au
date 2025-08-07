# Sanity Studio Deployment Guide

## Overview

We have three Sanity Studio instances:
- **Staging Studio**: `https://hv-staging.sanity.studio` → `staging` dataset
- **Production Studio**: `https://hv-production.sanity.studio` → `production` dataset  
- **Local Studio**: `http://localhost:3000/studio` → `production` dataset

## Local Development

- **Next.js app** (`localhost:3000`): Uses `staging` dataset (configured in `.env.local`)
- **Local Studio** (`localhost:3000/studio`): Uses `production` dataset (hardcoded in config)

This setup allows you to:
- Test site changes against staging content
- Create/edit production content while developing
- Keep staging separate for schema/layout testing

## Vercel Production

- Uses `production` dataset (configured via Vercel environment variables)
- Set these in Vercel dashboard:
  - `NEXT_PUBLIC_SANITY_PROJECT_ID=6i6wbquj`
  - `NEXT_PUBLIC_SANITY_DATASET=production`
  - `NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01`

## Studio Deployments

### Deploy to Staging
```bash
cp sanity.config.production.ts sanity.config.ts
sed -i '' 's/dataset: "production"/dataset: "staging"/' sanity.config.ts
sanity deploy --hostname hv-staging
```
**Note**: After deployment, clear browser cache or use incognito to see changes

### Deploy to Production  
```bash
cp sanity.config.production.ts sanity.config.ts
sanity deploy --hostname hv-production
```
**Note**: After deployment, clear browser cache or use incognito to see changes

## Workflow

1. **Schema Changes**: Test in staging first
   ```bash
   # Make changes to schema
   ./scripts/deploy-studio-staging.sh
   # Test at https://hv-staging.sanity.studio
   # If good, deploy to production:
   ./scripts/deploy-studio-production.sh
   ```

2. **Content Creation**: Use production Studio directly
   - Go to https://hv-production.sanity.studio
   - Create/edit content

## Files

- `sanity.config.ts` - Main config (currently set to production)
- `sanity.config.production.ts` - Production config with hardcoded values
- `sanity.config.backup.ts` - Backup of environment-based config
- `.env.local` - Local development environment variables

## Troubleshooting

If you get "Missing environment variable" errors in deployed Studios:
- Ensure all config files have hardcoded values (no `process.env`)
- Check that `src/sanity/types/post.ts` uses hardcoded `apiVersion`
- Redeploy using the appropriate script