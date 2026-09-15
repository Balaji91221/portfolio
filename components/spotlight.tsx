"use client"

import { useEffect, useRef } from "react"
import { useReducedMotion } from "framer-motion"

/**
 * Soft single-hue radial that follows the cursor across the parent element.
 * Drop it inside any `relative` section; it listens to the parent's pointer.
 */
export function Spotlight({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    const parent = el?.parentElement
    if (!el || !parent || prefersReduced) return
    const onMove = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect()
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`)
      el.style.setProperty("--my", `${e.clientY - rect.top}px`)
      el.style.opacity = "1"
    }
    const onLeave = () => {
      el.style.opacity = "0"
    }
    parent.addEventListener("pointermove", onMove)
    parent.addEventListener("pointerleave", onLeave)
    return () => {
      parent.removeEventListener("pointermove", onMove)
      parent.removeEventListener("pointerleave", onLeave)
    }
  }, [prefersReduced])

  return <div ref={ref} className={`spotlight-layer ${className}`} aria-hidden />
}
