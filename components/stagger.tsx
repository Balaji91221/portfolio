"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

// Professional easing — smooth ease-out, no bounce
const EASE = [0.22, 1, 0.36, 1] as const

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.05,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
}

/** Container that staggers its children on scroll into view. */
export function StaggerContainer({
  children,
  className,
  amount = 0.15,
  as: Component = motion.div,
}: {
  children: ReactNode
  className?: string
  amount?: number
  as?: any
}) {
  const prefersReduced = useReducedMotion()
  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }
  return (
    <Component
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      className={className}
    >
      {children}
    </Component>
  )
}

/** Item inside a StaggerContainer — inherits variants automatically. */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const prefersReduced = useReducedMotion()
  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  )
}
