"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Github, Linkedin, Download, Mail } from "lucide-react"
import Image from "next/image"
import balaji from "../public/profile-pic.png"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-sm"
            : "bg-background/60 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-3 md:px-5 h-14 md:h-16 flex items-center justify-between gap-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group pl-1.5 pr-2">
            <div className="relative shrink-0">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden ring-1 ring-border group-hover:ring-primary transition-all">
                <Image
                  src={balaji}
                  alt="Kelavath Balaji Naik"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary ring-2 ring-background" />
              </span>
            </div>
            <span className="hidden sm:inline text-sm font-semibold tracking-tight">
              Balaji<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5 bg-muted/40 border border-border/40 rounded-full p-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-[13px] font-medium px-4 py-1.5 rounded-full transition-colors ${
                  isActive(item.href) ? "text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-foreground rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:inline-flex h-8 w-8 rounded-full text-muted-foreground hover:text-foreground"
              asChild
            >
              <a href="https://github.com/Balaji91221" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:inline-flex h-8 w-8 rounded-full text-muted-foreground hover:text-foreground"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/kelavathbalajinaik/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <ThemeToggle />
            <Button
              size="sm"
              className="h-8 rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium text-xs px-3.5 gap-1.5"
              asChild
            >
              <Link href="/contact">
                <Mail className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Hire me</span>
                <span className="sm:hidden">Hire</span>
              </Link>
            </Button>

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-8 w-8 rounded-full"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-[68px] left-3 right-3 z-40 rounded-2xl bg-background/95 backdrop-blur-xl border border-border/60 shadow-xl p-3"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                    isActive(item.href)
                      ? "bg-foreground text-background"
                      : "text-foreground/80 hover:bg-muted/60"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-2 pt-3 mt-1 border-t border-border/40 px-2">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
                  <a href="https://github.com/Balaji91221" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
                  <a
                    href="https://www.linkedin.com/in/kelavathbalajinaik/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="ml-auto rounded-full h-8 text-xs" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="h-3.5 w-3.5 mr-1.5" />
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
