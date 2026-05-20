"use client";

import { motion } from "motion/react";
import { Reveal, StaggerGroup, staggerItem } from "./Reveal";
import { cv } from "@/lib/cv-data";

export function Experience() {
  return (
    <section
      id="experience"
      className="max-w-[1280px] mx-auto px-5 sm:px-6 md:px-12 py-12 md:py-24"
    >
      <div className="flex items-baseline justify-between mb-12 md:mb-16">
        <Reveal>
          <h2 className="h-label">Experience</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <span
            className="font-mono-plex text-[10px] tracking-[.22em] uppercase"
            style={{ color: "var(--muted)" }}
          >
            2014 — Present
          </span>
        </Reveal>
      </div>

      <div className="relative">
        <motion.div
          aria-hidden
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.6, ease: [0.2, 0.7, 0.2, 1] }}
          className="hidden md:block absolute left-[180px] top-2 bottom-2 w-px origin-top"
          style={{ background: "var(--rule)" }}
        />

        <div className="flex flex-col gap-12 md:gap-16">
          {cv.experience.map((job, idx) => (
            <article
              key={idx}
              className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-14 relative"
            >
              <Reveal>
                <div
                  className="font-mono-plex text-[10px] tracking-[.18em] uppercase leading-[1.6]"
                  style={{ color: "var(--muted)" }}
                >
                  <div style={{ color: "var(--ink)" }}>{job.period.split(" — ")[0]}</div>
                  <div className="opacity-70">{job.period.split(" — ")[1]}</div>
                  <div className="mt-2 opacity-70">{job.location}</div>
                </div>
              </Reveal>

              <div className="md:relative">
                <motion.span
                  aria-hidden
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: .6, ease: [0.2, 0.7, 0.2, 1] }}
                  className="hidden md:block absolute -left-[71px] top-2 w-3 h-3 rounded-full"
                  style={{ background: "var(--accent)", boxShadow: "0 0 0 4px var(--paper)" }}
                />

                <Reveal delay={0.05}>
                  <h3 className="font-serif-news text-[24px] md:text-[28px] leading-tight">
                    {job.title}
                    <span style={{ color: "var(--muted)" }}> · </span>
                    <em
                      className="not-italic"
                      style={{ color: "var(--accent)" }}
                    >
                      {job.company}
                    </em>
                  </h3>
                </Reveal>

                <Reveal delay={0.1}>
                  <p
                    className="mt-3 text-[13px] md:text-[14px] leading-[1.6] max-w-[68ch]"
                    style={{ color: "var(--muted)" }}
                  >
                    {job.blurb}
                  </p>
                </Reveal>

                <StaggerGroup stagger={0.06} delay={0.15} className="mt-5 flex flex-col gap-2">
                  {job.bullets.map((b, i) => (
                    <motion.li
                      key={i}
                      variants={staggerItem}
                      className="relative pl-6 text-[13.5px] md:text-[14.5px] leading-[1.6] list-none"
                    >
                      <motion.span
                        aria-hidden
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7, ease: [0.2, 0.7, 0.2, 1], delay: 0.06 * i + 0.2 }}
                        className="absolute left-0 top-[12px] w-3 h-[1.5px] origin-left"
                        style={{ background: "var(--accent)" }}
                      />
                      {b}
                    </motion.li>
                  ))}
                </StaggerGroup>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
