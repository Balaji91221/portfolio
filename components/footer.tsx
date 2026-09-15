"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const EASE = [0.22, 1, 0.36, 1] as const
const EMAIL = "kbalaji15j@gmail.com"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
]

const socials = [
  { icon: Github, href: "https://github.com/Balaji91221", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/kelavathbalajinaik/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/KkBalaji91221", label: "Twitter / X" },
  { icon: Mail, href: `mailto:${EMAIL}`, label: "Email" },
]

const columnLabelClass = "text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-2"

// 44 px rows so every link is a comfortable tap target on phones.
const rowLinkClass =
  "inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-background">
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="relative z-10 container mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-16">
        {/* ============ Zone 1 — CTA ============ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col gap-3 pb-8 mb-8 border-b border-border/60 md:flex-row md:items-end md:justify-between md:gap-8 md:pb-10 md:mb-10"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">
              Let&apos;s talk.
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Open to Applied AI / GenAI engineering roles and collaborations.
            </p>
          </div>
          <a
            href={`mailto:${EMAIL}`}
            className="link-sweep inline-flex min-h-11 shrink-0 items-center self-start text-base font-medium text-foreground transition-colors duration-200 hover:text-primary md:self-auto"
          >
            {EMAIL}
          </a>
        </motion.div>

        {/* ============ Zone 2 — brand + link columns ============ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.06 }}
          className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-12 md:gap-10"
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-6">
            <div className="mb-3 text-xl tracking-tight">
              <span className="font-normal text-muted-foreground">Kelavath </span>
              <span className="font-semibold text-foreground">Balaji</span>
              <span className="font-normal text-muted-foreground"> Naik</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Applied AI Engineer building production voice AI, RAG, LLM infrastructure and
              agentic systems. Currently at Samco Securities.
            </p>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3">
            <p className={columnLabelClass}>Navigate</p>
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={rowLinkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Elsewhere */}
          <div className="md:col-span-3">
            <p className={columnLabelClass}>Elsewhere</p>
            <ul>
              {socials.map((s) => {
                const external = s.href.startsWith("http")
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className={`group gap-2 ${rowLinkClass}`}
                    >
                      {s.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-[opacity,transform] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </motion.div>

        {/* ============ Zone 3 — bottom hairline row ============ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.12 }}
          className="mt-8 flex flex-col items-start md:mt-10 justify-between gap-3 border-t border-border/60 pt-6 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center"
        >
          <span>
            © {year}{" "}
            <span className="font-semibold text-foreground">
              Kelavath <span className="text-primary">Balaji</span> Naik
            </span>
            . All rights reserved.
          </span>
          <span>Built with Next.js</span>
        </motion.div>
      </div>
    </footer>
  )
}
