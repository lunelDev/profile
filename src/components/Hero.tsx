import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { projects } from "../data/projects";

export function Hero() {
  const total = projects.length;
  return (
    <section id="top" className="relative mx-auto max-w-5xl overflow-hidden px-5 pt-36 pb-20 sm:px-8 sm:pt-44 sm:pb-28">
      {/* 은은한 컬러 데코 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-10 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-400/30 via-sky-400/20 to-emerald-300/20 blur-3xl sm:h-[28rem] sm:w-[28rem]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-gradient-to-br from-amber-300/20 to-rose-300/20 blur-3xl"
      />
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-5 text-sm font-medium tracking-wide text-[var(--color-accent)]"
      >
        {profile.role}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="max-w-3xl text-4xl font-bold leading-[1.15] tracking-tight sm:text-6xl"
      >
        센서 입력을 게임 로직과<br className="hidden sm:block" /> 경험으로 만드는 개발자
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
        className="mt-9 flex flex-wrap items-center gap-3"
      >
        <a
          href="#work"
          className="rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          프로젝트 {total}개 보기 →
        </a>
        <a
          href={profile.contact.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[var(--color-line)] px-5 py-2.5 text-sm font-medium transition-colors hover:border-[var(--color-ink)]"
        >
          GitHub
        </a>
      </motion.div>
    </section>
  );
}
