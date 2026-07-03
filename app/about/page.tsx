"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CountUp } from "@/components/count-up"
import { NeuralCanvas } from "@/components/neural-canvas"
import { GlowCard } from "@/components/glow-card"
import {
  GraduationCap,
  Briefcase,
  Rocket,
  Trophy,
  Download,
  Star,
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

// ─────────────── highlight stats recruiters scan first ───────────────
const heroStats = [
  { label: "Years building", value: "3+" },
  { label: "Projects shipped", value: "25+" },
  { label: "GATE 2025 AIR", value: "19,299" },
  { label: "CGPA", value: "8.8" },
]

// ─────────────── what I do — the 3-line pitch ───────────────
const disciplines = [
  {
    icon: Brain,
    title: "AI / ML Engineering",
    desc: "Production ML pipelines, model monitoring, CI/CD for models. From data to deployed endpoint.",
    stack: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas"],
  },
  {
    icon: Sparkles,
    title: "LLMs · RAG · GenAI",
    desc: "Retrieval pipelines, prompt systems, fine-tuning, eval. Built an internal LLM gateway with cost + failover.",
    stack: ["LangChain", "OpenAI", "Anthropic", "Vector DBs"],
  },
  {
    icon: Bot,
    title: "Agentic AI",
    desc: "Autonomous coding agents, multi-agent systems, tool use. Agents that actually work, not demos.",
    stack: ["Agents", "Tool Use", "Planning", "Python"],
  },
  {
    icon: Zap,
    title: "Full-Stack Engineering",
    desc: "The product around the model. Next.js + FastAPI + Postgres — shipping real apps end-to-end.",
    stack: ["Next.js", "FastAPI", "TypeScript", "Postgres"],
  },
]

// ─────────────── career timeline (compact) ───────────────
const timeline = [
  {
    year: "2025 – now",
    role: "AI / ML Engineer",
    org: "Samco Securities",
    note: "Production ML for trading analytics, risk, recommendation systems. Shipping LLM-driven internal tools.",
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
const skillGroups = [
  {
    title: "AI / ML",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Hugging Face", "Jupyter"],
  },
  {
    title: "LLMs · RAG · Agents",
    items: [
      "OpenAI",
      "Anthropic",
      "Gemini",
      "Ollama",
      "LangChain",
      "LangGraph",
      "RAG",
      "Vector DBs",
      "Pinecone",
      "Prompt Engineering",
      "Agents",
      "Fine-tuning",
    ],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Flask", "Django", "Node.js", "Express", "REST APIs", "WebSockets"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
  },
  {
    title: "Data & Storage",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite"],
  },
  {
    title: "DevOps & Tooling",
    items: ["Docker", "Git", "GitHub", "Linux", "Vercel", "CI / CD"],
  },
]

// ─────────────── certs ───────────────
const certificates = [
  { title: "Oracle Certified Generative AI Professional", org: "Oracle University", img: "/certificates/oracle-genai-professional.png" },
  { title: "Oracle Certified Data Science Professional", org: "Oracle University", img: "/certificates/oracle-ds.png" },
  { title: "Oracle Certified Foundations Associate", org: "Oracle University", img: "/certificates/oracle-foundations.png" },
  { title: "Microsoft Azure AI Fundamentals", org: "Microsoft", img: "/certificates/azure-ai-fundamentals.png" },
  { title: "AI/ML Externship", org: "Google Developers × SmartInternz", img: "/certificates/google-externship.png" },
  { title: "GitHub Certification", org: "GitHub", img: "/certificates/github.png" },
  { title: "NERD+ (DSA in Java)", org: "iAmNeo NeoColab", img: "/certificates/dsa.png" },
]

// ─────────────── achievements ───────────────
const achievements = [
  { title: "GATE 2025", description: "All India Rank 19,299 · Data Science & AI", icon: Award },
  { title: "Dean's List × 4", description: "Four consecutive semesters at VIT-AP", icon: Trophy },
  {
    title: "IEEE Publication",
    description: "Binary Algorithm in AI for Early Skin Cancer Identification with 3D-TBP",
    icon: FileText,
  },
  { title: "Hackathon Finalist", description: "5th place — Great India Hackathon, full-stack project", icon: Rocket },
  { title: "Technical Lead", description: "Led 50-member development team in university CSI club", icon: Briefcase },
  { title: "Naukri Young Turks", description: "Ranked #10,153 — Coding, Engineering, Data & AI rounds", icon: Star },
  { title: "Open Source", description: "Contributed to 6+ open source projects", icon: Github },
]

// ─────────────── literal color rotations (Tailwind-safe) ───────────────
const statGradients = ["gradient-text-vivid", "gradient-text-aurora", "gradient-text-warm", "gradient-text-vivid"]
const disciplineChips = [
  "bg-emerald-500/10 text-emerald-400",
  "bg-cyan-500/10 text-cyan-400",
  "bg-violet-500/10 text-violet-400",
  "bg-amber-500/10 text-amber-400",
]
const achievementChips = [
  "text-emerald-400",
  "text-cyan-400",
  "text-violet-400",
  "text-amber-400",
  "text-rose-400",
  "text-sky-400",
]

// ─────────────── shared section header ───────────────
function SectionHeader({
  index,
  eyebrow,
  title,
  accent,
  accentClass = "gradient-text-vivid",
}: {
  index: string
  eyebrow: string
  title: string
  accent: string
  accentClass?: string
}) {
  return (
    <motion.div {...fadeUp()} className="mb-12 md:mb-16">
      <div
        className="text-stroke text-6xl md:text-8xl font-bold leading-none mb-3 select-none"
        aria-hidden
      >
        {index}
      </div>
      <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-4">
        {index} — {eyebrow}
      </p>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        {title} <span className={`font-serif italic font-normal ${accentClass}`}>{accent}</span>
      </h2>
    </motion.div>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 md:pt-32">
      {/* ─────────── HERO ─────────── */}
      <section className="relative overflow-hidden px-4 md:px-6 lg:px-8 pb-20 md:pb-28">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="aurora opacity-40" />
          <NeuralCanvas className="absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]" />
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
                Hi, I&apos;m <span className="gradient-text-aurora">Balaji.</span>
              </h1>
              <p className="font-serif italic text-2xl md:text-3xl text-muted-foreground mb-8">
                AI engineer who ships the full stack.
              </p>

              <div className="space-y-4 text-muted-foreground leading-relaxed max-w-xl">
                <p>
                  I build production AI — LLM systems, RAG pipelines, agentic AI — and the
                  full-stack apps around them. Currently at{" "}
                  <span className="text-foreground font-medium">Samco Securities</span>, shipping
                  ML for trading analytics and internal LLM platforms.
                </p>
                <p>
                  B.Tech in CSE with AI / ML specialization from VIT-AP (2025). GATE 2025 AIR
                  19,299 in Data Science &amp; AI. IEEE-published researcher. Dean&apos;s List × 4.
                </p>
                <p className="text-foreground/80">
                  I care about reliability, velocity, and product outcomes — not demo-ware.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-10">
                <Button
                  asChild
                  size="lg"
                  className="group rounded-full bg-foreground text-background hover:bg-foreground/90"
                >
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" /> Hire me
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
                <div className="orbit-ring" aria-hidden />
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border/60 ring-1 ring-border/40 rotate-2 hover:rotate-0 transition-transform duration-500">
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
                  <p className="text-xs text-muted-foreground">AI / ML Engineer · VIT-AP &apos;25</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  Open to work
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────── STATS ─────────── */}
      <section className="border-t border-border/60 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <GlowCard className="card-glow grid grid-cols-2 md:grid-cols-4 divide-x divide-border/60 rounded-2xl border border-border/60 bg-card/30 my-10 md:my-14">
            {heroStats.map((s, i) => (
              <motion.div key={s.label} {...fadeUp(i)} className="py-10 md:py-14 px-4 md:px-8">
                <div className={`text-4xl font-bold tracking-tight leading-none ${statGradients[i]}`}>
                  <CountUp value={s.value} />
                </div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mt-3">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </GlowCard>
        </div>
      </section>

      {/* ─────────── DISCIPLINES ─────────── */}
      <section className="border-t border-border/60 py-24 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            index="02"
            eyebrow="What I do"
            title="Four disciplines,"
            accent="one toolkit."
            accentClass="gradient-text-vivid"
          />

          <div className="grid md:grid-cols-2 gap-5">
            {disciplines.map((d, i) => (
              <motion.div key={d.title} {...fadeUp(i)}>
                <GlowCard className="card-glow h-full rounded-2xl border border-border/60 bg-card p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg mb-5 ${disciplineChips[i]}`}
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
          <SectionHeader
            index="03"
            eyebrow="The path"
            title="How I got"
            accent="here."
            accentClass="gradient-text-aurora"
          />

          <div className="relative max-w-3xl">
            <div
              className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-cyan-400/40 to-transparent"
              aria-hidden
            />
            {timeline.map((t, i) => (
              <motion.div key={t.role} {...fadeUp(i)} className="relative pl-8 md:pl-10 pb-12 last:pb-0">
                <span
                  className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ${
                    t.current ? "bg-primary pulse-ring" : "bg-border"
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

      {/* ─────────── SKILLS ─────────── */}
      <section className="border-t border-border/60 py-24 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            index="04"
            eyebrow="Technical skills"
            title="Tools I ship"
            accent="with."
            accentClass="gradient-text-warm"
          />

          <div className="divide-y divide-border/60">
            {skillGroups.map((g, i) => (
              <motion.div
                key={g.title}
                {...fadeUp(i)}
                className="grid md:grid-cols-[220px_1fr] gap-3 md:gap-8 py-7 first:pt-0 last:pb-0"
              >
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground pt-1.5">
                  {g.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border/60 px-3 py-1 text-xs font-mono text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── ACHIEVEMENTS ─────────── */}
      <section className="border-t border-border/60 py-24 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            index="05"
            eyebrow="Recognition"
            title="Things I'm"
            accent="proud of."
            accentClass="gradient-text-vivid"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievements.map((a, i) => (
              <motion.div key={a.title} {...fadeUp(i)}>
                <GlowCard className="card-glow h-full rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/5 mb-4 ${
                      achievementChips[i % achievementChips.length]
                    }`}
                  >
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
          <SectionHeader
            index="06"
            eyebrow="Verified"
            title="Certifications that"
            accent="back it up."
            accentClass="gradient-text-aurora"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {certificates.map((c, i) => (
              <motion.div key={c.title} {...fadeUp(i)} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/60 bg-white mb-3 transition-shadow duration-500 hover:ring-1 hover:ring-primary/40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
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

      {/* ─────────── CTA ─────────── */}
      <section className="relative overflow-hidden border-t border-border/60 py-24 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="aurora opacity-40" />
        </div>
        <div className="relative container mx-auto max-w-6xl">
          <motion.div {...fadeUp()} className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              Let&apos;s build something{" "}
              <span className="font-serif italic font-normal gradient-text-aurora">that ships.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              If you&apos;re hiring an AI engineer who also ships product, I&apos;m the fastest
              call you&apos;ll make today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
              <Button asChild size="lg" variant="outline" className="rounded-full border-border/60">
                <Link href="/projects">See the work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
