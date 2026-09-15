"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { GlowCard } from "@/components/glow-card"
import { RevealText, ImageReveal } from "@/components/reveal"
import Image, { type StaticImageData } from "next/image"
import resume from "./resume.webp"
import crypto from "./crypto.webp"
import vtbif from "./vtbif.webp"
import github from "./github.webp"
import nlpres from "./nlpres.webp"
import emotion from "./emotion.webp"
import movie from "./movie.webp"
import fooddel from "./Fooddel.webp"
import jobtracker from "./jobtracker.webp"
import exploreease from "./travel.webp"
import dashboard from "./mauth.webp"

const EASE = [0.22, 1, 0.36, 1] as const

type Project = {
  id: number
  title: string
  description: string
  image: string | StaticImageData
  tech: string[]
  category: string
  // "#" means there is no deployment separate from the repo, so no Live link is shown.
  liveUrl: string
  githubUrl: string
  featured: boolean
}

const projects: Project[] = [
  // ═══════════════════════ AGENTIC AI ═══════════════════════
  {
    id: 101,
    title: "Agent2Agent — Multi-Agent Orchestration",
    description: "Python-based agentic AI system exploring agent-to-agent communication, tool use, and autonomous task delegation between cooperating LLM agents.",
    image: "/projects/generated-v2/agent2agent.webp",
    tech: ["Python", "Agents", "LLMs", "Tool Use"],
    category: "Agentic AI",
    liveUrl: "#",
    githubUrl: "https://github.com/Balaji91221/Agent2Agent-project",
    featured: true,
  },
  {
    id: 102,
    title: "Voice Agent — Retell AI",
    description: "Real-time voice AI agent built on Retell AI's LLM-voice platform. Conversational agent that handles phone-style interactions end-to-end.",
    image: "/projects/generated-v2/voice-agent-retell.webp",
    tech: ["TypeScript", "Retell AI", "Voice", "LLMs"],
    category: "Agentic AI",
    liveUrl: "#",
    githubUrl: "https://github.com/Balaji91221/voiceagent-",
    featured: true,
  },

  // ═══════════════════════ LLM / RAG ═══════════════════════
  {
    id: 201,
    title: "Semantic Search Engine",
    description: "Meaning-based search built with vector embeddings and Next.js — the foundation of a production RAG pipeline.",
    image: "/projects/generated-v2/semantic-search-engine.webp",
    tech: ["Next.js", "Vector DB", "Embeddings", "RAG"],
    category: "LLM / RAG",
    liveUrl: "https://search-with-semantic.vercel.app",
    githubUrl: "https://github.com/Balaji91221/Search-with-Semantic",
    featured: true,
  },
  {
    id: 202,
    title: "AI Mock Interviews",
    description: "LLM-powered mock interview platform that generates role-specific questions, scores responses, and delivers actionable feedback.",
    image: "/projects/generated-v2/ai-mock-interviews.webp",
    tech: ["Next.js", "LLMs", "TypeScript", "AI SDK"],
    category: "LLM / RAG",
    liveUrl: "https://aimockinterviews-five.vercel.app",
    githubUrl: "https://github.com/Balaji91221/ai_mock_interviews",
    featured: true,
  },
  {
    id: 203,
    title: "Qwen 3.6 Plus",
    description: "Experimental JS-based LLM interface exploring Qwen model capabilities and integration patterns for modern web apps.",
    image: "/projects/generated-v2/qwen-36-plus.webp",
    tech: ["JavaScript", "LLMs", "Qwen"],
    category: "LLM / RAG",
    liveUrl: "#",
    githubUrl: "https://github.com/Balaji91221/qwen3.6-plus",
    featured: false,
  },
  {
    id: 204,
    title: "AI/ML + GenAI Roadmap",
    description: "Structured AI/ML learning repo with GenAI experiments, prompt engineering patterns, and best practices for production-ready ML.",
    image: "/projects/generated-v2/ai-ml-genai-roadmap.webp",
    tech: ["Python", "GenAI", "Prompt Eng", "Jupyter"],
    category: "LLM / RAG",
    liveUrl: "#",
    githubUrl: "https://github.com/Balaji91221/ai-ml-genai-roadmap",
    featured: false,
  },

  // ═══════════════════════ ML / DL / CV ═══════════════════════
  {
    id: 301,
    title: "Snake AI — Reinforcement Learning",
    description: "Trains an RL agent to play Snake using PyTorch + Pygame. Deep Q-learning with reward shaping and real-time training visualization.",
    image: "/projects/generated-v2/snake-ai-rl.webp",
    tech: ["PyTorch", "RL", "Python", "Pygame"],
    category: "ML / DL",
    liveUrl: "#",
    githubUrl: "https://github.com/Balaji91221/snake-ai-pytorch",
    featured: true,
  },
  {
    id: 302,
    title: "Face AI — Image Completion",
    description: "AI-driven face completion web app. Demonstrates deep-learning inpainting with a modern Next.js UI and Firebase auth.",
    image: "/projects/generated-v2/face-ai-image-completion.webp",
    tech: ["Next.js", "Computer Vision", "Firebase", "TypeScript"],
    category: "ML / DL",
    liveUrl: "https://face-ai-lemon.vercel.app",
    githubUrl: "https://github.com/Balaji91221/faceAi",
    featured: true,
  },
  {
    id: 303,
    title: "Document ID Detection",
    description: "Computer-vision pipeline for detecting and extracting ID fields from document scans using deep learning.",
    image: "/projects/generated-v2/document-id-detection.webp",
    tech: ["Python", "CV", "Deep Learning", "Jupyter"],
    category: "ML / DL",
    liveUrl: "#",
    githubUrl: "https://github.com/Balaji91221/doc-id-detection",
    featured: false,
  },
  {
    id: 304,
    title: "Image Caption Generator (CNN + LSTM)",
    description: "Generates natural-language captions for images using CNN feature extraction + LSTM decoding. Flask-served API.",
    image: "/projects/generated-v2/image-caption-generator.webp",
    tech: ["CNN", "LSTM", "Python", "Flask"],
    category: "ML / DL",
    liveUrl: "#",
    githubUrl: "https://github.com/Balaji91221/Image-Caption-Generation-using-CNN",
    featured: false,
  },
  {
    id: 305,
    title: "IPL Win Predictor",
    description: "ML model predicting IPL match outcomes based on historical match data. End-to-end feature engineering + classification.",
    image: "/projects/generated-v2/ipl-win-predictor.webp",
    tech: ["Python", "Scikit-learn", "Pandas", "Jupyter"],
    category: "ML / DL",
    liveUrl: "#",
    githubUrl: "https://github.com/Balaji91221/ipl_win_predictor",
    featured: false,
  },
  {
    id: 306,
    title: "Medical Insurance Price Prediction",
    description: "Regression model predicting medical insurance premiums from demographic and health features.",
    image: "/projects/generated-v2/medical-insurance-price-prediction.webp",
    tech: ["Python", "Regression", "Scikit-learn"],
    category: "ML / DL",
    liveUrl: "#",
    githubUrl: "https://github.com/Balaji91221/medical_insurance_price_prediction",
    featured: false,
  },

  // ═══════════════════════ NLP ═══════════════════════
  {
    id: 401,
    title: "Resume Screening App",
    description: "Automated resume screening using NLP — classifies resumes into role categories to help recruiters filter at scale.",
    image: nlpres,
    tech: ["Python", "NLP", "Scikit-learn", "Flask"],
    category: "NLP",
    liveUrl: "#",
    githubUrl: "https://github.com/Balaji91221/resume-screening-app",
    featured: false,
  },
  {
    id: 402,
    title: "Emotion Classifier (Text)",
    description: "Text-based emotion detection across joy, sadness, anger, fear, surprise and more. NLP classification on labeled corpora.",
    image: emotion,
    tech: ["Python", "NLP", "Classification"],
    category: "NLP",
    liveUrl: "#",
    githubUrl: "https://github.com/Balaji91221/emotion-based-text-classifier",
    featured: false,
  },
  {
    id: 403,
    title: "Movie Recommender System",
    description: "Content-based movie recommendations using TMDb data. Built with Streamlit for an instant interactive UI.",
    image: movie,
    tech: ["Python", "NLP", "Streamlit", "TMDb"],
    category: "NLP",
    liveUrl: "#",
    githubUrl: "https://github.com/Balaji91221/movies-recommder-system",
    featured: false,
  },

  // ═══════════════════════ FULL-STACK ═══════════════════════
  {
    id: 1,
    title: "Job Tracker – Application Management System",
    description: "A full-stack job tracking app built with Next.js and Firebase. Enables users to track job applications, statuses, and insights through a clean UI and real-time updates.",
    image: jobtracker,
    tech: ["Next.js", "Firebase", "Tailwind CSS", "Framer Motion", "Lucide React"],
    category: "Full-Stack",
    liveUrl: "https://job-tracker-pro.vercel.app/",
    githubUrl: "https://github.com/Balaji91221/job-tracker/tree/master",
    featured: false,
  },
  {
    id: 2,
    title: "ExploreEase – ML-Powered Travel Planner",
    description: "A full-stack travel planner powered by Machine Learning to predict top destinations based on user preferences. It offers personalized itineraries, flexible planning, and real-time suggestions.",
    image: exploreease,
    tech: ["Next.js", "Tailwind CSS", "Lucide Icons", "Video.js", "ML", "TypeScript"],
    category: "Full-Stack",
    liveUrl: "https://exproseease.vercel.app/",
    githubUrl: "https://github.com/Balaji91221/travel-ExploreEase",
    featured: false,
  },
  {
    id: 3,
    title: "Mauth Dashboard – Analytics Dashboard UI",
    description: "A responsive frontend dashboard built with Next.js and Recharts. Features dynamic charts, login logs, real-time data updates, and a map view of user distribution.",
    image: dashboard,
    tech: ["React", "Next.js", "Tailwind CSS", "Recharts", "Lucide Icons"],
    category: "Frontend",
    liveUrl: "https://analytics.mauthn.mukham.in/",
    githubUrl: "https://github.com/Balaji91221/DF-dashboard",
    featured: false,
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Full-stack food ordering app built with React, Express.js, and MongoDB. Responsive UI for browsing food categories and managing carts, plus an admin dashboard for managing food items.",
    image: fooddel,
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    category: "Full-Stack",
    liveUrl: "#",
    githubUrl: "https://github.com/Balaji91221/Food-delivery-App",
    featured: false,
  },
  {
    id: 5,
    title: "Resume Maker",
    description: "A dynamic resume generating website made with ReactJS. Features include Local Storage System that saves your data even on page refresh.",
    image: resume,
    tech: ["React", "Redux"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "https://github.com/Balaji91221/resumer-builder",
    featured: false,
  },
  {
    id: 6,
    title: "CryptoWorld",
    description: "CryptoWorld is a web app that helps users to view price charts with historical data and news of cryptocurrencies.",
    image: crypto,
    tech: ["React", "Redux Toolkit"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "https://github.com/Balaji91221/cryptoworld-react-app-master",
    featured: false,
  },
  {
    id: 7,
    title: "Github User Finder",
    description: "A React app for fetching GitHub user info with Auth0 authentication, Material-UI, React Google Charts, toast notifications, and React Router.",
    image: github,
    tech: ["React", "OAuth", "Material-UI"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "https://github.com/Balaji91221/Github-User-Fider",
    featured: false,
  },
  {
    id: 8,
    title: "VTBIF Platform",
    description: "A platform showcasing the VIT-AP Business Incubation Foundation (VT-BIF), supporting tech startups with essential resources.",
    image: vtbif,
    tech: ["React", "Bootstrap", "Flowbit UI"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "https://github.com/Balaji91221/vtbif",
    featured: false,
  },
]

const categories = ["All", "Agentic AI", "LLM / RAG", "ML / DL", "NLP", "Full-Stack", "Frontend"]

const MAX_VISIBLE_TECH = 4

const chipClass =
  "inline-flex w-fit items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-primary"

const techBadgeClass =
  "text-[11px] font-mono uppercase tracking-wider rounded-full border-border/60 text-muted-foreground"

// py-3.5 + 16px line height = 44px tap target; the negative margin keeps the row's visual height.
const footerLinkClass =
  "inline-flex items-center gap-1.5 py-3.5 -my-3.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors duration-200"

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showAll, setShowAll] = useState(false)
  // Only transitions are gated on this: it is null during SSR, so anything that changes
  // rendered markup or inline styles would not hydrate for reduced-motion visitors.
  const prefersReduced = useReducedMotion()

  const isAll = selectedCategory === "All"
  const inCategory = isAll ? projects : projects.filter((project) => project.category === selectedCategory)
  // "All" opens on the featured selection; a category filter always shows everything in it.
  const visibleProjects = isAll && !showAll ? inCategory.filter((project) => project.featured) : inCategory
  const hiddenCount = inCategory.length - visibleProjects.length

  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-24 px-4 md:px-6 lg:px-8 relative">
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[55vh] overflow-hidden pointer-events-none opacity-50">
        <div className="aurora" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* ============ HEADER ============ */}
        <header className="mb-12 md:mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-4">Projects</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              <RevealText>
                Selected <span className="font-serif italic font-normal gradient-text-aurora">work</span>
              </RevealText>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-md md:text-right">
              Agentic systems, RAG pipelines, ML models — and the full-stack apps that wrap them.
            </p>
          </div>
          <p className="mt-6 text-xs font-mono text-muted-foreground">
            {projects.length} projects · {categories.length - 1} categories
          </p>
        </header>

        {/* ============ FILTERS ============ */}
        <motion.nav
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.5, ease: EASE, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10 md:mb-14"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => {
            const count =
              category === "All" ? projects.length : projects.filter((p) => p.category === category).length
            const active = selectedCategory === category
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                aria-pressed={active}
                className={`relative inline-flex items-center justify-center min-h-[44px] md:min-h-0 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-colors duration-200 border ${
                  active
                    ? "text-background border-transparent"
                    : "text-muted-foreground border-border/60 hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="active-category-pill"
                    className="absolute inset-0 rounded-full bg-foreground shadow-lg shadow-primary/20"
                    transition={prefersReduced ? { duration: 0 } : { duration: 0.3, ease: EASE }}
                  />
                )}
                <span className="relative z-10">
                  {category}
                  <span className={`ml-2 text-[11px] ${active ? "text-background/70" : "text-muted-foreground/60"}`}>
                    {count}
                  </span>
                </span>
              </button>
            )
          })}
        </motion.nav>

        {/* ============ PROJECTS GRID ============ */}
        <motion.div
          layout
          transition={prefersReduced ? { duration: 0 } : { duration: 0.5, ease: EASE }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={
                  prefersReduced
                    ? { duration: 0 }
                    : { duration: 0.5, ease: EASE, delay: Math.min(index * 0.05, 0.3) }
                }
                viewport={{ once: true }}
                className="group h-full"
              >
                <GlowCard className="card-glow card-lift h-full flex flex-col rounded-lg border border-border/60 bg-card overflow-hidden hover:border-primary/40">
                  {/* Media */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted/40">
                    <ImageReveal>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={640}
                        height={400}
                        className="absolute inset-0 w-full h-full object-cover saturate-[0.8] group-hover:saturate-100 group-hover:scale-[1.04] transition-all duration-700"
                      />
                    </ImageReveal>

                    {project.featured && (
                      <span className="absolute top-3 left-3 inline-flex items-center bg-primary text-primary-foreground text-[11px] font-mono uppercase tracking-wider rounded-full px-2.5 py-1">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className={`${chipClass} mb-3`}>{project.category}</p>
                    <h2 className="text-lg font-semibold tracking-tight leading-snug mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.slice(0, MAX_VISIBLE_TECH).map((t) => (
                        <Badge key={t} variant="outline" className={techBadgeClass}>
                          {t}
                        </Badge>
                      ))}
                      {project.tech.length > MAX_VISIBLE_TECH && (
                        <Badge variant="outline" className={techBadgeClass}>
                          +{project.tech.length - MAX_VISIBLE_TECH}
                        </Badge>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="mt-auto flex items-center gap-4 pt-4 border-t border-border/40">
                      {project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} — live site`}
                          className={footerLinkClass}
                        >
                          <ExternalLink className="h-3 w-3" aria-hidden="true" /> Live
                        </a>
                      )}
                      {project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} — source code on GitHub`}
                          className={footerLinkClass}
                        >
                          <Github className="h-3 w-3" aria-hidden="true" /> Code
                        </a>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {isAll && !showAll && hiddenCount > 0 && (
          <div className="mt-10 flex justify-center">
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
              className="rounded-full border-border/60 font-mono text-xs uppercase tracking-wider hover:border-primary/40 hover:text-primary"
            >
              Show all {projects.length} projects
            </Button>
          </div>
        )}

        {visibleProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-sm text-muted-foreground">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
