"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";
import { cv } from "@/lib/cv-data";

export function Skills() {
  const reduce = useReducedMotion();
  return (
    <section
      id="skills"
      className="max-w-[1280px] mx-auto px-5 sm:px-6 md:px-12 py-12 md:py-24"
    >
      <div className="flex items-baseline justify-between mb-10 md:mb-14">
        <Reveal>
          <h2 className="h-label">Core Competencies</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <span
            className="font-mono-plex text-[10px] tracking-[.22em] uppercase"
            style={{ color: "var(--muted)" }}
          >
            {cv.skills.length.toString().padStart(2, "0")}
          </span>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 md:gap-x-20 gap-y-5 md:gap-y-7">
        {cv.skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: .7,
              delay: 0.04 * i,
              ease: [0.2, 0.7, 0.2, 1],
            }}
            className="group"
          >
            <div className="flex items-end justify-between gap-4 mb-2">
              <span className="text-[13px] md:text-[14px]">{s.name}</span>
              <span
                className="font-mono-plex text-[9.5px] tracking-[.1em] uppercase opacity-60"
                style={{ color: "var(--muted)" }}
              >
                {String(s.value).padStart(2, "0")}
              </span>
            </div>
            <div className="skill-track">
              <motion.span
                className="skill-fill"
                initial={{ scaleX: reduce ? s.value / 100 : 0 }}
                whileInView={{ scaleX: s.value / 100 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 1.4,
                  delay: 0.06 * i + 0.2,
                  ease: [0.2, 0.7, 0.2, 1],
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
