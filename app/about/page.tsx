"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Rocket, Code, Trophy, Calendar, Download } from "lucide-react"
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
} from "react-icons/si"

const timeline = [
  {
    icon: GraduationCap,
    title: "Graduated with Honors",
    subtitle: "VIT-AP University",
    date: "May 2025",
    description: "Bachelor of Technology in Computer Science Engineering",
  },
  {
    icon: Briefcase,
    title: "Smart Internz",
    subtitle: "SmartBridge",
    date: "Winter 2024",
    description: "Developed AI and ML projects and contributed to multiple client projects",
  },
  {
    icon: Rocket,
    title: "Launched Personal Projects",
    subtitle: "Independent Work",
    date: "Fall 2023",
    description: "Built and deployed several web applications showcasing various technologies",
  },
  {
    icon: Trophy,
    title: "Participated in Hackathons",
    subtitle: "Various Competitions",
    date: "Spring 2023",
    description: "Won multiple hackathons and coding competitions",
  },
  {
    icon: Code,
    title: "Started University",
    subtitle: "VIT-AP University",
    date: "Fall 2021",
    description: "Began journey in Computer Science and Engineering",
  },
]

const skills = [
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
      // { name: "Java", icon: SiJava, color: "#ED8B00" },
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
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      // { name: "Azure", icon: SiMicrosoftazure, color: "#0078D4" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
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

const certifications = [
  "Smartinternz - Artificial Intelligence and Machine Learning",

"Microsoft Certified: Azure AI Fundamentals",

"NERD+ (DSA using Java) — iAmNeo NeoColab",

"Cisco Networking Academy - JavaScript Essentials 2",

"Problem Solving (Basic) - HackerRank",


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
            I'm a recent Computer Science graduate with a passion for full-stack development. I love building innovative
            and user-friendly applications that solve real-world problems. My journey in tech started with a fascination
            for how things work, and it has evolved into a career path where I can continuously learn and create.
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
          <h2 className="text-3xl font-bold mb-12 text-center">Timeline</h2>
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
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-6">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <Card className="flex-1 bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium mb-2">{item.subtitle}</p>
                    <p className="text-muted-foreground">{item.description}</p>
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
                      <span className="text-2xl mr-3">{skill.icon}</span>
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
                            <IconComponent 
                              className="w-3.5 h-3.5" 
                              style={{ color: tech.color }} 
                            />
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
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <Trophy className="w-5 h-5 text-primary mr-3" />
                      <span className="font-medium">{cert}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            {[
              {
                title: "Dean's List",
                description: "Achieved Dean's List recognition for 4 consecutive semesters",
                icon: "🏆",
              },
             {
  title: "Hackathon Winner",
  description: "Awarded 5th place in the Great India Hackathon for a full-stack project",
  icon: "🏅",
},
              {
                title: "Open Source Contributor",
                description: "Contributed to 6+ open source projects with 2+ stars",
                icon: "🌟",
              },
              {
                title: "Technical Lead",
                description: "Led development team of 50 members in university CSI club",
                icon: "👨‍💻",
              },
              {
                title: "Research Publication",
                description: "Published paper on ' Binary Algorithm in AI for Early Skin Cancer Identification with 3D-TBP' in IEEE",
                icon: "📚",
              },
              {
  title: "Industry Recognition",
  description: "Ranked #10153 in Naukri Campus Young Turks Round 2, competing in Coding, Engineering, and Data & AI categories",
  icon: "🎖️"
},
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-4xl mb-4">{achievement.icon}</div>
                      <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}