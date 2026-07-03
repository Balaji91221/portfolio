"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const EASE = [0.22, 1, 0.36, 1] as const

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
]

const socials = [
  { icon: Github, href: "https://github.com/Balaji91221", label: "GitHub", hover: "hover:text-emerald-400" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/kelavathbalajinaik/", label: "LinkedIn", hover: "hover:text-cyan-400" },
  { icon: Twitter, href: "https://x.com/KkBalaji91221", label: "Twitter / X", hover: "hover:text-violet-400" },
  { icon: Mail, href: "mailto:kbalaji15j@gmail.com", label: "Email", hover: "hover:text-amber-400" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-background">
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="aurora" />
      </div>
      <div className="relative z-10 container mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-20">
        {/* ============ Zone 1 — CTA ============ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-14 mb-14 border-b border-border/60"
        >
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-4">
              Let&apos;s connect
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl">
              Let&apos;s work{" "}
              <span className="font-serif italic font-normal gradient-text-aurora">together</span>.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Have a project in mind? Drop a line at{" "}
              <a
                href="mailto:kbalaji15j@gmail.com"
                className="link-sweep font-medium text-foreground hover:text-primary transition-colors"
              >
                kbalaji15j@gmail.com
              </a>
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:self-auto"
          >
            <Mail className="h-4 w-4" />
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* ============ Zone 2 — brand + link columns ============ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.06 }}
          className="grid gap-10 md:grid-cols-12"
        >
          {/* Brand */}
          <div className="md:col-span-6">
            <div className="mb-3 text-xl tracking-tight">
              <span className="font-normal text-muted-foreground">Kelavath </span>
              <span className="font-extrabold gradient-text-aurora">Balaji</span>
              <span className="font-normal text-muted-foreground"> Naik</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              AI / ML Engineer building LLM systems, RAG, and agentic AI. Currently at Samco
              Securities. VIT-AP &apos;25.
            </p>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Elsewhere */}
          <div className="md:col-span-3">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Elsewhere
            </p>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors ${s.hover}`}
                  >
                    {s.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ============ Zone 3 — bottom hairline row ============ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.12 }}
          className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center"
        >
          <span>
            © {year}{" "}
            <span className="font-semibold text-foreground">
              Kelavath <span className="text-primary">Balaji</span> Naik
            </span>
            . All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for new opportunities
            </span>
            <span>Built with Next.js</span>
          </div>
        </motion.div>
      </div>

      {/* ============ Giant signature watermark ============ */}
      <div className="relative z-10 px-4 md:px-6" aria-hidden>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
          className="container mx-auto max-w-6xl select-none"
        >
          <div className="overflow-hidden">
            <span className="name-shine block -mb-[0.12em] whitespace-nowrap text-center font-extrabold leading-[0.82] tracking-tighter text-[clamp(4rem,23vw,20rem)]">
              BALAJI
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
