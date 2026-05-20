"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 380, damping: 32, mass: 0.18 });
  return <motion.div className="scroll-progress no-print" style={{ scaleX }} aria-hidden />;
}
