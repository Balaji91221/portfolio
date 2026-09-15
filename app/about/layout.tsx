import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "About",
  description: "Background, disciplines and career path of Kelavath Balaji Naik, Applied AI Engineer.",
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
