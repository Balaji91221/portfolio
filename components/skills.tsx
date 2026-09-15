"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import { GlowCard } from "@/components/glow-card"
import { RevealText } from "@/components/reveal"
import { skillGroups, aiLandscape, type Skill } from "@/lib/skills"

const EASE = [0.22, 1, 0.36, 1] as const

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: EASE, delay: i * 0.05 },
})

const chipList: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035, delayChildren: 0.15 } },
}

const chip: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: EASE } },
}

function Chip({ item, primary }: { item: Skill; primary?: boolean }) {
  const Icon = item.icon
  return (
    <motion.span
      variants={chip}
      whileHover={{ y: -2 }}
      className={`group/chip inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-mono transition-colors cursor-default ${
        primary
          ? "border-primary/30 bg-primary/10 text-foreground hover:border-primary/60 hover:bg-primary/15"
          : "border-border/70 bg-background/60 text-muted-foreground hover:border-primary/50 hover:text-foreground"
      }`}
    >
      {Icon ? (
        <Icon
          className={`h-3.5 w-3.5 shrink-0 transition-colors ${
            primary ? "text-primary" : "text-muted-foreground group-hover/chip:text-primary"
          }`}
        />
      ) : (
        <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
      )}
      {item.name}
    </motion.span>
  )
}

type SkillsProps = {
  index?: string
  eyebrow?: string
  title?: string
  showLandscape?: boolean
}

/** Shared skills grid. Primary groups span two columns and carry the accent header. */
export function Skills({
  index = "02",
  eyebrow = "Skills",
  title = "What I work with",
  showLandscape = false,
}: SkillsProps) {
  const prefersReduced = useReducedMotion()
  const listProps = prefersReduced
    ? {}
    : { variants: chipList, initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.3 } }

  return (
    <section className="border-t border-border/60 py-24 md:py-32 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div {...fadeUp(0)} className="mb-14 md:mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">
            {index} — {eyebrow}
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <RevealText>{title}</RevealText>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {skillGroups.map((group, i) => {
            const GroupIcon = group.icon
            return (
              <motion.div
                key={group.title}
                {...fadeUp(i)}
                className={group.primary ? "lg:col-span-2" : ""}
              >
                <GlowCard
                  className={`card-glow card-lift skill-card h-full rounded-lg border bg-card p-6 md:p-7 shadow-sm ${
                    group.primary ? "border-primary/40 skill-card-primary" : "border-border/60"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border ${
                        group.primary
                          ? "border-primary/40 bg-primary/15 text-primary"
                          : "border-border/70 bg-muted/60 text-muted-foreground"
                      }`}
                    >
                      <GroupIcon className="h-4 w-4" />
                    </span>
                    <p
                      className={`text-xs font-mono uppercase tracking-[0.2em] ${
                        group.primary ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {group.title}
                    </p>
                  </div>
                  <motion.div {...listProps} className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Chip key={item.name} item={item} primary={group.primary} />
                    ))}
                  </motion.div>
                </GlowCard>
              </motion.div>
            )
          })}
        </div>

        {showLandscape && (
          <div className="mt-16 md:mt-20">
            <motion.p
              {...fadeUp(0)}
              className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-8"
            >
              Model landscape I track and use
            </motion.p>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
              {aiLandscape.map((row, i) => {
                const RowIcon = row.icon
                return (
                  <motion.div key={row.title} {...fadeUp(i)}>
                    <GlowCard className="card-glow card-lift h-full rounded-lg border border-border/60 bg-card p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-5">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/70 bg-muted/60 text-muted-foreground">
                          <RowIcon className="h-4 w-4" />
                        </span>
                        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                          {row.title}
                        </p>
                      </div>
                      <motion.div {...listProps} className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {row.items.map((m) => {
                          const Icon = m.icon
                          return (
                            <motion.div
                              key={m.name}
                              variants={chip}
                              whileHover={{ y: -2 }}
                              className="group/tile flex items-center gap-2.5 rounded-md border border-border/60 bg-background/60 px-3 py-2.5 transition-colors hover:border-primary/50"
                            >
                              {Icon && (
                                <Icon className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover/tile:text-primary" />
                              )}
                              <span className="text-sm font-medium truncate">{m.name}</span>
                            </motion.div>
                          )
                        })}
                      </motion.div>
                    </GlowCard>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
