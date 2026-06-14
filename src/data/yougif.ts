const base = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;
const asset = (path: string) => `${base}${path}`;

export const profile = {
  name: "Yougif",
  koreanName: "유기프",
  handle: "vrc_yougif",
  kicker: "버튜버 / VRChat / PUBG / VRC Boxing",
  headline: "유기프 방송실",
  lead:
    "PUBG 대기화면의 불꽃, VRChat 아바타, Relay Vanguard 링 위의 방송 친화 훈련을 하나의 크리에이터 허브로 묶는다.",
  heroImage: asset("assets/media/pubg-waiting.png")
};

export const origin = {
  kicker: "시작한 이유",
  title: "왜 지금 VRC Boxing에 투자하나",
  body:
    "VRC Boxing과 VR 동작 인식 격투 콘텐츠는 경기, 훈련, 방송, 숏폼으로 이어질 수 있는 흐름을 만들고 있다. 유기프는 이 흐름이 더 커질 것으로 보고 Relay Vanguard 팀 운영과 숏폼 자동화에 먼저 투자한다.",
  points: [
    "VRC Boxing은 이미 VRChat 안에서 지속적으로 업데이트되고 이벤트가 이어지는 활동 영역이다.",
    "한국 VRC Boxing은 큰 이벤트는 있지만 상시 운영되는 방송 친화형 팀/채널은 아직 부족하다.",
    "그래서 Relay Vanguard, 유기프 방송, Shorts/Reels 자동화를 하나의 크리에이터 운영 체계로 묶는다."
  ],
  references: [
    {
      label: "VRC Boxing 자료 보기",
      href: `${base}research/`
    },
    {
      label: "VR 스포츠 흐름 기사",
      href: "https://www.yna.co.kr/view/AKR20260521039851073"
    }
  ]
};

