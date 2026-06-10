"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Lock, ArrowUpRight } from "lucide-react"
import { TiltCard } from "@/components/tilt-card"
import Image from "next/image"
import resume from './resume.png';
import crypto from './crypto.png';
import vtbif from './vtbif.png';
import github from './github.png';
import nlpres from './nlpres.png';
import emotion from './emotion.jpeg';
import movie from './movie.jpeg'
import Fooddel from './Fooddel.png'
import jobtracker from './jobtracker.png'
import exploreease from './travel .png'
import dashboard from './mauth.png'

const projects =
  [
  // ═══════════════════════ AI INFRA / PLATFORM ═══════════════════════
  {
    "id": 501,
    "title": "LLM Platform — Multi-Project LLM Gateway",
    "description": "Internal LLM gateway sitting between apps and providers (OpenAI · Anthropic · Gemini · Groq · Ollama). One OpenAI-compatible endpoint with per-project cost tracking, budget limits, circuit breakers with auto-failover, API key management, prompt template versioning, and a full analytics dashboard + playground.",
    "image": "/projects/generated-v2/llm-platform-gateway.png",
    "tech": ["FastAPI", "Python", "React", "TypeScript", "SQLite", "Tailwind", "JWT"],
    "category": "AI Infra",
    "liveUrl": "#",
    "githubUrl": "#",
    "featured": true,
    "private": true
  },
  {
    "id": 502,
    "title": "Coder Agent",
    "description": "Autonomous coding agent that plans, writes, and iterates on code using tool use and a structured reasoning loop. Built for real developer workflows — not demos.",
    "image": "/projects/generated-v2/coder-agent.png",
    "tech": ["Python", "LLMs", "Agents", "Tool Use"],
    "category": "Agentic AI",
    "liveUrl": "#",
    "githubUrl": "#",
    "featured": true,
    "private": true
  },
  {
    "id": 503,
    "title": "AI Coder Reviewer",
    "description": "LLM-powered code review agent that inspects diffs, flags regressions, and suggests fixes with context from the surrounding codebase. Integrates into the PR workflow.",
    "image": "/projects/generated-v2/ai-coder-reviewer.png",
    "tech": ["Python", "LLMs", "Agents", "Code Analysis"],
    "category": "Agentic AI",
    "liveUrl": "#",
    "githubUrl": "#",
    "featured": true,
    "private": true
  },

  // ═══════════════════════ AGENTIC AI ═══════════════════════
  {
    "id": 101,
    "title": "Agent2Agent — Multi-Agent Orchestration",
    "description": "Python-based agentic AI system exploring agent-to-agent communication, tool use, and autonomous task delegation between cooperating LLM agents.",
    "image": "/projects/generated-v2/agent2agent.png",
    "tech": ["Python", "Agents", "LLMs", "Tool Use"],
    "category": "Agentic AI",
    "liveUrl": "https://github.com/Balaji91221/Agent2Agent-project",
    "githubUrl": "https://github.com/Balaji91221/Agent2Agent-project",
    "featured": true
  },
  {
    "id": 102,
    "title": "Voice Agent — Retell AI",
    "description": "Real-time voice AI agent built on Retell AI's LLM-voice platform. Conversational agent that handles phone-style interactions end-to-end.",
    "image": "/projects/generated-v2/voice-agent-retell.png",
    "tech": ["TypeScript", "Retell AI", "Voice", "LLMs"],
    "category": "Agentic AI",
    "liveUrl": "https://retellai-six.vercel.app",
    "githubUrl": "https://github.com/Balaji91221/voiceagent-",
    "featured": true
  },

  // ═══════════════════════ LLM / RAG ═══════════════════════
  {
    "id": 201,
    "title": "Semantic Search Engine",
    "description": "Search by meaning, not keywords. Built with vector embeddings and Next.js — the foundation of a production RAG pipeline.",
    "image": "/projects/generated-v2/semantic-search-engine.png",
    "tech": ["Next.js", "Vector DB", "Embeddings", "RAG"],
    "category": "LLM / RAG",
    "liveUrl": "https://search-with-semantic.vercel.app",
    "githubUrl": "https://github.com/Balaji91221/Search-with-Semantic",
    "featured": true
  },
  {
    "id": 202,
    "title": "AI Mock Interviews",
    "description": "LLM-powered mock interview platform that generates role-specific questions, scores responses, and delivers actionable feedback.",
    "image": "/projects/generated-v2/ai-mock-interviews.png",
    "tech": ["Next.js", "LLMs", "TypeScript", "AI SDK"],
    "category": "LLM / RAG",
    "liveUrl": "https://aimockinterviews-five.vercel.app",
    "githubUrl": "https://github.com/Balaji91221/ai_mock_interviews",
    "featured": true
  },
  {
    "id": 203,
    "title": "Qwen 3.6 Plus",
    "description": "Experimental JS-based LLM interface exploring Qwen model capabilities and integration patterns for modern web apps.",
    "image": "/projects/generated-v2/qwen-36-plus.png",
    "tech": ["JavaScript", "LLMs", "Qwen"],
    "category": "LLM / RAG",
    "liveUrl": "https://github.com/Balaji91221/qwen3.6-plus",
    "githubUrl": "https://github.com/Balaji91221/qwen3.6-plus",
    "featured": false
  },
  {
    "id": 204,
    "title": "AI/ML + GenAI Roadmap",
    "description": "Structured AI/ML learning repo with GenAI experiments, prompt engineering patterns, and best practices for production-ready ML.",
    "image": "/projects/generated-v2/ai-ml-genai-roadmap.png",
    "tech": ["Python", "GenAI", "Prompt Eng", "Jupyter"],
    "category": "LLM / RAG",
    "liveUrl": "https://github.com/Balaji91221/ai-ml-genai-roadmap",
    "githubUrl": "https://github.com/Balaji91221/ai-ml-genai-roadmap",
    "featured": false
  },

  // ═══════════════════════ ML / DL / CV ═══════════════════════
  {
    "id": 301,
    "title": "Snake AI — Reinforcement Learning",
    "description": "Trains an RL agent to play Snake using PyTorch + Pygame. Deep Q-learning with reward shaping and real-time training visualization.",
    "image": "/projects/generated-v2/snake-ai-rl.png",
    "tech": ["PyTorch", "RL", "Python", "Pygame"],
    "category": "ML / DL",
    "liveUrl": "https://github.com/Balaji91221/snake-ai-pytorch",
    "githubUrl": "https://github.com/Balaji91221/snake-ai-pytorch",
    "featured": true
  },
  {
    "id": 302,
    "title": "Face AI — Image Completion",
    "description": "AI-driven face completion web app. Demonstrates deep-learning inpainting with a modern Next.js UI and Firebase auth.",
    "image": "/projects/generated-v2/face-ai-image-completion.png",
    "tech": ["Next.js", "Computer Vision", "Firebase", "TypeScript"],
    "category": "ML / DL",
    "liveUrl": "https://face-ai-lemon.vercel.app",
    "githubUrl": "https://github.com/Balaji91221/faceAi",
    "featured": false
  },
  {
    "id": 303,
    "title": "Document ID Detection",
    "description": "Computer-vision pipeline for detecting and extracting ID fields from document scans using deep learning.",
    "image": "/projects/generated-v2/document-id-detection.png",
    "tech": ["Python", "CV", "Deep Learning", "Jupyter"],
    "category": "ML / DL",
    "liveUrl": "https://github.com/Balaji91221/doc-id-detection",
    "githubUrl": "https://github.com/Balaji91221/doc-id-detection",
    "featured": false
  },
  {
    "id": 304,
    "title": "Image Caption Generator (CNN + LSTM)",
    "description": "Generates natural-language captions for images using CNN feature extraction + LSTM decoding. Flask-served API.",
    "image": "/projects/generated/image-caption-generator.png",
    "tech": ["CNN", "LSTM", "Python", "Flask"],
    "category": "ML / DL",
    "liveUrl": "https://github.com/Balaji91221/Image-Caption-Generation-using-CNN",
    "githubUrl": "https://github.com/Balaji91221/Image-Caption-Generation-using-CNN",
    "featured": false
  },
  {
    "id": 305,
    "title": "IPL Win Predictor",
    "description": "ML model predicting IPL match outcomes based on historical match data. End-to-end feature engineering + classification.",
    "image": "/projects/generated/ipl-win-predictor.png",
    "tech": ["Python", "Scikit-learn", "Pandas", "Jupyter"],
    "category": "ML / DL",
    "liveUrl": "https://github.com/Balaji91221/ipl_win_predictor",
    "githubUrl": "https://github.com/Balaji91221/ipl_win_predictor",
    "featured": false
  },
  {
    "id": 306,
    "title": "Medical Insurance Price Prediction",
    "description": "Regression model predicting medical insurance premiums from demographic and health features.",
    "image": "/projects/generated/medical-insurance-price-prediction.png",
    "tech": ["Python", "Regression", "Scikit-learn"],
    "category": "ML / DL",
    "liveUrl": "https://github.com/Balaji91221/medical_insurance_price_prediction",
    "githubUrl": "https://github.com/Balaji91221/medical_insurance_price_prediction",
    "featured": false
  },

  // ═══════════════════════ NLP ═══════════════════════
  {
    "id": 401,
    "title": "Resume Screening App",
    "description": "Automated resume screening using NLP — classifies resumes into role categories to help recruiters filter at scale.",
    "image": nlpres,
    "tech": ["Python", "NLP", "Scikit-learn", "Flask"],
    "category": "NLP",
    "liveUrl": "https://github.com/Balaji91221/resume-screening-app",
    "githubUrl": "https://github.com/Balaji91221/resume-screening-app",
    "featured": true
  },
  {
    "id": 402,
    "title": "Emotion Classifier (Text)",
    "description": "Text-based emotion detection across joy, sadness, anger, fear, surprise and more. NLP classification on labeled corpora.",
    "image": emotion,
    "tech": ["Python", "NLP", "Classification"],
    "category": "NLP",
    "liveUrl": "https://github.com/Balaji91221/emotion-based-text-classifier",
    "githubUrl": "https://github.com/Balaji91221/emotion-based-text-classifier",
    "featured": false
  },
  {
    "id": 403,
    "title": "Movie Recommender System",
    "description": "Content-based movie recommendations using TMDb data. Built with Streamlit for an instant interactive UI.",
    "image": movie,
    "tech": ["Python", "NLP", "Streamlit", "TMDb"],
    "category": "NLP",
    "liveUrl": "https://github.com/Balaji91221/movies-recommder-system",
    "githubUrl": "https://github.com/Balaji91221/movies-recommder-system",
    "featured": false
  },

  // ═══════════════════════ FULL-STACK ═══════════════════════
  {
    "id": 1,
    "title": "Job Tracker – Application Management System",
    "description": "A full-stack job tracking app built with Next.js and Firebase. Enables users to track job applications, statuses, and insights through a clean UI and real-time updates.",
    "image": jobtracker,
    "tech": ["Next.js", "Firebase", "Tailwind CSS", "Framer Motion", "Lucide React"],
    "category": "Full-Stack",
    "liveUrl": "https://job-tracker-pro.vercel.app/",
    "githubUrl": "https://github.com/Balaji91221/job-tracker/tree/master",
    "featured": true
  },
  {
    "id": 2,
    "title": "ExploreEase – ML-Powered Travel Planner",
    "description": "A full-stack travel planner powered by Machine Learning to predict top destinations based on user preferences. It offers personalized itineraries, flexible planning, and real-time suggestions.",
    "image": exploreease,
    "tech": ["Next.js", "Tailwind CSS", "Lucide Icons", "Video.js", "ML", "TypeScript"],
    "category": "Full-Stack",
    "liveUrl": "https://exproseease.vercel.app/",
    "githubUrl": "https://github.com/Balaji91221/travel-ExploreEase",
    "featured": true
  },
  {
    "id": 3,
    "title": "Mauth Dashboard – Analytics Dashboard UI",
    "description": "A responsive frontend dashboard built with Next.js and Recharts. Features dynamic charts, login logs, real-time data updates, and a map view of user distribution.",
    "image": dashboard,
    "tech": ["React", "Next.js", "Tailwind CSS", "Recharts", "Lucide Icons"],
    "category": "Frontend",
    "liveUrl": "https://analytics.mauthn.mukham.in/",
    "githubUrl": "https://github.com/Balaji91221/DF-dashboard",
    "featured": true
  },
  {
    "id": 4,
    "title": "Food Ordering Application",
    "description": "Developed a comprehensive full-stack web application for online food ordering using React, Express.js, and MongoDB. The project features a responsive UI/UX for browsing food categories and managing carts, a robust admin dashboard for managing food items.",
    "image": Fooddel,
    "tech": ["React", "Node.js", "Express.js", "MongoDB"],
    "category": "Full-Stack",
    "liveUrl": "https://github.com/Balaji91221/Food-delivery-App",
    "githubUrl": "https://github.com/Balaji91221/Food-delivery-App",
    "featured": true
  },
  {
    "id": 5,
    "title": "Resume Maker",
    "description": "A dynamic resume generating website made with ReactJS. Features include Local Storage System that saves your data even on page refresh.",
    "image": resume,
    "tech": ["React", "Redux"],
    "category": "Frontend",
    "liveUrl": "https://github.com/Balaji91221/resumer-builder",
    "githubUrl": "https://github.com/Balaji91221/resumer-builder",
    "featured": false
  },
  {
    "id": 6,
    "title": "CryptoWorld",
    "description": "CryptoWorld is a web app that helps users to view price charts with historical data and news of cryptocurrencies.",
    "image": crypto,
    "tech": ["React", "Redux Toolkit"],
    "category": "Frontend",
    "liveUrl": "https://github.com/Balaji91221/cryptoworld-react-app-master",
    "githubUrl": "https://github.com/Balaji91221/cryptoworld-react-app-master",
    "featured": true
  },
  {
    "id": 7,
    "title": "Github User Finder",
    "description": "A React app for fetching GitHub user info with Auth0 authentication, Material-UI, React Google Charts, toast notifications, and React Router.",
    "image": github,
    "tech": ["React", "OAuth", "Material-UI"],
    "category": "Frontend",
    "liveUrl": "https://github.com/Balaji91221/Github-User-Fider",
    "githubUrl": "https://github.com/Balaji91221/Github-User-Fider",
    "featured": false
  },
  {
    "id": 8,
    "title": "VTBIF Platform",
    "description": "A platform showcasing the VIT-AP Business Incubation Foundation (VT-BIF), supporting tech startups with essential resources.",
    "image": vtbif,
    "tech": ["React", "Bootstrap", "Flowbit UI"],
    "category": "Frontend",
    "liveUrl": "https://github.com/Balaji91221/vtbif",
    "githubUrl": "https://github.com/Balaji91221/vtbif",
    "featured": true
  },
]

