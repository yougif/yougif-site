# Yougif Private Workflow Access

Yougif 사이트에는 공개 가능한 운영 작업기만 정적 페이지로 배포한다.
민감한 작업기, 원본 파일명, 검수 메모, 업로드 전 판단 기록은 Cloudflare Access로 보호되는 경로에 둔다.

## 공개 페이지

- Path: `/workflow/`
- Purpose: 공개 가능한 Yougif Workflow 요약
- Contents:
  - Shorts 자동화 방식
  - Relay Vanguard 운영 루프
  - private-first 업로드 원칙
  - 민감하지 않은 실증 결과

## 보호할 경로

- Path pattern: `/workflow-private/*`
- Access: Google 로그인 필요
- Audience: owner-only

Cloudflare Access에서 보호 정책을 설정하기 전에는 이 경로에 실제 private 문서를 배포하지 않는다.

## Cloudflare Access 설정 메모

Cloudflare dashboard에서:

1. Zero Trust로 이동한다.
2. Access application을 만든다.
3. Application type은 Self-hosted로 둔다.
4. Domain은 `yougif.pages.dev`를 선택한다.
5. Path는 `/workflow-private/*`로 둔다.
6. Identity provider는 Google을 사용한다.
7. Allow policy는 owner email만 허용한다.

이 설정은 코드 저장소에 인증 정보를 남기지 않는다. 로그인 보호는 Cloudflare 계정 설정에서 관리한다.

## 운영 원칙

- 정적 HTML 안에는 인증 정보, OAuth 파일 내용, 로컬 원본 경로를 넣지 않는다.
- 공개 작업기는 사람이 읽어도 괜찮은 수준의 운영 요약만 남긴다.
- private 작업기는 로그인 보호가 확인된 뒤에만 올린다.
- YouTube 업로드 관련 기록은 official OAuth 또는 Studio UI 기준으로만 적는다.
- 브라우저 인증 정보 추출이나 스트림키 관련 내용은 기록하지 않는다.
