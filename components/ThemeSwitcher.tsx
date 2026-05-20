"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { themes, type ThemeKey } from "@/lib/cv-data";

const STORAGE_KEY = "alexi-cv-theme";
const THEME_CLASSES = ["theme-forest", "theme-clay", "theme-ink", "theme-navy"];

function readStoredTheme(): ThemeKey {
  if (typeof window === "undefined") return "forest";
  const saved = window.localStorage.getItem(STORAGE_KEY) as ThemeKey | null;
  return saved ?? "forest";
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeKey>(() => readStoredTheme());
  const [open, setOpen] = useState(false);

  const apply = useCallback((next: ThemeKey) => {
    const root = document.documentElement;
    THEME_CLASSES.forEach((c) => root.classList.remove(c));
    root.classList.add(`theme-${next}`);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore storage failures
    }
  }, []);

  useEffect(() => {
    apply(theme);
  }, [theme, apply]);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[70] no-print">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: .96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: .96 }}
            transition={{ duration: .25, ease: [0.2, 0.7, 0.2, 1] }}
            className="mb-3 flex flex-col gap-2 paper p-3"
          >
            {(Object.keys(themes) as ThemeKey[]).map((k) => {
              const t = themes[k];
              const active = k === theme;
              return (
                <button
                  key={k}
                  onClick={() => setTheme(k)}
                  className="flex items-center gap-3 px-3 py-2 group"
                  style={{ outline: active ? `1px solid var(--accent)` : "none" }}
                  data-magnetic
                  aria-label={`Switch to ${t.label} theme`}
                >
                  <span
                    className="inline-block w-4 h-4 rounded-full"
                    style={{ background: t.hero, boxShadow: `inset 0 0 0 2px ${t.paper}` }}
                  />
                  <span className="font-mono-plex text-[10px] tracking-[.18em] uppercase">
                    {t.label}
                  </span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: .97 }}
        onClick={() => setOpen((o) => !o)}
        className="btn"
        data-magnetic
        aria-label="Theme switcher"
      >
        <span
          className="inline-block w-3 h-3 rounded-full"
          style={{ background: themes[theme].hero, boxShadow: `inset 0 0 0 1.5px ${themes[theme].paper}` }}
        />
        Theme
      </motion.button>
    </div>
  );
}
