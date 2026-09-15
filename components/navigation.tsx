"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, X, Github, Linkedin, Download, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import balaji from "../public/profile-pic.png"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
]

const socials = [
  { icon: Github, href: "https://github.com/Balaji91221", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/kelavathbalajinaik/", label: "LinkedIn" },
]

const iconLinkClass =
  "items-center justify-center rounded-full text-muted-foreground transition-colors duration-200 hover:bg-muted/60 hover:text-foreground"

// The buttons that open and close the menu change only their text colour on
// hover: a background hover sticks after a tap on touch screens.
const menuButtonClass =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors duration-200 hover:text-foreground"

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close the menu after navigation and when the window grows past the phone layout.
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)")
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuOpen(false)
    }
    desktop.addEventListener("change", handleChange)
    return () => desktop.removeEventListener("change", handleChange)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-3 md:top-4 z-50 px-3"
    >
      <nav
        aria-label="Primary"
        className={`relative mx-auto flex h-14 items-center justify-between gap-2 rounded-full border pl-2 pr-2 transition-[max-width,background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? "max-w-3xl border-border bg-background/85 shadow-md shadow-black/10 backdrop-blur-xl"
            : "max-w-4xl border-border/60 bg-background/55 shadow-lg shadow-black/10 backdrop-blur-xl"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="group flex shrink-0 items-center gap-2.5 rounded-full py-1 pl-1 pr-2">
          <span className="block h-9 w-9 overflow-hidden rounded-full ring-1 ring-border transition-shadow duration-200 group-hover:ring-2 group-hover:ring-primary">
            <Image
              src={balaji}
              alt="Kelavath Balaji Naik"
              width={36}
              height={36}
              className="h-full w-full object-cover"
            />
          </span>
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
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className={`hidden h-10 w-10 lg:inline-flex ${iconLinkClass}`}
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
          <span className="mx-0.5 hidden h-5 w-px bg-border/60 lg:inline-block" />
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <Button
            asChild
            size="sm"
            className="group btn-shine h-11 gap-1.5 rounded-full px-4 text-xs font-semibold md:h-9"
          >
            <Link href="/contact">
              Get in touch
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Button>

          {/* Mobile menu: a Radix dialog, so it brings a scrim, scroll lock,
              Escape, outside-tap close and a focus trap. The trigger gets
              aria-expanded / aria-controls / aria-haspopup from Radix. */}
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger className={`${menuButtonClass} md:hidden`} aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            {/* The stock close button is 16 px with a grey open-state fill, so it is
                hidden here and a 44 px one is rendered in the header row below. */}
            <SheetContent
              side="top"
              className="inset-x-3 top-3 rounded-lg border border-border/60 bg-background/95 p-3 shadow-xl backdrop-blur-xl data-[state=open]:duration-300 [&>button:last-child]:hidden"
            >
              <div className="flex items-center justify-between pl-3">
                <SheetTitle className="text-xs font-mono font-medium uppercase tracking-[0.3em] text-primary">
                  Menu
                </SheetTitle>
                <SheetClose className={menuButtonClass} aria-label="Close menu">
                  <X className="h-5 w-5" />
                </SheetClose>
              </div>
              <SheetDescription className="sr-only">Site navigation and links.</SheetDescription>
              <nav aria-label="Mobile" className="mt-2 flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex min-h-11 items-center rounded-lg px-4 text-[15px] font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/80 hover:bg-muted/60"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-2 flex items-center gap-1 border-t border-border/60 pt-3">
                <ThemeToggle />
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`inline-flex h-11 w-11 ${iconLinkClass}`}
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
                <Button variant="outline" size="sm" className="ml-auto h-11 rounded-full px-4 text-xs" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="mr-1.5 h-3.5 w-3.5" />
                    Resume
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  )
}
