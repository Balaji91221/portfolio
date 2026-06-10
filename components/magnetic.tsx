"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

/**
 * Magnetic wrapper — the child drifts a few pixels toward the cursor
 * while hovered, then springs back on leave. Great for primary CTAs.
 *
 * SSR-safe: always renders the same element type (set by `as`), and only
 * activates the magnet after mount on non-touch, motion-allowed devices,
 * so the server and first client render match (no hydration mismatch).
 */
export function Magnetic({
  children,
  className,
  strength = 0.4,
  as: Tag = "div",
}: {
  children: ReactNode
  className?: string
  /** 0–1: how strongly the child follows the cursor. */
  strength?: number
  as?: "div" | "span"
}) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const enabled = mounted && !prefersReduced && !isMobile

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const spring = { stiffness: 200, damping: 15, mass: 0.3 }
  const sx = useSpring(x, spring)
  const sy = useSpring(y, spring)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * strength)
    y.set((e.clientY - cy) * strength)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  const MotionTag = Tag === "span" ? motion.span : motion.div
  const baseStyle = Tag === "span" ? { display: "inline-block" as const } : undefined

  return (
    <MotionTag
      ref={ref as any}
      onMouseMove={enabled ? handleMove : undefined}
      onMouseLeave={enabled ? handleLeave : undefined}
      style={enabled ? { x: sx, y: sy, ...baseStyle } : baseStyle}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
