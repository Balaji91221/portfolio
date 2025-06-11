"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter } from "lucide-react"
import Image from "next/image"
import resume from './resume.png';
import crypto from './crypto.png';
import vtbif from './vtbif.png';
import github from './github.png';
import nlpres from './nlpres.png';
import emotion from './emotion.jpeg';
import movie from './movie.jpeg'
import Fooddel from './Fooddel.png'
import jobtracker from './jobtracker.png'
import exploreease from './travel .png'
import dashboard from './mauth.png'

const projects = 
  [
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
  {
    "id": 3,
    "title": "Mauth Dashboard – Analytics Dashboard UI",
    "description": "A responsive frontend dashboard built with Next.js and Recharts. Features dynamic charts, login logs, real-time data updates, and a map view of user distribution.",
    "image": dashboard,
    "tech": ["React", "Next.js", "Tailwind CSS", "Recharts", "Lucide Icons"],
    "category": "Frontend",
    "liveUrl": "https://analytics.mauthn.mukham.in/",
    "githubUrl": "https://github.com/Balaji91221/DF-dashboard",
    "featured": true
  },
  {
    "id": 4,
    "title": "Food Ordering Application",
    "description": "Developed a comprehensive full-stack web application for online food ordering using React, Express.js, and MongoDB. The project features a responsive UI/UX for browsing food categories and managing carts, a robust admin dashboard for managing food items.",
    "image": Fooddel,
    "tech": ["React", "Node.js", "Express.js", "MongoDB"],
    "category": "Full-Stack",
    "liveUrl": "https://github.com/Balaji91221/Food-delivery-App",
    "githubUrl": "https://github.com/Balaji91221/Food-delivery-App",
    "featured": true
  },
  {
    "id": 5,
    "title": "Resume Maker",
    "description": "A dynamic resume generating website made with ReactJS. Features include Local Storage System that saves your data even on page refresh.",
    "image": resume,
    "tech": ["React", "Redux"],
    "category": "Frontend",
    "liveUrl": "https://github.com/Balaji91221/resumer-builder",
    "githubUrl": "https://github.com/Balaji91221/resumer-builder",
    "featured": false
  },
  {
    "id": 6,
    "title": "CryptoWorld",
    "description": "CryptoWorld is a web app that helps users to view price charts with historical data and news of cryptocurrencies.",
    "image": crypto,
    "tech": ["React", "Redux Toolkit"],
    "category": "Frontend",
    "liveUrl": "https://github.com/Balaji91221/cryptoworld-react-app-master",
    "githubUrl": "https://github.com/Balaji91221/cryptoworld-react-app-master",
    "featured": true
  },
  {
    "id": 7,
    "title": "Github User Finder",
    "description": "A React app for fetching GitHub user info with Auth0 authentication, Material-UI, React Google Charts, toast notifications, and React Router.",
    "image": github,
    "tech": ["React", "OAuth", "Material-UI"],
    "category": "Frontend",
    "liveUrl": "https://github.com/Balaji91221/Github-User-Fider",
    "githubUrl": "https://github.com/Balaji91221/Github-User-Fider",
    "featured": false
  },
  {
    "id": 8,
    "title": "VTBIF Platform",
    "description": "A platform showcasing the VIT-AP Business Incubation Foundation (VT-BIF), supporting tech startups with essential resources.",
    "image": vtbif,
    "tech": ["React", "Bootstrap", "Flowbit UI"],
    "category": "Frontend",
    "liveUrl": "https://github.com/Balaji91221/vtbif",
    "githubUrl": "https://github.com/Balaji91221/vtbif",
    "featured": true
  },
  {
    "id": 9,
    "title": "Resume Screening App",
    "description": "A web application designed to automate resume screening using NLP. It predicts the resume category to help recruiters filter applicants efficiently.",
    "image": nlpres,
    "tech": ["Python", "NLP"],
    "category": "ML/NLP/DL",
    "liveUrl": "https://github.com/Balaji91221/resume-screening-app",
    "githubUrl": "https://github.com/Balaji91221/resume-screening-app",
    "featured": false
  },
  {
    "id": 10,
    "title": "Text-based Emotion Detection",
    "description": "This project classifies emotions in text using machine learning. It identifies emotions like joy, sadness, anger, and more from labeled datasets.",
    "image": emotion,
    "tech": ["Python", "NLP"],
    "category": "ML/NLP/DL",
    "liveUrl": "https://github.com/Balaji91221/emotion-based-text-classifier",
    "githubUrl": "https://github.com/Balaji91221/emotion-based-text-classifier",
    "featured": false
  },
  {
    "id": 11,
    "title": "Movie Recommender System",
    "description": "Built using Streamlit and TMDb API, this app provides personalized movie recommendations based on user preferences.",
    "image": movie,
    "tech": ["Python", "NLP"],
    "category": "ML/NLP/DL",
    "liveUrl": "https://github.com/Balaji91221/movies-recommder-system",
    "githubUrl": "https://github.com/Balaji91221/movies-recommder-system",
    "featured": false
  }
]

const categories = ["All", "Full-Stack", "Frontend", "Backend"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A collection of my work, showcasing my skills and experience in full-stack development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filter by:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              layout
            >
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 h-full">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Button size="icon" variant="secondary" className="backdrop-blur-sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="icon" variant="secondary" className="backdrop-blur-sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/90 backdrop-blur-sm">Featured</Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found for the selected category.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
