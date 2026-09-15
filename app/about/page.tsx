"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GlowCard } from "@/components/glow-card"
import { RevealText } from "@/components/reveal"
import { Skills } from "@/components/skills"
import {
  Briefcase,
  Rocket,
  Trophy,
  Download,
  FileText,
  Mail,
  Sparkles,
  Zap,
  Brain,
  Bot,
  ArrowUpRight,
  Github,
  Award,
} from "lucide-react"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import balaji from "../../public/Balaji.jpg"

const EASE = [0.22, 1, 0.36, 1] as const

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: EASE, delay: i * 0.06 },
})

// ─────────────── what I do — the 3-line pitch ───────────────
const disciplines = [
  {
    icon: Bot,
    title: "Agentic AI & MCP",
    desc: "Multi-agent systems, tool calling and structured outputs. Turning APIs and schemas into MCP tools agents can use safely.",
    stack: ["MCP", "A2A", "LangGraph", "LiteLLM"],
  },
  {
    icon: Sparkles,
    title: "RAG & Retrieval",
    desc: "Hybrid dense + BM25 search, reciprocal rank fusion and LLM reranking over documents, with answer verification.",
    stack: ["Qdrant", "fastembed", "LangChain", "Embeddings"],
  },
  {
    icon: Brain,
    title: "LLM Infrastructure & LLMOps",
    desc: "OpenAI-compatible gateways, streaming, cost tracking, provider health and fallback, observability and deployment.",
    stack: ["FastAPI", "ClickHouse", "Docker", "Kubernetes"],
  },
  {
    icon: Zap,
    title: "Voice AI & Full-Stack",
    desc: "Real-time speech pipelines on LiveKit and SIP, and the React / Next.js products that wrap the models.",
    stack: ["LiveKit", "STT / TTS", "Next.js", "TypeScript"],
  },
]

// ─────────────── career timeline (compact) ───────────────
const timeline = [
  {
    year: "2025 – now",
    role: "Applied AI Engineer",
    org: "Samco Securities",
    note: "Voice AI, RAG systems, LLM infrastructure and MCP tooling in production.",
    current: true,
  },
  {
    year: "Aug – Nov 2024",
    role: "Full-Stack Developer",
    org: "DigitalFortress",
    note: "Admin dashboards in Next.js + Redux. Real-time data APIs. Cut workflow complexity 30%.",
  },
  {
    year: "Jan – Mar 2024",
    role: "Frontend Developer (Intern)",
    org: "VTBIF Incubation Center",
    note: "React landing page that reduced mobile bounce 20%. API optimization boosted response time 40%.",
  },
  {
    year: "Dec 2021 – May 2025",
    role: "B.Tech CSE · AI & ML",
    org: "VIT-AP University",
    note: "CGPA 8.8 · Dean's List × 4 semesters · Research paper in IEEE on AI for early skin cancer detection.",
  },
]

// ─────────────── grouped skills ───────────────

// ─────────────── certs ───────────────
const certificates = [
  { title: "Oracle Certified Generative AI Professional", org: "Oracle University", img: "/certificates/oracle-genai-professional.webp" },
  { title: "Oracle Certified Data Science Professional", org: "Oracle University", img: "/certificates/oracle-ds.webp" },
  { title: "Oracle Certified Foundations Associate", org: "Oracle University", img: "/certificates/oracle-foundations.webp" },
  { title: "Microsoft Azure AI Fundamentals", org: "Microsoft", img: "/certificates/azure-ai-fundamentals.webp" },
  { title: "AI/ML Externship", org: "Google Developers × SmartInternz", img: "/certificates/google-externship.webp" },
  { title: "GitHub Certification", org: "GitHub", img: "/certificates/github.webp" },
  { title: "NERD+ (DSA in Java)", org: "iAmNeo NeoColab", img: "/certificates/dsa.webp" },
]

// ─────────────── achievements ───────────────
const achievements = [
  {
    title: "LinkedIn Content Creator",
    description: "Regular posts on applied AI engineering, agents, RAG and open-source models",
    icon: Sparkles,
  },
  { title: "Invited Guest Lecturer", description: "Two invited talks on LLMs and GenAI at VIT-AP University", icon: Award },
  { title: "Dean's List × 4", description: "Four consecutive semesters at VIT-AP", icon: Trophy },
  {
    title: "IEEE Publication",
    description: "Binary Algorithm in AI for Early Skin Cancer Identification with 3D-TBP",
    icon: FileText,
  },
  { title: "Hackathon Finalist", description: "5th place — Great India Hackathon, full-stack project", icon: Rocket },
  { title: "Technical Lead", description: "Led 50-member development team in university CSI club", icon: Briefcase },
  { title: "Open Source", description: "Contributed to 6+ open source projects", icon: Github },
]

