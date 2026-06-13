import type { Project } from "../data/projects";
import { Cover } from "./Cover";

const catLabel: Record<Project["category"], string> = {
  game: "게임·XR",
  edu: "교육",
  web: "웹·풀스택",
  ai: "AI·실험",
  health: "재활 SaMD",
};

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white text-left transition-all hover:-translate-y-0.5 hover:border-[var(--color-ink)]/30 hover:shadow-[0_10px_34px_rgba(0,0,0,0.08)]"
    >
      {/* 커버 */}
      <div className="relative">
        <Cover project={project} className="aspect-[16/10] w-full" />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
            {catLabel[project.category]}
          </span>
          {project.featured && (
            <span className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[var(--color-accent)]">
              ★ 대표작
            </span>
          )}
        </div>
      </div>

      {/* 본문 */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold leading-snug tracking-tight">{project.title}</h3>
        <p className="mt-1 text-xs text-[var(--color-muted)]">
          {project.org}
          {project.period ? ` · ${project.period}` : ""}
        </p>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[var(--color-muted)]">{project.summary}</p>

        <div className="mt-auto pt-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((t) => (
              <span key={t} className="rounded-md bg-[var(--color-bg)] px-2 py-0.5 text-[11px] text-[var(--color-muted)]">
                {t}
              </span>
            ))}
          </div>
          <span className="mt-4 inline-flex items-center text-sm font-medium text-[var(--color-ink)]">
            자세히
            <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        </div>
      </div>
    </button>
  );
}
