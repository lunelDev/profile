import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import { projects, type Project } from "../data/projects";
import { Cover } from "./Cover";

const catLabel: Record<Project["category"], string> = {
  game: "게임·XR",
  edu: "교육 콘텐츠",
  web: "웹·풀스택",
  ai: "AI·실험",
  health: "재활 SaMD",
};

export function ProjectModal({
  project,
  onClose,
  onSelect,
}: {
  project: Project | null;
  onClose: () => void;
  onSelect: (p: Project) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  // 프로젝트 전환 시 스크롤 맨 위로
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [project?.id]);

  // 다른 프로젝트 3개 (같은 카테고리 우선, 부족하면 채움)
  const others = useMemo(() => {
    if (!project) return [];
    const same = projects.filter((p) => p.category === project.category && p.id !== project.id);
    const rest = projects.filter((p) => p.category !== project.category && p.id !== project.id);
    return [...same, ...rest].slice(0, 3);
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={scrollRef}
            className="max-h-[94vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl border border-white/10 bg-[var(--color-surface)] sm:rounded-3xl"
            initial={{ y: 40, opacity: 0.6 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── 대형 배너 ── */}
            <div className="relative">
              <Cover project={project} className="h-64 w-full rounded-t-3xl sm:h-80" />
              <div className="absolute inset-0 rounded-t-3xl bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/40 to-transparent" />
              <button
                onClick={onClose}
                aria-label="닫기"
                className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/40 px-3 py-1.5 text-sm text-white backdrop-blur-sm transition-colors hover:bg-black/60"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
                닫기
              </button>
              <div className="absolute bottom-7 left-7 right-7 sm:left-10 sm:right-10">
                <span className="rounded-full bg-[var(--color-primary)] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[var(--color-on-primary)]">
                  {catLabel[project.category]}
                </span>
                <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-white drop-shadow sm:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-white/80">
                  {project.org}
                  {project.period ? ` · ${project.period}` : ""}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-10">
              {/* ── 2단: 오버뷰+스택 / 내 역할+버튼 ── */}
              <div className="grid gap-8 lg:grid-cols-12">
                {/* 좌 */}
                <div className="space-y-8 lg:col-span-7">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
                      Project Overview
                    </h4>
                    <p className="mt-3 text-base leading-relaxed text-[var(--color-ink)]/90 sm:text-lg">
                      {project.summary}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
                      Tech Stack
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/5 bg-[var(--color-surface-variant)] px-4 py-1.5 text-xs font-medium text-[var(--color-ink)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 우 */}
                <div className="space-y-4 lg:col-span-5">
                  <div className="glass-card rounded-2xl p-6">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
                      Key Roles
                    </h4>
                    <div className="mt-4 flex items-start gap-3">
                      <span className="material-symbols-outlined mt-0.5 text-[var(--color-primary)]">person</span>
                      <div>
                        <span className="block text-sm font-bold">내가 한 것</span>
                        <span className="mt-1 block text-sm leading-relaxed text-[var(--color-muted)]">
                          {project.role}
                        </span>
                      </div>
                    </div>
                    {project.collab && (
                      <div className="mt-4 flex items-start gap-3 border-t border-white/5 pt-4">
                        <span className="material-symbols-outlined mt-0.5 text-[var(--color-muted)]">groups</span>
                        <div>
                          <span className="block text-sm font-bold text-[var(--color-muted)]">협업 / 타 담당</span>
                          <span className="mt-1 block text-sm leading-relaxed text-[var(--color-muted)]">
                            {project.collab}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full bg-gradient-accent px-6 py-4 text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-95"
                    >
                      <span className="material-symbols-outlined text-[18px]">code</span>
                      GitHub에서 보기
                    </a>
                  )}
                </div>
              </div>

              {/* ── 주요 구현 (벤토: 첫 카드 2칸) ── */}
              <h4 className="mt-12 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
                주요 구현
              </h4>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-[var(--color-ink)]/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* ── 다른 프로젝트 ── */}
              {others.length > 0 && (
                <div className="mt-12 border-t border-white/5 pt-8">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
                    Other Works · 다른 프로젝트
                  </h4>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {others.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => onSelect(p)}
                        className="glass-card group overflow-hidden rounded-2xl text-left"
                      >
                        <Cover project={p} className="aspect-video w-full" />
                        <div className="p-4">
                          <p className="line-clamp-1 text-sm font-semibold">{p.title}</p>
                          <p className="mt-0.5 line-clamp-1 text-xs text-[var(--color-muted)]">{p.org}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
