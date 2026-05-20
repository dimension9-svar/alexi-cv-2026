"use client";

import { motion } from "motion/react";
import { Reveal, StaggerGroup, staggerItem } from "./Reveal";
import { cv } from "@/lib/cv-data";

export function Profile() {
  return (
    <section
      id="profile"
      className="max-w-[1280px] mx-auto px-6 md:px-12 py-14 md:py-24 grid md:grid-cols-[260px_1fr] gap-10 md:gap-20"
    >
      <div>
        <Reveal>
          <h2 className="h-label">Profile</h2>
        </Reveal>
        <Reveal delay={0.05} className="mt-8">
          <SidebarPanel />
        </Reveal>
      </div>

      <div>
        <StaggerGroup stagger={0.08}>
          <motion.div variants={staggerItem} className="relative pl-6">
            <motion.span
              aria-hidden
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
              className="absolute left-0 top-2 bottom-2 w-[2px] origin-top"
              style={{ background: "var(--accent)" }}
            />
            <p className="font-serif-news text-[clamp(22px,2.6vw,36px)] leading-[1.28] max-w-[34ch]">
              {cv.profileLead.split(/(10\+ years)/).map((part, i) =>
                part === "10+ years" ? (
                  <em
                    key={i}
                    className="not-italic"
                    style={{ color: "var(--accent)" }}
                  >
                    {part}
                  </em>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </p>
          </motion.div>
          <motion.p
            variants={staggerItem}
            className="mt-8 text-[15px] md:text-[16px] leading-[1.65] max-w-[64ch] pl-6"
            style={{ color: "var(--ink)" }}
          >
            {cv.profileBody}
          </motion.p>
        </StaggerGroup>
      </div>
    </section>
  );
}

function SidebarPanel() {
  return (
    <aside
      className="paper p-6 md:p-7 flex flex-col gap-7"
      style={{ background: "var(--accent)", color: "var(--paper)" }}
    >
      <Block title="At a Glance">
        <div className="flex justify-between font-mono-plex text-[9px] tracking-[.22em] uppercase opacity-70">
          <span>Overview</span>
          <span className="flex gap-1">
            <i className="block w-1.5 h-1.5 rounded-full" style={{ background: "var(--paper)" }} />
            <i className="block w-1.5 h-1.5 rounded-full opacity-40" style={{ background: "var(--paper)" }} />
            <i className="block w-1.5 h-1.5 rounded-full opacity-40" style={{ background: "var(--paper)" }} />
          </span>
        </div>
      </Block>

      <Block title="Languages" count="03">
        {cv.languages.map((l) => (
          <Row key={l.name} left={l.name} right={l.level} />
        ))}
      </Block>

      <Block title="Education">
        {cv.education.map((e, i) => (
          <div key={i} className="mb-3 last:mb-0">
            <p className="font-serif-news text-[16px] leading-tight">{e.school}</p>
            <p
              className="text-[11.5px] leading-[1.45] opacity-75 whitespace-pre-line mt-1"
            >
              {e.detail}
            </p>
          </div>
        ))}
      </Block>

      <Block title="Regions Served">
        {cv.regions.map((r) => (
          <Row key={r.name} left={r.name} right={r.years} />
        ))}
      </Block>
    </aside>
  );
}

function Block({
  title,
  count,
  children,
}: {
  title: string;
  count?: string;
  children?: React.ReactNode;
}) {
  return (
    <section>
      <h3
        className="font-mono-plex text-[9.5px] tracking-[.24em] uppercase pb-2 border-b flex justify-between items-baseline mb-3"
        style={{ borderColor: "color-mix(in srgb, var(--paper) 30%, transparent)" }}
      >
        <span>{title}</span>
        {count && <span className="opacity-60">{count}</span>}
      </h3>
      {children}
    </section>
  );
}

function Row({ left, right }: { left: string; right: string }) {
  return (
    <div
      className="flex justify-between items-baseline py-1.5 text-[12px] border-b last:border-b-0"
      style={{ borderColor: "color-mix(in srgb, var(--paper) 18%, transparent)" }}
    >
      <span>{left}</span>
      <span className="font-mono-plex text-[9.5px] tracking-[.1em] uppercase opacity-80">
        {right}
      </span>
    </div>
  );
}
