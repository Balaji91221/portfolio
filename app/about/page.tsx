"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Rocket, Code, Trophy, Calendar, Download, Cpu, Layers, Database, Globe, Wrench, Terminal, Monitor, Star, BookOpen, Cloud, GitBranch } from "lucide-react"
import React from "react"

// Small helper to render icon components uniformly and safely
const RenderIcon = ({ icon, className = "w-6 h-6 text-primary-foreground" }: { icon: any; className?: string }) => {
  if (!icon) return <span className={`inline-block ${className}`} />
  if (typeof icon === "string" || typeof icon === "number") return <span className={`text-xl ${className}`}>{icon}</span>
  try {
    return React.createElement(icon, { className })
  } catch (e) {
    return <span className={`inline-block ${className}`} />
  }
}
import { Button } from "@/components/ui/button"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiGitlab,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiFastapi,
  SiFlask,
} from "react-icons/si"

const timeline = [
  {
    icon: GraduationCap,
    title: "Bachelor of Technology - BTech, Computer Science & Engineering",
    subtitle: "VIT-AP University — Specialisation: AI & ML",
    date: "Dec 2021 – May 2025",
    description: "Focused on AI & ML coursework and projects; strengthened foundations in algorithms, systems, and data science.",
    extra: "Grade: 8.8 • Skills: Communication, CSE fundamentals, Machine Learning",
  },
  {
    icon: BookOpen,
    title: "Intermediate",
    subtitle: "Sri Sai Krupa Junior College — MPC",
    date: "Jun 2019 – May 2021",
    description: "Completed intermediate (MPC) with strong performance in mathematics and physics.",
    extra: "Marks: 940/1000",
  },
  {
    icon: BookOpen,
    title: "AP Model School & Jr. College (APMS)",
    subtitle: "SSC",
    date: "—",
    description: "Completed secondary education with strong academic achievement.",
    extra: "CGPA: 9.3/10",
  },
]

const skills = [
  {
    category: "AI/ML Frameworks",
    technologies: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    ],
    icon: Cpu,
  },
  {
    category: "Languages",
    technologies: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
    icon: Code,
  },
  {
    category: "AI/ML Specializations",
    technologies: [
      { name: "NLP", icon: SiGithub, color: "#6e5494" },
      { name: "RAG Systems", icon: SiGithub, color: "#6e5494" },
      { name: "Deep Learning", icon: SiTensorflow, color: "#FF6F00" },
      { name: "Clustering", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Time Series Analysis", icon: SiScikitlearn, color: "#F7931E" },
    ],
    icon: Layers,
  },
  {
    category: "Data Engineering",
    technologies: [
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Feature Engineering", icon: SiGithub, color: "#6e5494" },
    ],
    icon: Wrench,
  },
  {
    category: "Databases",
    technologies: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "VectorDB (Pinecone)", icon: SiGithub, color: "#6e5494" },
    ],
    icon: Database,
  },
  {
    category: "Web Technologies",
    technologies: [
      { name: "FastAPI", icon: SiFastapi, color: "#005571" },
      { name: "Flask", icon: SiFlask, color: "#000000" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "REST APIs", icon: SiNodedotjs, color: "#339933" },
    ],
    icon: Globe,
  },
  {
    category: "Frontend Development",
    technologies: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
    ],
    icon: "🎨",
  },
  {
    category: "Backend Development",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
    ],
    icon: "⚙️",
  },
  {
    category: "Database Management",
    technologies: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
    icon: "🗄️",
  },
  {
    category: "Cloud Computing",
    technologies: [

      { name: "Docker", icon: SiDocker, color: "#2496ED" },

    ],
    icon: "☁️",
  },
  {
    category: "Version Control",
    technologies: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "GitLab", icon: SiGitlab, color: "#FCA326" },
    ],
    icon: "🔧",
  },
]



