"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 1200, damping: 42, mass: 0.06 });
  return <motion.div className="scroll-progress no-print" style={{ scaleX }} aria-hidden />;
}
