# 박지수 포트폴리오 (반응형 웹앱)

Unity·XR / 웹 풀스택 개발자 박지수의 반응형 포트폴리오. 코드로 검증된 22개 프로젝트와 **각 프로젝트에서 본인이 실제로 한 역할**을 담았다.

## 스택

- **React 19 + TypeScript + Vite 6**
- **Tailwind CSS 4** (`@tailwindcss/vite`)
- **Framer Motion** (스크롤 등장·모달 애니메이션)

## 구조

```
src/
├── data/
│   ├── profile.ts      # 이름·소개·경력·스킬·연락처
│   └── projects.ts     # 22개 프로젝트(역할·구현·태그·repo) ← 내용은 여기만 수정
├── components/         # Nav · Hero · About · Projects(필터) · Card · Modal · Contact
├── App.tsx
└── index.css           # Tailwind + 디자인 토큰(색/폰트)
```

> 프로젝트 추가/수정은 **`src/data/projects.ts`** 한 곳만 고치면 된다.

## 실행

```bash
npm install
npm run dev        # 개발 서버
npm run build      # 프로덕션 빌드 (dist/)
npm run preview    # 빌드 결과 미리보기
```

## 배포

- **Vercel / Netlify**: 저장소 연결 → 자동(`vite.config.ts`의 `base: "/"`).
- **GitHub Pages**: `vite.config.ts`의 `base`를 `"/portfolio/"`로 바꾸고 `dist/`를 배포.

## 특징

- 카테고리 필터(게임·교육·웹·AI·재활 SaMD), 프로젝트 상세 모달
- 모바일 퍼스트 반응형, 미니멀·라이트 톤
- **"내가 한 것 / 협업·타 담당"을 분리 표기** — 과장 없는 정직한 역할 서술
