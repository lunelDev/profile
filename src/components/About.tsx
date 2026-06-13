import { profile } from "../data/profile";
import { FadeUp } from "./FadeUp";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl border-t border-[var(--color-line)] px-5 py-20 sm:px-8 sm:py-28">
      <FadeUp>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">About</h2>
        <p className="mt-4 max-w-3xl text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
          {profile.tagline}
        </p>
      </FadeUp>

      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {profile.about.map((a, i) => (
          <FadeUp key={a.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-[var(--color-line)] bg-white/60 p-6">
              <h3 className="text-base font-semibold">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{a.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* 경력 */}
      <FadeUp delay={0.1}>
        <div className="mt-14">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">Experience</h3>
          <ul className="mt-5 divide-y divide-[var(--color-line)]">
            {profile.experience.map((e) => (
              <li key={e.company + e.period} className="flex flex-wrap items-baseline justify-between gap-2 py-4">
                <div>
                  <span className="font-medium">{e.company}</span>
                  <span className="ml-2 text-sm text-[var(--color-muted)]">{e.role}</span>
                </div>
                <span className="text-sm tabular-nums text-[var(--color-muted)]">{e.period}</span>
              </li>
            ))}
          </ul>
        </div>
      </FadeUp>

      {/* 스킬 */}
      <FadeUp delay={0.15}>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {Object.entries(profile.skills).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-sm font-semibold">{group}</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[var(--color-line)] bg-white px-3 py-1 text-xs text-[var(--color-muted)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
