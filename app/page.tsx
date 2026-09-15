"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Lock,
  Briefcase,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { CountUp } from "@/components/count-up"
import { GlowCard } from "@/components/glow-card"
import { Magnetic } from "@/components/magnetic"
import { Spotlight } from "@/components/spotlight"
import { RevealText, ImageReveal } from "@/components/reveal"
import balaji from "../public/Balaji.jpg"

const featuredProjects = [
  {
    id: 1,
    index: "01",
    title: "LLM Platform — Multi-Project Gateway",
    description:
      "Internal LLM gateway across OpenAI · Anthropic · Gemini · Groq · Ollama. Cost tracking, budget limits, circuit breakers, prompt versioning, and a full analytics dashboard.",
    tech: ["FastAPI", "React", "TypeScript", "SQLite"],
    category: "AI Infra",
    image: "/projects/generated-v2/llm-platform-gateway.png",
    private: true,
  },
  {
    id: 2,
    index: "02",
    title: "Coder Agent",
    description:
      "Autonomous coding agent that plans, writes, and iterates on code using tool use and a structured reasoning loop. Built for real developer workflows.",
    tech: ["Python", "LLMs", "Agents", "Tool Use"],
    category: "Agentic AI",
    image: "/projects/generated-v2/coder-agent.png",
    private: true,
  },
  {
    id: 3,
    index: "03",
    title: "AI Coder Reviewer",
    description:
      "LLM-powered code review agent that inspects diffs, flags regressions, and suggests fixes with context from the surrounding codebase.",
    tech: ["Python", "LLMs", "Agents", "Code Analysis"],
    category: "Agentic AI",
    image: "/projects/generated-v2/ai-coder-reviewer.png",
    private: true,
  },
]

const stats = [
  { value: 25, suffix: "+", label: "Projects shipped" },
  { value: 3, suffix: "+", label: "Years of experience" },
  { value: 19299, suffix: "", label: "GATE AIR" },
  { value: 2, suffix: "", label: "Guest lectures" },
]

