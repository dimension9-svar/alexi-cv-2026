"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { cv } from "@/lib/cv-data";

const items = [
  { href: "#profile", label: "Profile" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#references", label: "References" },
  { href: "#contact", label: "Contact" },
];

export function TopNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 120);
  });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.nav
        aria-label="Primary"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: scrolled ? 0 : -80, opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
        className="fixed top-2 left-2 right-2 sm:top-3 sm:left-4 sm:right-4 z-[58] no-print"
      >
        <div className="glass paper-glass flex items-center justify-between gap-4 px-4 sm:px-5 md:px-6 h-12 sm:h-14">
          <a
            href="#top"
            className="font-mono-plex text-[10.5px] tracking-[.18em] uppercase shrink-0"
            data-magnetic
          >
            <span style={{ color: "var(--ink)" }}>Alexi Claasen</span>
            <span style={{ color: "var(--accent)" }}>.</span>
          </a>

          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {items.map((it) => (
              <li key={it.href}>
                <a
                  href={it.href}
                  className="link-underline font-mono-plex text-[10px] tracking-[.2em] uppercase"
                  data-magnetic
                >
                  {it.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/print?print=1"
                target="_blank"
                rel="noopener"
                className="font-mono-plex text-[10px] tracking-[.2em] uppercase px-3 py-1.5 inline-flex items-center gap-2"
                style={{ background: "var(--ink)", color: "var(--paper)" }}
                data-magnetic
              >
                PDF
                <span aria-hidden>↗</span>
              </a>
            </li>
          </ul>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
            data-magnetic
          >
            <span className="block w-5 h-px" style={{ background: "var(--ink)" }} />
            <span className="block w-5 h-px" style={{ background: "var(--ink)" }} />
            <span className="block w-3 h-px ml-auto" style={{ background: "var(--accent)" }} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[80] no-print"
              style={{
                background: "rgba(0,0,0,.42)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
              }}
            />
            <motion.aside
              key="drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[88%] max-w-[380px] z-[81] no-print glass paper-glass p-7 sm:p-9 flex flex-col"
              style={{ borderLeft: "1px solid color-mix(in srgb, var(--ink) 10%, transparent)" }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="font-mono-plex text-[10px] tracking-[.22em] uppercase"
                  style={{ color: "var(--muted)" }}
                >
                  Navigation
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="font-mono-plex text-[10px] tracking-[.22em] uppercase inline-flex items-center gap-2"
                  data-magnetic
                  aria-label="Close menu"
                >
                  Close
                  <span aria-hidden style={{ color: "var(--accent)" }}>×</span>
                </button>
              </div>

              <ul className="mt-12 flex flex-col gap-4">
                {items.map((it, i) => (
                  <li key={it.href}>
                    <motion.a
                      href={it.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.06 * i + 0.12,
                        duration: 0.5,
                        ease: [0.2, 0.7, 0.2, 1],
                      }}
                      className="font-serif-news text-[28px] sm:text-[32px] inline-flex items-baseline gap-3"
                      data-magnetic
                    >
                      <span
                        className="font-mono-plex text-[10px] tracking-[.22em] uppercase"
                        style={{ color: "var(--accent)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {it.label}
                    </motion.a>
                  </li>
                ))}
              </ul>

              <div
                className="mt-auto pt-6 border-t flex flex-col gap-3"
                style={{ borderColor: "var(--rule)" }}
              >
                <a
                  href={`mailto:${cv.email}`}
                  className="font-mono-plex text-[11px] tracking-[.18em]"
                  style={{ color: "var(--ink)" }}
                >
                  {cv.email}
                </a>
                <a
                  href={`tel:${cv.phoneTel}`}
                  className="font-mono-plex text-[11px] tracking-[.18em]"
                  style={{ color: "var(--ink)" }}
                >
                  {cv.phone}
                </a>
                <a
                  href="/print?print=1"
                  target="_blank"
                  rel="noopener"
                  className="btn mt-3 justify-between"
                  data-magnetic
                  onClick={() => setOpen(false)}
                >
                  Download PDF
                  <span className="btn-arrow">↗</span>
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