const categories = ["All", "AI Infra", "Agentic AI", "LLM / RAG", "ML / DL", "NLP", "Full-Stack", "Frontend"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-20 px-4 md:px-6 lg:px-8 relative">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-4">
            — Selected Work
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl">
              Projects across{" "}
              <span className="font-serif italic font-normal gradient-text-vivid">AI, ML & the web.</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-md">
              Agentic systems, RAG pipelines, ML models, and the full-stack apps that wrap them.
            </p>
          </div>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-10 md:mb-14"
        >
          {categories.map((category) => {
            const count =
              category === "All" ? projects.length : projects.filter((p) => p.category === category).length
            const active = selectedCategory === category
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`group relative px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all border ${
                  active
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background/50 text-muted-foreground border-border/60 hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                {category}
                <span
                  className={`ml-2 text-[10px] ${
                    active ? "text-background/70" : "text-muted-foreground/60"
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filteredProjects.map((project, index) => {
            const isLink = !project.private && project.liveUrl && project.liveUrl !== "#"

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.4) }}
                layout
              >
                <TiltCard className="h-full">
                <div
                  className={`bento spotlight group block h-full flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-300 ${
                    isLink ? "cursor-pointer" : ""
                  }`}
                >
                  {/* Stretched link: makes the whole card clickable without
                      nesting <a> tags (the footer links sit above it). */}
                  {isLink && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="absolute inset-0 z-10"
                    />
                  )}
                  {/* Media */}
                  <div className="relative overflow-hidden aspect-[16/10]">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={375}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full relative bg-gradient-to-br from-primary/25 via-accent/15 to-background flex items-center justify-center">
                        <div className="absolute inset-0 grid-pattern opacity-40" />
                        <div className="relative text-center px-6">
                          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-2">
                            {project.category}
                          </div>
                          <div className="font-serif italic text-2xl md:text-3xl leading-tight text-foreground/80">
                            {project.title.split("—")[0].split("–")[0].trim()}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                      {project.featured && (
                        <Badge className="bg-primary text-primary-foreground text-[10px] font-mono uppercase tracking-wider rounded-full px-2.5 py-0.5">
                          ★ Featured
                        </Badge>
                      )}
                      {project.private && (
                        <Badge className="bg-background/90 text-foreground border border-border/60 backdrop-blur-sm text-[10px] font-mono uppercase tracking-wider rounded-full px-2.5 py-0.5 flex items-center gap-1">
                          <Lock className="w-2.5 h-2.5" /> Private
                        </Badge>
                      )}
                    </div>

                    {/* Hover overlay */}
                    {isLink && (
                      <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mb-1.5">
                      {project.category}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold leading-snug mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-muted/60 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Footer links — above the stretched link so they're clickable */}
                    <div className="relative z-20 flex items-center justify-between pt-3 border-t border-border/40">
                      {project.private ? (
                        <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1.5">
                          <Lock className="h-3 w-3" />
                          Available on request
                        </span>
                      ) : (
                        <div className="flex gap-3">
                          {project.liveUrl && project.liveUrl !== "#" && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-[11px] font-mono text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
                            >
                              <ExternalLink className="h-3 w-3" /> Live
                            </a>
                          )}
                          {project.githubUrl && project.githubUrl !== "#" && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-[11px] font-mono text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
                            >
                              <Github className="h-3 w-3" /> Code
                            </a>
                          )}
                        </div>
                      )}
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <p className="text-muted-foreground">No projects in this category yet.</p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-28 bento p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-40">
            <div className="aurora" />
          </div>
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
              Need someone who ships{" "}
              <span className="font-serif italic font-normal gradient-text-vivid">AI products end-to-end?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              I architect LLM systems, build the models, and ship the product around them. Let&apos;s talk.
            </p>
            <Button
              size="lg"
              className="rounded-full bg-foreground text-background hover:bg-foreground/90"
              asChild
            >
              <a href="/contact">Get in touch</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
