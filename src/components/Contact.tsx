import { profile } from "../data/profile";
import { FadeUp } from "./FadeUp";

export function Contact() {
  const c = profile.contact;
  const items = [
    { label: "Email", icon: "mail", href: `mailto:${c.email}` },
    { label: "GitHub", icon: "code", href: c.github },
    { label: "Blog", icon: "article", href: c.blog },
  ];
  return (
    <section
      id="contact"
      className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 border-t border-white/5 px-5 py-16 sm:px-8 sm:py-20 md:flex-row md:items-center"
    >
      <FadeUp>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">함께 일해요</h2>
        <p className="mt-3 max-w-md text-[var(--color-muted)]">
          새로운 도전, 함께 만들 기회를 찾고 있습니다. 제안은 언제나 환영입니다.
        </p>
      </FadeUp>
      <FadeUp delay={0.08}>
        <div className="flex flex-wrap items-center gap-6">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-2 text-[var(--color-ink)] transition-colors hover:text-[var(--color-primary)]"
            >
              <span className="material-symbols-outlined transition-transform group-hover:scale-110">{it.icon}</span>
              <span className="text-sm font-semibold uppercase tracking-widest">{it.label}</span>
            </a>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
