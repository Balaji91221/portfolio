"use client"

import { useRef, type ReactNode, type CSSProperties } from "react"

/**
 * Wrapper that tracks the cursor and exposes --mx/--my CSS vars, powering
 * the .card-glow border highlight and .spotlight radial in globals.css.
 */
export function GlowCard({
  children,
  className = "",
  style,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`)
    el.style.setProperty("--my", `${e.clientY - rect.top}px`)
  }

  return (
    <div ref={ref} onPointerMove={onPointerMove} className={className} style={style}>
      {children}
    </div>
  )
}
