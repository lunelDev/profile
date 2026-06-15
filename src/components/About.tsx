import { profile } from "../data/profile";
import { FadeUp } from "./FadeUp";

// about 카드 순서에 맞춘 아이콘/색 (센서 / 게임 / 웹)
const cardStyles = [
  { icon: "sensors", wrap: "bg-[var(--color-primary)]/10 text-[var(--color-primary)]" },
  { icon: "videogame_asset", wrap: "bg-[var(--color-tertiary)]/10 text-[var(--color-tertiary)]" },
  { icon: "layers", wrap: "bg-[#6750a4]/20 text-[#cdc0e9]" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl border-t border-white/5 px-5 py-16 sm:px-8 sm:py-20">
      <FadeUp>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">About Me</h2>
        <p className="mt-3 max-w-3xl text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
          {profile.greeting}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">{profile.aboutMe}</p>
      </FadeUp>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12">
        {/* 좌: About 카드 */}
        <div className="space-y-4 md:col-span-7">
          {profile.about.map((a, i) => {
            const s = cardStyles[i] ?? cardStyles[0];
            return (
              <FadeUp key={a.title} delay={i * 0.06}>
                <div className="glass-card flex items-start gap-4 rounded-xl p-6">
                  <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${s.wrap}`}>
                    <span className="material-symbols-outlined">{s.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{a.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{a.body}</p>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* 우: 스킬 */}
        <FadeUp delay={0.1} className="md:col-span-5">
          <div className="space-y-7">
            {Object.entries(profile.skills).map(([group, items]) => (
              <div key={group}>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
                  {group}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-white/5 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-primary)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* 학력·교육 */}
      <FadeUp delay={0.08}>
        <div className="mt-14">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">Education</h3>
          <div className="mt-5 space-y-4">
            {profile.education.map((e) => (
              <div key={e.school} className="glass-card rounded-xl p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <span className="font-semibold">{e.school}</span>
                  {e.period && (
                    <span className="text-sm tabular-nums text-[var(--color-muted)]">{e.period}</span>
                  )}
                </div>
                <span className="mt-0.5 block text-sm text-[var(--color-primary)]">{e.degree}</span>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* 경력 */}
      <FadeUp delay={0.1}>
        <div className="mt-12">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">Experience</h3>
          <ul className="mt-5 divide-y divide-white/5">
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

      {/* 자격증 */}
      <FadeUp delay={0.12}>
        <div className="mt-12">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
            Certifications
          </h3>
          <ul className="mt-5 divide-y divide-white/5">
            {profile.certifications.map((c) => (
              <li key={c.name} className="flex flex-wrap items-baseline justify-between gap-2 py-4">
                <div>
                  <span className="font-medium">{c.name}</span>
                  <span className="ml-2 text-sm text-[var(--color-muted)]">{c.issuer}</span>
                </div>
                <span className="text-sm tabular-nums text-[var(--color-muted)]">{c.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </FadeUp>
    </section>
  );
}
