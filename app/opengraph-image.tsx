import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Kelavath Balaji Naik — Applied AI Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(180deg, #0f1a2e 0%, #0b1220 100%)",
          color: "#f1f5f9",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, color: "#2fd38f" }}>
          APPLIED AI ENGINEER · LINKEDIN CONTENT CREATOR
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 700, lineHeight: 1 }}>
            Kelavath Balaji Naik
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#94a3b8" }}>
            Agentic AI · RAG · MCP · Production LLM Systems
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#94a3b8" }}>
          <span>github.com/Balaji91221</span>
          <span>linkedin.com/in/kelavathbalajinaik</span>
        </div>
      </div>
    ),
    size
  )
}
