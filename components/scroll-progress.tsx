"use client"

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion"

/** Thin accent line along the top edge tracking scroll progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const prefersReduced = useReducedMotion()
  const smoothed = useSpring(scrollYProgress, { stiffness: 180, damping: 28, restDelta: 0.001 })

  return (
    <motion.div
      style={{ scaleX: prefersReduced ? scrollYProgress : smoothed }}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-primary"
      aria-hidden
    />
  )
}
