"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"


const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, user authentication, and payment processing.",
    image: "/placeholder.svg?height=600&width=800",
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
    image: "/placeholder.svg?height=600&width=800",
    tags: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "JWT"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "A dashboard that aggregates and displays social media metrics and analytics from multiple platforms.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["MongoDB", "Express", "React", "Node.js", "Chart.js", "OAuth"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Real Estate Listing Platform",
    description: "A platform for property listings with advanced search, filtering, and user favorites.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["MongoDB", "Express", "React", "Node.js", "Google Maps API"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Blog CMS",
    description: "A content management system for blogs with markdown support, categories, and user management.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["MongoDB", "Express", "React", "Node.js", "Markdown"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Weather Application",
    description: "A weather application that provides current conditions and forecasts based on location.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["MongoDB", "Express", "React", "Node.js", "Weather API"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
]

export default function Projects() {
  const [filter, setFilter] = useState("all")
  const { theme } = useTheme()

  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "featured"
        ? projects.filter((project) => project.featured)
        : projects.filter((project) => project.tags.includes(filter))

  const filters = ["all", "featured", "MongoDB", "Express", "React", "Node.js"]

  return (
    <section id="projects" className={`py-20 px-4 md:px-8 ${theme === "dark" ? "bg-zinc-900/50" : "bg-zinc-100/50"}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
            Explore my portfolio of MERN stack projects. Each project demonstrates my skills in building full-stack web
            applications with MongoDB, Express, React, and Node.js.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filterName) => (
            <Button
              key={filterName}
              variant={filter === filterName ? "default" : "outline"}
              className={
                filter === filterName
                  ? "bg-emerald-600 hover:bg-emerald-700 border-none"
                  : theme === "dark"
                    ? "border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-800"
                    : "border-zinc-300 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200"
              }
              onClick={() => setFilter(filterName)}
            >
              {filterName.charAt(0).toUpperCase() + filterName.slice(1)}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${
                theme === "dark" ? "bg-zinc-800/50 border-zinc-700/50" : "bg-white border-zinc-200"
              } rounded-xl overflow-hidden border group`}
            >
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
                <p className={`${theme === "dark" ? "text-zinc-400" : "text-zinc-600"} mb-4 line-clamp-3`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className={`${
                        theme === "dark"
                          ? "bg-zinc-700/30 text-zinc-300 border-zinc-600"
                          : "bg-zinc-100 text-zinc-700 border-zinc-300"
                      } hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6">
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
