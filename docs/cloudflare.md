# Cloudflare Deployment

The Yougif site is an Astro static frontend with Cloudflare Pages Functions for dynamic endpoints.

## Current Shape

- Static pages and media are built into `dist/`.
- `functions/api/status.ts` is the first Pages Function endpoint.
- D1 is reserved for public project, gallery, and link metadata.
- R2 is reserved for large public media assets and future private source separation.

## Local Commands

```powershell
npm.cmd run build:cloudflare
npm.cmd run dev:cloudflare
```

Open:

```text
http://127.0.0.1:8788/
http://127.0.0.1:8788/api/status
```

## First Cloudflare Setup

Use the Yougif Cloudflare account only.

```powershell
npm.cmd exec wrangler login
npm.cmd exec wrangler pages project create yougif-site --production-branch master
npm.cmd exec wrangler d1 create yougif-site
npm.cmd exec wrangler r2 bucket create yougif-media
```

After D1/R2 creation, add the real binding IDs to `wrangler.toml`, then run:

```powershell
npm.cmd exec wrangler d1 migrations apply yougif-site --remote
npm.cmd run deploy:cloudflare
```

Do not commit local tokens, API keys, cookies, private asset paths, or local SQLite files.
