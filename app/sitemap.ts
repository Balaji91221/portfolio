import type { MetadataRoute } from "next"

// Same base-URL rule as metadataBase in app/layout.tsx.
const baseUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000")

const routes = ["/", "/projects", "/about", "/experience", "/contact"]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map((route) => ({
    url: new URL(route, baseUrl).href,
    lastModified,
  }))
}
