import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kelavath Balaji Naik about AI, LLM and full-stack work.",
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
