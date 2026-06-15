import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Projects" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "border-b border-white/10 bg-[var(--color-surface)]/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:h-20 sm:px-8">
        {/* 간단 로고 */}
        <a href="#top" className="text-lg font-extrabold tracking-tight text-[var(--color-primary)]">
          J.Park
        </a>
        <div className="flex items-center gap-6 sm:gap-8">
          <ul className="hidden items-center gap-7 text-sm font-medium text-[var(--color-muted)] md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-[var(--color-ink)]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full bg-gradient-accent px-5 py-2 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95"
          >
            연락하기
          </a>
        </div>
      </nav>
    </header>
  );
}