export const projects = [
  {
    id: "relay",
    title: "Relay Vanguard",
    tag: "VRC Boxing 팀",
    image: asset("assets/media/relay-thumbnail.png"),
    summary: "방송 친화형 VRC Boxing 팀 운영, 정기 연습, 팀 브랜딩.",
    detail:
      "Relay Vanguard는 VRChat 복싱을 방송 가능한 오픈 스튜디오처럼 운영하는 프로젝트다. 팀 공지, 연습회, 하이라이트, YouTube 활동을 한 흐름으로 관리한다.",
    href: `${base}projects/relay-vanguard/`,
    homeHref: `${base}relay-vanguard/`,
    intro:
      "Relay Vanguard는 'One Ring, Many Voices'를 슬로건으로 누구나 쉽게 시작하고 오래 즐기는 VR 복싱 문화를 만드는 팀 프로젝트다. 단순 친목을 넘어 매주 월/토 21:00 정기 연습, 팀 비주얼 관리, 데이터 기반 피드백, 그리고 Shorts 하이라이트 자동화까지 연결되는 운영 단위로 만든다.",
    highlights: [
      "VRChat VRC Boxing 월드를 기반으로 잽, 스트레이트, 리커버리, U자 스텝 등 기본기 중심의 체계적인 훈련 흐름을 만든다.",
      "과도한 친목보다 기술 향상과 운동 자체에 집중하는 분위기를 유지하며, 모든 참가자가 소외 없이 성장할 수 있는 환경을 지향한다.",
      "연습 장면은 카운터 타이밍, 바디 블로우 등 실전 팁을 담은 YouTube Shorts '기초 꿀팁' 시리즈로 재생산한다."
    ],
    platforms: [
      ["Relay Vanguard YouTube", "팀 훈련 영상과 VRC Boxing 하이라이트를 올리는 팀 채널.", "Relay Vanguard YouTube"],
      ["Instagram Reels", "짧은 훈련 장면, 포스터, 팀 분위기를 빠르게 보여주는 홍보 채널.", "Instagram"],
      ["X", "훈련 공지, 진행 상황, VRChat/VRC Boxing 관련 짧은 업데이트.", "Relay Vanguard X"]
    ],
    examples: [
      {
        label: "YouTube Shorts",
        title: "짧게 치고 복귀 (Recovery)",
        body:
          "공격 후 즉시 방어 자세나 기본 스탠스로 돌아오는 리커버리의 중요성을 담은 기초 꿀팁 영상이다.",
        image: asset("assets/media/relay-example-shorts.png"),
        href: "https://www.youtube.com/shorts/4ZHtmbQDv18",
        cta: "Shorts 보기"
      },
      {
        label: "X 공지",
        title: "정기 연습회 오픈 공지",
        body:
          "X에서는 긴 설명보다 모집 시간, 참여 방식, 방송 가능 여부를 짧게 고지하는 역할을 맡긴다.",
        image: asset("assets/media/relay-final-a4.jpg"),
        href: "https://x.com/relay_vanguard/status/2037382268763992209",
        cta: "X 공지 보기"
      },
      {
        label: "X 기록",
        title: "첫 연습회 완료 기록",
        body:
          "훈련이 끝난 뒤에는 참가 감사, 해시태그, 짧은 회고를 남겨 다음 Shorts/Reels 소재와 연결한다.",
        image: asset("assets/media/relay-vanguard-logo.png"),
        href: "https://x.com/relay_vanguard/status/2038649877417328864",
        cta: "X 기록 보기"
      }
    ],
    channelLabels: ["Relay Vanguard YouTube", "Instagram", "Relay Vanguard X"],
    nextSteps: ["초보자도 따라오기 쉬운 훈련 공지 템플릿 정리", "훈련 하이라이트 자동 선별 기준 개선", "Relay Vanguard 전용 Shorts 제목/설명 규칙 고정"]
  },
  {
    id: "broadcast",
    title: "유기프 방송",
    tag: "라이브 정체성",
    image: asset("assets/media/youtube-waiting.png"),
    summary: "유기프 아바타와 방송 대기화면을 중심으로 한 라이브 패키지.",
    detail:
      "불꽃 스웨터, 뿔, 붉은 머리 아바타를 중심으로 YouTube, 치지직, SOOP, Twitch에 맞는 대기화면과 썸네일 톤을 만든다.",
    href: `${base}projects/broadcast/`,
    intro:
      "유기프 방송은 VRChat 아바타, PUBG 플레이, VRC Boxing 훈련을 한 캐릭터 채널 안에서 운영하는 라이브 프로젝트다. 플랫폼별로 흩어진 방송을 하나의 허브에서 설명하고, 시청자가 어디서 무엇을 보면 되는지 분명하게 만든다.",
    highlights: [
      "YouTube, 치지직, SOOP, Twitch, CIME를 역할별로 분리해 운영한다.",
      "PUBG 대기화면과 VRC Boxing 대기화면을 콘텐츠 성격에 맞게 교체한다.",
      "아바타, 썸네일, 대기화면을 반복 노출해 유기프라는 방송 정체성을 만든다."
    ],
    platforms: [
      ["YouTube", "편집 영상, Shorts, 장기적으로 검색 유입을 받을 콘텐츠의 중심."],
      ["CHZZK", "한국 시청자와 실시간으로 만나는 라이브 채널."],
      ["SOOP / Twitch / CIME", "라이브 백업, VOD, 외부 유입을 보완하는 채널 묶음."]
    ],
    channelLabels: ["Yougif YouTube", "CHZZK", "SOOP", "Twitch", "CIME"],
    nextSteps: ["플랫폼별 방송 설명 문구 통일", "PUBG와 VRC Boxing 대기화면 상태 전환 체크리스트 정리", "VOD에서 Shorts 후보로 넘어가는 경로 자동화"]
  },
  {
    id: "clips",
    title: "숏폼 자동화",
    tag: "클립 파이프라인",
    image: asset("assets/media/yougif-avatar.png"),
    summary: "녹화본에서 Shorts/Reels 후보를 뽑아 세로형 영상으로 정리.",
    detail:
      "PUBG 반응, VRC Boxing 훈련, 방송 하이라이트를 로컬에서 선별하고 세로형 클립으로 렌더링하는 자동화 흐름이다.",
    href: `${base}projects/shorts-automation/`,
    intro:
      "숏폼 자동화는 긴 로컬 녹화본에서 쓸 만한 장면을 찾고, 모바일에서 읽히는 1080x1920 세로 MP4로 렌더링하는 운영 파이프라인이다. 단순 자동 업로드보다 후보 선별, 자막 가독성, private 검수 순서를 우선한다.",
    highlights: [
      "채널별 전략을 PUBG, Relay Vanguard, VRNews로 나누어 후보 장면 기준을 다르게 잡는다.",
      "Shotcut FFmpeg의 drawtext 제약을 고려해 PNG overlay 자막 방식을 유지한다.",
      "모바일 화면에서 읽히는 짧은 문장, 굵은 대비, 고정 위치 자막 레이아웃을 우선한다."
    ],
    platforms: [
      ["YouTube Shorts", "private 검수 후 공개하는 주력 숏폼 게시 위치."],
      ["Instagram Reels", "Relay Vanguard 훈련 장면과 비주얼 홍보를 빠르게 노출하는 채널."],
      ["GitHub", "자동화 코드, 운영 메모, 개선 과정을 공개 가능한 범위에서 기록하는 저장소."]
    ],
    channelLabels: ["Yougif YouTube", "Relay Vanguard YouTube", "Instagram", "GitHub"],
    nextSteps: ["audio activity와 video motion 결합 점수 개선", "Whisper 기반 핵심 자막 생성 추가", "렌더 결과 review queue와 업로드 메타데이터 자동화"]
  },
  {
    id: "workflow",
    title: "Yougif Workflow",
    tag: "운영 작업기",
    image: asset("assets/media/relay-vanguard-logo.png"),
    summary: "방송, 녹화, 숏츠, 업로드 실험을 기록하는 Yougif 운영 로그.",
    detail:
      "Yougif Workflow는 방송과 Relay Vanguard 운영을 어떻게 자동화하고 검수했는지 남기는 작업기다. 공개 가능한 요약은 사이트에 올리고, 민감한 운영 기록은 Cloudflare Access로 보호한다.",
    href: `${base}workflow/`,
    intro:
      "Yougif Workflow는 작업 결과만 보여주는 페이지가 아니라 어떤 방식으로 방송 운영, 녹화 정리, Shorts 자동화, 업로드 검수를 개선했는지 남기는 운영 기록이다.",
    highlights: [
      "공개 가능한 실험 요약은 사이트에 남기고, 민감한 운영 메모는 보호된 경로로 분리한다.",
      "작업 흐름을 Record, Score, Render, Review, Publish 단계로 정리한다.",
      "반복 가능한 개선 내용은 블로그식 작업기로 남겨 다음 작업의 기준으로 삼는다."
    ],
    platforms: [
      ["Yougif Pages", "공개 가능한 운영 요약과 프로젝트 설명을 보여주는 허브."],
      ["Cloudflare Access", "Google 로그인 뒤 볼 private workflow 경로를 보호하는 방식."],
      ["GitHub", "사이트와 자동화 변경 이력을 추적하는 저장소."]
    ],
    channelLabels: ["GitHub", "Yougif YouTube", "X"],
    nextSteps: ["private workflow 경로 Access 정책 설정", "업로드 검수 체크리스트 추가", "주요 작업마다 공개 요약과 비공개 메모를 분리"]
  }
];

