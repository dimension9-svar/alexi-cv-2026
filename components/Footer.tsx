"use client";

import { motion } from "motion/react";
import { cv } from "@/lib/cv-data";

export function Footer() {
  return (
    <footer id="contact" className="relative max-w-[1280px] mx-auto px-5 sm:px-6 md:px-12 pb-24 md:pb-24 pt-12 md:pt-20">
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
        className="rule origin-left mb-12"
      />

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .9, ease: [0.2, 0.7, 0.2, 1] }}
        className="font-display font-extrabold tracking-[-0.035em] text-[clamp(44px,8vw,128px)] leading-[0.92]"
      >
        Let&rsquo;s work
        <br />
        together<span style={{ color: "var(--accent)" }}>.</span>
      </motion.h2>

      <div className="mt-10 md:mt-14 flex flex-wrap gap-3 md:gap-4">
        <motion.a
          href={`mailto:${cv.email}`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: .97 }}
          className="btn"
          data-magnetic
        >
          {cv.email}
          <span className="btn-arrow">→</span>
        </motion.a>
        <motion.a
          href={`tel:${cv.phoneTel}`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: .97 }}
          className="btn btn-ghost"
          data-magnetic
        >
          {cv.phone}
          <span className="btn-arrow">→</span>
        </motion.a>
        <motion.a
          href="/print?print=1"
          target="_blank"
          rel="noopener"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: .97 }}
          className="btn btn-ghost"
          data-magnetic
        >
          Download PDF
          <span className="btn-arrow">↗</span>
        </motion.a>
        <motion.a
          href="/print"
          target="_blank"
          rel="noopener"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: .97 }}
          className="btn btn-ghost"
          data-magnetic
        >
          Print CV
          <span className="btn-arrow">↗</span>
        </motion.a>
      </div>

      <div
        className="mt-14 md:mt-20 pt-6 border-t flex flex-col md:flex-row justify-between gap-4 font-mono-plex text-[10px] tracking-[.22em] uppercase"
        style={{ borderColor: "var(--rule)", color: "var(--muted)" }}
      >
        <span>{cv.name} — Curriculum Vitae · 2026 · ZA</span>
        <span>{cv.location}</span>
      </div>
    </footer>
  );
}
