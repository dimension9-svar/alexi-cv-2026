# Alexi Claasen — Curriculum Vitae 2026

Editorial scroll-style landing site, Next.js 16 (App Router), TypeScript, Tailwind v4, Motion + Lenis. Faithful 2-page A4 print mode at `/print`.

## Stack
- Next.js 16 / React 19
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- [`motion`](https://motion.dev) for animations + scroll progress
- [`lenis`](https://github.com/darkroomengineering/lenis) for smooth scrolling
- `next/font/google` — IBM Plex Sans, IBM Plex Mono, Newsreader
- Helvetica Neue (system) for the display name

## Routes
- `/` — scroll landing (hero → stats → profile → skills → marquee → experience → references → contact)
- `/print` — faithful 2-page A4 CV (click "Print / Save PDF")
- `/print?print=1` — auto-opens the browser print dialog

## Develop
```bash
npm install
npm run dev
```

## Themes
Four palettes — forest (default), clay, ink, navy — via the floating bottom-right switcher (persisted to `localStorage`).
