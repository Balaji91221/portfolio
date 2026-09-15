import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Experience",
  description: "Roles, outcomes and invited guest lectures of Kelavath Balaji Naik.",
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
