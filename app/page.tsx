"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Sparkles, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TypingEffect } from "@/components/typing-effect"
import Fooddel from "./projects/Fooddel.png"
import jobtracker from "./projects/jobtracker.png"
import exploreease from "./projects/travel .png"
import balaji from "../public/Balaji.jpg"

const typingTexts = [
  "AI Engineer.",
  "ML Engineer.",
  "LLM & RAG Developer.",
  "Agentic AI Builder.",
  "Full-Stack Engineer.",
]

const featuredProjects = [
  {
    id: 1,
    title: "LLM Platform — Multi-Project Gateway",
    description:
      "Internal LLM gateway across OpenAI · Anthropic · Gemini · Groq · Ollama. Cost tracking, budget limits, circuit breakers, prompt versioning, and a full analytics dashboard.",
    tech: ["FastAPI", "React", "TypeScript", "SQLite"],
    category: "AI Infra · Private",
    image: "/projects/generated-v2/llm-platform-gateway.png",
    private: true,
  },
  {
    id: 2,
    title: "Coder Agent",
    description:
      "Autonomous coding agent that plans, writes, and iterates on code using tool use and a structured reasoning loop. Built for real developer workflows.",
    tech: ["Python", "LLMs", "Agents", "Tool Use"],
    category: "Agentic AI · Private",
    image: "/projects/generated-v2/coder-agent.png",
    private: true,
  },
  {
    id: 3,
    title: "AI Coder Reviewer",
    description:
      "LLM-powered code review agent that inspects diffs, flags regressions, and suggests fixes with context from the surrounding codebase.",
    tech: ["Python", "LLMs", "Agents", "Code Analysis"],
    category: "Agentic AI · Private",
    image: "/projects/generated-v2/ai-coder-reviewer.png",
    private: true,
  },
]

const marqueeItems = [
  "LLMs", "RAG", "Agentic AI", "LangChain", "LangGraph", "Vector DBs", "Pinecone",
  "PyTorch", "TensorFlow", "Python", "FastAPI", "Next.js", "React", "TypeScript",
  "Node.js", "Docker", "PostgreSQL", "MongoDB", "Fine-tuning", "Prompt Engineering",
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 px-4 md:px-6 lg:px-8">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="aurora" />

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Bento grid */}
          <div className="grid grid-cols-12 gap-4 md:gap-5">
            {/* Main intro — big tile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bento col-span-12 lg:col-span-8 p-8 md:p-10 lg:p-14 spotlight"
            >
              <div className="flex items-center gap-2 mb-8">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                </span>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  Available for new opportunities
                </span>
              </div>

              <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
                Kelavath{" "}
                <span className="gradient-text-vivid">Balaji</span>{" "}
                Naik
                <br />
                <span className="font-serif italic font-normal text-3xl md:text-5xl lg:text-6xl text-muted-foreground">
                  —&nbsp;
                </span>
                <TypingEffect
                  texts={typingTexts}
                  speed={90}
                  deleteSpeed={40}
                  delayBetweenTexts={1800}
                  className="text-primary text-3xl md:text-5xl lg:text-6xl"
                />
              </h1>

              <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
                AI / ML Engineer and Full-Stack Developer. I build production-grade LLM systems,
                RAG pipelines, and agentic AI — and the full-stack apps that wrap them. VIT-AP
                2025 · currently at Samco Securities.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="group rounded-full bg-foreground text-background hover:bg-foreground/90"
                >
                  <Link href="/projects">
                    View my work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-border/60">
                  <Link href="/contact">Let&apos;s connect</Link>
                </Button>
              </div>
            </motion.div>

            {/* Profile tile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bento col-span-12 sm:col-span-6 lg:col-span-4 p-6 md:p-8 flex flex-col justify-between"
            >
              <div className="relative mb-6 aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-border/60">
                <Image
                  src={balaji}
                  alt="Kelavath Balaji Naik"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-2">
                  <MapPin className="h-3 w-3" /> India · Open to remote & relocation
                </div>
                <p className="text-sm leading-relaxed text-foreground/80">
                  Research-grade ML, production-grade delivery.
                </p>
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bento col-span-6 sm:col-span-4 lg:col-span-3 p-6 flex flex-col justify-between"
            >
              <Sparkles className="h-5 w-5 text-primary mb-3" />
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                Connect
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href="https://github.com/Balaji91221" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href="https://www.linkedin.com/in/kelavathbalajinaik/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href="mailto:kbalaji15j@gmail.com">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Stat tiles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="bento col-span-6 sm:col-span-4 lg:col-span-3 p-6"
            >
              <div className="text-5xl font-bold gradient-text-vivid">25+</div>
              <div className="text-sm text-muted-foreground mt-2">Projects shipped</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bento col-span-12 sm:col-span-4 lg:col-span-3 p-6"
            >
              <div className="text-5xl font-bold gradient-text-vivid">3+</div>
              <div className="text-sm text-muted-foreground mt-2">Years of experience</div>
            </motion.div>

            {/* Now building */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="bento col-span-12 lg:col-span-3 p-6"
            >
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                Currently
              </div>
              <div className="font-serif italic text-xl leading-snug">
                AI/ML Engineer @ <span className="text-primary not-italic font-sans font-semibold">Samco Securities</span>
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Shipping production ML for trading analytics.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <section className="py-10 border-y border-border/50 overflow-hidden">
        <div className="marquee">
          {[0, 1].map((i) => (
            <div key={i} className="marquee-track" aria-hidden={i === 1}>
              {marqueeItems.map((item) => (
                <span
                  key={`${i}-${item}`}
                  className="font-serif italic text-2xl md:text-4xl text-muted-foreground/70 whitespace-nowrap"
                >
                  {item} <span className="text-primary not-italic">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ============ FEATURED PROJECTS ============ */}
      <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex items-end justify-between flex-wrap gap-6 mb-16"
          >
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-4">
                — Selected Work
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                Things I&apos;ve{" "}
                <span className="font-serif italic font-normal text-muted-foreground">built</span>
              </h2>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              All projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bento group overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/30 via-accent/20 to-background">
                  {(project as any).image ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={(project as any).image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {project.private && (
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center gap-1 bg-background/90 text-foreground border border-border/60 backdrop-blur-sm text-[10px] font-mono uppercase tracking-wider rounded-full px-2.5 py-0.5">
                            🔒 Private
                          </span>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute inset-0 grid-pattern opacity-40" />
                      <div className="relative text-center px-6">
                        <div className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-2">
                          {project.category}
                        </div>
                        <div className="font-serif italic text-3xl md:text-4xl leading-tight text-foreground/80">
                          {project.title.split("—")[0].trim()}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="text-[10px] font-mono uppercase tracking-wider rounded-full border-border/60"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.private ? (
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground">
                        🔒 Private repo · available on request
                      </span>
                    ) : (
                      <>
                    <a
                      href={(project as any).liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" /> Live
                    </a>
                    <a
                      href={(project as any).githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-3 w-3" /> Code
                    </a>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bento p-10 md:p-16 lg:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-40">
              <div className="aurora" />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
                Let&apos;s build{" "}
                <span className="font-serif italic font-normal gradient-text-vivid">
                  something worth shipping.
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Have an idea, a problem, or a project? I&apos;m always up for a conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                  <Link href="/contact">Start a conversation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-border/60">
                  <Link href="/about">About me</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
