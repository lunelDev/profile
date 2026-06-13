export const profile = {
  name: "박지수",
  nameEn: "Park Jisu",
  role: "Unity · XR / 웹 풀스택 개발자",
  tagline: "센서 입력을 게임 로직과 경험으로 — 도전을 즐기고, 경험을 완성하는 개발자",
  intro:
    "새로운 기술을 빠르게 이해하고 다양한 SDK를 직접 구현으로 이어가는 것을 즐깁니다. Unity(C#)로 BLE 센서·LeapMotion·Kinect·Leia 3D·MediaPipe 등 하드웨어 입력을 게임 로직과 애니메이션으로 풀어내 왔고, Spring Boot·React·FastAPI로 클라이언트–서버 전반을 다룹니다.",
  about: [
    {
      title: "센서·하드웨어 인터랙션",
      body: "BLE IMU(FIT-TAG)·LeapMotion·Kinect·MediaPipe 손추적·Leia 안경없는 3D — 센서 출력을 받아 게임 카운트/판정 로직과 캐릭터 애니메이션으로 구현. 운동·재활·교육 콘텐츠 다수 상용화.",
    },
    {
      title: "게임 시스템 & 콘텐츠",
      body: "진행 시스템·랜덤 맵(Cinemachine)·상점·로비·UI 흐름·다국어를 직접 설계·구현. Android 빌드부터 Google Play(AAB) 배포까지 전 과정 경험.",
    },
    {
      title: "웹 풀스택 & 서버 연동",
      body: "Spring Boot(JWT/Security)·React·FastAPI·Next.js로 인증·CRUD·이미지 파이프라인·OpenAI/TCP-IP 연동을 구현. 클라이언트–서버 데이터 흐름을 고려한 설계.",
    },
  ],
  contact: {
    email: "j2su0218@gmail.com",
    github: "https://github.com/lunelDev",
    blog: "https://j2su0218.tistory.com",
  },
  experience: [
    { company: "엠씨미디어 솔루션", role: "Unity 3D 콘텐츠 개발자", period: "2025.02 – 2025.10" },
    { company: "골든브레인케어", role: "Frontend / Unity (재활 SaMD)", period: "현직" },
    { company: "㈜게이트웨이즈", role: "Unity 3D Developer", period: "2020.07 – 2023.08" },
  ],
  skills: {
    "Game / XR": ["Unity", "C#", "URP", "Cinemachine", "Timeline", "DOTween", "Leia 3D", "MediaPipe", "Vuforia", "LeapMotion"],
    "Web / Server": ["Spring Boot", "Spring Security", "JWT", "React", "TypeScript", "Next.js", "FastAPI", "MariaDB", "REST / TCP-IP"],
    "Tools": ["Git", "Android / Google Play", "Firebase", "OpenAI API", "Figma"],
  },
};
