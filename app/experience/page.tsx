"use client"

import { motion } from "framer-motion"
import { GlowCard } from "@/components/glow-card"
import { RevealText } from "@/components/reveal"
import { TimelineRail } from "@/components/timeline-rail"
import { Skills } from "@/components/skills"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase,
  Calendar,
  MapPin,
  TrendingUp,
  Mic,
  GraduationCap,
  Users,
  ChevronRight,
} from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease, delay: i * 0.06 },
})

// ─────────────── experience ───────────────
const experiences = [
  {
    title: "Applied AI Engineer",
    company: "Samco Securities Limited",
    location: "Chennai (Remote)",
    period: "Jul 2025 — Present",
    type: "Full-time",
    current: true,
    description:
      "Building and operating production AI systems for a fintech brokerage: voice AI, retrieval-augmented generation, LLM infrastructure, MCP tooling and multi-agent automation.",
    achievements: [
      "Voice AI: real-time speech-to-text → LLM → text-to-speech agents and speech-to-speech workers with selectable providers",
      "RAG: multi-tenant document Q&A with hybrid search, reranking and answer verification",
      "LLM infrastructure: OpenAI-compatible gateway across 10+ providers with cost control, health checks and fallback",
      "MCP tooling: turning GraphQL, OpenAPI and SQL schemas into agent tools and publishing them as secured servers",
    ],
    stack: ["Python", "FastAPI", "LiveKit", "Qdrant", "LiteLLM", "MCP", "Docker", "Kubernetes"],
  },
  {
    title: "Full-Stack Developer",
    company: "DigitalFortress Private Limited",
    location: "Remote",
    period: "Aug 2024 — Nov 2024",
    type: "Full-time",
    current: false,
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
    current: false,
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
    period: "Aug 2023 — Nov 2023",
    type: "Training & Project",
    current: false,
    description:
      "Three-month externship in Artificial Intelligence and Machine Learning, powered by Google Developers (Cert ID: Ext-AIML-2023-73316).",
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
    poster: "/lectures/image.webp",
    description:
      "Covered the shift from classical ML pipelines to LLMs, RAG and agentic systems, with examples from production work. Attended by students and faculty.",
    topics: ["Generative AI", "LLMs & RAG", "ML in production", "AI career paths"],
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
    poster: "/lectures/edp.webp",
    description:
      "A session for the EDP cohort on where AI is creating measurable impact today and what an AI-driven engineering career looks like. Attended by faculty and working professionals.",
    topics: ["AI impact today", "AI careers", "Future-ready tech", "Industry mindset"],
  },
]


export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative pt-28 md:pt-32 pb-20 md:pb-24">
          {/* Background layer */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="aurora opacity-50" />
            <div className="grid-pattern absolute inset-0" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-5">
              Experience
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl">
              <RevealText>Roles, outcomes and invited talks.</RevealText>
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Full-time roles, internships and two invited university talks.
            </p>
          </motion.div>
        </section>

        {/* ═══════════ WORK TIMELINE ═══════════ */}
        <section className="py-24 md:py-32 border-t border-border/60">
          <div className="mb-14 md:mb-16">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">
              01 — Work
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              <RevealText>Where I&apos;ve worked.</RevealText>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline rail */}
            <TimelineRail className="left-[7px]" />

            <div className="space-y-10 md:space-y-12">
              {experiences.map((exp, index) => (
                <motion.article
                  key={exp.company + exp.period}
                  {...fadeUp(index)}
                  className="relative"
                >
                  {/* Dot marker */}
                  <span
                    className={`absolute left-0 top-1.5 block w-[15px] h-[15px] rounded-full border-2 ${
                      exp.current
                        ? "bg-primary border-primary"
                        : "bg-background border-border"
                    }`}
                  />

                  {/* Meta row */}
                  <div className="pl-9 md:pl-12 mb-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                      <Briefcase className="w-3 h-3" /> {exp.type}
                    </span>
                    {exp.current && (
                      <Badge
                        variant="outline"
                        className="text-[11px] font-mono uppercase tracking-wider rounded-full border-primary/40 text-primary"
                      >
                        Current
                      </Badge>
                    )}
                  </div>

                  {/* Role card */}
                  <div className="pl-9 md:pl-12">
                    <GlowCard className="card-glow card-lift rounded-lg border border-border/60 bg-card p-5 md:p-7">
                      <h3 className="text-lg md:text-xl font-bold tracking-tight leading-snug">
                        {exp.title}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-primary">{exp.company}</p>

                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mt-5">
                        <p className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-2.5">
                          <TrendingUp className="w-3 h-3" /> Impact
                        </p>
                        <ul className="space-y-1.5">
                          {exp.achievements.map((a) => (
                            <li
                              key={a}
                              className="flex items-start gap-2 text-sm text-foreground/80 leading-relaxed"
                            >
                              <ChevronRight className="w-3.5 h-3.5 mt-1 shrink-0 text-primary" />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-5 pt-4 border-t border-border/60 flex flex-wrap gap-1.5">
                        {exp.stack.map((s) => (
                          <Badge
                            key={s}
                            variant="outline"
                            className="text-[11px] font-mono uppercase tracking-wider rounded-full border-border/60 text-muted-foreground"
                          >
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </GlowCard>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ GUEST LECTURES ═══════════ */}
        <section className="py-24 md:py-32 border-t border-border/60">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 md:mb-16">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">
                02 — Speaking
              </p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                <RevealText>Guest lectures.</RevealText>
              </h2>
            </div>
            <p className="text-sm md:text-base text-muted-foreground max-w-md">
              Two invited talks at VIT-AP University.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6 items-stretch">
            {guestLectures.map((lecture, index) => (
              <motion.article
                key={lecture.title}
                {...fadeUp(index)}
                className="group h-full"
              >
                <GlowCard className="card-glow card-lift flex h-full flex-col rounded-lg border border-border/60 bg-card p-5 md:p-6">
                {/* Poster */}
                <div className="relative aspect-[16/10] overflow-hidden group rounded-lg border border-border/60 bg-muted/30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={lecture.poster}
                    alt={lecture.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* Body */}
                <div className="mt-6 flex flex-1 flex-col">
                  <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-primary mb-3">
                    <lecture.icon className="w-3.5 h-3.5" />
                    <span className="truncate">{lecture.event}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight">
                    {lecture.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-snug">
                    {lecture.host}
                  </p>
                  <p className="mt-1 text-xs font-mono text-muted-foreground">{lecture.role}</p>

                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" /> {lecture.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" /> {lecture.venue}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="w-3 h-3" /> {lecture.audience}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {lecture.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {lecture.topics.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="text-[11px] font-mono uppercase tracking-wider rounded-full border-primary/30 text-primary"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
                </GlowCard>
              </motion.article>
            ))}
          </div>
        </section>

        <Skills compact index="03" eyebrow="Core stack" title="Core stack" />
      </div>
    </div>
  )
}
