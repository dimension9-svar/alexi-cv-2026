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
    <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-10 md:py-20">
      <div
        className="grid grid-cols-2 md:grid-cols-4 border-t"
        style={{ borderColor: "var(--rule)" }}
      >
        {cv.stats.map((s, i) => {
          const lastCol = (i + 1) % 2 === 0; // mobile 2-col: even idx = right column
          const lastColMd = i === cv.stats.length - 1;
          const bottomRowMobile = i >= cv.stats.length - 2;
          return (
            <div
              key={i}
              className={`py-7 md:py-10 px-4 sm:px-6 md:px-8 border-b ${
                lastCol ? "" : "border-r"
              } md:border-r ${lastColMd ? "md:!border-r-0" : ""} ${
                bottomRowMobile ? "md:border-b-0" : ""
              }`}
              style={{ borderColor: "var(--rule)" }}
            >
              <div
                className="font-serif-news text-[clamp(34px,6vw,80px)] leading-none mb-3"
                style={{ color: "var(--accent)" }}
              >
                <CountUp value={s.num} />
              </div>
              <div
                className="font-mono-plex text-[9px] md:text-[9.5px] tracking-[.22em] uppercase whitespace-pre-line leading-tight"
                style={{ color: "var(--muted)" }}
              >
                {s.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
