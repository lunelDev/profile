import { profile } from "../data/profile";
import { FadeUp } from "./FadeUp";

export function Contact() {
  const c = profile.contact;
  const items = [
    { label: "Email", value: c.email, href: `mailto:${c.email}` },
    { label: "GitHub", value: "github.com/lunelDev", href: c.github },
    { label: "Blog", value: "j2su0218.tistory.com", href: c.blog },
  ];
  return (
    <section id="contact" className="mx-auto max-w-5xl border-t border-[var(--color-line)] px-5 py-20 sm:px-8 sm:py-28">
      <FadeUp>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">Contact</h2>
        <p className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          새로운 도전, 함께 만들 기회를 찾고 있습니다.
        </p>
      </FadeUp>
      <FadeUp delay={0.08}>
        <ul className="mt-10 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {items.map((it) => (
            <li key={it.label}>
              <a
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-[var(--color-accent)]"
              >
                <span className="text-sm uppercase tracking-widest text-[var(--color-muted)]">{it.label}</span>
                <span className="flex items-center gap-2 text-base font-medium sm:text-lg">
                  {it.value}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </FadeUp>
    </section>
  );
}
