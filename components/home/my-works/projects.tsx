"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import SparklesPreview from "../banner/sparklesPreview"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectCarousel from "./project-carousel"
import ProjectCarouselWithThumbnails from "./project-carousel-with-thumbnails.tsx"


export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, user authentication, and payment processing.",
    image: "/ss4.png",
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT", "Stripe", "emailjs"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team workspaces, and progress tracking.",
    image: "/ss3.png",
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "A dashboard that aggregates and displays social media metrics and analytics from multiple platforms.",
    image: "/ss2.png",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
  // {
  //   id: 4,
  //   title: "Real Estate Listing Platform",
  //   description: "A platform for property listings with advanced search, filtering, and user favorites.",
  //   image: "/placeholder.svg?height=600&width=800",
  //   tags: ["MongoDB", "Express", "React", "Node.js", "Google Maps API"],
  //   liveLink: "#",
  //   githubLink: "#",
  //   featured: false,
  // },
  // {
  //   id: 5,
  //   title: "Blog CMS",
  //   description: "A content management system for blogs with markdown support, categories, and user management.",
  //   image: "/placeholder.svg?height=600&width=800",
  //   tags: ["MongoDB", "Express", "React", "Node.js", "Markdown"],
  //   liveLink: "#",
  //   githubLink: "#",
  //   featured: false,
  // },
  // {
  //   id: 6,
  //   title: "Weather Application",
  //   description: "A weather application that provides current conditions and forecasts based on location.",
  //   image: "/placeholder.svg?height=600&width=800",
  //   tags: ["MongoDB", "Express", "React", "Node.js", "Weather API"],
  //   liveLink: "#",
  //   githubLink: "#",
  //   featured: false,
  // },
]

export default function Projects() {
  const [viewMode, setViewMode] = useState<"carousel" | "thumbnails" | "grid">("carousel")

  return (
    <BackgroundBeamsWithCollision>
      <section id="projects" className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="relative text-center mb-12">
            <SparklesPreview title={"My works"} />
            <h2 className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-bold">Featured Projects</h2>
            <p className="text-xs text-textPrimary dark:text-textSecondary"> Browse through all my projects and see my work</p>
          </div>
        </motion.div>
        {/* view change tabs */}
        <Tabs defaultValue="carousel" onValueChange={(value) => setViewMode(value as any)}>
          <TabsList>
            <TabsTrigger value="carousel">Carousel</TabsTrigger>
            <TabsTrigger value="thumbnails">With Thumbnails</TabsTrigger>
            <TabsTrigger value="grid">Grid</TabsTrigger>
          </TabsList>
        </Tabs>


        <div className="">
          {viewMode === "carousel" && <ProjectCarousel projects={projects} filteredProjects={projects} />}

          {/* all projects show with thumbnails */}
          {viewMode === "thumbnails" && (
            <ProjectCarouselWithThumbnails projects={projects} filteredProjects={projects} />
          )}

          {/* all projects show as grid */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects?.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-xl overflow-hidden border group`}
                >
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 overflow-hidden"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                      <div className="flex gap-3">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-zinc-800/80 p-2 rounded-full hover:bg-brand hover:text-black transition-colors"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-zinc-800/80 p-2 rounded-full hover:bg-brand hover:text-black transition-colors"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-brand transition-colors">
                      {project.title}
                    </h3>
                    <p className={`mb-4 text-textPrimary dark:text-textPrimary`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className={`bg-brand/10 text-textPrimary dark:textPrimary border-border hover:bg-brand/20 hover:text-brand hover:border-brand/50 transition-colors px-2 py-1`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  )
}
