export const profile = {
  name: "박지수",
  nameEn: "Park Jisu",
  role: "Unity · XR(AR·3D) / 웹 개발자",
  tagline: "센서 입력을 게임 로직과 경험으로 — 도전을 즐기고, 경험을 완성하는 개발자",
  // Hero 짧은 한 줄 (About 소개문과 중복되지 않게)
  intro:
    "BLE 센서·LeapMotion·Leia 3D부터 Spring Boot·React까지 — 새로운 SDK를 빠르게 익혀 직접 구현으로 잇는 개발자입니다.",
  greeting: "안녕하세요, 도전을 즐기고 경험을 완성하는 개발자 박지수입니다.",
  // About 통합 소개 (성장 서사 한 편)
  aboutMe:
    "XR/AR 콘텐츠·실감형 피트니스·교육용 시뮬레이션 등 다양한 Unity 프로젝트를 경험하며 성장해 왔습니다. LeapMotion·Kinect·FIT-TAG·Leia 3D SDK처럼 구조가 서로 다른 장비를 다루며 Unity·C# 기반 로직 설계와 상호작용 구현, 성능 최적화에 익숙해졌고, 최근에는 OpenAI API 연동과 TCP/IP 데이터 시각화로 서버 통신 구조를, Spring Boot·React 웹 프로젝트로 CRUD·인증·API 개발 흐름까지 익혔습니다. 기술을 단순히 쓰는 것을 넘어, 새로운 문제를 분석하고 해결하며 경험을 완성하는 개발자가 되고자 합니다.",
  about: [
    {
      title: "센서·하드웨어 인터랙션",
      body: "BLE IMU(FIT-TAG)·LeapMotion·Kinect·MediaPipe 손추적·Leia 안경없는 3D — 센서 출력을 받아 게임 카운트/판정 로직과 캐릭터 애니메이션으로 구현. 운동·재활·교육 등 다양한 콘텐츠를 개발(일부 Google Play 출시).",
    },
    {
      title: "게임 시스템 & 콘텐츠",
      body: "진행 시스템·랜덤 맵(Cinemachine)·상점·로비·UI 흐름·다국어를 직접 설계·구현. Android 빌드부터 Google Play(AAB) 배포까지 전 과정 경험.",
    },
    {
      title: "웹 & 서버 연동",
      body: "Spring Boot(JWT)·React·Next.js로 인증·CRUD·이미지 업로드를 구현하고, OpenAI API·TCP/IP 연동을 다뤘습니다. 개인·실무 프로젝트로 클라이언트–서버 데이터 흐름을 익혔습니다.",
    },
  ],
  contact: {
    email: "j2su0218@gmail.com",
    github: "https://github.com/lunelDev",
    blog: "https://j2su0218.tistory.com",
  },
  experience: [
    { company: "골든브레인케어", role: "Frontend / Unity (재활 SaMD)", period: "현직" },
    { company: "엠씨미디어 솔루션", role: "Unity 3D 콘텐츠 개발자", period: "2025.02 – 2025.11" },
    { company: "㈜게이트웨이즈", role: "Unity 3D Developer", period: "2020.07 – 2023.08" },
  ],
  education: [
    {
      school: "동명대학교",
      degree: "게임공학과 졸업",
      period: "2015.03 – 2020.08",
      body: "C#·Java·C++·자료구조 등 객체지향·컴퓨터공학 기초를 체계적으로 학습. 팀 프로젝트와 자기주도 학습으로 새 기술을 빠르게 익히는 기반을 다졌습니다.",
    },
    {
      school: "빅데이터 분석 활용 자바 & 파이썬 기반 UI 콘텐츠 개발",
      degree: "부산 교육센터 · 과정 이수",
      period: "2024.05 – 2024.11",
      body: "Java·Python·MySQL·Oracle·Spring·JSP/Servlet·HTML/CSS/JavaScript 등을 학습하며 Unity 외 웹 기술 스택을 확장. RESTful API 설계·서버 연동으로 백엔드–프론트엔드 데이터 통신 구조를 직접 설계·통합하는 실무 감각을 길렀습니다.",
    },
  ],
  certifications: [
    { name: "정보처리기사", issuer: "한국산업인력공단", date: "2024.09" },
    { name: "MOS Master (Microsoft Office Specialist)", issuer: "Microsoft", date: "2019.12" },
    { name: "Adobe Photoshop", issuer: "Adobe", date: "2016.06" },
  ],
  skills: {
    "Game / XR": ["Unity", "C#", "URP", "Cinemachine", "Timeline", "DOTween", "Leia 3D", "MediaPipe", "Vuforia", "LeapMotion"],
    "Web / Server": ["Spring Boot", "JWT", "React", "TypeScript", "Next.js", "MariaDB", "REST API"],
    "Tools": ["Git", "Android / Google Play", "Firebase", "OpenAI API", "Figma"],
  },
};
