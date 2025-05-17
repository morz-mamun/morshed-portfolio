"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import SparklesPreview from "../banner/sparklesPreview"


const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, user authentication, and payment processing.",
    image: "/ss4.png",
    tags: ["MongoDB", "Express", "React", "Node.js", "Redux", "Stripe"],
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
    tags: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "JWT"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "A dashboard that aggregates and displays social media metrics and analytics from multiple platforms.",
    image: "/ss2.png",
    tags: ["MongoDB", "Express", "React", "Node.js", "Chart.js", "OAuth"],
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
  const [filter, setFilter] = useState("all")
  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "featured"
        ? projects.filter((project) => project.featured)
        : projects.filter((project) => project.tags.includes(filter))

  const filters = ["all", "featured", "MongoDB", "Express", "React", "Node.js"]

  return (
    <BackgroundBeamsWithCollision >
      <section id="projects" className="">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-center mb-12">
              <SparklesPreview title={"My works"} />
              <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            </div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filterName) => (
              <Button
                key={filterName}
                variant={filter === filterName ? "default" : "outline"}
                className={
                  filter === filterName
                    ? "bg-emerald-600 hover:bg-emerald-700 border-none"
                    : "border-zinc-300 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200"
                }
                onClick={() => setFilter(filterName)}
              >
                {filterName.charAt(0).toUpperCase() + filterName.slice(1)}
              </Button>
            ))}
          </div>

          {/* all projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects?.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-xl overflow-hidden border group`}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 overflow-hidden"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <div className="flex gap-3">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-zinc-800/80 p-2 rounded-full hover:bg-emerald-600 transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-zinc-800/80 p-2 rounded-full hover:bg-emerald-600 transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className={`mb-4 line-clamp-3`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className={`bg-zinc-700/30 text-zinc-300 border-zinc-600 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  )
}
