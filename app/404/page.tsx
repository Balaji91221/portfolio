"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background — faint grid only */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="aurora opacity-40 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-6">
            Error 404
          </p>

          <div className="text-[8rem] md:text-[12rem] lg:text-[14rem] font-bold leading-none tracking-tight gradient-text-aurora select-none mb-4">
            404
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            This page <span className="font-serif italic font-normal">doesn&apos;t exist</span>.
          </h1>

          <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed mb-10">
            It might have been moved, deleted, or you entered the wrong URL. Either way — nothing
            shipped here.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 group"
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                Back home
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="rounded-full text-muted-foreground hover:text-foreground group"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              Go back
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
