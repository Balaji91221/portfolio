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
  Send,
  ArrowUpRight,
  Clock,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "kbalaji15j@gmail.com",
    sub: "Best for project briefs and detailed messages",
    href: "mailto:kbalaji15j@gmail.com",
    cta: "Send email",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/kelavathbalajinaik",
    sub: "Quick intros and DMs",
    href: "https://www.linkedin.com/in/kelavathbalajinaik/",
    cta: "Message",
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 93988 06613",
    sub: "For scheduled calls",
    href: "tel:+919398806613",
    cta: "Call",
  },
]

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Balaji91221" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/kelavathbalajinaik/" },
  { icon: Twitter, label: "Twitter / X", href: "https://x.com/KkBalaji91221" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const body = `Hi Balaji,\n\n${formData.message}\n\n— ${formData.name}${formData.company ? `, ${formData.company}` : ""}\n${formData.email}`
    const mailto = `mailto:kbalaji15j@gmail.com?subject=${encodeURIComponent(formData.subject || "Hello")}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    await new Promise((r) => setTimeout(r, 600))
    toast({ title: "Opening your email client…", description: "I'll reply within 24 hours." })
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-20 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div className="aurora opacity-60" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-4">
            — Let's talk
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 max-w-4xl">
            Let&apos;s build{" "}
            <span className="font-serif italic font-normal gradient-text-vivid">
              something together
            </span>
            .
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            I build production LLM systems, agentic AI, and the apps around them. If you&apos;d like
            to chat about a project or collaboration, the fastest way to reach me is below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-5">
          {/* Left — contact channels + quick facts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Primary: Email CTA */}
            <a
              href={channels[0].href}
              className="bento spotlight group p-8 block relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1.5">
                Fastest way
              </div>
              <div className="text-2xl md:text-3xl font-semibold mb-1 break-all group-hover:text-primary transition-colors">
                kbalaji15j@gmail.com
              </div>
              <div className="text-sm text-muted-foreground">
                Best for collaborations, project briefs, and longer messages.
              </div>
            </a>

            {/* Secondary channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {channels.slice(1).map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="bento p-5 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                      <c.icon className="h-4 w-4 text-primary" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
                    {c.label}
                  </div>
                  <div className="text-sm font-semibold truncate">{c.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{c.sub}</div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <Button key={s.label} variant="outline" size="icon" className="rounded-full flex-1" asChild>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <s.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bento p-6 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <Send className="h-4 w-4 text-primary" />
                  <div className="text-xs font-mono uppercase tracking-widest text-primary">
                    Send a message
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Tell me about it</h2>
                <p className="text-sm text-muted-foreground mb-8">
                  The more context you share, the faster I can get back with something useful.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Jane Doe"
                        required
                        className="h-11 rounded-xl bg-background/50 border-border/60 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jane@company.com"
                        required
                        className="h-11 rounded-xl bg-background/50 border-border/60 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="company" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                        Company <span className="text-muted-foreground/60 normal-case">(optional)</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Acme AI"
                        className="h-11 rounded-xl bg-background/50 border-border/60 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="subject" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Project idea or collaboration"
                        required
                        className="h-11 rounded-xl bg-background/50 border-border/60 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="What you're building, the stack, timeline, and how I can help…"
                      required
                      rows={6}
                      className="rounded-xl bg-background/50 border-border/60 focus:border-primary resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="rounded-full bg-foreground text-background hover:bg-foreground/90 group flex-1 sm:flex-none sm:px-8"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send message
                          <Send className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </Button>
                    <div className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      Reply within 24 hours
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
