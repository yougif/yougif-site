# Yougif Site

유기프 방송과 VRC Boxing 활동을 정리하는 독립 사이트.

Production URL: https://yougif.pages.dev/
Legacy fallback redirect: https://yougif.github.io/yougif-site/

## Local Commands

```powershell
npm install
npm run dev
npm run build
npm run build:cloudflare
npm run build:github-redirect
npm run validate
```

## Deployment Direction

The operating target is Astro on Cloudflare Pages/Workers:

- Astro builds the public visual site.
- Cloudflare Pages serves the static frontend.
- Pages Functions expose only the dynamic endpoints that need serverless runtime.
- D1 is reserved for public project/gallery/link metadata.
- R2 is reserved for larger media assets.

GitHub remains the source repository. GitHub Pages is redirect-only legacy compatibility; it must not serve the real site content. Cloudflare is the canonical production path.

See `docs/cloudflare.md` for setup and deployment commands.

## Scope

이 사이트는 유기프 방송 정체성, Relay Vanguard, VRC Boxing 흐름, 갤러리, 운영 흐름, 자동화, 공개 링크를 시각적으로 보여준다. 관련 없는 개인 경력 자료는 섞지 않는다.
