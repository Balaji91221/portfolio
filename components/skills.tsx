"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, type LucideIcon } from "lucide-react"
import { GlowCard } from "@/components/glow-card"
import { RevealText } from "@/components/reveal"
import { skillGroups, coreSkillGroups, aiLandscape, type Skill } from "@/lib/skills"

const EASE = [0.22, 1, 0.36, 1] as const

/** One entrance per card. Chips render with their card, no per-chip stagger. */
const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: EASE, delay: i * 0.05 },
})

function useEntrance() {
  const prefersReduced = useReducedMotion()
  return (i = 0) => (prefersReduced ? {} : fadeUp(i))
}

function Chip({ item, primary }: { item: Skill; primary?: boolean }) {
  const Icon = item.icon
  return (
    <span
      className={`group/chip inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-mono transition-colors duration-200 cursor-default ${
        primary
          ? "border-primary/30 bg-primary/10 text-foreground hover:border-primary/60 hover:bg-primary/15"
          : "border-border/70 bg-background/60 text-muted-foreground hover:border-primary/50 hover:text-foreground"
      }`}
    >
      {Icon ? (
        <Icon
          className={`h-3.5 w-3.5 shrink-0 transition-colors duration-200 ${
            primary ? "text-primary" : "text-muted-foreground group-hover/chip:text-primary"
          }`}
        />
      ) : (
        <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
      )}
      {item.name}
    </span>
  )
}

function GroupLabel({
  icon: Icon,
  title,
  primary,
  className = "",
}: {
  icon: LucideIcon
  title: string
  primary?: boolean
  className?: string
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border ${
          primary
            ? "border-primary/40 bg-primary/15 text-primary"
            : "border-border/70 bg-muted/60 text-muted-foreground"
        }`}
      >
        <Icon className="h-4 w-4" />
      </span>
      <p
        className={`text-xs font-mono uppercase tracking-[0.2em] ${
          primary ? "text-primary" : "text-muted-foreground"
        }`}
      >
        {title}
      </p>
    </div>
  )
}

/** Compact variant: the two primary groups as label / chips rows in one card. */
function CoreStack() {
  const entrance = useEntrance()
  return (
    <>
      <motion.div
        {...entrance(0)}
        className="rounded-lg border border-border/60 bg-card divide-y divide-border/60"
      >
        {coreSkillGroups.map((group) => (
          <div
            key={group.title}
            className="grid gap-4 px-6 py-6 md:grid-cols-[220px_1fr] md:gap-8 md:px-8"
          >
            <GroupLabel icon={group.icon} title={group.title} primary className="self-start" />
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Chip key={item.name} item={item} primary />
              ))}
            </div>
          </div>
        ))}
      </motion.div>
      <Link
        href="/#skills"
        className="group mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-200"
      >
        Full skill map on the home page
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </>
  )
}

function Landscape() {
  const entrance = useEntrance()
  return (
    <div className="mt-16 md:mt-20">
      <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-8">
        Model landscape I track and use
      </p>
      <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
        {aiLandscape.map((row, i) => (
          <motion.div key={row.title} {...entrance(i)}>
            <GlowCard className="card-glow card-lift h-full rounded-lg border border-border/60 bg-card p-6 shadow-sm">
              <GroupLabel icon={row.icon} title={row.title} className="mb-5" />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {row.items.map((m) => {
                  const Icon = m.icon
                  return (
                    <div
                      key={m.name}
                      className="group/tile flex items-center gap-2.5 rounded-md border border-border/60 bg-background/60 px-3 py-2.5 transition-colors duration-200 hover:border-primary/50"
                    >
                      {Icon && (
                        <Icon className="h-4 w-4 shrink-0 text-muted-foreground transition-colors duration-200 group-hover/tile:text-primary" />
                      )}
                      <span className="min-w-0 text-sm font-medium leading-snug">{m.name}</span>
                    </div>
                  )
                })}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/** Full grid. Primary groups span two columns and carry the accent header. */
function FullGrid({ showLandscape }: { showLandscape: boolean }) {
  const entrance = useEntrance()
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            {...entrance(i)}
            className={group.primary ? "lg:col-span-2" : ""}
          >
            <GlowCard
              className={`card-glow card-lift skill-card h-full rounded-lg border bg-card p-6 md:p-7 shadow-sm ${
                group.primary ? "border-primary/40 skill-card-primary" : "border-border/60"
              }`}
            >
              <GroupLabel
                icon={group.icon}
                title={group.title}
                primary={group.primary}
                className="mb-5"
              />
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Chip key={item.name} item={item} primary={group.primary} />
                ))}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
      {showLandscape && <Landscape />}
    </>
  )
}

type SkillsProps = {
  index?: string
  eyebrow?: string
  title?: string
  showLandscape?: boolean
  /** One "core stack" card (the two primary groups) plus a link to the full map on Home. */
  compact?: boolean
}

export function Skills({
  index = "02",
  eyebrow = "Skills",
  title = "What I work with",
  showLandscape = false,
  compact = false,
}: SkillsProps) {
  return (
    <section
      id={compact ? undefined : "skills"}
      className="border-t border-border/60 py-24 md:py-32 px-4 md:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-14 md:mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">
            {index} — {eyebrow}
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <RevealText>{title}</RevealText>
          </h2>
        </div>

        {compact ? <CoreStack /> : <FullGrid showLandscape={showLandscape} />}
      </div>
    </section>
  )
}
