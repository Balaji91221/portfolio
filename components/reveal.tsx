"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

const EASE = [0.22, 1, 0.36, 1] as const

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * Text rises out of a clipped line the first time it scrolls into view.
 * The outer (static) span is what gets observed. Observing the moving
 * inner span would never fire, because the overflow clip hides it.
 */
export function RevealText({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const prefersReduced = useReducedMotion()
  if (prefersReduced) {
    return <span className={`block ${className}`}>{children}</span>
  }
  return (
    <span ref={ref} className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={inView ? { y: 0 } : { y: "110%" }}
        transition={{ duration: 0.8, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  )
}

/**
 * Wipes an image in from left to right the first time it scrolls into view.
 * Same pattern: observe the static wrapper, animate the clipped child.
 */
export function ImageReveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const prefersReduced = useReducedMotion()
  if (prefersReduced) {
    return <div className={`absolute inset-0 ${className}`}>{children}</div>
  }
  return (
    <div ref={ref} className={`absolute inset-0 ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={inView ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
        transition={{ duration: 0.8, ease: EASE, delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}
