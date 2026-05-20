"use client";

import { useEffect, useRef } from "react";

export function CursorBlob() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const el = ref.current;
    if (!el) return;

    let mx = -100, my = -100, cx = -100, cy = -100;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const onOver = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, [data-magnetic]')) el.classList.add("hover");
    };
    const onOut = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, [data-magnetic]')) el.classList.remove("hover");
    };

    const tick = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      el.style.transform = `translate3d(${cx - 14}px, ${cy - 14}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, true);
    document.addEventListener("pointerout", onOut, true);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver, true);
      document.removeEventListener("pointerout", onOut, true);
    };
  }, []);

  return <div ref={ref} className="cursor-blob no-print" aria-hidden />;
}
