import type { IconType } from "react-icons"
import type { LucideIcon } from "lucide-react"
import {
  Bot,
  Search,
  Code2,
  Server,
  Activity,
  AudioLines,
  Cloud,
  Mic,
  Cpu,
  Network,
  Layers,
  Zap,
  GitBranch,
  Braces,
  Workflow,
  KeyRound,
  Radio,
  Coins,
  Scissors,
  Binary,
  Database,
  ListOrdered,
  Combine,
  SlidersHorizontal,
  Phone,
  MessageSquare,
} from "lucide-react"
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiFastapi,
  SiSqlalchemy,
  SiPydantic,
  SiGraphql,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiClickhouse,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiNginx,
  SiGrafana,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiLangchain,
  SiLanggraph,
  SiOpenai,
  SiClaude,
  SiGooglegemini,
  SiOllama,
  SiNvidia,
  SiMeta,
  SiMistralai,
  SiElevenlabs,
  SiX,
  SiHuggingface,
  SiLivekit,
  SiGoogle,
} from "react-icons/si"

export type Skill = { name: string; icon?: IconType | LucideIcon }

export type SkillGroup = {
  title: string
  icon: LucideIcon
  items: Skill[]
  /** Highlighted groups render first and larger. */
  primary?: boolean
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Agentic AI & LLM",
    icon: Bot,
    primary: true,
    items: [
      { name: "MCP", icon: Network },
      { name: "A2A", icon: GitBranch },
      { name: "LangGraph", icon: SiLanggraph },
      { name: "LangChain", icon: SiLangchain },
      { name: "LiteLLM", icon: Layers },
      { name: "Tool calling", icon: Zap },
      { name: "Structured outputs", icon: Braces },
      { name: "Multi-agent systems", icon: Workflow },
      { name: "OpenAI", icon: SiOpenai },
      { name: "Claude", icon: SiClaude },
      { name: "Gemini", icon: SiGooglegemini },
    ],
  },
  {
    title: "RAG & Retrieval",
    icon: Search,
    primary: true,
    items: [
      { name: "Hybrid search (dense + BM25)", icon: Combine },
      { name: "RRF", icon: ListOrdered },
      { name: "LLM reranking", icon: SlidersHorizontal },
      { name: "Qdrant", icon: Database },
      { name: "fastembed", icon: Binary },
      { name: "Chunking", icon: Scissors },
      { name: "Embeddings", icon: SiHuggingface },
      { name: "Vector databases", icon: Database },
    ],
  },
  {
    title: "Languages",
    icon: Code2,
    items: [
      { name: "Python", icon: SiPython },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Backend & Data",
    icon: Server,
    items: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "SQLAlchemy", icon: SiSqlalchemy },
      { name: "Alembic", icon: GitBranch },
      { name: "Pydantic", icon: SiPydantic },
      { name: "asyncio", icon: Zap },
      { name: "REST", icon: Cloud },
      { name: "GraphQL", icon: SiGraphql },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "ClickHouse", icon: SiClickhouse },
    ],
  },
  {
    title: "LLMOps & DevOps",
    icon: Activity,
    items: [
      { name: "Streaming (SSE / WebSockets)", icon: Radio },
      { name: "Cost tracking", icon: Coins },
      { name: "OAuth 2.1 / JWT", icon: KeyRound },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Jenkins", icon: SiJenkins },
      { name: "Nginx", icon: SiNginx },
      { name: "CI/CD", icon: Workflow },
      { name: "Grafana", icon: SiGrafana },
    ],
  },
  {
    title: "Voice & Frontend",
    icon: AudioLines,
    items: [
      { name: "LiveKit Agents", icon: SiLivekit },
      { name: "SIP", icon: Phone },
      { name: "STT / TTS pipelines", icon: Mic },
      { name: "Speech-to-speech", icon: MessageSquare },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React Flow", icon: Workflow },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
]

/** The two highlighted groups, used by the compact "core stack" card. */
export const coreSkillGroups: SkillGroup[] = skillGroups.filter((group) => group.primary)

export type LandscapeRow = {
  title: string
  icon: LucideIcon
  items: Skill[]
}

/** Models, runtimes and protocols tracked and used day to day. */
export const aiLandscape: LandscapeRow[] = [
  {
    title: "Hosted models",
    icon: Cloud,
    items: [
      { name: "OpenAI GPT", icon: SiOpenai },
      { name: "Claude", icon: SiClaude },
      { name: "Google Gemini", icon: SiGooglegemini },
      { name: "xAI Grok", icon: SiX },
    ],
  },
  {
    title: "Speech models",
    icon: Mic,
    items: [
      { name: "OpenAI Realtime", icon: SiOpenai },
      { name: "Gemini Live", icon: SiGoogle },
      { name: "ElevenLabs", icon: SiElevenlabs },
      { name: "Grok Voice", icon: SiX },
    ],
  },
  {
    title: "Open-weight via Ollama / NVIDIA",
    icon: Cpu,
    items: [
      { name: "Ollama", icon: SiOllama },
      { name: "NVIDIA NIM", icon: SiNvidia },
      { name: "Qwen", icon: Cpu },
      { name: "Llama", icon: SiMeta },
      { name: "Mistral", icon: SiMistralai },
      { name: "Gemma", icon: SiGoogle },
      { name: "DeepSeek", icon: Cpu },
    ],
  },
  {
    title: "Protocols & routing",
    icon: Network,
    items: [
      { name: "MCP", icon: Network },
      { name: "A2A", icon: GitBranch },
      { name: "LiteLLM", icon: Layers },
      { name: "OpenAI-compatible", icon: SiOpenai },
    ],
  },
]
