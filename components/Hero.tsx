"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { cv } from "@/lib/cv-data";
import { AnimatedName } from "./AnimatedName";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);
  const taglineY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -30]);

  const words = cv.tagline.split(" ");

  return (
    <header
      ref={ref}
      className="relative max-w-[1280px] mx-auto px-5 sm:px-6 md:px-12 pt-10 sm:pt-12 md:pt-14 pb-6 md:pb-10"
    >
      {/* Top row: eyebrow + (mobile portrait on right) / (desktop CV label) */}
      <div className="flex items-start justify-between gap-4 mb-3 md:mb-5">
        <motion.span
          className="eyebrow mt-1 md:mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .2, duration: .8 }}
        >
          {cv.edition}
        </motion.span>

        {/* mobile-only portrait — anchored top-right of header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
          className="md:hidden shrink-0"
        >
          <PortraitFrame size="mobile" />
        </motion.div>

        <motion.span
          className="font-mono-plex text-[10px] tracking-[.24em] uppercase hidden md:inline mt-2"
          style={{ color: "var(--muted)" }}
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: .35, duration: .8 }}
        >
          CV / 2026 / ZA
        </motion.span>
      </div>

      {/* Name + desktop portrait */}
      <div className="grid md:grid-cols-[1fr_auto] gap-5 md:gap-10 items-start">
        <div className="min-w-0">
          <AnimatedName name={cv.name} />

          <motion.p
            className="font-mono-plex text-[11.5px] tracking-[.18em] uppercase mt-3 md:mt-5 inline-flex items-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: .8 }}
            style={{ color: "var(--ink)" }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            {cv.role}
          </motion.p>

          <motion.p
            style={{ y: taglineY }}
            className="font-serif-news mt-3 md:mt-5 text-[clamp(15.5px,1.7vw,22px)] leading-[1.45] md:leading-[1.4] max-w-[42ch]"
          >
            {words.map((w, i) => (
              <span key={i} className="inline-block reveal-mask mr-[0.28em]">
                <motion.span
                  className="inline-block"
                  initial={{ y: reduce ? 0 : "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: .8 + i * 0.025,
                    duration: .9,
                    ease: [0.2, 0.7, 0.2, 1],
                  }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </motion.p>
        </div>

        {/* desktop-only portrait — large, top aligned with name */}
        <motion.div
          style={{ y: portraitY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative shrink-0 hidden md:block mt-0"
        >
          <PortraitFrame size="desktop" />{/* sized down below */}
          <div
            className="absolute -bottom-3 -left-4 font-mono-plex text-[9px] tracking-[.22em] uppercase opacity-60"
            style={{ color: "var(--muted)" }}
          >
            ZA · 2026
          </div>
        </motion.div>
      </div>

      <ContactStrip />

      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1], delay: 0.2 }}
        className="rule mt-6 md:mt-10 origin-left"
      />
    </header>
  );
}

function PortraitFrame({ size }: { size: "mobile" | "desktop" }) {
  const dims =
    size === "mobile"
      ? { width: "clamp(74px, 16vw, 110px)", sizes: "110px" }
      : { width: "clamp(180px, 16vw, 232px)", sizes: "232px" };
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: dims.width,
        aspectRatio: "1 / 1",
        borderRadius: "999px",
        boxShadow:
          "0 0 0 1px var(--rule), 0 0 0 5px var(--paper), 0 0 0 6px var(--rule)",
      }}
    >
      <Image
        src="/portrait.jpg"
        alt={`Portrait of ${cv.name}`}
        fill
        priority
        sizes={dims.sizes}
        style={{
          objectFit: "cover",
          objectPosition: "center 22%",
          filter: "grayscale(.3) contrast(1.04)",
        }}
      />
    </div>
  );
}

function ContactStrip() {
  const items = [
    { label: "Location", value: cv.location, href: undefined },
    { label: "Phone", value: cv.phone, href: `tel:${cv.phoneTel}` },
    { label: "Email", value: cv.email, href: `mailto:${cv.email}` },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 1.3, duration: .8 }}
      className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-10"
    >
      {items.map((it) => (
        <div key={it.label} className="flex flex-col gap-1">
          <span
            className="font-mono-plex text-[9px] tracking-[.22em] uppercase"
            style={{ color: "var(--muted)" }}
          >
            {it.label}
          </span>
          {it.href ? (
            <a className="link-underline font-mono-plex text-[12px]" href={it.href}>
              {it.value}
            </a>
          ) : (
            <span className="font-mono-plex text-[12px]">{it.value}</span>
          )}
        </div>
      ))}
    </motion.div>
  );
}
