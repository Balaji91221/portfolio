"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CountUp } from "@/components/count-up"
import { TiltCard } from "@/components/tilt-card"
import {
  GraduationCap,
  Briefcase,
  Rocket,
  Code,
  Trophy,
  Calendar,
  Download,
  Cpu,
  Layers,
  Database,
  Globe,
  Wrench,
  Star,
  BookOpen,
  Mail,
  Sparkles,
  Zap,
  Brain,
  Bot,
  ArrowUpRight,
} from "lucide-react"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import balaji from "../../public/Balaji.jpg"
import { StaggerContainer, StaggerItem } from "@/components/stagger"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiSqlite,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinux,
  SiJupyter,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiFastapi,
  SiFlask,
  SiOpenai,
  SiShadcnui,
  SiFramer,
  SiHuggingface,
  SiGooglegemini,
  SiOllama,
  SiVercel,
} from "react-icons/si"

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
    icon: Briefcase,
  },
  {
    year: "Aug – Nov 2024",
    role: "Full-Stack Developer",
    org: "DigitalFortress",
    note: "Admin dashboards in Next.js + Redux. Real-time data APIs. Cut workflow complexity 30%.",
    icon: Code,
  },
  {
    year: "Jan – Mar 2024",
    role: "Frontend Developer (Intern)",
    org: "VTBIF Incubation Center",
    note: "React landing page that reduced mobile bounce 20%. API optimization boosted response time 40%.",
    icon: Code,
  },
  {
    year: "Dec 2021 – May 2025",
    role: "B.Tech CSE · AI & ML",
    org: "VIT-AP University",
    note: "CGPA 8.8 · Dean's List × 4 semesters · Research paper in IEEE on AI for early skin cancer detection.",
    icon: GraduationCap,
  },
]

