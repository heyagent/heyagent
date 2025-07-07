# HeyAgent CMS Development Guide

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
lsof -i :3000  # Main app Next.js
lsof -i :8787  # Main app Wrangler

# Check for CMS processes
lsof -i :3001  # CMS Next.js
lsof -i :8788  # CMS Wrangler

# Check for any Node/Wrangler processes
ps aux | grep -E "node|wrangler" | grep -v grep

# If you find stuck processes, gracefully stop them:
# DO NOT use kill -9!
```

## Port Configuration

The CMS uses different ports to allow simultaneous development with the main HeyAgent app:
- **Next.js Dev Server**: Port 3001 (main app uses 3000)
- **Wrangler Dev Server**: Port 8788 (main app uses 8787)

## Project Overview

HeyAgent CMS is a custom admin interface for managing changelog entries. It's built with:
- **Next.js 15.3.4** with App Router
- **OpenNext Cloudflare Adapter** for Workers deployment
- **Cloudflare D1** for database (same as main HeyAgent app)
- **Cloudflare Access** for authentication
- **Tailwind CSS v4** for styling

## Local Development Setup

### Initial Setup (One Time)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Verify shared database connection**:
   ```bash
   npm run dev:db
   ```
   This should show the count of changelog entries from the main app's database.

   **Note**: The CMS uses the same local D1 database as the main HeyAgent app. No separate initialization is needed. The database is located at `../heyagent-app/.wrangler/state/`.

### Development Workflows

#### 1. UI/Component Development (Fast, with Hot Reload)
```bash
npm run dev
```
- Best for: Frontend work, component styling, layout changes
- Features: Hot reload, fast refresh
- Limitation: D1 database calls may not work perfectly
- URL: http://localhost:3001

#### 2. Full Stack Development (Accurate Runtime)
```bash
npm run preview
```
- Best for: Testing database operations, authentication flow
- Features: Runs in actual Workers runtime, full D1 support
- Uses shared database from main app
- Limitation: Requires rebuild on changes (no hot reload)
- URL: http://localhost:8788

#### 3. Local Database Development
```bash
npm run dev:preview
```
- Uses shared local D1 database from main app
- Safe for testing database operations
- Changes are visible in both CMS and main app
- URL: http://localhost:8788

#### 4. Remote Database Development (⚠️ CAREFUL)
```bash
npm run dev:remote
```
- Connects to PRODUCTION database
- Use only for debugging production issues
- Changes affect real data!
- URL: http://localhost:8788

## Running with Main HeyAgent App

Since both projects share the same D1 database, you can run them simultaneously:

```bash
# Terminal 1: Main App
cd ../heyagent-app
npm run dev         # Runs on port 3000
# OR
npm run preview     # Runs on port 8787

# Terminal 2: CMS
cd ../heyagent-cms
npm run dev         # Runs on port 3001
# OR
npm run preview     # Runs on port 8788
```

**Important**: Both projects will read/write to the same local database at `heyagent-app/.wrangler/state/`, so changes in one are immediately visible in the other.

## Common Development Scenarios

### Adding a New Feature
1. Start with `npm run dev` for UI development
2. Switch to `npm run preview` when adding database logic
3. Test thoroughly with `npm run dev:preview`
4. Final check with `npm run dev:remote` before deploying

### Debugging Database Issues
1. Check local database: `npm run dev:preview`
2. If issue persists, carefully test with: `npm run dev:remote`
3. Use D1 console for direct queries: `wrangler d1 execute DB_CHANGELOG --local --command="SELECT * FROM changelog_entries"`

### Testing Authentication
- Local development bypasses Cloudflare Access
- To test full auth flow, use `npm run preview` and access via localhost:8787

## Project Structure

```
heyagent-cms/
├── app/                    # Next.js App Router
│   ├── admin/             # Admin pages (protected)
│   │   ├── changelog/     # Changelog CRUD pages
│   │   ├── layout.tsx     # Admin layout with sidebar
│   │   └── page.tsx       # Dashboard/list page
│   └── api/               # API routes
│       └── admin/         # Protected API endpoints
├── components/            # React components
│   ├── admin/            # Admin-specific components
│   └── ui/               # Reusable UI components
├── lib/                   # Utilities and services
│   ├── auth.ts           # JWT validation
│   └── db/               # Database services
├── public/                # Static assets
├── CLAUDE.md             # This file
├── schema.sql            # D1 database schema
└── wrangler.jsonc        # Cloudflare configuration
```

## API Endpoints

All endpoints require Cloudflare Access authentication:

- `GET /api/admin/changelog` - List entries (paginated)
- `POST /api/admin/changelog` - Create new entry
- `GET /api/admin/changelog/[id]` - Get single entry
- `PUT /api/admin/changelog/[id]` - Update entry
- `DELETE /api/admin/changelog/[id]` - Delete entry

## Database Schema

The CMS manages three tables:
- `changelog_entries` - Main entries (version, date, title, summary)
- `changelog_improvements` - List of improvements per entry
- `changelog_fixes` - List of fixes per entry

See `schema.sql` for full structure.

## Deployment

```bash
# Build and deploy to production
npm run deploy
```

Deployed URL: https://cms.heyagent.com (via Cloudflare Access)

## Troubleshooting

### Port Already in Use
```bash
# Find process using port 3001 (CMS Next.js)
lsof -i :3001

# Find process using port 8788 (CMS Wrangler)
lsof -i :8788

# Gracefully stop it with Ctrl+C in its terminal
```

If the main app is using port 3000/8787, that's expected. The CMS uses different ports (3001/8788) to allow both to run simultaneously.

### Database Connection Issues
1. Check if D1 binding exists: `npm run cf-typegen`
2. Verify local database: `npm run dev:db`
3. Reinitialize if needed: `npm run dev:db:init`

### Authentication Not Working Locally
- Local dev bypasses Cloudflare Access
- Use `npm run preview` to test auth flow
- Check `.dev.vars` has correct values

### Build Errors
1. Clear cache: `rm -rf .next .open-next`
2. Reinstall deps: `rm -rf node_modules && npm install`
3. Regenerate types: `npm run cf-typegen`

## Best Practices

1. **Always check for running processes** before starting development
2. **Use appropriate dev mode** for your task (UI vs database work)
3. **Test with local database** before using remote
4. **Gracefully stop servers** with Ctrl+C
5. **Commit schema changes** when modifying database structure

## Environment Variables

Local development uses `.dev.vars`:
- `NEXTJS_ENV` - Set to "development"
- `CLOUDFLARE_ACCESS_TEAM_DOMAIN` - Your CF Access domain
- `CLOUDFLARE_ACCESS_APP_AUD` - Application ID from CF Access

Production values are in `wrangler.jsonc`.

## Additional Resources

- [OpenNext Cloudflare Docs](https://opennext.js.org/cloudflare)
- [Cloudflare D1 Docs](https://developers.cloudflare.com/d1/)
- [Cloudflare Access Docs](https://developers.cloudflare.com/cloudflare-one/applications/)