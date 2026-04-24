"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, ArrowUpRight } from "lucide-react"
import Link from "next/link"

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
  { icon: Mail, href: "mailto:kbalaji15j@gmail.com", label: "Email" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t border-border/50 bg-background"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
        {/* CTA row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-10 mb-10 border-b border-border/40">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3">
              — Let&apos;s connect
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05] max-w-2xl">
              Building something in AI?{" "}
              <span className="font-serif italic font-normal text-muted-foreground">Let&apos;s talk.</span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background text-sm font-medium px-5 py-2.5 hover:bg-foreground/90 transition-colors self-start md:self-auto shrink-0"
          >
            <Mail className="h-4 w-4" />
            Get in touch
            <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Info grid */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="font-semibold text-base mb-2">Kelavath Balaji Naik</div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              AI / ML Engineer building LLM systems, RAG, and agentic AI. Currently at Samco
              Securities. VIT-AP &apos;25.
            </p>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Navigate
            </div>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Contact
            </div>
            <a
              href="mailto:kbalaji15j@gmail.com"
              className="text-sm font-medium hover:text-primary transition-colors block mb-3 break-all"
            >
              kbalaji15j@gmail.com
            </a>
            <div className="flex gap-1.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  aria-label={s.label}
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {year} Kelavath Balaji Naik. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for new opportunities
            </span>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
