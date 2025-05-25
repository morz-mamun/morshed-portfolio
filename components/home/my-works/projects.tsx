"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import SparklesPreview from "../banner/sparklesPreview";
import ProjectCard from "./projectCard";
import { projects } from "@/constants/projectsData";
import Link from "next/link";

export default function Projects() {
  return (
    <BackgroundBeamsWithCollision>
      <section id="projects" className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="relative text-center mb-12 xl:mt-0 lg:mt-16">
            <SparklesPreview title={"My works"} />
            <h2 className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-5xl font-bold w-[375px] md:w-[450px] mx-auto">
            Featured Projects
            </h2>
            <p className="text-sm text-textPrimary dark:text-textSecondary">
              {" "}
              Browse through all my projects and see my work
            </p>
          </div>
        </motion.div>

         {/* see all projects button */}
        <div className="flex justify-end mb-8">
          <button className="flex items-center shadow-lg shadow-primary/60 dark:shadow-brand/60 rounded-full px-5 py-4 hover:scale-105 transition-all duration-300 cursor-pointer">
            <Link href="/projects" className="flex items-center gap-2">
              <span>See all projects</span>
              <ExternalLink size={20} />
            </Link>
          </button>
        </div>

          {/* all projects show as grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {projects?.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
      </section>
      
    </BackgroundBeamsWithCollision>
  );
}
