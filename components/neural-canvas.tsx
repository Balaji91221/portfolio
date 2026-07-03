"use client"

import { useEffect, useRef } from "react"
import { useReducedMotion } from "framer-motion"

type Node = { x: number; y: number; vx: number; vy: number }

/**
 * Interactive neural-constellation background. Nodes drift slowly and link
 * when close; the cursor gently attracts nearby nodes so the network feels
 * alive without demanding attention. Colors follow the theme's --primary
 * token, so it works in light and dark.
 */
export function NeuralCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf = 0
    let nodes: Node[] = []
    const mouse = { x: -9999, y: -9999 }
    let primary = "221 90% 66%"

    const readTheme = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim()
      if (v) primary = v
    }
    readTheme()
    const themeObserver = new MutationObserver(readTheme)
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    const seed = () => {
      const { width, height } = canvas
      const count = Math.min(90, Math.floor((width * height) / 22000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
      }))
    }

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (!rect) return
      canvas.width = rect.width
      canvas.height = rect.height
      seed()
    }
    resize()
    const resizeObserver = new ResizeObserver(resize)
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement)

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("pointerleave", onLeave)

    const LINK = 130
    const draw = () => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      for (const n of nodes) {
        if (!prefersReduced) {
          // gentle cursor attraction
          const dx = mouse.x - n.x
          const dy = mouse.y - n.y
          const d2 = dx * dx + dy * dy
          if (d2 < 160 * 160 && d2 > 1) {
            const d = Math.sqrt(d2)
            n.vx += (dx / d) * 0.012
            n.vy += (dy / d) * 0.012
          }
          n.vx = Math.max(-0.4, Math.min(0.4, n.vx))
          n.vy = Math.max(-0.4, Math.min(0.4, n.vy))
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > width) n.vx *= -1
          if (n.y < 0 || n.y > height) n.vy *= -1
        }

        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.4, 0, Math.PI * 2)
        ctx.fillStyle = `hsl(${primary} / 0.55)`
        ctx.fill()
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const d = Math.hypot(dx, dy)
          if (d < LINK) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `hsl(${primary} / ${(0.16 * (1 - d / LINK)).toFixed(3)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      if (!prefersReduced) raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      resizeObserver.disconnect()
      themeObserver.disconnect()
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerleave", onLeave)
    }
  }, [prefersReduced])

  return <canvas ref={canvasRef} className={`pointer-events-none ${className}`} aria-hidden />
}
