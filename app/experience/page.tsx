"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CountUp } from "@/components/count-up"
import { TiltCard } from "@/components/tilt-card"
import {
  Briefcase,
  Calendar,
  MapPin,
  TrendingUp,
  Mic,
  GraduationCap,
  Users,
  Mail,
  Building2,
  Sparkles,
  Award,
  ArrowUpRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import profilePic from "../../public/profile-pic.png"
import { StaggerContainer, StaggerItem } from "@/components/stagger"
import {
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiHuggingface,
  SiOpenai,
  SiGooglegemini,
  SiOllama,
  SiPython,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiFramer,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiSqlite,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinux,
  SiVercel,
  SiJupyter,
} from "react-icons/si"

// ─────────────── headline impact stats (recruiter scan) ───────────────
const impactMetrics = [
  { value: "3+", label: "Yrs building production systems" },
  { value: "25+", label: "Projects shipped" },
  { value: "2", label: "Invited guest lectures" },
  { value: "AIR 19,299", label: "GATE 2025 · DA" },
]

// ─────────────── experience ───────────────
const experiences = [
  {
    title: "AI / ML Engineer",
    company: "Samco Securities Pvt Ltd",
    location: "Onsite",
    period: "Jul 2025 — Present",
    type: "Full-time",
    current: true,
    description:
      "Leading production ML initiatives across trading analytics, risk, and recommendation systems. Shipping internal LLM-driven tooling alongside classical ML pipelines.",
    achievements: [
      "Designed and deployed production ML pipelines for trading analytics and risk scoring",
      "Implemented model monitoring + CI/CD for ML — improved reliability and deployment speed",
      "Translated product requirements into ML solutions alongside product + engineering",
      "Mentored interns and onboarded engineers on ML best practices",
      "Built internal LLM platform: multi-provider gateway, cost controls, circuit breakers",
    ],
    stack: ["Python", "PyTorch", "FastAPI", "LLMs", "Docker", "PostgreSQL"],
  },
  {
    title: "Full-Stack Developer",
    company: "DigitalFortress Private Limited",
    location: "Remote",
    period: "Aug 2024 — Nov 2024",
    type: "Full-time",
    description:
      "Built responsive admin dashboards and real-time data integrations for enterprise clients.",
    achievements: [
      "Shipped Next.js + Tailwind admin dashboard — reduced workflow complexity by 30%",
      "Modular Redux state management improved app perf and code maintainability",
      "Real-time data APIs enabled 25% faster decision-making for team leads",
      "WebSocket + strategic lazy-loading cut frontend render time significantly",
    ],
    stack: ["Next.js", "Redux", "WebSocket", "Tailwind"],
  },
  {
    title: "Frontend Developer — Intern",
    company: "VTBIF Incubation Center",
    location: "Hybrid",
    period: "Jan 2024 — Mar 2024",
    type: "Internship",
    description:
      "Designed and optimized frontend web applications, enhancing user engagement and API performance.",
    achievements: [
      "React landing page cut mobile bounce rate by 20%",
      "Node.js + Express optimization boosted API response time by 40%",
      "REST API wiring sped up page loads by 35%",
      "UI/UX redesign drove 15% increase in user engagement and retention",
    ],
    stack: ["React", "Node.js", "Express", "REST"],
  },
  {
    title: "AI & ML Externship",
    company: "SmartBridge × Google Developers",
    location: "Remote",
    period: "Jan 2024 — Mar 2024",
    type: "Training & Project",
    description:
      "4-month externship in Artificial Intelligence and Machine Learning, powered by Google Developers (Cert ID: Ext-AIML-2023-73316).",
    achievements: [
      "Delivered AI/ML projects on real-world datasets",
      "Applied supervised + unsupervised techniques to production-style problems",
      "Collaborated with peers on AI-driven solutions",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "ML"],
  },
]

// ─────────────── guest lectures ───────────────
const guestLectures = [
  {
    title: "AI – ML and Generative AI Evolution",
    event: "AI Pre-Summit 2026 — Learn with Experts",
    host: "VIT-AP University · TBIF · Institution's Innovation Council",
    audience: "Students & faculty",
    date: "14 Feb 2026 · 10 AM",
    venue: "Einstein Hall, VIT-AP University",
    role: "Guest Speaker — AI Engineer, Samco Securities Ltd",
    icon: Mic,
    poster: "/lectures/image.png",
    description:
      "Invited speaker at the AI Pre-Summit 2026. Walked the audience through the real-world evolution of AI/ML and Generative AI — from traditional ML pipelines to modern LLMs, RAG, and where the field is heading next.",
    topics: ["Generative AI", "LLMs & RAG", "ML in production", "AI career paths"],
    acknowledgments: ["VIT-AP University", "Harisita Ma'am", "Sri B. Sibi Chakravarthi"],
  },
  {
    title: "AI in the Real World",
    event: "5-Day Executive Development Programme (EDP)",
    host: "VIT-AP — Future-Ready Tech & Career Growth in the Digital / Policy-Driven Era 2.0",
    audience: "EDP cohort — faculty & professionals",
    date: "6–10 April 2026",
    venue: "VIT-AP University",
    role: "Resource Person — AI Engineer, Samco Securities Ltd",
    icon: GraduationCap,
    poster: "/lectures/edp.png",
    description:
      "Served as Resource Person for the 5-Day EDP at VIT-AP. The session moved past buzzwords to tackle where AI is actually creating impact, what an AI-driven career looks like, and how to prepare for a world changing faster than the syllabus.",
    topics: ["AI impact today", "AI careers", "Future-ready tech", "Industry mindset"],
    acknowledgments: [
      "Dr. Venkata Lakshmi Dasari — Professor, School of CSE",
      "Reeja Ma'am — Faculty Coordinator, School of CSE",
      "Dr. S. Sudhakar Ilango — Dean, SCOPE, VIT-AP University",
    ],
  },
]

// ─────────────── tech stack ───────────────
const techStack = [
  {
    title: "AI / ML",
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
      { name: "Agents", icon: null, color: "#EC4899" },
      { name: "Fine-tuning", icon: null, color: "#8B5CF6" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Flask", icon: SiFlask, color: "#000000" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
    ],
  },
  {
    title: "Frontend",
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

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-20 px-4 md:px-6 lg:px-8 relative">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* ═══════════ HERO ═══════════ */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24"
        >
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-4">
            — Experience
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl">
              Built, shipped,{" "}
              <span className="font-serif italic font-normal gradient-text-vivid">and invited to teach.</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-md">
              A compact view of the roles, outcomes, and invited talks that got me here.
            </p>
          </div>

          {/* Impact metrics strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {impactMetrics.map((m) => (
              <div key={m.label} className="bento p-5">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text-vivid leading-none">
                  <CountUp value={m.value} />
                </div>
                <div className="text-[11px] text-muted-foreground mt-2 leading-tight">{m.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══════════ WORK EXPERIENCE ═══════════ */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-28"
        >
          <div className="mb-10">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3">
              — Work
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Where I&apos;ve{" "}
              <span className="font-serif italic font-normal text-muted-foreground">shipped.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical rail */}
            <div className="absolute left-5 md:left-7 top-3 bottom-3 w-px bg-border/60" />

            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="relative pl-14 md:pl-20"
                >
                  {/* Node */}
                  <div
                    className={`absolute left-0 top-4 w-11 h-11 md:w-14 md:h-14 rounded-2xl flex items-center justify-center border ${
                      exp.current
                        ? "bg-primary border-primary text-primary-foreground pulse-ring"
                        : "bg-background border-border text-primary"
                    }`}
                  >
                    <Building2 className="w-5 h-5 md:w-6 md:h-6" />
                  </div>

                  <div className="bento p-6 md:p-8 group">
                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl md:text-2xl font-bold">{exp.title}</h3>
                          {exp.current && (
                            <Badge className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-[10px] font-mono uppercase tracking-wider">
                              Current
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm md:text-base text-primary font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-full">
                          <Calendar className="w-3 h-3" /> {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-full">
                          <MapPin className="w-3 h-3" /> {exp.location}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-full">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-5">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-1.5">
                        <TrendingUp className="w-3 h-3" />
                        Impact
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((a, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/80">
                            <span className="text-primary mt-1 text-xs">▸</span>
                            <span className="leading-relaxed">{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
                      {exp.stack.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-primary/5 text-primary border border-primary/20"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ═══════════ GUEST LECTURES ═══════════ */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-28"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3">
                — Speaking & Mentorship
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Guest{" "}
                <span className="font-serif italic font-normal text-muted-foreground">lectures.</span>
              </h2>
            </div>
            <p className="text-sm md:text-base text-muted-foreground max-w-md">
              My first two invited talks — both at my alma mater, VIT-AP University.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {guestLectures.map((lecture, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <TiltCard
                  max={6}
                  className="bento spotlight p-0 group flex flex-col overflow-hidden h-full hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-300"
                >
                {/* Poster */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={lecture.poster}
                    alt={lecture.title}
                    className="max-w-full max-h-full object-contain group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>

                {/* Header chip */}
                <div className="p-6 md:p-8 pb-0 flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all">
                      <Image
                        src={profilePic}
                        alt="Kelavath Balaji Naik"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-xl bg-primary flex items-center justify-center ring-4 ring-background">
                      <lecture.icon className="w-3.5 h-3.5 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <Badge
                      variant="outline"
                      className="text-[10px] font-mono uppercase tracking-wider rounded-full mb-1.5 max-w-full truncate"
                    >
                      {lecture.event}
                    </Badge>
                    <div className="text-[11px] font-mono text-muted-foreground truncate">
                      {lecture.role}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8 pt-5 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight group-hover:text-primary transition-colors">
                    {lecture.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-4 leading-snug">
                    {lecture.host}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] font-mono text-muted-foreground">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-muted/50">
                      <Calendar className="w-3 h-3" /> {lecture.date}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-muted/50">
                      <MapPin className="w-3 h-3" /> {lecture.venue}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-muted/50">
                      <Users className="w-3 h-3" /> {lecture.audience}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {lecture.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {lecture.topics.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/5 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {lecture.acknowledgments && (
                    <div className="mt-auto pt-4 border-t border-border/50">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-1.5">
                        <Award className="w-3 h-3" />
                        Grateful to
                      </div>
                      <ul className="space-y-1">
                        {lecture.acknowledgments.map((ack) => (
                          <li key={ack} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-0.5">✦</span>
                            <span>{ack}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ═══════════ TECH STACK ═══════════ */}
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
            {techStack.map((g, gi) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: gi * 0.05 }}
                viewport={{ once: true }}
              >
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

                <StaggerContainer className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 md:gap-3">
                  {g.items.map((s) => {
                    const Icon = s.icon
                    return (
                      <StaggerItem key={s.name}>
                        <div className="group relative aspect-[5/4] rounded-xl bg-card/40 border border-border/50 hover:border-primary/50 hover:bg-card/80 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-[250ms] ease-out flex flex-col items-center justify-center p-3 gap-2 cursor-default overflow-hidden">
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

        {/* ═══════════ CTA ═══════════ */}
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
              Ready to{" "}
              <span className="font-serif italic font-normal gradient-text-vivid">work together?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              I reply within 24 hours. Whether it&apos;s a full-time role, contract, or quick consult —
              send a note with what you&apos;re building.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-foreground text-background hover:bg-foreground/90"
              >
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" /> Hire me
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
