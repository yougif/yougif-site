# Cloudflare Deployment

The Yougif site is an Astro static frontend with Cloudflare Pages Functions for dynamic endpoints.

## Current Shape

- Static pages and media are built into `dist/`.
- `functions/api/status.ts` is the first Pages Function endpoint.
- D1 is reserved for public project, gallery, and link metadata.
- R2 is reserved for later large media storage. It is not enabled yet because it requires adding the R2 subscription to the Cloudflare account.

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
npm.cmd exec wrangler pages project create yougif --production-branch master
npm.cmd exec wrangler d1 create yougif-site
```

After D1 creation, add the real binding ID to `wrangler.toml`, then run:

```powershell
npm.cmd exec wrangler d1 migrations apply yougif-site --remote
npm.cmd run deploy:cloudflare
```

Canonical production URL:

```text
https://yougif.pages.dev/
```

The older `yougif-site.pages.dev` deployment is legacy compatibility only.

Enable R2 later only after approving the Cloudflare R2 subscription prompt:

```powershell
npm.cmd exec wrangler r2 bucket create yougif-media
```

Do not commit local tokens, API keys, cookies, private asset paths, or local SQLite files.