function SectionHeader({ index, eyebrow, title }: { index: string; eyebrow: string; title: string }) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">
        {index} — {eyebrow}
      </p>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
        <RevealText>{title}</RevealText>
      </h2>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 md:pt-32">
      {/* ─────────── HERO ─────────── */}
      <section className="relative overflow-hidden px-4 md:px-6 lg:px-8 pb-20 md:pb-28">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="aurora opacity-40" />
        </div>
        <div className="relative container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="lg:col-span-7"
            >
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-6">
                01 — About
              </p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-4">
                <RevealText>
                  Hi, I&apos;m <span className="gradient-text-aurora">Balaji.</span>
                </RevealText>
              </h1>
              <p className="font-serif italic text-2xl md:text-3xl text-muted-foreground mb-8">
                Agentic AI · RAG · MCP · Production LLM Systems
              </p>

              <div className="space-y-4 text-muted-foreground leading-relaxed max-w-xl">
                <p>
                  GenAI and Applied AI Engineer with 1+ years building and operating production AI
                  systems across voice AI, RAG, LLM infrastructure, MCP tooling and multi-agent
                  automation. Currently at{" "}
                  <span className="text-foreground font-medium">Samco Securities</span>. I also
                  create content on LinkedIn about applied AI engineering, agents, RAG and the
                  open-source model landscape.
                </p>
                <p>
                  B.Tech in CSE with AI / ML specialization from VIT-AP (2025). IEEE-published
                  researcher. Dean&apos;s List × 4.
                </p>
                <p className="text-foreground/80">
                  I care about reliability, velocity, and measurable product outcomes.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-10">
                <Button
                  asChild
                  size="lg"
                  className="group rounded-full bg-foreground text-background hover:bg-foreground/90"
                >
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" /> Get in touch
                    <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-border/60">
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" /> Download resume
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.12 }}
              className="lg:col-span-5"
            >
              <div className="relative max-w-sm mx-auto lg:ml-auto">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-border/60 ring-1 ring-border/40">
                  <Image
                    src={balaji}
                    alt="Kelavath Balaji Naik"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                </div>
              </div>
              <div className="max-w-sm mx-auto lg:ml-auto mt-4 flex items-baseline justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold">Kelavath Balaji Naik</p>
                  <p className="text-xs text-muted-foreground">Applied AI Engineer · VIT-AP &apos;25</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────── DISCIPLINES ─────────── */}
      <section className="border-t border-border/60 py-24 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader index="02" eyebrow="What I do" title="Four disciplines, one toolkit." />

          <div className="grid md:grid-cols-2 gap-5">
            {disciplines.map((d, i) => (
              <motion.div key={d.title} {...fadeUp(i)}>
                <GlowCard className="card-glow card-lift h-full rounded-lg border border-border/60 bg-card p-7 md:p-8">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg mb-5 border border-primary/30 bg-primary/10 text-primary"
                  >
                    <d.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{d.desc}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {d.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── TIMELINE ─────────── */}
      <section className="border-t border-border/60 py-24 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader index="03" eyebrow="The path" title="How I got here." />

          <div className="relative max-w-3xl">
            <div
              className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent"
              aria-hidden
            />
            {timeline.map((t, i) => (
              <motion.div key={t.role} {...fadeUp(i)} className="relative pl-8 md:pl-10 pb-12 last:pb-0">
                <span
                  className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ${
                    t.current ? "bg-primary" : "bg-border"
                  }`}
                />
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-2">
                  {t.year}
                  {t.current && <span className="ml-3 text-muted-foreground">· Now</span>}
                </p>
                <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                  {t.role} <span className="font-normal text-muted-foreground">· {t.org}</span>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1.5 max-w-xl">
                  {t.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Skills compact index="04" eyebrow="Core stack" title="Core stack" />

      {/* ─────────── ACHIEVEMENTS ─────────── */}
      <section className="border-t border-border/60 py-24 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader index="05" eyebrow="Recognition" title="Things I'm proud of." />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievements.map((a, i) => (
              <motion.div key={a.title} {...fadeUp(i)}>
                <GlowCard className="card-glow card-lift h-full rounded-lg border border-border/60 bg-card p-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary mb-4">
                    <a.icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-semibold tracking-tight mb-1">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CERTIFICATIONS ─────────── */}
      <section className="border-t border-border/60 py-24 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader index="06" eyebrow="Verified" title="Certifications." />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {certificates.map((c, i) => (
              <motion.div key={c.title} {...fadeUp(i)} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border/60 bg-white mb-3 transition-shadow duration-300 hover:ring-1 hover:ring-primary/40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="text-sm font-semibold leading-snug line-clamp-2">{c.title}</p>
                <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mt-1">
                  {c.org}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
