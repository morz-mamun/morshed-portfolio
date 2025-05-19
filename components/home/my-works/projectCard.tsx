"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
export default function ProjectCard({ project, index }: any) {
    return (
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
                      {project?.tags?.map((tag : string) => (
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
    )
}