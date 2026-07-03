"use client"

import { motion, useScroll, useSpring } from "framer-motion"

/** Thin gradient beam along the top edge tracking scroll progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 28, restDelta: 0.001 })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary via-accent to-primary"
      aria-hidden
    />
  )
}
