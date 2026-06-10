"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

/**
 * Scroll-linked parallax wrapper. As the page scrolls past `target`,
 * the child is translated on the Y axis at a fraction of scroll speed,
 * creating subtle depth. Negative `speed` moves it slower/up, positive
 * moves it down — keep magnitudes small (20–80px) so it reads as polish,
 * not a gimmick.
 *
 * Respects prefers-reduced-motion (renders static) and stays light by
 * only animating `transform` (GPU-accelerated).
 */
export function Parallax({
  children,
  speed = 60,
  className,
}: {
  children: ReactNode
  /** Total px of vertical travel across the scroll range. */
  speed?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  // Track progress of this element moving through the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [-speed / 2, speed / 2])

  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
