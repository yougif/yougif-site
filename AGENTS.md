# Yougif Site Agent Rules

## Identity & Identity Separation

- **Active Identity:** `Yougif / 유기프` (Broadcast/VTuber/VRChat/VRC Boxing Creator).
- **Core Rule:** This repository and all its outputs (site, code, commits, docs) must be **strictly separate** from the owner's professional identity.
- **Forbidden Content:** Do NOT add real-name career material, employer identity, cloud/DevOps professional portfolio links, or any company-related details.
- **GitHub Account:** Use the `yougif` account/organization only. Remote host alias: `github.com-yougif`.
- **Auth/Keys:** Never reuse personal-career account auth, SSH keys, or tokens for this repo.

## Team Structure

- **Leader:** `Yougif / 유기프` (Team operation, broadcast setup, recording management, Shorts/Reels quality control).
- **Vice Leader:** `yeonmuzi_연무지` (Team visual lead, poster direction, coaching atmosphere).

## Site Goal & Design Principles

- **Not a Portfolio:** This is a visual broadcast/team site, **NOT a professional portfolio**. Avoid "Portfolio" terminology.
- **Visual-First:** Prefer visual elements and data visualization over text-heavy wiki-style documentation.
- **Clear Language:** Use direct and easy-to-understand language for visitors. No technical jargon unless necessary for the content (e.g., boxing terms).
- **VRC Boxing Visualization:** Separate research data from curated VRC Boxing content. Visualize the training flow and highlights clearly.

## Required Sections & Behavior

- **Sections:** Hero, Projects, Gallery, Workflow, Automation, Links.
- **Responsive:** Mobile-first, no horizontal overflow.
- **Interactive:** Project cards open detail modals, gallery must be easy to read on all devices.

## Operational Workflow

- **Slack Reporting:** Report all progress to the Slack channel `Yougif DevOps` continuously until told to stop.
- **Deployment:** Canonical URL is `https://yougif.pages.dev/`. Use Astro on Cloudflare Pages/Workers.
- **GitHub Pages:** Redirect-only legacy fallback (`https://yougif.github.io/yougif-site/`).

## Validation

Before handoff or completion, run:
```powershell
npm run build
npm run validate
# Scan for forbidden strings, real-name material, and professional career terms.
```
