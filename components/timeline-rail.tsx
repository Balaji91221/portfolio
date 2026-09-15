"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion"

/**
 * Vertical rail that draws itself top-to-bottom as the user scrolls past it.
 * Place inside a `relative` container; it stretches to the container's height.
 */
export function TimelineRail({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 70%"],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <div ref={ref} className={`absolute top-1 bottom-1 w-px bg-border ${className}`} aria-hidden>
      <motion.div
        style={prefersReduced ? undefined : { scaleY, originY: 0 }}
        className="absolute inset-0 bg-primary"
      />
    </div>
  )
}
