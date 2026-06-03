# Yougif Site Agent Rules

## Identity Separation

This repository is for the independent Yougif broadcast and VRC Boxing site only.

Do not add:

- real-name professional career material
- company career content
- links to unrelated personal career sites or generator projects
- tokens, API keys, cookies, OAuth secrets, or private key material

## GitHub Account Rules

- GitHub repository owner must be `yougif`.
- Remote must use the Yougif-only SSH host alias, expected as `github.com-yougif`.
- Do not create remotes or push to any non-Yougif account.
- Do not reuse non-Yougif GitHub auth, tokens, or SSH keys.
- If Yougif `gh` authentication or the Yougif SSH host alias is not available, stop before remote creation or push.

## Site Goal

Build a visual broadcast/team site, not a wiki-style documentation site.

Required sections:

- Hero
- Projects / 프로젝트
- Gallery / 갤러리
- Workflow / 운영 흐름
- Automation / 자동화
- Links / 공개 링크

Required behavior:

- Mobile-first layout
- Project cards open detail modals
- Gallery / 갤러리는 모바일과 데스크톱에서 모두 읽기 쉬워야 한다
- Internal links work
- Images are not broken
- No horizontal overflow

## Validation

Before handoff, run:

```powershell
npm run build
npm run validate
a forbidden-string scan supplied by the current task owner
```
