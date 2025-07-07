# HeyAgent App Development Guide

## ⚠️ CRITICAL: Process Management Warning

**NEVER use `kill -9` or forcefully terminate Node processes!**
- The development environment runs on Node.js processes
- Killing Node processes can corrupt the development state and lock resources
- Always use Ctrl+C to gracefully stop servers
- If a process becomes unresponsive, wait a few seconds before trying Ctrl+C again
- Check for running processes before starting new ones

## Pre-Development Checklist

Before running any development commands, always check for existing processes:

```bash
# Check for main app processes
lsof -i :3000  # Next.js dev server
lsof -i :8787  # Wrangler dev server

# Check for CMS processes (if running)
lsof -i :3001  # CMS Next.js
lsof -i :8788  # CMS Wrangler

# Check for any Node/Wrangler processes
ps aux | grep -E "node|wrangler" | grep -v grep

# If you find stuck processes, gracefully stop them:
# DO NOT use kill -9!
```

## Project Overview

HeyAgent is an AI automation platform for businesses, providing a chatbot interface for employees to execute workflows. The main app includes:

- **Frontend**: Next.js 15 with App Router, Tailwind CSS
- **Backend**: Cloudflare Workers with OpenNext adapter
- **Database**: Cloudflare D1 (changelog data)
- **Storage**: Cloudflare R2 (future: file storage)
- **Cache**: Cloudflare KV (UptimeFlare status monitoring)
- **Auth**: Clerk authentication (main app), Cloudflare Access (CMS)

## Port Configuration

- **Next.js Dev Server**: Port 3000
- **Wrangler Dev Server**: Port 8787
- **CMS (if running)**: Ports 3001 (Next.js) and 8788 (Wrangler)

## Local Development Setup

### Initial Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Create `.env.local` file with required values (see `.env.example`)

3. **Verify D1 database**:
   ```bash
   wrangler d1 execute DB_CHANGELOG --local --command="SELECT COUNT(*) FROM changelog_entries"
   ```

### Development Workflows

#### 1. UI Development (Fast, with Hot Reload)
```bash
npm run dev
```
- URL: http://localhost:3000
- Best for: Frontend work, component development
- Features: Hot reload, React Fast Refresh
- Limitations: Some Cloudflare bindings may not work perfectly

#### 2. Full Stack Development (Workers Runtime)
```bash
npm run preview
```
- URL: http://localhost:8787
- Best for: Testing with all Cloudflare bindings
- Features: Accurate production-like environment
- Limitations: Requires rebuild on changes

#### 3. Database Operations
```bash
# Check local database
wrangler d1 execute DB_CHANGELOG --local --command="YOUR SQL QUERY"

# Use remote database (CAREFUL!)
wrangler d1 execute DB_CHANGELOG --remote --command="YOUR SQL QUERY"
```

## D1 Database Management

### Local Database Location
The local D1 database is stored at `.wrangler/state/v3/d1/`. This database is:
- Shared with the CMS project (if running locally)
- Persisted between development sessions
- Separate from production data

### Database Schema
The app currently manages:
- `changelog_entries` - Product updates and releases
- `changelog_improvements` - Feature improvements
- `changelog_fixes` - Bug fixes

### Migrations
Database migrations should be managed through SQL files:
```bash
# Apply a migration locally
wrangler d1 execute DB_CHANGELOG --local --file=migrations/001_add_table.sql

# Apply to production (be careful!)
wrangler d1 execute DB_CHANGELOG --remote --file=migrations/001_add_table.sql
```

## API Routes

Key API endpoints:
- `/api/changelog` - Public changelog data (paginated)
- `/api/status` - UptimeFlare status data
- Future: `/api/workflows`, `/api/integrations`, etc.

## Deployment

### Build and Deploy
```bash
npm run deploy
```

This command:
1. Builds the Next.js app with OpenNext
2. Deploys to Cloudflare Workers
3. Updates bindings and routes

### Production URLs
- Main App: https://heyagentai.com
- API: https://api.heyagentai.workers.dev
- CMS: https://cms.heyagent.com

## Integration with Other Services

### HeyAgent CMS
The CMS shares the same local D1 database:
- CMS uses `--persist-to=../heyagent-app/.wrangler/state`
- Changes in either project are immediately visible
- Run both simultaneously on different ports

### UptimeFlare Status Monitoring
- Configuration in `uptimeflare/` directory
- KV namespace: `UPTIMEFLARE_STATE`
- Status page at `/status`

### Sonic CMS (Legacy)
- Previously used for content management
- Being replaced by custom HeyAgent CMS
- API URL in vars: `SONIC_CMS_API_URL`

## Common Development Scenarios

### Adding a New Feature
1. Create feature branch
2. Develop UI with `npm run dev`
3. Test with Workers runtime using `npm run preview`
4. Write tests
5. Deploy to preview: `npm run deploy:preview`
6. Merge and deploy to production

### Debugging Production Issues
1. Check logs: `wrangler tail`
2. Test with remote database: `npm run dev:remote`
3. Use Cloudflare dashboard for detailed analytics

### Working with D1 Database
1. Always test queries locally first
2. Use transactions for multi-table operations
3. Keep migrations in version control
4. Document schema changes

## Troubleshooting

### Port Already in Use
```bash
lsof -i :3000  # or :8787
# Find the process and stop it gracefully
```

### Database Connection Issues
1. Verify D1 binding: `npm run cf-typegen`
2. Check local database exists: `ls .wrangler/state/v3/d1/`
3. Reset local database if needed (backup first!)

### Build Errors
1. Clear caches: `rm -rf .next .open-next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check Node version matches requirements

### Authentication Issues
- For main app: Check Clerk environment variables
- For CMS access: Verify Cloudflare Access configuration

## Best Practices

1. **Always use graceful shutdown** (Ctrl+C)
2. **Test locally before deploying**
3. **Keep local and remote databases separate**
4. **Use preview deployments for testing**
5. **Document API changes**
6. **Monitor performance with Cloudflare Analytics**

## Environment Variables

Key variables in `.env.local`:
- `NEXT_PUBLIC_CLERK_*` - Authentication
- Database bindings configured in `wrangler.jsonc`
- Secrets managed via `wrangler secret`

## Additional Resources

- [OpenNext Cloudflare Docs](https://opennext.js.org/cloudflare)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [D1 Database Docs](https://developers.cloudflare.com/d1/)
- [Next.js App Router Docs](https://nextjs.org/docs/app)