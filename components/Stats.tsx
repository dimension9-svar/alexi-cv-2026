"use client";

import { animate, useInView, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { cv } from "@/lib/cv-data";

function CountUp({ value, prefix = "" }: { value: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const mv = useMotionValue(0);
  const target = parseInt(value.replace(/[^\d]/g, ""), 10) || 0;
  const padded = useTransform(mv, (latest) => {
    const n = Math.round(latest);
    return value.startsWith("0") ? n.toString().padStart(2, "0") : n.toString();
  });
  const hasPlus = value.includes("+");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, target, { duration: 1.6, ease: [0.2, 0.7, 0.2, 1] });
    const unsub = padded.on("change", (v) => {
      if (ref.current) ref.current.textContent = prefix + v + (hasPlus ? "+" : "");
    });
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, target, mv, padded, prefix, hasPlus]);

  return <span ref={ref}>{prefix + "0" + (hasPlus ? "+" : "")}</span>;
}

export function Stats() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-12 md:py-20">
      <div
        className="grid grid-cols-2 md:grid-cols-4 border-t border-b"
        style={{ borderColor: "var(--rule)" }}
      >
        {cv.stats.map((s, i) => (
          <div
            key={i}
            className="py-8 md:py-10 px-4 md:px-8 border-r last:border-r-0"
            style={{ borderColor: "var(--rule)" }}
          >
            <div
              className="font-serif-news text-[clamp(40px,6vw,80px)] leading-none mb-3"
              style={{ color: "var(--accent)" }}
            >
              <CountUp value={s.num} />
            </div>
            <div
              className="font-mono-plex text-[9.5px] tracking-[.22em] uppercase whitespace-pre-line leading-tight"
              style={{ color: "var(--muted)" }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
