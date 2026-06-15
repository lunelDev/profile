import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { projects } from "../data/projects";

export function Hero() {
  const total = projects.length;
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[88vh] max-w-5xl flex-col items-center justify-center overflow-hidden px-5 py-24 text-center sm:px-8"
    >
      {/* 방사형 글로우 */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6750a4]/25 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[#cfbcff]/10 blur-[100px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
          {profile.role}
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-[40px] font-extrabold leading-[1.1] tracking-tight sm:text-6xl"
      >
        센서 입력을
        <br />
        <span className="text-gradient">게임 로직과 경험으로</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.12 }}
        className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg"
      >
        {profile.intro}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-9 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#work"
          className="flex items-center gap-2 rounded-xl bg-gradient-accent px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-500/20 transition-transform hover:scale-105 active:scale-95"
        >
          프로젝트 {total}개 보기
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </a>
        <a
          href={profile.contact.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-[var(--color-ink)] transition-colors hover:bg-white/10 active:scale-95"
        >
          GitHub
        </a>
      </motion.div>
    </section>
  );
}
