import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected AI, LLM and full-stack projects by Kelavath Balaji Naik.",
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
