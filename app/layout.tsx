import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google"
import { MotionConfig } from "framer-motion"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { ScrollProgress } from "@/components/scroll-progress"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-serif" })

const siteName = "Kelavath Balaji Naik"
const description =
  "Applied AI Engineer building production voice AI, RAG, LLM infrastructure, MCP tooling and multi-agent systems. LinkedIn content creator on applied AI."

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: `${siteName} — Applied AI Engineer`,
    template: `%s — ${siteName}`,
  },
  description,
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    siteName,
    title: `${siteName} — Applied AI Engineer`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Applied AI Engineer`,
    description,
    creator: "@KkBalaji91221",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} ${instrument.variable} font-sans antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <MotionConfig reducedMotion="user">
            <div className="min-h-screen bg-background text-foreground relative">
              <ScrollProgress />
              <Navigation />
              <main id="main" tabIndex={-1} className="outline-none">
                <PageTransition>{children}</PageTransition>
              </main>
              <Footer />
            </div>
            <Toaster />
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  )
}
