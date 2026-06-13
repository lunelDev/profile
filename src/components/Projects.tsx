import { useMemo, useState } from "react";
import { categories, projects, type Category, type Project } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { FadeUp } from "./FadeUp";

export function Projects() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const [active, setActive] = useState<Project | null>(null);

  const list = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="work" className="mx-auto max-w-5xl border-t border-[var(--color-line)] px-5 py-20 sm:px-8 sm:py-28">
      <FadeUp>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">Selected Work</h2>
            <p className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              프로젝트 {projects.length}개 — 코드로 검증된 내 역할
            </p>
          </div>
        </div>
      </FadeUp>

      {/* 필터 */}
      <FadeUp delay={0.05}>
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => {
            const on = filter === c.key;
            const count =
              c.key === "all" ? projects.length : projects.filter((p) => p.category === c.key).length;
            return (
              <button
                key={c.key}
                onClick={() => setFilter(c.key)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  on
                    ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                    : "border-[var(--color-line)] text-[var(--color-muted)] hover:border-[var(--color-ink)]/40"
                }`}
              >
                {c.label}
                <span className={`ml-1.5 text-xs ${on ? "text-white/70" : "text-[var(--color-muted)]/70"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </FadeUp>

      {/* 카드 그리드 */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <FadeUp key={p.id} delay={Math.min(i * 0.04, 0.3)}>
            <ProjectCard project={p} onOpen={() => setActive(p)} />
          </FadeUp>
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
