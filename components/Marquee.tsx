"use client";

import { cv } from "@/lib/cv-data";

export function Marquee() {
  const items = [
    "Key Accounts",
    "Contractor Sales",
    "KZN",
    "Gauteng",
    "Massbuild",
    "10+ Years",
    "Quoting & Pricing",
    "Site Inspections",
    "Trade Relationships",
    cv.role,
  ];
  const doubled = [...items, ...items];

  return (
    <section className="relative overflow-hidden py-10 md:py-14 border-y" style={{ borderColor: "var(--rule)" }}>
      <div className="marquee-track flex whitespace-nowrap gap-12 md:gap-20 font-serif-news text-[clamp(36px,7vw,96px)] leading-none">
        {doubled.map((it, i) => (
          <span key={i} className="inline-flex items-center gap-12 md:gap-20">
            <span style={{ color: i % 2 === 0 ? "var(--ink)" : "var(--accent)" }}>{it}</span>
            <i
              aria-hidden
              className="inline-block w-3 h-3 rounded-full"
              style={{ background: "var(--accent)" }}
            />
          </span>
        ))}
      </div>
    </section>
  );
}
