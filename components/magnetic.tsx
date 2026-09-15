"use client"

import { useCallback, useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

const SPRING = { stiffness: 200, damping: 15, mass: 0.3 }

type MagneticProps = {
  children: ReactNode
  className?: string
  /** 0–1: how strongly the child follows the cursor. */
  strength?: number
  as?: "div" | "span"
}

/**
 * Magnetic wrapper — the child drifts a few pixels toward the cursor
 * while hovered, then springs back on leave. Reserved for the hero
 * primary CTA so the effect stays rare.
 *
 * SSR-safe: always renders the same element type (set by `as`), and only
 * activates the magnet after mount on non-touch, motion-allowed devices,
 * so the server and first client render match (no hydration mismatch).
 */
export function Magnetic({ children, className, strength = 0.4, as = "div" }: MagneticProps) {
  const elRef = useRef<HTMLElement | null>(null)
  // A callback ref typed on HTMLElement is accepted by both motion.div and motion.span.
  const setRef = useCallback((el: HTMLElement | null) => {
    elRef.current = el
  }, [])
  const prefersReduced = useReducedMotion()
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  const enabled = mounted && !prefersReduced && !isMobile

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, SPRING)
  const sy = useSpring(y, SPRING)

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const el = elRef.current
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

  const shared = {
    ref: setRef,
    className,
    onMouseMove: enabled ? handleMove : undefined,
    onMouseLeave: enabled ? handleLeave : undefined,
    style: enabled ? { x: sx, y: sy } : undefined,
  }

  if (as === "span") {
    return <motion.span {...shared}>{children}</motion.span>
  }
  return <motion.div {...shared}>{children}</motion.div>
}