// ─────────────── grouped skills ───────────────
const skillGroups = [
  {
    title: "AI / ML",
    icon: Brain,
    primary: true,
    items: [
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
      { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
    ],
  },
  {
    title: "LLMs · RAG · Agents",
    icon: Sparkles,
    primary: true,
    items: [
      { name: "OpenAI", icon: SiOpenai, color: "#10A37F" },
      { name: "Anthropic", icon: null, color: "#D97757" },
      { name: "Gemini", icon: SiGooglegemini, color: "#4285F4" },
      { name: "Ollama", icon: SiOllama, color: "#000000" },
      { name: "LangChain", icon: null, color: "#1C3C3C" },
      { name: "LangGraph", icon: null, color: "#1C3C3C" },
      { name: "RAG", icon: null, color: "#6366F1" },
      { name: "Vector DBs", icon: null, color: "#6366F1" },
      { name: "Pinecone", icon: null, color: "#6366F1" },
      { name: "Prompt Engineering", icon: null, color: "#8B5CF6" },
      { name: "Agents", icon: null, color: "#EC4899" },
      { name: "Fine-tuning", icon: null, color: "#8B5CF6" },
    ],
  },
  {
    title: "Backend",
    icon: Layers,
    items: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Flask", icon: SiFlask, color: "#000000" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "REST APIs", icon: null, color: "#6366F1" },
      { name: "WebSockets", icon: null, color: "#6366F1" },
    ],
  },
  {
    title: "Frontend",
    icon: Globe,
    items: [
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "shadcn/ui", icon: SiShadcnui, color: "#000000" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    ],
  },
  {
    title: "Data & Storage",
    icon: Database,
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "SQLite", icon: SiSqlite, color: "#003B57" },
    ],
  },
  {
    title: "DevOps & Tooling",
    icon: Wrench,
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "CI / CD", icon: null, color: "#6366F1" },
    ],
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
  {
    title: "GATE 2025",
    description: "All India Rank 19,299 · Data Science & AI",
    icon: GraduationCap,
    primary: true,
  },
  { title: "Dean's List × 4", description: "Four consecutive semesters at VIT-AP", icon: Trophy },
  { title: "IEEE Publication", description: "Binary Algorithm in AI for Early Skin Cancer Identification with 3D-TBP", icon: BookOpen },
  { title: "Hackathon Finalist", description: "5th place — Great India Hackathon, full-stack project", icon: Rocket },
  { title: "Technical Lead", description: "Led 50-member development team in university CSI club", icon: Briefcase },
  { title: "Naukri Young Turks", description: "Ranked #10,153 — Coding, Engineering, Data & AI rounds", icon: Star },
  { title: "Open Source", description: "Contributed to 6+ open source projects", icon: SiGithub },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-20 px-4 md:px-6 lg:px-8 relative">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* ─────────── HERO ─────────── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-12 gap-4 md:gap-5 mb-16 md:mb-24"
        >
          {/* Main intro */}
          <div className="bento col-span-12 lg:col-span-8 p-8 md:p-10 lg:p-12 spotlight">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-4">
              — About
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              Hi, I&apos;m Balaji.{" "}
              <span className="font-serif italic font-normal text-muted-foreground">
                AI engineer who ships the full-stack.
              </span>
            </h1>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                I build production AI — LLM systems, RAG pipelines, agentic AI — and the
                full-stack apps around them. Currently at{" "}
                <span className="text-foreground font-medium">Samco Securities</span>, shipping
                ML for trading analytics and internal LLM platforms.
              </p>
              <p>
                B.Tech in CSE with AI / ML specialization from VIT-AP (2025). GATE 2025 AIR 19,299
                in Data Science & AI. IEEE-published researcher. Dean&apos;s List × 4.
              </p>
              <p>
                I care about reliability, velocity, and product outcomes — not demo-ware.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" /> Hire me
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-border/60">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download resume
                </a>
              </Button>
            </div>
          </div>

          {/* Profile + stats */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 md:gap-5">
            <div className="bento p-0 relative overflow-hidden aspect-[3/4] max-h-[560px]">
              <Image
                src={balaji}
                alt="Kelavath Balaji Naik"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background/95 via-background/60 to-transparent">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-foreground">
                    Open to work
                  </span>
                </div>
                <div className="text-sm font-semibold mt-1">Kelavath Balaji Naik</div>
                <div className="text-[11px] text-muted-foreground">AI / ML Engineer · VIT-AP &apos;25</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {heroStats.map((s) => (
                <div key={s.label} className="bento p-4">
                  <div className="text-2xl md:text-3xl font-bold gradient-text-vivid leading-none">
                    <CountUp value={s.value} />
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-1.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─────────── WHAT I DO ─────────── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-28"
        >
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3">
                — What I do
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Four disciplines,{" "}
                <span className="font-serif italic font-normal text-muted-foreground">one toolkit.</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {disciplines.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <TiltCard
                  max={6}
                  className="bento spotlight p-6 md:p-8 group h-full hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-300"
                >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <d.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {d.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{d.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {d.stack.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-muted/60 text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ─────────── TIMELINE ─────────── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-28"
        >
          <div className="mb-10">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3">
              — The path
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              How I got{" "}
              <span className="font-serif italic font-normal text-muted-foreground">here.</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-5 top-3 bottom-3 w-px bg-border/60" />
            <div className="space-y-5">
              {timeline.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="relative pl-14 md:pl-16"
                >
                  <div className="absolute left-0 top-1 w-9 h-9 md:w-11 md:h-11 rounded-full bg-background border border-border flex items-center justify-center">
                    <t.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div className="bento p-5 md:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold">{t.role}</h3>
                        <p className="text-sm text-primary font-medium">{t.org}</p>
                      </div>
                      <span className="text-[11px] font-mono text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-full">
                        {t.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.note}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─────────── SKILLS ─────────── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-28"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3">
                — Technical Skills
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Tools I ship{" "}
                <span className="font-serif italic font-normal text-muted-foreground">with.</span>
              </h2>
            </div>
            <div className="flex items-center gap-5 text-[11px] font-mono text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Primary focus
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                Supporting stack
              </span>
            </div>
          </div>

          <div className="space-y-8 md:space-y-10">
            {skillGroups.map((g, gi) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: gi * 0.05 }}
                viewport={{ once: true }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`w-1.5 h-6 rounded-full ${g.primary ? "bg-primary" : "bg-muted-foreground/40"}`}
                  />
                  <h3 className="text-base md:text-lg font-semibold tracking-tight">{g.title}</h3>
                  {g.primary && (
                    <span className="text-[10px] font-mono uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                      Core
                    </span>
                  )}
                  <span className="ml-auto text-[11px] font-mono text-muted-foreground">
                    {g.items.length.toString().padStart(2, "0")} tools
                  </span>
                </div>

                {/* Logo tiles */}
                <StaggerContainer className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 md:gap-3">
                  {g.items.map((s) => {
                    const Icon = s.icon
                    return (
                      <StaggerItem key={s.name}>
                        <div
                          className="group relative aspect-[5/4] rounded-xl bg-card/40 border border-border/50 hover:border-primary/50 hover:bg-card/80 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-[250ms] ease-out flex flex-col items-center justify-center p-3 gap-2 cursor-default overflow-hidden"
                        >
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300"
                            style={{ backgroundColor: s.color }}
                          />
                          {Icon ? (
                            <Icon
                              className="w-6 h-6 md:w-7 md:h-7 shrink-0 group-hover:scale-110 transition-transform duration-300 ease-out"
                              style={{ color: s.color }}
                            />
                          ) : (
                            <div
                              className="w-6 h-6 md:w-7 md:h-7 rounded-md flex items-center justify-center text-[11px] font-bold shrink-0 group-hover:scale-110 transition-transform duration-300 ease-out"
                              style={{
                                backgroundColor: `${s.color}18`,
                                color: s.color,
                              }}
                            >
                              {s.name
                                .split(/[\s-]/)
                                .slice(0, 2)
                                .map((w) => w[0])
                                .join("")
                                .toUpperCase()}
                            </div>
                          )}
                          <span className="text-[11px] font-medium text-center leading-tight text-foreground/85 line-clamp-1">
                            {s.name}
                          </span>
                        </div>
                      </StaggerItem>
                    )
                  })}
                </StaggerContainer>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ─────────── ACHIEVEMENTS ─────────── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-28"
        >
          <div className="mb-10">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3">
              — Recognition
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Things I&apos;m{" "}
              <span className="font-serif italic font-normal text-muted-foreground">proud of.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                viewport={{ once: true }}
                className={`bento p-6 ${
                  a.primary
                    ? "md:col-span-2 lg:col-span-1 relative overflow-hidden"
                    : ""
                }`}
              >
                {a.primary && (
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/15 rounded-full blur-3xl" />
                )}
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        a.primary ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                      }`}
                    >
                      <a.icon className="w-5 h-5" />
                    </div>
                    {a.primary && (
                      <Badge className="bg-primary/10 text-primary border border-primary/30 text-[10px] font-mono uppercase tracking-wider">
                        Top achievement
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-1.5">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ─────────── CERTIFICATES ─────────── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-28"
        >
          <div className="mb-10">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3">
              — Verified
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Certifications{" "}
              <span className="font-serif italic font-normal text-muted-foreground">that backup the work.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {certificates.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bento p-4 group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-sm font-semibold leading-snug mb-1 line-clamp-2">{c.title}</div>
                <div className="text-[11px] font-mono text-muted-foreground">{c.org}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ─────────── CTA ─────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bento p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-40">
            <div className="aurora" />
          </div>
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
              Let&apos;s build something{" "}
              <span className="font-serif italic font-normal gradient-text-vivid">that ships.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              If you&apos;re hiring an AI engineer who also ships product, I&apos;m the fastest call you&apos;ll make today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" /> Get in touch
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-border/60">
                <Link href="/projects">See the work</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