export const gallery = [
  {
    src: asset("assets/media/pubg-waiting.png"),
    alt: "유기프 PUBG 방송 대기화면",
    label: "PUBG 대기화면"
  },
  {
    src: asset("assets/media/youtube-waiting.png"),
    alt: "VRC Boxing 링 위의 Relay Vanguard 방송 대기화면",
    label: "Relay 라이브"
  },
  {
    src: asset("assets/media/yougif-avatar.png"),
    alt: "유기프 아바타 전신 이미지",
    label: "아바타"
  },
  {
    src: asset("assets/media/relay-thumbnail.png"),
    alt: "복싱 포즈가 들어간 Relay Vanguard 방송 썸네일",
    label: "썸네일"
  },
  {
    src: asset("assets/media/relay-vanguard-character.png"),
    alt: "Relay Vanguard 캐릭터 투명 이미지",
    label: "캐릭터"
  },
  {
    src: asset("assets/media/relay-vanguard-logo.png"),
    alt: "Relay Vanguard 방패 로고",
    label: "로고"
  },
  {
    src: asset("assets/media/relay-final-a4.jpg"),
    alt: "Relay Vanguard A4 비율 포스터",
    label: "A4 포스터"
  }
];

export const channels = [
  {
    label: "Yougif YouTube",
    href: "https://www.youtube.com/@%EC%9C%A0%EA%B8%B0%ED%94%84",
    note: "유기프 영상과 Shorts 채널"
  },
  {
    label: "Relay Vanguard YouTube",
    href: "https://www.youtube.com/@RelayVanguard",
    note: "VRC Boxing 팀 채널"
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/vrc_yougif/",
    note: "Reels와 비주얼 게시물"
  },
  {
    label: "X",
    href: "https://x.com/vrc_yougif",
    note: "VRChat과 방송 소식"
  },
  {
    label: "Relay Vanguard X",
    href: "https://x.com/relay_vanguard",
    note: "Relay Vanguard 팀 공지와 훈련 소식"
  },
  {
    label: "CHZZK",
    href: "https://chzzk.naver.com/9b3c8f69447bed843261721afb6a96f4",
    note: "한국 라이브 방송"
  },
  {
    label: "SOOP",
    href: "https://www.sooplive.com/station/yougif",
    note: "라이브와 방송국"
  },
  {
    label: "Twitch",
    href: "https://www.twitch.tv/yougifu",
    note: "Twitch 채널"
  },
  {
    label: "CIME",
    href: "https://ci.me/@yougif",
    note: "VOD와 라이브 허브"
  },
  {
    label: "GitHub",
    href: "https://github.com/yougif",
    note: "공개 코드"
  }
];

