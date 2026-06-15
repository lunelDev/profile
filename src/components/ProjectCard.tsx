import type { Project } from "../data/projects";
import { Cover } from "./Cover";

// 태그 색을 라벤더/골드/퍼플로 번갈아 (Material You 톤)
const tagColors = [
  "bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/20",
  "bg-[var(--color-tertiary)]/10 text-[var(--color-tertiary)] border-[var(--color-tertiary)]/20",
  "bg-[#6750a4]/20 text-[#cdc0e9] border-[#6750a4]/40",
];

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl text-left"
    >
      {/* 커버 */}
      <div className="relative aspect-video overflow-hidden">
        <Cover project={project} className="h-full w-full" />
        {/* 이미지 하단 페이드 */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />
        {/* hover 오버레이 */}
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
          <span className="text-xs font-semibold uppercase tracking-widest text-white">자세히 보기 →</span>
        </div>
      </div>

      {/* 본문 */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold leading-snug tracking-tight">{project.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--color-muted)]">{project.summary}</p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {project.tags.slice(0, 3).map((t, i) => (
            <span
              key={t}
              className={`rounded-md border px-2 py-0.5 text-[10px] font-bold ${tagColors[i % tagColors.length]}`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
