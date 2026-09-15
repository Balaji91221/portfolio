import type { MetadataRoute } from "next"

// Same base-URL rule as metadataBase in app/layout.tsx.
const baseUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000")

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", baseUrl).href,
  }
}
