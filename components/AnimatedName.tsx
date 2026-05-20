"use client";

import { motion, useReducedMotion } from "motion/react";

export function AnimatedName({ name }: { name: string }) {
  const reduce = useReducedMotion();
  const chars = Array.from(name);

  return (
    <h1
      className="font-display font-extrabold text-ink leading-[0.86] tracking-[-0.035em] text-[clamp(56px,11vw,168px)]"
      aria-label={name}
    >
      <span className="sr-only">{name}</span>
      <span aria-hidden className="flex flex-wrap">
        {chars.map((c, i) => (
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
              {c === " " ? " " : c}
            </motion.span>
          </span>
        ))}
        <motion.span
          className="inline-block text-accent"
          style={{ color: "var(--accent)" }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.05 * chars.length + 0.2, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
        >
          .
        </motion.span>
      </span>
    </h1>
  );
}
