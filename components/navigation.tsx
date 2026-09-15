"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Github, Linkedin, Download, ArrowUpRight } from "lucide-react"
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
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Floating glass island */}
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-3 md:top-4 z-50 px-3"
      >
        <nav
          className={`relative mx-auto flex h-14 items-center justify-between gap-2 rounded-full border pl-2 pr-2 transition-all duration-500 ${
            scrolled
              ? "max-w-3xl border-border bg-background/85 shadow-md shadow-black/10 backdrop-blur-xl"
              : "max-w-4xl border-border/60 bg-background/55 shadow-lg shadow-black/10 backdrop-blur-xl"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="group flex shrink-0 items-center gap-2.5 rounded-full py-1 pl-1 pr-2">
            <div className="h-9 w-9 overflow-hidden rounded-full ring-1 ring-border transition-all group-hover:ring-2 group-hover:ring-primary">
              <Image
                src={balaji}
                alt="Kelavath Balaji Naik"
                width={36}
                height={36}
                className="h-full w-full object-cover"
              />
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-0.5 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive(item.href) && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex shrink-0 items-center gap-1">
            <a
              href="https://github.com/Balaji91221"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground lg:inline-flex"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/kelavathbalajinaik/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground lg:inline-flex"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <span className="mx-0.5 hidden h-5 w-px bg-border/60 lg:inline-block" />
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              className="group btn-shine h-9 gap-1.5 rounded-full px-4 text-xs font-semibold"
            >
              <Link href="/contact">
                Contact
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Button>

            {/* Mobile toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-3 right-3 top-[72px] z-40 rounded-xl border border-border/60 bg-background/95 p-3 shadow-xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/80 hover:bg-muted/60"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-1 flex items-center gap-2 border-t border-border/40 px-2 pt-3">
                <a
                  href="https://github.com/Balaji91221"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kelavathbalajinaik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <Button variant="outline" size="sm" className="ml-auto h-9 rounded-full text-xs" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="mr-1.5 h-3.5 w-3.5" />
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
