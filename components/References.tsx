"use client";

import { Reveal, StaggerGroup, staggerItem } from "./Reveal";
import { motion } from "motion/react";
import { cv } from "@/lib/cv-data";

export function References() {
  return (
    <section
      id="references"
      className="max-w-[1280px] mx-auto px-5 sm:px-6 md:px-12 py-12 md:py-24"
    >
      <Reveal>
        <h2 className="h-label mb-10 md:mb-14">References</h2>
      </Reveal>

      <StaggerGroup stagger={0.12} className="grid md:grid-cols-2 gap-8 md:gap-14">
        {cv.references.map((r) => (
          <motion.div
            key={r.name}
            variants={staggerItem}
            className="pt-5 border-t lift"
            style={{ borderColor: "var(--rule)" }}
          >
            <p className="font-serif-news text-[22px] md:text-[24px] leading-tight">
              {r.name}
            </p>
            <p
              className="mt-3 font-mono-plex text-[11px] leading-[1.6] tracking-[.04em]"
              style={{ color: "var(--muted)" }}
            >
              {r.company}
              <br />
              <a href={`tel:${r.phone.replace(/\s/g, "")}`} className="link-underline">
                {r.phone}
              </a>
            </p>
          </motion.div>
        ))}
      </StaggerGroup>
    </section>
  );
}
