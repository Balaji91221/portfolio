"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Code, Zap, Rocket } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TypingEffect } from "@/components/typing-effect"
import { ParticleBackground } from "@/components/particle-background"
import { HolographicAvatar } from "@/components/holographic-avatar"
import Fooddel from './projects/Fooddel.png'
import jobtracker from './projects/jobtracker.png'
import exploreease from './projects/travel .png'

const typingTexts = [
  "Full-Stack Developer",
  "React Specialist",
  "Node.js Expert",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Tech Innovator",
]

const featuredProjects = [
  {
    id: 1,
    title: "Food Ordering Application",
    description:
      "Developed a comprehensive full-stack web application for online food ordering using React, Express.js, and MongoDB. The project features a responsive UI/UX for browsing food categories and managing carts, a robust admin dashboard for managing food items.",
    image: Fooddel,
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://github.com/Balaji91221/Food-delivery-App",
    githubUrl: "https://github.com/Balaji91221/Food-delivery-App",
    featured: true,
  },
   {
    "id": 1,
    "title": "Job Tracker – Application Management System",
    "description": "A full-stack job tracking app built with Next.js and Firebase. Enables users to track job applications, statuses, and insights through a clean UI and real-time updates.",
    "image": jobtracker,
    "tech": ["Next.js", "Firebase", "Tailwind CSS", "Framer Motion", "Lucide React"],
    "category": "Full-Stack",
    "liveUrl": "https://job-tracker-pro.vercel.app/",
    "githubUrl": "https://github.com/Balaji91221/job-tracker/tree/master",
    "featured": true
  },
  {
    "id": 2,
    "title": "ExploreEase – ML-Powered Travel Planner",
    "description": "A full-stack travel planner powered by Machine Learning to predict top destinations based on user preferences. It offers personalized itineraries, flexible planning, and real-time suggestions.",
    "image": exploreease,
    "tech": ["Next.js", "Tailwind CSS", "Lucide Icons", "Video.js", "ML", "TypeScript"],
    "category": "Full-Stack",
    "liveUrl": "https://exproseease.vercel.app/",
    "githubUrl": "https://github.com/Balaji91221/travel-ExploreEase",
    "featured": true
  },
];

const stats = [
  { label: "Projects Completed", value: "25+", icon: Code },
  { label: "Technologies Mastered", value: "15+", icon: Zap },
  { label: "Years of Experience", value: "3+", icon: Rocket },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 md:px-6 lg:px-8">
        <ParticleBackground />

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />

        <div className="container mx-auto px-4 z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-2 lg:order-1 py-8 lg:py-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-primary/20 bg-primary/5">
                  🚀 Available for new opportunities
                </Badge>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Hi, I'm <span className="gradient-text">Kelavath Balaji Naik</span>
                </h1>
                <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-8 h-12 flex items-center justify-center lg:justify-start">
                  <TypingEffect
                    texts={typingTexts}
                    speed={100}
                    deleteSpeed={50}
                    delayBetweenTexts={2000}
                    className="text-primary"
                  />
                </div>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  CSE Graduate from VIT-AP (2025), passionate about creating innovative web solutions that bridge the
                  gap between design and functionality. Specialized in modern JavaScript frameworks and scalable backend
                  architectures.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10"
              >
                <Button
                  asChild
                  size="lg"
                  className="group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 w-full sm:w-auto"
                >
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5 w-full sm:w-auto">
                  <Link href="/contact">Let's Connect</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex justify-center lg:justify-start gap-6"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:bg-primary/10"
                  asChild
                >
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:bg-primary/10"
                  asChild
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:bg-primary/10"
                  asChild
                >
                  <a href="mailto:kelavath@example.com">
                    <Mail className="h-6 w-6" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right side - Holographic Avatar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end order-1 lg:order-2 py-8 lg:py-0"
            >
              <HolographicAvatar />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground"
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge variant="outline" className="mb-6 px-4 py-2 border-primary/20 bg-primary/5">
              💼 Portfolio Highlights
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating expertise in modern web technologies and innovative
              problem-solving
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 glass border-border/50 overflow-hidden h-full">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={300}
                          height={200}
                          className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-500 bg-white" />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <Button size="icon" variant="secondary" className="glass" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                          <Button size="icon" variant="secondary" className="glass" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                        {project.featured && (
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-gradient-to-r from-primary to-purple-600 text-white">⭐ Featured</Badge>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors tech-icon"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button asChild size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
              <Link href="/projects">
                Explore All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 gradient-text">Ready to Build Something Amazing?</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects. Whether you're a
              startup looking to build your MVP or an enterprise seeking to modernize your tech stack, let's discuss how
              we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 px-8"
              >
                <Link href="/contact">Start a Conversation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5 px-8">
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}