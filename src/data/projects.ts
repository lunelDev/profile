export type Category = "game" | "edu" | "web" | "ai" | "health";

export interface Project {
  id: string;
  title: string;
  org: string; // 회사/개인/팀
  period?: string;
  category: Category;
  role: string; // 본인이 한 것 (정직)
  collab?: string; // 협업/타인 (있으면)
  tags: string[];
  summary: string;
  highlights: string[];
  repo?: string;
  featured?: boolean;
  image?: string; // 실 스크린샷(public/ 기준 경로). 없으면 디자인 커버 사용
}

export const categories: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "전체" },
  { key: "game", label: "게임·XR" },
  { key: "edu", label: "교육 콘텐츠" },
  { key: "web", label: "웹·풀스택" },
  { key: "ai", label: "AI·실험" },
  { key: "health", label: "재활 SaMD" },
];

export const projects: Project[] = [
  // ── 현직 (featured) ──
  {
    id: "brainfriends",
    title: "BrainFriends — 언어재활 SaMD",
    org: "골든브레인케어 (현직)",
    category: "health",
    role: "Next.js 16 / React 19 클라이언트 — 게임 16종, 게임세션 DB 배선, MediaPipe 웹캠 손추적, 4시나리오 영상 훈련",
    collab: "백엔드(FastAPI)·AI·DB·규제 실무는 협업/타 담당",
    tags: ["Next.js 16", "React 19", "TypeScript", "MediaPipe", "FastAPI 연동"],
    summary:
      "식약처 규제 대상 디지털 의료기기(SaMD)로 실어증·마비말장애 환자의 언어재활 훈련 앱. 본인은 프론트엔드 클라이언트를 담당해 언어·인지·운동 재활 게임 16종을 구현했다.",
    highlights: [
      "재사용 게임세션 훅(useGameSession)으로 임상 지표(정확도·반응시간·완료상태)를 백엔드 API에 일관 저장",
      "MediaPipe HandLandmarker 웹캠 손추적 — 손가락 카운트·가위바위보·따라긋기 등 모션 게임",
      "마트·카페·병원·도서관 4시나리오 인터랙티브 영상 훈련, 한글 단어/초성 풀",
    ],
    featured: true,
  },
  {
    id: "rtm",
    title: "Run To The Moon",
    org: "㈜게이트웨이즈",
    period: "2020–2023",
    category: "game",
    role: "센서각속도→4단계 속도·캐릭터 애니메이션 로직, 1000km 진행 시스템, 랜덤맵(Cinemachine), 상점, AAB 배포",
    collab: "센서 raw 연결·서버 DB·구글 로그인은 협업",
    tags: ["Unity", "C#", "FIT-TAG BLE", "Cinemachine", "Addressables"],
    summary:
      "FIT-TAG 모션 센서로 실제로 달리면 우주 소년이 달까지 걸어가는 스토리형 홈 피트니스 게임. 게임플레이 대부분을 단독 구현했다.",
    highlights: [
      "센서 각속도 → 걷기/달리기/전력질주 4단계 속도 + 캐릭터 애니메이션",
      "총 1000km·1회 5km 누적 단계 진행 시스템, Cinemachine DollyTrack 랜덤 맵",
      "상점/재화·랜덤 나레이션 이벤트, 대용량 프로젝트 AAB 빌드·Google Play 배포",
    ],
    repo: "https://github.com/lunelDev/BMF-Run.to.the.Moon",
    featured: true,
  },
  {
    id: "amazingcore",
    title: "AmazingCore — 코어 운동 게임",
    org: "㈜게이트웨이즈",
    period: "2020–2023",
    category: "game",
    role: "센서 입력 기반 미니게임 카운트/승패 로직 + 캐릭터 애니메이션, 코어 트레이닝 모드, 다국어, Google Play 출시",
    collab: "센서값→게임입력 변환(L2)·3D 자세 뷰어는 협업",
    tags: ["Unity", "C#", "FIT-TAG BLE", "DOTween", "Localization"],
    summary:
      "BLE 웨어러블 센서를 착용하고 몸을 움직여 코어 근육을 단련하는 모바일 운동 게임. 센서 출력을 받아 게임 로직과 애니메이션으로 구현했다.",
    highlights: [
      "기울임 reps 카운트·균형 게임의 승패 판정 로직(L3)과 캐릭터 애니메이션(L4) 구현",
      "난이도별 코어 트레이닝 모드, Unity Localization 다국어",
      "Android 빌드 + Google Play 출시",
    ],
    repo: "https://github.com/lunelDev/BMF-AmazingCore",
    featured: true,
  },
  {
    id: "citytour",
    title: "시티투어 부산 — 자전거 운동게임",
    org: "㈜게이트웨이즈",
    period: "2020–2023",
    category: "game",
    role: "사이클링투어를 부산 테마로 재구성 — 맵 배치·DollyTrack 카메라 경로·디자인, 인앱 WebView 상점, 다국어",
    collab: "센서 raw 연결·변환은 협업",
    tags: ["Unity", "C#", "FIT-TAG BLE", "WebView", "Localization"],
    summary:
      "고정형 자전거에 장착한 BLE 센서로 가상의 부산 도시를 주행하는 실감형 피트니스 게임. 기존 사이클링투어를 부산 버전으로 재구성했다.",
    highlights: [
      "부산 맵 배치·레벨 디자인·Cinemachine DollyTrack 주행 카메라 경로",
      "WebViewObject로 외부 마켓 웹페이지를 화면 내 패널에 띄우는 인앱 웹 상점",
      "Unity Localization 다국어",
    ],
    repo: "https://github.com/lunelDev/BMF-CityTourBusan",
  },
  {
    id: "bmp2",
    title: "보자마자 PLAY 2 — 미니게임 10종",
    org: "㈜게이트웨이즈 (팀)",
    period: "2020–2023",
    category: "game",
    role: "게임 흐름·종료 판정·로비·UI 시스템 구축, LeapMotion 버전 변환·신규 게임 제작·플랫폼 이식",
    collab: "코어 게임 디자인은 팀원",
    tags: ["Unity", "C#", "LeapMotion", "AdMob"],
    summary:
      "터치와 LeapMotion 손동작 두 입력 버전으로 즐기는 캐주얼 미니게임 모음. 분절된 씬을 동작하는 게임으로 완성하고 LeapMotion 버전을 만들었다.",
    highlights: [
      "씬만 있던 상태에 게임 흐름·종료(승패) 판정·로비·UI 시스템 구축",
      "모바일 게임을 LeapMotion 버전으로 변환, 신규 게임 직접 제작",
      "AdMob 광고·서버 랭킹 연동",
    ],
    repo: "https://github.com/lunelDev/BojamajaPlay2_mobile",
  },
  {
    id: "bcm",
    title: "복둥이의 시간여행 — AR 박물관",
    org: "㈜게이트웨이즈",
    period: "2020–2023",
    category: "game",
    role: "단독 — Vuforia AR 마커 인식, 6친구 유물 수집, 애니메이션·나레이션 동기화, 3D 모델",
    tags: ["Unity", "C#", "Vuforia AR", "DOTweenPro"],
    summary:
      "박물관 야외 전시관에서 마커를 인식해 캐릭터와 유물을 띄우는 어린이용 스토리 기반 AR 유물 탐색 콘텐츠.",
    highlights: [
      "Vuforia 마커 인식 기반 AR 콘텐츠",
      "6명의 친구 유물 수집·진행, 애니메이션/나레이션 동기화",
    ],
    repo: "https://github.com/lunelDev/Bokcheon-dong",
  },
  {
    id: "brain",
    title: "보자마자 브레인 / 케어 — 시니어 인지훈련",
    org: "㈜게이트웨이즈",
    period: "2020–2023",
    category: "game",
    role: "터치 미니게임 15종 + LeapMotion 손동작 게임 5종 직접 제작, 데이터 기반 랜덤 출제, Android 출시",
    collab: "Kinect 연동·가위바위보 판정 알고리즘은 협업",
    tags: ["Unity", "C#", "LeapMotion", "Kinect"],
    summary:
      "시니어의 인지력 향상·치매 예방을 위한 인터랙티브 훈련 콘텐츠. 터치·손동작·전신 동작 게임을 한 앱에 담았다.",
    highlights: [
      "터치 미니게임 15종 + LeapMotion 손동작 게임 5종 직접 제작",
      "CSV 데이터 기반 랜덤 문제 생성으로 반복 플레이 다양성 확보",
      "Android 빌드·Google Play 출시 (보자마자 브레인 M)",
    ],
    repo: "https://github.com/lunelDev/BMF-BojamajaBrain",
  },

  // ── 엠씨미디어 (교육) ──
  {
    id: "nb-nature",
    title: "자연의 신비 모험",
    org: "엠씨미디어 솔루션",
    period: "2025",
    category: "edu",
    role: "단독 — 동물 소리 맞히기 + 토마토 성장순서, 단일 씬 Group 토글, 커스텀 URP 블러",
    tags: ["Unity", "C#", "URP", "Leia 3D"],
    summary: "동물 울음소리를 듣고 맞히고, 씨앗부터 익은 토마토까지 성장 순서를 배열하는 초등 자연·과학 학습 콘텐츠.",
    highlights: ["청각 식별 + 순서 배열 미션", "단일 씬 Group 토글 구조, 커스텀 BlurFeature 렌더 피처"],
    repo: "https://github.com/lunelDev/MC_NB_Nature",
  },
  {
    id: "nb-music",
    title: "음악 마법 모험",
    org: "엠씨미디어 솔루션",
    period: "2025",
    category: "edu",
    role: "단독 — 악기 소리 식별 + 사이먼식 청각 시퀀스 기억, DontDestroyOnLoad 오디오 시스템",
    tags: ["Unity", "C#", "URP", "DOTween"],
    summary: "악기 소리를 듣고 맞히고, 들려준 소리의 순서를 기억해 재현하는 음악 교육 게임.",
    highlights: ["악기 5종 청각 식별", "3개 소리 순서 기억→재현(사이먼식), 라운드별 별 획득"],
    repo: "https://github.com/lunelDev/MC_NB_Music",
  },
  {
    id: "nb-clock",
    title: "지금 몇 시일까요?",
    org: "엠씨미디어 솔루션",
    period: "2025",
    category: "edu",
    role: "단독 — 드래그로 시계 바늘 맞추기 + 일과 시각 매칭 (시리즈 유일 드래그 입력)",
    tags: ["Unity", "C#", "URP"],
    summary: "아날로그 시계 바늘을 드래그로 맞추고 일과 시각을 매칭하는 시간 학습 콘텐츠.",
    highlights: ["드래그 기반 시계 맞추기", "일과 장면 ↔ 시각 매칭"],
    repo: "https://github.com/lunelDev/MC_NB_Clock",
  },
  {
    id: "nb-english",
    title: "잃어버린 영어주문을 찾아서",
    org: "엠씨미디어 솔루션",
    period: "2025",
    category: "edu",
    role: "단독 — 부유 단어 터치 식별 + 단어조각 빈칸 채우기, 한국어 조사 자동보정",
    tags: ["Unity", "C#", "Leia 3D"],
    summary: "떠다니는 단어를 찾아 터치하고 단어 조각으로 문장 빈칸을 채우는 영어 학습 게임.",
    highlights: ["단어 식별 + 빈칸 채우기 미션", "한국어 조사(을/를·이/가) 자동 보정 유틸"],
    repo: "https://github.com/lunelDev/MC_NB_English",
  },
  {
    id: "nb-art",
    title: "우리들의 색깔 학교",
    org: "엠씨미디어 솔루션",
    period: "2025",
    category: "edu",
    role: "단독 — 색깔 물건 찾기 + 물감 드래그&드롭 색 혼합(이름 조합표 → RGB 거리 판정)",
    tags: ["Unity", "C#", "URP", "DOTween"],
    summary: "색깔 물건을 찾고 물감 두 개를 섞어 정답 색을 만드는 미술·색 학습 게임.",
    highlights: ["색 찾기 터치 미션", "드래그&드롭 색 혼합 + RGB 유클리드 거리 판정"],
    repo: "https://github.com/lunelDev/MC_NB_Art",
  },
  {
    id: "nmb",
    title: "세포의 세계",
    org: "엠씨미디어 솔루션",
    period: "2025",
    category: "edu",
    role: "단독 — 생물 구성단계 5단계 학습, Leia 안경없는 3D",
    tags: ["Unity", "C#", "Leia 3D"],
    summary: "세포→조직→기관→기관계→개체 생물 구성단계를 3D로 탐험하는 중등 과학 콘텐츠.",
    highlights: ["동·식물 세포 구조 비교", "Leia 라이트필드 3D 디스플레이 최적화"],
    repo: "https://github.com/lunelDev/NMB_09_0201",
  },
  {
    id: "net",
    title: "물의 상태 변화 관찰하기",
    org: "엠씨미디어 솔루션",
    period: "2025",
    category: "edu",
    role: "단독 — 고체·액체·기체 상태변화 단계 관찰 + 퀴즈, Leia 3D",
    tags: ["Unity", "C#", "Leia 3D"],
    summary: "물의 상태 변화(융해·기화·응결·응고)를 단계별로 강제 순서로 관찰하고 퀴즈로 확인하는 과학 콘텐츠.",
    highlights: ["상태 변화 강제 순차 관찰", "10문항 퀴즈, 커스텀 얼음/물 셰이더"],
    repo: "https://github.com/lunelDev/MC_NET_10_0102",
  },
  {
    id: "lht",
    title: "PCR 검사 탐구활동",
    org: "엠씨미디어 솔루션",
    period: "2025",
    category: "edu",
    role: "단독 — PCR 변성·결합·연장 과정 + 퀴즈, Leia 3D, D-ID 오프라인 영상",
    tags: ["Unity", "C#", "Leia 3D"],
    summary: "DNA 조립부터 PCR(변성·결합·연장) 실험 전 과정을 상호작용으로 학습하는 탐구 콘텐츠.",
    highlights: ["PCR 3단계 사이클 시뮬레이션", "Leia 3D + 사전 생성 안내 영상"],
    repo: "https://github.com/lunelDev/MC_LHT2_03_PCR",
  },

  // ── 웹 · 풀스택 ──
  {
    id: "snaptide",
    title: "SnapTide — 사진 SNS",
    org: "개인",
    category: "web",
    role: "단독 — Spring Boot(JWT) 백엔드 + React(TS) 클라이언트 전 과정",
    tags: ["Spring Boot", "JWT", "React", "TypeScript", "MariaDB"],
    summary: "사진을 공유하고 댓글로 소통하는 풀스택 SNS. 회원 인증→피드 CRUD→이미지 업로드→검색/필터→반응형 UI까지 직접 구현.",
    highlights: [
      "Spring Security + JWT 인증/인가, 피드 CRUD + 페이징",
      "다중 이미지 업로드(MultipartFile·UUID), React 반응형 UI",
    ],
    repo: "https://github.com/lunelDev/SnapTide",
  },
  {
    id: "filmcritiq",
    title: "FilmCritiq — 영화 리뷰",
    org: "개인",
    category: "web",
    role: "단독 — Spring Security 세션 + Google OAuth2, 영화 CRUD·다중 이미지·Ajax 리뷰",
    tags: ["Spring Boot", "Spring Security", "OAuth2", "Thymeleaf", "MariaDB"],
    summary: "영화 정보·리뷰·사진을 관리하는 웹앱. QueryDSL 동적 검색·페이징, 다중 이미지 업로드, 역할 권한 제어.",
    highlights: [
      "세션 폼로그인 + Google 소셜 로그인, USER/MANAGER/ADMIN 권한",
      "QueryDSL 동적 검색·페이징, Ajax 한줄평 CRUD",
    ],
    repo: "https://github.com/lunelDev/FilmCritiq",
  },
  {
    id: "shakepot",
    title: "Team_ShakePot — 단백질 정보 플랫폼",
    org: "팀 (3인)",
    category: "web",
    role: "Spring Boot API · JWT 인증 · React UI 개발 참여",
    collab: "3인 팀 프로젝트",
    tags: ["Spring Boot", "Java", "JWT", "React", "MariaDB"],
    summary: "단백질 보충제 정보를 사용자·공급자에게 중개하는 헬스케어 플랫폼. 이후 개인 단독으로 재구축(scoophub)했다.",
    highlights: [
      "Spring Boot REST API + JWT 인증, React UI",
      "역할 기반(user/company/admin) 제품 등록·승인 흐름",
    ],
    repo: "https://github.com/lunelDev/Team_ShakePot",
  },

  // ── AI · 실험 ──
  {
    id: "urbantwin",
    title: "UrbanTwin — 디지털 트윈",
    org: "개인",
    category: "ai",
    role: "단독 — Unity 클라이언트 + .NET6 서버, TCP/IP 센서 데이터 실시간 시각화",
    tags: ["Unity", "C#", ".NET 6", "TCP/IP", "LineRenderer"],
    summary: "가상의 IoT 센서 데이터(온도·교통량·미세먼지)를 TCP/IP로 실시간 송수신해 Unity에서 시각화하는 디지털 트윈 개념 데모.",
    highlights: ["TCP/IP 기반 클라이언트–서버 통신 구조", "LineRenderer·UI 그래프로 데이터 흐름 시각화"],
    repo: "https://github.com/lunelDev/UrbanTwin",
  },
  {
    id: "gpt-proxy",
    title: "GPT-UnityProxyDemo",
    org: "개인",
    category: "ai",
    role: "단독 — Unity + OpenAI(Responses API) + Render 프록시 대화 시스템",
    tags: ["Unity", "C#", "OpenAI API", "Render"],
    summary: "OpenAI API를 Render 프록시 서버와 연동해, API Key를 안전하게 숨긴 채 Unity에서 대화형 AI를 수행하는 데모.",
    highlights: ["Proxy 서버로 API Key 은닉", "Unity 클라이언트–서버 통신 흐름 설계"],
    repo: "https://github.com/lunelDev/GPT-UnityProxyDemo",
  },
  {
    id: "restgallery",
    title: "ImageGalleryAPI",
    org: "개인",
    category: "ai",
    role: "단독 — Unity 클라이언트 + FastAPI(Python) 이미지 CRUD 풀사이클",
    tags: ["Unity", "C#", "Python", "FastAPI", "REST"],
    summary: "Unity 클라이언트와 FastAPI 서버 간 이미지 업로드·조회·삭제(CRUD)를 multipart로 연동한 학습 프로젝트.",
    highlights: ["UnityWebRequest multipart 업로드", "FastAPI REST 엔드포인트 연동"],
    repo: "https://github.com/lunelDev/RestGallery",
  },
  {
    id: "firebase-license",
    title: "check-license-firebase",
    org: "개인",
    category: "ai",
    role: "단독 — Unity + Firebase Firestore 라이선스 키 등록·검증·접근 제어",
    tags: ["Unity", "C#", "Firebase", "Firestore"],
    summary: "관리자가 발급한 라이선스 키를 Firestore에 저장하고, 사용자 입력을 검증해 앱 접근을 제어하는 라이선스 게이트 예제.",
    highlights: ["Firestore 라이선스 키 등록/검증", "만료·무효 시 접근 차단·문서 정리"],
    repo: "https://github.com/lunelDev/check-license-firebase",
  },
];
