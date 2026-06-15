import { useMemo, useState } from "react";
import { categories, projects, type Category, type Project } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { FadeUp } from "./FadeUp";

const PREVIEW = 6;

export function Projects() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const [active, setActive] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const list = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );
  const visible = showAll ? list : list.slice(0, PREVIEW);

  return (
    <section id="work" className="mx-auto max-w-5xl border-t border-white/5 px-5 py-16 sm:px-8 sm:py-20">
      <FadeUp>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
            <p className="mt-2 text-[var(--color-muted)]">
              코드로 검증한 {projects.length}개 — 내가 실제로 한 것만.
            </p>
          </div>

          {/* 필터 알약 그룹 (우측) */}
          <div className="flex flex-wrap gap-1.5 rounded-xl border border-white/10 bg-white/5 p-1.5">
            {categories.map((c) => {
              const on = filter === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => {
                    setFilter(c.key);
                    setShowAll(false);
                  }}
                  className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all ${
                    on
                      ? "bg-[var(--color-primary)] text-[var(--color-on-primary)]"
                      : "text-[var(--color-muted)] hover:bg-white/5 hover:text-[var(--color-ink)]"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>
      </FadeUp>

      {/* 카드 그리드 */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <FadeUp key={p.id} delay={Math.min(i * 0.04, 0.3)}>
            <ProjectCard project={p} onOpen={() => setActive(p)} />
          </FadeUp>
        ))}
      </div>

      {/* 전체 보기 */}
      {!showAll && list.length > PREVIEW && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="rounded-full border border-white/10 bg-white/5 px-10 py-3 text-sm font-bold text-[var(--color-ink)] transition-all hover:bg-white/10 active:scale-95"
          >
            전체 보기 ({list.length - PREVIEW}개 더)
          </button>
        </div>
      )}

      <ProjectModal project={active} onClose={() => setActive(null)} onSelect={setActive} />
    </section>
  );
}
