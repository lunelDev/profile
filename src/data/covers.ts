import type { Category, Project } from "./projects";

// 카테고리별 그라데이션 (커버 배경)
export const categoryGradient: Record<Category, string> = {
  game: "from-indigo-500 via-blue-500 to-sky-400",
  edu: "from-amber-400 via-orange-400 to-rose-400",
  web: "from-emerald-500 via-teal-500 to-cyan-400",
  ai: "from-violet-500 via-fuchsia-500 to-pink-400",
  health: "from-rose-500 via-pink-500 to-purple-500",
};

// 프로젝트별 아이콘(이모지) — 실 스크린샷 없이도 카드가 구분되도록
export const projectIcon: Record<string, string> = {
  brainfriends: "🧩",
  rtm: "🌙",
  amazingcore: "💪",
  citytour: "🚲",
  bmp2: "🎮",
  bcm: "🏛️",
  brain: "🧠",
  "nb-nature": "🦊",
  "nb-music": "🎵",
  "nb-clock": "🕐",
  "nb-english": "🔤",
  "nb-art": "🎨",
  nmb: "🔬",
  net: "💧",
  lht: "🧪",
  snaptide: "📷",
  filmcritiq: "🎬",
  shakepot: "🥤",
  urbantwin: "🌆",
  "gpt-proxy": "🤖",
  restgallery: "🖼️",
  "firebase-license": "🔑",
};

export interface Cover {
  gradient: string;
  icon: string;
  image?: string; // 실 스크린샷 경로(있으면 우선). public/ 기준 e.g. "/shots/rtm.png"
}

export function getCover(p: Project): Cover {
  return {
    gradient: categoryGradient[p.category],
    icon: projectIcon[p.id] ?? "📦",
    image: p.image,
  };
}
