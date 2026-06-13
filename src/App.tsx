import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { profile } from "./data/profile";

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-[var(--color-line)]">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-[var(--color-muted)] sm:flex-row sm:px-8">
          <p>© 2026 {profile.name} · {profile.nameEn}</p>
          <nav className="flex gap-5">
            <a href="#top" className="hover:text-[var(--color-ink)]">Home</a>
            <a href="#about" className="hover:text-[var(--color-ink)]">About</a>
            <a href="#work" className="hover:text-[var(--color-ink)]">Work</a>
            <a href="#contact" className="hover:text-[var(--color-ink)]">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
