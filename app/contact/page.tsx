"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
  Clock,
  MapPin,
  type LucideIcon,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { GlowCard } from "@/components/glow-card"
import { RevealText } from "@/components/reveal"

const EASE = [0.22, 1, 0.36, 1] as const
const EMAIL = "kbalaji15j@gmail.com"

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE, delay: i * 0.06 },
})

type ContactRow = {
  icon: LucideIcon
  label: string
  value: string
  href?: string
  external?: boolean
}

const contactRows: ContactRow[] = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/kelavathbalajinaik",
    href: "https://www.linkedin.com/in/kelavathbalajinaik/",
    external: true,
  },
  { icon: Phone, label: "Phone", value: "+91 93988 06613", href: "tel:+919398806613" },
  { icon: MapPin, label: "Location", value: "India — remote friendly" },
]

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Balaji91221" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/kelavathbalajinaik/" },
  { icon: Twitter, label: "Twitter / X", href: "https://x.com/KkBalaji91221" },
]

const inputClass = "h-11 rounded-lg bg-background/50 border-border/60 focus-visible:ring-primary"
const labelClass = "text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground"
const tinyLabelClass = "text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground"

type FormData = { name: string; email: string; company: string; subject: string; message: string }

const emptyForm: FormData = { name: "", email: "", company: "", subject: "", message: "" }

function buildMailto(form: FormData): string {
  const signature = form.company ? `${form.name}, ${form.company}` : form.name
  const body = `Hi Balaji,\n\n${form.message}\n\n— ${signature}\n${form.email}`
  const subject = encodeURIComponent(form.subject || "Hello")
  return `mailto:${EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(emptyForm)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // There is no backend: the form hands the message to the visitor's email app.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.location.href = buildMailto(formData)
    toast({
      title: "Your email app should open with the message filled in.",
      description: `If nothing opened, email ${EMAIL} directly.`,
    })
  }

  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-24 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Background — restrained */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="aurora opacity-40 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* ============ HERO ============ */}
        <motion.header {...fadeUp(0)} className="mb-14 md:mb-20 pb-10 md:pb-12 border-b border-border/60">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 max-w-4xl">
            <RevealText>
              Get in <span className="font-serif italic font-normal text-primary">touch</span>.
            </RevealText>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            If you&apos;re hiring for an Applied AI or GenAI engineering role, email me or use the
            form and I&apos;ll get back to you. I&apos;m also open to collaborating on AI projects
            and technical content.
          </p>
        </motion.header>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-start">
          {/* ============ LEFT — contact rows ============ */}
          <motion.div {...fadeUp(1)} className="lg:col-span-2">
            <GlowCard className="card-glow rounded-lg border border-border/60 bg-card overflow-hidden transition-shadow duration-300 hover:shadow-sm">
              <div className="divide-y divide-border/60">
                {contactRows.map((row) => {
                  const inner = (
                    <>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <row.icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className={`block mb-0.5 ${tinyLabelClass}`}>{row.label}</span>
                        <span className="block text-sm font-medium truncate">{row.value}</span>
                      </span>
                      {row.href && (
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary transition-all duration-300" />
                      )}
                    </>
                  )
                  const rowClass = "group flex items-center gap-4 px-5 py-5"
                  return row.href ? (
                    <a
                      key={row.label}
                      href={row.href}
                      target={row.external ? "_blank" : undefined}
                      rel={row.external ? "noopener noreferrer" : undefined}
                      className={`${rowClass} transition-colors duration-200 hover:bg-muted/40`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={row.label} className={rowClass}>
                      {inner}
                    </div>
                  )
                })}

                {/* Socials row */}
                <div className="px-5 py-5">
                  <p className={`mb-3 ${tinyLabelClass}`}>Elsewhere</p>
                  <div className="flex gap-2">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex h-11 flex-1 items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-colors duration-200"
                      >
                        <s.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* ============ RIGHT — form ============ */}
          <motion.div {...fadeUp(2)} className="lg:col-span-3">
            <GlowCard className="card-glow rounded-lg border border-border/60 bg-card p-6 md:p-10 transition-shadow duration-300 hover:shadow-sm">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3">
                Send a message
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Tell me about the role or project and I&apos;ll reply by email.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className={labelClass}>
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className={labelClass}>
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@company.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company" className={labelClass}>
                      Company <span className="text-muted-foreground/60 normal-case tracking-normal">(optional)</span>
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Acme AI"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className={labelClass}>
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Role, project or collaboration"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className={labelClass}>
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="The role or project, the stack, and what you'd like to discuss"
                    required
                    rows={6}
                    className="rounded-lg bg-background/50 border-border/60 focus-visible:ring-primary resize-none"
                  />
                </div>

                <div className="space-y-3 pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="group w-full rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                  >
                    Send via email
                    <Mail className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Button>
                  <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    Reply within 24 hours
                  </p>
                </div>
              </form>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
