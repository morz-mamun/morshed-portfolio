"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  liveLink: string
  githubLink: string
  featured: boolean
}

interface ProjectCarouselProps {
  projects: Project[]
  filteredProjects?: Project[]
}

export default function ProjectCarouselWithThumbnails({ projects, filteredProjects = projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const projectsToShow = filteredProjects?.length > 0 ? filteredProjects : projects

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsToShow.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectsToShow.length) % projectsToShow.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  // Auto-slide effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide()
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [currentIndex, isPaused, projectsToShow.length])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  if (!projectsToShow.length) return null

  return (
    <div className="relative w-[1024px] px-4 py-8">
      <div
        className="relative overflow-hidden rounded-xl h-[400px] md:h-[500px] border"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="h-full flex flex-col">
              <div className="relative overflow-hidden h-1/2">
                <img
                  src={projectsToShow[currentIndex].image || "/placeholder.svg"}
                  alt={projectsToShow[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-between p-4">
                  <div className="flex gap-3">
                    {projectsToShow[currentIndex].githubLink && (
                      <a
                        href={projectsToShow[currentIndex].githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-zinc-800/80 p-2 rounded-full hover:bg-brand hover:text-black transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {projectsToShow[currentIndex].liveLink && (
                      <a
                        href={projectsToShow[currentIndex].liveLink}
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
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-brand">{projectsToShow[currentIndex].title}</h3>
                <p className="mb-6 text-textPrimary dark:text-textPrimary flex-grow">
                  {projectsToShow[currentIndex].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projectsToShow[currentIndex].tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-brand/10 text-textPrimary dark:textPrimary border-border hover:bg-brand/20 hover:text-brand hover:border-brand/50 transition-colors px-2 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 z-10"
          onClick={prevSlide}
          aria-label="Previous project"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 z-10"
          onClick={nextSlide}
          aria-label="Next project"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Thumbnails */}
      <div className="mt-6 overflow-x-auto pb-2">
        <div className="flex gap-3 min-w-max">
          {projectsToShow.map((project, index) => (
            <button
              key={project.id}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-md overflow-hidden transition-all ${
                index === currentIndex ? "ring-2 ring-brand" : "opacity-70 hover:opacity-100"
              }`}
              aria-label={`Go to project ${project.title}`}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-xs text-white font-medium truncate px-2 text-center">{project.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
