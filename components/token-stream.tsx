"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

/**
 * Renders phrases the way an LLM streams tokens: word-chunks materialize
 * one by one with a blur-fade, hold, then the line dissolves and the next
 * phrase streams in. A soft block caret pulses at the write head.
 */
export function TokenStream({
  phrases,
  className = "",
  tokenDelay = 120,
  hold = 2400,
}: {
  phrases: string[]
  className?: string
  tokenDelay?: number
  hold?: number
}) {
  const prefersReduced = useReducedMotion()
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [visibleTokens, setVisibleTokens] = useState(0)

  const tokens = phrases[phraseIndex].split(" ")
  const done = visibleTokens >= tokens.length

  useEffect(() => {
    if (prefersReduced) return
    if (!done) {
      const id = setTimeout(() => setVisibleTokens((n) => n + 1), tokenDelay)
      return () => clearTimeout(id)
    }
    const id = setTimeout(() => {
      setVisibleTokens(0)
      setPhraseIndex((i) => (i + 1) % phrases.length)
    }, hold)
    return () => clearTimeout(id)
  }, [visibleTokens, done, phraseIndex, phrases.length, tokenDelay, hold, prefersReduced])

  if (prefersReduced) return <span className={className}>{phrases[0]}</span>

  return (
    <span className={`inline-flex flex-wrap items-baseline gap-x-[0.28em] ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={phraseIndex}
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.3 }}
          className="inline-flex flex-wrap items-baseline gap-x-[0.28em]"
        >
          {tokens.slice(0, visibleTokens).map((token, i) => (
            <motion.span
              key={`${phraseIndex}-${i}`}
              initial={{ opacity: 0, filter: "blur(8px)", y: 4 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              {token}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [1, 0.25, 1] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block h-[0.9em] w-[0.5em] translate-y-[0.12em] rounded-[2px] bg-primary/80"
        aria-hidden
      />
    </span>
  )
}