export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AI/ML Engineer and Full-Stack Developer with a strong foundation in Computer Science and Engineering, specializing in Artificial Intelligence and Machine Learning (VIT-AP University, 2025). I focus on building scalable, data-driven products and deploying machine learning solutions that deliver real-world impact. My journey blends curiosity, hands-on engineering, and a drive to turn ideas into robust, user-focused applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </motion.div>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-6 overflow-hidden">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <Card className="flex-1 bg-white dark:bg-card/50 border border-slate-200 dark:border-border/50 rounded-lg shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                      <Badge variant="secondary" className="flex items-center gap-1 text-slate-700 dark:text-white">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </Badge>
                    </div>
                    <p className="text-sky-600 font-medium mb-2">{item.subtitle}</p>
                    <p className="text-slate-700 dark:text-muted-foreground mb-2">{item.description}</p>
                    {item.extra && (
                      <p className="font-semibold text-sm text-slate-900 dark:text-primary">{item.extra}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>




        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-9 h-9 rounded-full bg-card/10 flex items-center justify-center mr-3">
                        <RenderIcon icon={skill.icon} className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold">{skill.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => {
                        const IconComponent = tech.icon
                        return (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs flex items-center space-x-1.5 px-2.5 py-1.5 hover:scale-105 transition-transform duration-200"
                          >
                            {IconComponent ? (
                              <IconComponent
                                className="w-3.5 h-3.5"
                                style={{ color: tech.color }}
                              />
                            ) : (
                              <span className="w-3.5 h-3.5 inline-block" />
                            )}
                            <span>{tech.name}</span>
                          </Badge>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 text-center text-sm text-muted-foreground max-w-4xl mx-auto">
            I experiment with open-source models daily and keep up-to-date with the latest releases and AI/ML news.
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Certificate Images */}
            <div className="col-span-full grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 2025: Oracle & GitHub */}
              <div className="flex flex-col items-center">
                <img src="/certificates/oracle-foundations.png" alt="Oracle Certified Foundations Associate" className="rounded-lg border border-slate-200 shadow-sm bg-white dark:bg-card object-contain w-full h-64 p-2" />
                <div className="mt-2 text-center">
                  <div className="font-semibold text-base">Oracle Certified Foundations Associate</div>
                  <div className="text-xs text-muted-foreground">Oracle University</div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img src="certificates/oracle-ds.png" alt="Oracle Certified Data Science Professional" className="rounded-lg border border-slate-200 shadow-sm bg-white dark:bg-card object-contain w-full h-64 p-2" />
                <div className="mt-2 text-center">
                  <div className="font-semibold text-base">Oracle Certified Data Science Professional</div>
                  <div className="text-xs text-muted-foreground">Oracle University</div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img src="/certificates/oracle-genai-professional.png" alt="Oracle Certified Generative AI Professional" className="rounded-lg border border-slate-200 shadow-sm bg-white dark:bg-card object-contain w-full h-64 p-2" />
                <div className="mt-2 text-center">
                  <div className="font-semibold text-base">Oracle Certified Generative AI Professional</div>
                  <div className="text-xs text-muted-foreground">Oracle University</div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img src="/certificates/github.png" alt="GitHub Certification" className="rounded-lg border border-slate-200 shadow-sm bg-white dark:bg-card object-contain w-full h-64 p-2" />
                <div className="mt-2 text-center">
                  <div className="font-semibold text-base">GitHub Certification</div>
                  <div className="text-xs text-muted-foreground">GitHub</div>
                </div>
              </div>
              {/* 2024: Microsoft */}
              <div className="flex flex-col items-center">
                <img src="/certificates/azure-ai-fundamentals.png" alt="Microsoft Certified: Azure AI Fundamentals" className="rounded-lg border border-slate-200 shadow-sm bg-white dark:bg-card object-contain w-full h-64 p-2" />
                <div className="mt-2 text-center">
                  <div className="font-semibold text-base">Microsoft Certified: Azure AI Fundamentals</div>
                  <div className="text-xs text-muted-foreground">Microsoft</div>
                </div>
              </div>
              {/* 2023: Google & DSA */}
              <div className="flex flex-col items-center">
                <img src="/certificates/google-externship.png" alt="Google Developers Externship - AI/ML" className="rounded-lg border border-slate-200 shadow-sm bg-white dark:bg-card object-contain w-full h-64 p-2" />
                <div className="mt-2 text-center">
                  <div className="font-semibold text-base">AI/ML Externship</div>
                  <div className="text-xs text-muted-foreground">Google Developers & SmartInternz</div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img src="/certificates/dsa.png" alt="NERD+ (DSA using Java) — iAmNeo NeoColab" className="rounded-lg border border-slate-200 shadow-sm bg-white dark:bg-card object-contain w-full h-64 p-2" />
                <div className="mt-2 text-center">
                  <div className="font-semibold text-base">NERD+ (DSA using Java)</div>
                  <div className="text-xs text-muted-foreground">iAmNeo NeoColab</div>
                </div>
              </div>
            </div>
            {/* Text List (optional, keep for accessibility/search) */}

          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(() => {
              const achievements = [
                {
                  title: "GATE 2025",
                  description: "Secured All India Rank (AIR): 19299",
                  icon: GraduationCap,
                  highlight: true,
                  primary: true,
                  paper: "Data Science & AI (DA)",
                  air: "19299",
                },
                {
                  title: "Dean's List",
                  description: "Achieved Dean's List recognition for 4 consecutive semesters",
                  icon: Trophy,
                  highlight: true,
                },
                {
                  title: "Hackathon Winner",
                  description: "Awarded 5th place in the Great India Hackathon for a full-stack project",
                  icon: Rocket,
                  highlight: true,
                },
                {
                  title: "Open Source Contributor",
                  description: "Contributed to 6+ open source projects with 2+ stars",
                  icon: SiGithub,
                  highlight: true,
                },
                {
                  title: "Technical Lead",
                  description: "Led development team of 50 members in university CSI club",
                  icon: Briefcase,
                  highlight: true,
                },
                {
                  title: "Research Publication",
                  description: "Published paper on 'Binary Algorithm in AI for Early Skin Cancer Identification with 3D-TBP' in IEEE",
                  icon: BookOpen,
                  highlight: true,
                },
                {
                  title: "Industry Recognition",
                  description: "Ranked #10153 in Naukri Campus Young Turks Round 2, competing in Coding, Engineering, and Data & AI categories",
                  icon: Star,
                  highlight: true,
                },
              ]

              return achievements
                .slice()
                .sort((a, b) => (b.primary ? 1 : 0) - (a.primary ? 1 : 0))
                .map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    {achievement.primary ? (
                      <Card className="h-full md:col-span-2 lg:col-span-2 bg-white border border-slate-200 rounded-lg shadow-sm transform hover:shadow-md transition-all duration-200 dark:bg-gradient-to-r dark:from-indigo-600 dark:via-primary dark:to-emerald-500 dark:text-white">
                        <CardContent className="p-5">
                          <div className="text-center">
                            <div className="mx-auto w-16 h-16 rounded-full bg-sky-50 dark:bg-white/10 flex items-center justify-center mb-3 ring-1 ring-slate-100">
                              <RenderIcon icon={achievement.icon} className="w-8 h-8 dark:text-white text-sky-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">{achievement.title}</h3>
                            <div className="mb-3 flex justify-center gap-2">
                              <Badge className="bg-slate-100 text-slate-800 font-semibold dark:bg-white dark:text-primary">Top Achievement</Badge>
                              {achievement.air && <Badge className="bg-slate-100 text-slate-800 dark:bg-white/20 dark:text-white">AIR: {achievement.air}</Badge>}
                            </div>
                            <p className="text-slate-700 dark:text-white font-medium">{achievement.paper || achievement.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ) : achievement.highlight ? (
                      <Card className="h-full bg-white border border-slate-200 rounded-lg shadow-sm transition-all duration-200 dark:bg-card/60 dark:text-white dark:border-transparent">
                        <CardContent className="p-5">
                          <div className="text-center">
                            <div className="mx-auto w-12 h-12 rounded-full bg-sky-50 dark:bg-white/10 flex items-center justify-center mb-3">
                              <RenderIcon icon={achievement.icon} className="w-6 h-6 dark:text-white text-sky-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-1 text-slate-900 dark:text-white">{achievement.title}</h3>
                            <p className="text-slate-700 dark:text-white text-sm">{achievement.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ) : (
                      <Card className="h-full bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                        <CardContent className="p-5">
                          <div className="text-center text-slate-800">
                            <div className="mx-auto w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center mb-3">
                              <RenderIcon icon={achievement.icon} className="w-6 h-6 text-sky-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                            <p className="text-sm text-slate-700 leading-relaxed">{achievement.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </motion.div>
                ))
            })()}
          </div>
        </motion.section>
      </div>
    </div>
  )
}