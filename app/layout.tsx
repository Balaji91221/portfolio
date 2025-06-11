import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kelavath Balaji Naik - Full Stack Developer",
  description: "Portfolio of Kelavath Balaji Naik, CSE Graduate from VIT-AP, Full-Stack Developer and Researcher",
    
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <main className="px-4 py-8">{children}</main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
