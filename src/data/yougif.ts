const base = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;
const asset = (path: string) => `${base}${path}`;

export const profile = {
  name: "Yougif",
  koreanName: "유기프",
  handle: "vrc_yougif",
  kicker: "VTuber / VRChat / PUBG / VRC Boxing",
  headline: "유기프 방송실",
  lead:
    "PUBG 대기화면의 불꽃, VRChat 아바타, Relay Vanguard 링 위의 방송 친화 훈련을 하나의 크리에이터 허브로 묶는다.",
  heroImage: asset("assets/media/pubg-waiting.png")
};

export const origin = {
  kicker: "why this exists",
  title: "왜 유기프 사이트를 따로 만들었나",
  body:
    "유기프 활동은 단순 링크 모음이 아니라 방송 대기화면, VRChat 아바타, PUBG 반응, Relay Vanguard 훈련, Shorts 자동화가 계속 이어지는 운영 흐름이다. 플랫폼마다 흩어진 채널과 이미지 자산을 한눈에 보여주고, 다음 콘텐츠 제작자가 기준을 잃지 않도록 독립 사이트로 분리했다.",
  points: [
    "YouTube, 치지직, SOOP, Twitch, CIME, Instagram, X에 흩어진 공개 채널을 한 허브로 묶는다.",
    "Relay Vanguard와 개인 방송을 섞어 보이게 하되, 팀 운영과 유기프 방송 정체성을 구분한다.",
    "이미지 생성과 숏폼 자동화가 반복될 때 공식 로고, 캐릭터, 대기화면 기준을 잃지 않게 한다."
  ]
};

export const projects = [
  {
    id: "relay",
    title: "Relay Vanguard",
    tag: "VRC Boxing team",
    image: asset("assets/media/relay-thumbnail.png"),
    summary: "방송 친화형 VRC Boxing 팀 운영, 정기 연습, 팀 브랜딩.",
    detail:
      "Relay Vanguard는 VRChat 복싱을 방송 가능한 오픈 스튜디오처럼 운영하는 프로젝트다. 팀 공지, 연습회, 하이라이트, YouTube 활동을 한 흐름으로 관리한다."
  },
  {
    id: "broadcast",
    title: "Yougif Broadcast",
    tag: "live identity",
    image: asset("assets/media/youtube-waiting.png"),
    summary: "유기프 아바타와 방송 대기화면을 중심으로 한 라이브 패키지.",
    detail:
      "불꽃 스웨터, 뿔, 붉은 머리 아바타를 중심으로 YouTube, 치지직, SOOP, Twitch에 맞는 대기화면과 썸네일 톤을 만든다."
  },
  {
    id: "clips",
    title: "Shorts Automation",
    tag: "clip pipeline",
    image: asset("assets/media/yougif-avatar.png"),
    summary: "녹화본에서 Shorts/Reels 후보를 뽑아 세로형 영상으로 정리.",
    detail:
      "PUBG 반응, VRC Boxing 훈련, 방송 하이라이트를 로컬에서 선별하고 세로형 클립으로 렌더링하는 자동화 흐름이다."
  }
];

export const gallery = [
  {
    src: asset("assets/media/pubg-waiting.png"),
    alt: "Yougif PUBG waiting screen with avatar and Korean broadcast standby text",
    label: "PUBG Waiting"
  },
  {
    src: asset("assets/media/youtube-waiting.png"),
    alt: "Relay Vanguard YouTube waiting screen in a VRC Boxing ring",
    label: "Relay Live"
  },
  {
    src: asset("assets/media/yougif-avatar.png"),
    alt: "Yougif avatar full body reference",
    label: "Avatar"
  },
  {
    src: asset("assets/media/relay-thumbnail.png"),
    alt: "Relay Vanguard stream thumbnail with boxing pose",
    label: "Thumbnail"
  },
  {
    src: asset("assets/media/relay-vanguard-character.png"),
    alt: "Relay Vanguard character transparent reference",
    label: "Character"
  },
  {
    src: asset("assets/media/relay-vanguard-logo.png"),
    alt: "Relay Vanguard transparent shield logo",
    label: "Logo"
  },
  {
    src: asset("assets/media/relay-final-a4.jpg"),
    alt: "Relay Vanguard final A4 ratio poster reference",
    label: "A4 Poster"
  }
];

export const channels = [
  {
    label: "Yougif YouTube",
    href: "https://www.youtube.com/@%EC%9C%A0%EA%B8%B0%ED%94%84",
    note: "main video and Shorts channel"
  },
  {
    label: "Relay Vanguard YouTube",
    href: "https://www.youtube.com/@RelayVanguard",
    note: "VRC Boxing team channel"
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/vrc_yougif/",
    note: "Reels and visual posts"
  },
  {
    label: "X",
    href: "https://x.com/vrc_yougif",
    note: "VRChat and broadcast updates"
  },
  {
    label: "CHZZK",
    href: "https://chzzk.naver.com/9b3c8f69447bed843261721afb6a96f4",
    note: "Korean live streaming"
  },
  {
    label: "SOOP",
    href: "https://www.sooplive.com/station/yougif",
    note: "live and station page"
  },
  {
    label: "Twitch",
    href: "https://www.twitch.tv/yougifu",
    note: "Twitch presence"
  },
  {
    label: "CIME",
    href: "https://ci.me/@yougif",
    note: "VOD and live hub"
  },
  {
    label: "GitHub",
    href: "https://github.com/yougif",
    note: "project code"
  }
];

export const workflow = [
  ["01", "Broadcast", "치지직, YouTube, SOOP, CIME 등에서 라이브와 VOD를 만든다."],
  ["02", "Archive", "OBS 녹화본과 썸네일, 대기화면, 팀 이미지를 소스 단위로 정리한다."],
  ["03", "Clip", "PUBG 반응과 VRC Boxing 훈련 장면을 Shorts/Reels 후보로 자른다."],
  ["04", "Publish", "플랫폼별 링크와 팀/개인 채널을 분리해 공개한다."]
];
