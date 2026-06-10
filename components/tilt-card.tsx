"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

/**
 * Subtle 3D tilt-on-hover card. The card rotates toward the cursor
 * (capped at ~`max` degrees) with a spring for smoothness, and also
 * drives the existing `.spotlight` CSS vars (--mx/--my) so the radial
 * highlight follows the pointer.
 *
 * SSR-safe: always renders the same <motion.div> element, and only
 * attaches the tilt transform/handlers after mount on non-touch,
 * motion-allowed devices. That keeps the server and first client render
 * identical (no hydration mismatch) while still degrading gracefully.
 */
export function TiltCard({
  children,
  className,
  max = 8,
}: {
  children: ReactNode
  className?: string
  /** Maximum tilt in degrees on each axis. Keep small (≤ 8). */
  max?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const enabled = mounted && !prefersReduced && !isMobile

  // Pointer position within the card, normalized to [-0.5, 0.5].
  const px = useMotionValue(0)
  const py = useMotionValue(0)

  const springCfg = { stiffness: 250, damping: 20, mass: 0.4 }
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [max, -max]), springCfg)
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-max, max]), springCfg)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width
    const ny = (e.clientY - rect.top) / rect.height
    px.set(nx - 0.5)
    py.set(ny - 0.5)
    // Feed the .spotlight radial-gradient position.
    el.style.setProperty("--mx", `${nx * 100}%`)
    el.style.setProperty("--my", `${ny * 100}%`)
  }

  const handleLeave = () => {
    px.set(0)
    py.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={enabled ? handleMove : undefined}
      onMouseLeave={enabled ? handleLeave : undefined}
      style={
        enabled
          ? { rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 1000 }
          : undefined
      }
      className={className}
    >
      {children}
    </motion.div>
  )
}
