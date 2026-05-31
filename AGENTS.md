# Yougif Site Agent Rules

## Identity Separation

This repository is for the independent Yougif creator/project site only.

Do not add:

- real-name professional career material
- company career or professional portfolio content
- links to unrelated personal/professional portfolio sites or generator projects
- tokens, API keys, cookies, OAuth secrets, or private key material

## GitHub Account Rules

- GitHub repository owner must be `yougif`.
- Remote must use the Yougif-only SSH host alias, expected as `github.com-yougif`.
- Do not create remotes or push to any non-Yougif account.
- Do not reuse non-Yougif GitHub auth, tokens, or SSH keys.
- If Yougif `gh` authentication or the Yougif SSH host alias is not available, stop before remote creation or push.

## Site Goal

Build a visual creator/project site, not a wiki-style documentation site.

Required sections:

- Hero
- Projects
- Gallery
- Workflow
- Automation
- Links

Required behavior:

- Mobile-first layout
- Project cards open detail modals
- Gallery remains readable on mobile and desktop
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
