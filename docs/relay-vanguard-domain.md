# Relay Vanguard Domain Setup

Relay Vanguard 팀 페이지는 현재 아래 경로로 배포한다.

- Current URL: `https://yougif.pages.dev/relay-vanguard/`
- Pages project: `yougif`

## Domain Candidates

추천 우선순위:

1. `relayvanguard.kr`
2. `relayvanguard.team`
3. `relay-vanguard.com`
4. `relayvanguard.gg`

한국어 VRC Boxing 방송팀임을 먼저 보여주려면 `relayvanguard.kr`가 가장 자연스럽다.
글로벌 팀/게임 팀처럼 보이게 하려면 `relayvanguard.team` 또는 `relayvanguard.gg`가 낫다.

## Cloudflare Pages Connection

도메인을 구매하거나 Cloudflare DNS에 추가한 뒤:

1. Cloudflare dashboard에서 `Workers & Pages`로 이동한다.
2. Pages project `yougif`를 연다.
3. `Custom domains`에서 새 도메인을 추가한다.
4. `relayvanguard.kr`처럼 apex를 연결하거나, `www.relayvanguard.kr`를 먼저 연결한다.
5. Cloudflare가 안내하는 CNAME/DNS 레코드를 활성화한다.
6. 연결 확인 후 `https://relayvanguard.kr/`가 `https://yougif.pages.dev/relay-vanguard/`와 같은 팀 페이지를 보여주도록 redirect 또는 별도 Pages project 구성을 선택한다.

## Recommended Routing

단독 도메인으로 완전히 분리하려면 별도 Pages project를 만드는 방식이 가장 깔끔하다.

- Project name: `relay-vanguard`
- Production URL: `https://relayvanguard.kr/`
- Source: this site or a split repo later
- First page: current `src/pages/relay-vanguard.astro`

임시로 빠르게 연결하려면 `relayvanguard.kr`를 `yougif` Pages project에 붙이고,
Workers redirect로 `/relay-vanguard/`를 루트처럼 보이게 처리한다.
