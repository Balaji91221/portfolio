"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useReducedMotion } from "framer-motion"

/**
 * Parse a display value like "25+", "8.8", "19,299", "AIR 19,299" or a
 * plain number into the parts CountUp needs: a non-numeric prefix, the
 * numeric target, how many decimals to keep, whether to group thousands,
 * and a trailing suffix. Values with no number (e.g. "N/A") render as-is.
 */
function parseValue(value: number | string) {
  if (typeof value === "number") {
    return { prefix: "", target: value, decimals: 0, grouping: false, suffix: "", numeric: true }
  }
  const match = String(value).match(/^(.*?)([\d,]*\.?\d+)(.*)$/s)
  if (!match) {
    return { prefix: value, target: 0, decimals: 0, grouping: false, suffix: "", numeric: false }
  }
  const [, prefix, numStr, suffix] = match
  const grouping = numStr.includes(",")
  const clean = numStr.replace(/,/g, "")
  const decimals = clean.includes(".") ? clean.split(".")[1].length : 0
  return { prefix, target: parseFloat(clean), decimals, grouping, suffix, numeric: true }
}

function format(n: number, decimals: number, grouping: boolean) {
  let s = n.toFixed(decimals)
  if (grouping) {
    const [intPart, dec] = s.split(".")
    s = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (dec ? "." + dec : "")
  }
  return s
}

/**
 * Counts from 0 up to `value` the first time it scrolls into view.
 * Accepts a number or a formatted string ("25+", "8.8", "AIR 19,299")
 * and preserves the prefix/suffix/decimals/grouping while animating the
 * number. Falls back to the final value immediately when
 * prefers-reduced-motion is set. Optional `suffix`/`prefix` props are
 * appended on top of anything parsed from a string value.
 */
export function CountUp({
  value,
  duration = 1.4,
  suffix = "",
  prefix = "",
  className,
}: {
  value: number | string
  /** Seconds for the full count. */
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const prefersReduced = useReducedMotion()
  const parsed = parseValue(value)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!inView || !parsed.numeric) return
    if (prefersReduced) {
      setCurrent(parsed.target)
      return
    }

    let raf = 0
    let start: number | null = null
    const ms = duration * 1000

    const tick = (now: number) => {
      if (start === null) start = now
      const progress = Math.min((now - start) / ms, 1)
      // easeOutCubic for a natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(eased * parsed.target)
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, prefersReduced, parsed.numeric, parsed.target, duration])

  if (!parsed.numeric) {
    return <span className={className}>{parsed.prefix}</span>
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {parsed.prefix}
      {format(current, parsed.decimals, parsed.grouping)}
      {parsed.suffix}
      {suffix}
    </span>
  )
}
