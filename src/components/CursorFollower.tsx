import { useEffect, useRef } from "react";

/** 데스크탑 전용 커서 팔로워 (인터랙티브 요소 위에서 확대) */
export function CursorFollower() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 터치/모바일에서는 비활성화
    if (window.matchMedia("(hover: none)").matches) return;
    const el = ref.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };
    const grow = () => el.classList.add("cursor-grow");
    const shrink = () => el.classList.remove("cursor-grow");

    window.addEventListener("mousemove", move);
    const targets = document.querySelectorAll("a, button");
    targets.forEach((t) => {
      t.addEventListener("mouseenter", grow);
      t.addEventListener("mouseleave", shrink);
    });
    return () => {
      window.removeEventListener("mousemove", move);
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", grow);
        t.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-[width,height,background-color] duration-150 ease-out md:block [&.cursor-grow]:h-16 [&.cursor-grow]:w-16 [&.cursor-grow]:bg-violet-500/20"
    />
  );
}
