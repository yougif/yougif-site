# Yougif Site

Independent creator and project site for Yougif.

Production URL: https://yougif-site.pages.dev/
Fallback preview: https://yougif.github.io/yougif-site/

## Local Commands

```powershell
npm install
npm run dev
npm run build
npm run build:cloudflare
npm run validate
```

## Deployment Direction

The operating target is Astro on Cloudflare Pages/Workers:

- Astro builds the public visual site.
- Cloudflare Pages serves the static frontend.
- Pages Functions expose only the dynamic endpoints that need serverless runtime.
- D1 is reserved for public project/gallery/link metadata.
- R2 is reserved for larger media assets.

GitHub remains the source repository. GitHub Pages may exist as a fallback preview, but Cloudflare is the intended production path.

See `docs/cloudflare.md` for setup and deployment commands.

## Scope

This site is visual-first. It presents creator identity, projects, gallery items, workflow, automation, and public links without mixing in unrelated professional portfolio material.
