import { getCover } from "../data/covers";
import type { Project } from "../data/projects";

export function Cover({ project, className = "" }: { project: Project; className?: string }) {
  const cover = getCover(project);

  if (cover.image) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img
          src={cover.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${cover.gradient} ${className}`}
    >
      {/* 점 패턴 */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1.4px)",
          backgroundSize: "14px 14px",
        }}
      />
      {/* 빛 번짐 */}
      <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/25 blur-2xl" />
      <span className="relative text-5xl drop-shadow-sm transition-transform duration-500 group-hover:scale-110 sm:text-6xl">
        {cover.icon}
      </span>
    </div>
  );
}
