"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { usePathname } from "next/navigation"

const EASE = [0.22, 1, 0.36, 1] as const

/**
 * Fades a page in on client-side navigation. The first paint is left
 * alone so the largest contentful paint is never gated on a fade.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const prefersReduced = useReducedMotion()
  // This component stays mounted across navigations while the keyed child
  // remounts, so the flag survives and only the first paint skips the entrance.
  const firstPaint = useRef(true)
  useEffect(() => {
    firstPaint.current = false
  }, [])
  const animateIn = !prefersReduced && !firstPaint.current

  return (
    <motion.div
      key={pathname}
      initial={animateIn ? { opacity: 0, y: 8 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