const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.06 },
})

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])

  return (
    <div className="min-h-screen">
      {/* ============ HERO ============ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden min-h-[100svh] flex flex-col justify-center pt-24 pb-16 px-4 md:px-6 lg:px-8"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="aurora" />
        </div>
        <Spotlight />

        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="container mx-auto max-w-7xl relative z-10"
        >
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Copy */}
            <div className="col-span-12 lg:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-8"
              >
                AI/ML Engineer · Samco Securities · India
              </motion.p>

              <h1 className="mask-lines mb-8 select-none">
                <span className="mask-line">
                  <span
                    style={{ "--line-delay": "0.05s" } as React.CSSProperties}
                    className="font-bold tracking-tight leading-[0.95] text-[clamp(3rem,8vw,6.5rem)]"
                  >
                    Kelavath
                  </span>
                </span>
                <span className="mask-line">
                  <span
                    style={{ "--line-delay": "0.16s" } as React.CSSProperties}
                    className="font-bold tracking-tight leading-[0.95] text-[clamp(3rem,8vw,6.5rem)]"
                  >
                    Balaji Naik
                  </span>
                </span>
              </h1>

              <div className="mask-lines mb-8">
                <span className="mask-line">
                  <span
                    style={{ "--line-delay": "0.3s" } as React.CSSProperties}
                    className="text-xl md:text-2xl text-muted-foreground"
                  >
                    AI / ML Engineer · LLM systems, RAG &amp; agentic AI
                  </span>
                </span>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
                className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10"
              >
                I build production-grade LLM systems, RAG pipelines, and agentic AI — and the
                full-stack apps that wrap them. VIT-AP 2025 · currently at Samco Securities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
                className="flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <Magnetic as="span" strength={0.15} className="inline-block">
                  <Button asChild size="lg" className="group btn-shine rounded-full h-12 px-7">
                    <Link href="/projects">
                      View my work
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </Magnetic>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full h-12 px-7"
                >
                  <Link href="/contact">Get in touch</Link>
                </Button>
                <div className="flex items-center gap-4 sm:ml-4 text-muted-foreground">
                  <a
                    href="https://github.com/Balaji91221"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="hover:text-primary hover:-translate-y-0.5 transition-all"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kelavathbalajinaik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-primary hover:-translate-y-0.5 transition-all"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:kbalaji15j@gmail.com"
                    aria-label="Email"
                    className="hover:text-primary hover:-translate-y-0.5 transition-all"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Portrait */}
            <motion.div
              style={{ y: heroImageY }}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="hidden lg:block col-span-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="absolute -inset-6 rounded-xl bg-primary/15 blur-3xl" aria-hidden />
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden ring-1 ring-border bg-card">
                  <Image
                    src={balaji}
                    alt="Kelavath Balaji Naik"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/90 backdrop-blur-md px-4 py-2 whitespace-nowrap shadow-lg">
                  <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                  <span className="text-xs font-mono uppercase tracking-widest">
                    Open to opportunities
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ============ STATS ============ */}
      <section className="py-24 md:py-28 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <GlowCard className="card-glow grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border/60 rounded-lg border border-border/60 bg-card overflow-hidden">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} {...reveal(i)} className="p-8 md:p-10">
                <div
                  className="text-4xl md:text-5xl font-bold tracking-tight"
                >
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-3 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </GlowCard>
        </div>
      </section>

      {/* ============ SELECTED WORK — sticky stack ============ */}
      <section className="border-t border-border/60 py-24 md:py-32 px-4 md:px-6 lg:px-8 relative">
        <div className="container mx-auto max-w-6xl relative">
          <motion.div {...reveal(0)} className="flex items-end justify-between flex-wrap gap-6 mb-16 md:mb-20">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">
                01 — Selected Work
              </p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                <RevealText>Selected work</RevealText>
              </h2>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              All projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Cards stack over each other as you scroll */}
          <div className="flex flex-col gap-8 md:gap-0">
            {featuredProjects.map((project, i) => (
              <div
                key={project.id}
                className="md:sticky"
                style={{ top: `calc(7rem + ${i * 2.75}rem)` }}
              >
                <GlowCard
                  className="card-glow card-lift group grid md:grid-cols-2 overflow-hidden rounded-xl border border-border/60 bg-card shadow-xl shadow-background/60 md:mb-10"
                >
                  <div className="p-8 md:p-12 flex flex-col order-2 md:order-1">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-stroke font-bold text-4xl md:text-5xl leading-none">
                        {project.index}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary border border-primary/30 rounded-full px-3 py-1">
                        {project.category}
                      </span>
                      {project.private && (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                          <Lock className="h-3 w-3" /> Private
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {project.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="rounded-full border-border/60 text-[10px] font-mono uppercase tracking-wider"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="relative aspect-[16/11] md:aspect-auto md:min-h-[22rem] overflow-hidden order-1 md:order-2 border-b md:border-b-0 md:border-l border-border/60">
                    <ImageReveal delay={0.1}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 h-full w-full object-cover saturate-[0.9] transition-all duration-700 group-hover:scale-105 group-hover:saturate-100"
                      />
                    </ImageReveal>
                    <div className="absolute inset-0 bg-gradient-to-r from-card/40 to-transparent pointer-events-none hidden md:block" />
                  </div>
                </GlowCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CURRENT ROLE ============ */}
      <section className="border-t border-border/60 py-20 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...reveal(0)}>
            <GlowCard className="card-glow card-lift flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-lg border border-border/60 bg-card p-8 md:p-12">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-2">
                  Currently
                </p>
                <p className="text-xl md:text-2xl font-semibold tracking-tight">
                  AI/ML Engineer @ Samco Securities
                </p>
                <p className="text-muted-foreground leading-relaxed mt-1">
                  Shipping production ML for trading analytics.
                </p>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="border-t border-border/60 py-28 md:py-40 px-4 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative">
          <motion.div {...reveal(0)} className="text-center">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-8">
              02 — Contact
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.02] mb-8">
              <RevealText>Let&apos;s work together.</RevealText>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
              Have an idea, a problem, or a project? I&apos;m always up for a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Magnetic as="span" strength={0.15} className="inline-block">
                <Button asChild size="lg" className="group btn-shine rounded-full h-12 px-8">
                  <Link href="/contact">
                    Get in touch
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </Magnetic>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full h-12 px-8"
              >
                <Link href="/about">About me</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
