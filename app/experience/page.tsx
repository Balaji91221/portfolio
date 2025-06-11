"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react"

const experiences = [
  {
    "title": "Full-Stack Developer",
    "company": "DigitalFortress Private Limited",
    "location": "Remote",
    "period": "Aug 2024 - Nov 2024",
    "type": "Full-time",
    "description": "Developed and optimized full-stack web applications, focusing on responsive design and real-time data integration.",
    "achievements": [
      "Developed a responsive admin dashboard using Next.js and Tailwind CSS, reducing user workflow complexity by 30%",
      "Implemented modular Redux state management, improving application performance and code maintainability",
      "Integrated real-time data APIs, enabling 25% faster decision-making for team leads",
      "Optimized frontend performance through WebSocket implementation and strategic lazy loading"
    ]
  },
  {
    "title": "Frontend Developer",
    "company": "VTBIF Incubation Center",
    "location": "Hybrid",
    "period": "Jan 2024 - Mar 2024",
    "type": "Internship",
    "description": "Designed and optimized frontend web applications, enhancing user engagement and API performance.",
    "achievements": [
      "Crafted a React-based landing page that decreased mobile bounce rates by 20%",
      "Enhanced API response time by 40% using Node.js and Express optimization techniques",
      "Connected React frontend with REST APIs, improving page load speed by 35%",
      "Redesigned UI/UX components, resulting in a 15% increase in user engagement and retention"
    ]
  },
  {
    "title": "AI and ML Certification Training",
    "company": "SmartBridge (Smartinternz)",
    "location": "Remote",
    "period": "Jan 2024 - Mar 2024",
    "type": "Training/Project",
    "description": "Completed a 4-month externship program in Artificial Intelligence and Machine Learning, powered by Google Developers, fulfilling project work requirements (Certificate ID: Ext-AIML-2023-73316).",
    "achievements": [
      "Developed AI and ML projects as part of the externship program",
      "Applied machine learning techniques to real-world datasets",
      "Collaborated with peers on AI-driven solutions"
    ]
  }
]
const techStack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Django",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
]

const metrics = [
  { label: "Projects Completed", value: "20+", icon: "🚀" },
  { label: "Code Contributions", value: "70+", icon: "💻" },
  { label: "Team Collaborations", value: "10+", icon: "👥" },
  { label: "Client Satisfaction", value: "98%", icon: "⭐" },
]

export default function ExperiencePage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A journey through my professional career, where each role has been a quest for innovation and mastery.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && <div className="absolute left-6 top-16 w-0.5 h-32 bg-border" />}

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-6 relative z-10">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>

                  <Card className="flex-1 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                          <p className="text-primary font-semibold text-lg">{exp.company}</p>
                        </div>
                        <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                          <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </Badge>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {exp.location}
                            </Badge>
                            <Badge variant="outline">{exp.type}</Badge>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Impact Metrics */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Impact Metrics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-3">{metric.icon}</div>
                    <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                    <p className="text-sm text-muted-foreground font-medium">{metric.label}</p>
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
