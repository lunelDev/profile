import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { Project } from "../data/projects";

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
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

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-white p-7 sm:rounded-3xl sm:p-9"
            initial={{ y: 40, opacity: 0.6 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-[var(--color-muted)]">
                  {project.org}
                  {project.period ? ` · ${project.period}` : ""}
                </p>
                <h3 className="mt-1 text-2xl font-bold tracking-tight">{project.title}</h3>
              </div>
              <button
                onClick={onClose}
                aria-label="닫기"
                className="shrink-0 rounded-full border border-[var(--color-line)] px-3 py-1 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                닫기
              </button>
            </div>

            <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-ink)]/80">{project.summary}</p>

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                내가 한 것
              </h4>
              <p className="mt-2 text-[15px] font-medium leading-relaxed">{project.role}</p>
              {project.collab && (
                <p className="mt-1.5 text-sm text-[var(--color-muted)]">· 협업 / 타 담당: {project.collab}</p>
              )}
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">주요 구현</h4>
              <ul className="mt-2 space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-[15px] leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-[var(--color-line)] bg-[var(--color-bg)] px-2.5 py-1 text-xs text-[var(--color-muted)]"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                GitHub에서 보기 →
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
