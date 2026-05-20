"use client";

import { motion, useReducedMotion } from "motion/react";

export function AnimatedName({ name }: { name: string }) {
  const reduce = useReducedMotion();
  const words = name.split(" ");

  let globalIdx = 0;

  return (
    <h1
      className="font-display font-extrabold leading-[0.82] tracking-[-0.035em] text-[clamp(44px,12vw,168px)]"
      aria-label={name}
      style={{ color: "var(--ink)" }}
    >
      <span className="sr-only">{name}</span>
      <span aria-hidden className="flex flex-wrap items-end" style={{ rowGap: ".04em" }}>
        {words.map((word, wi) => (
          <span key={wi} className="inline-flex" style={{ marginRight: wi < words.length - 1 ? ".22em" : 0 }}>
            {Array.from(word).map((c) => {
              const i = globalIdx++;
              return (
                <span key={i} className="reveal-mask inline-block">
                  <motion.span
                    className="inline-block"
                    initial={{ y: reduce ? 0 : "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1.05,
                      delay: 0.05 * i + 0.1,
                      ease: [0.2, 0.7, 0.2, 1],
                    }}
                  >
                    {c}
                  </motion.span>
                </span>
              );
            })}
          </span>
        ))}
        <motion.span
          className="inline-block"
          style={{ color: "var(--accent)" }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.05 * globalIdx + 0.2, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
        >
          .
        </motion.span>
      </span>
    </h1>
  );
}