export const workflow = [
  ["01", "방송", "치지직, YouTube, SOOP, CIME 등에서 라이브와 VOD를 만든다."],
  ["02", "정리", "OBS 녹화본과 썸네일, 대기화면, 팀 이미지를 소스 단위로 정리한다."],
  ["03", "클립", "PUBG 반응과 VRC Boxing 훈련 장면을 Shorts/Reels 후보로 자른다."],
  ["04", "공개", "플랫폼별 링크와 팀/개인 채널을 분리해 공개한다."]
];

export const workflowNotes = [
  {
    title: "OVR Toolkit SteamVR Input Binding Recovery",
    date: "2026-06-15",
    tag: "VRChat / OVR Toolkit / Troubleshooting",
    summary:
      "Quest Pro Air Link 환경에서 OVR Toolkit 창에 포인터는 올라가지만 클릭이 전혀 먹지 않던 문제를 SteamVR Input 바인딩 상태 점검으로 분리했다. OVR Toolkit overlay가 Steam Workshop 커스텀 바인딩에 고정되어 있었고, 해당 override를 제거해 기본 Oculus Touch 바인딩으로 복구했다.",
    points: [
      "SteamVR 설정 파일에서 `steam.overlay.1068820` 항목이 `vr-input-workshop://3743941988`로 고정된 것을 확인했다.",
      "OVR Toolkit 기본 바인딩 파일의 Oculus Touch 트리거는 `/actions/ui/in/leftclick`에 정상 연결되어 있어 앱 자체보다 커스텀 바인딩 override가 원인이라고 판단했다.",
      "`steamvr.vrsettings`를 백업한 뒤 OVR Toolkit overlay 바인딩 override만 제거했고, 재실행 후 창 클릭이 정상 동작하는 것을 확인했다.",
      "Oculus SteamVR manifest, SteamVR Input, OVR Toolkit, VRCFaceTracking 모듈 상태를 매번 수동으로 추적하지 않도록 읽기 전용 점검 스크립트를 추가했다."
    ],
    status: "fixed & diagnostic script added"
  },
  {
    title: "Multi-Platform Dashboard Automation & Troubleshoot",
    date: "2026-06-08",
    tag: "Automation / Troubleshooting",
    summary:
      "윈폼 위젯 런처의 UI 꼬임 복구, OneDrive 동기화 락 충돌 방어, 윈도우 한/영 입력기 간섭 우회, 그리고 SOOP(아프리카TV) iframe 격리 구조 우회를 위한 멀티 플랫폼 대시보드 자동 주입 매크로를 개발하고 연동했다.",
    points: [
      "윈폼 크기 부족 및 AutoScroll 비활성화로 플랫폼 행 추가 시 컴포넌트가 겹치던 UI 꼬임 현상을 창 크기 확장(780x580) 및 레이아웃 제어로 복구했다.",
      "OneDrive 동기화 디렉토리 특성상 파일 쓰기 시 발생하는 락 충돌(Sharing Violation)을 300ms 주기 최대 5회 재시도(Retry Loop) 처리로 해결했다.",
      "윈도우 IME가 한글 모드일 때 pyautogui 영문 기입 시 자모가 쪼개지던 버그를 imm32.dll API(ImmSetConversionStatus) 호출을 통해 영문 모드 강제 리셋으로 방어했다.",
      "크롬 주소창의 javascript: 붙여넣기 차단 보안을 뚫기 위해 본문은 복사-붙여넣기하고 접두사만 직접 치는 하이브리드 주입 매크로를 제작해 입력 딜레이를 0.05초로 단축했다.",
      "SOOP 대시보드처럼 폼이 iframe 내에 격리된 구조를 뚫기 위해 Same-Origin iframe 재귀 탐색 알고리즘(findEl)을 매크로 자바스크립트에 탑재했다."
    ],
    status: "integrated & tested successfully"
  },
  {
    title: "Relay Vanguard Shorts Pipeline",
    date: "2026-06-01",
    tag: "Shorts Automation",
    summary:
      "긴 VRC Boxing 훈련 녹화본에서 후보 장면을 고르고, 1080x1920 세로 MP4로 렌더링한 뒤, YouTube Studio에서 private Shorts 업로드까지 검증했다.",
    points: [
      "audio activity와 video motion을 같이 보면서 실제 움직임이 있는 훈련 구간을 우선했다.",
      "Shotcut FFmpeg의 drawtext 미지원 가능성을 고려해 PNG overlay 자막을 유지했다.",
      "YouTube 업로드는 private-first로 진행하고 제목, 설명, 재생목록, 아동용 아님, 검사 통과를 확인했다."
    ],
    status: "private uploaded sample verified"
  },
  {
    title: "Mobile Caption Layout",
    date: "2026-06-01",
    tag: "Render Design",
    summary:
      "숏츠 화면에서 작은 글자가 읽히지 않는 문제를 줄이기 위해 자막을 짧은 문장, 굵은 대비, 고정 위치 PNG overlay로 정리했다.",
    points: [
      "문장 수를 줄이고 hook 중심으로 화면 상단/하단에 분리했다.",
      "세로 crop과 자막 위치가 얼굴이나 주요 동작을 가리지 않도록 review queue에서 확인한다.",
      "향후 Whisper 기반 자동 자막은 전체 대사를 넣기보다 핵심 hook 위주로 줄인다."
    ],
    status: "layout direction set"
  },
  {
    title: "Private Review Before Publish",
    date: "2026-06-01",
    tag: "Publishing",
    summary:
      "자동 생성 결과를 바로 public으로 올리지 않고 private 저장 후 확인하는 운영 원칙을 세웠다.",
    points: [
      "공식 OAuth 또는 사용자가 보는 Studio UI만 사용한다.",
      "브라우저 인증 정보 기반 우회 업로드는 쓰지 않는다.",
      "공개 전에는 playlist, 설명, title, visibility, 영상 움직임을 한 번 더 확인한다."
    ],
    status: "policy adopted"
  }
];
