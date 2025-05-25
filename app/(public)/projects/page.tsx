"use client";
import SparklesPreview from "@/components/home/banner/sparklesPreview";
import ProjectCard from "@/components/home/my-works/projectCard";
import { projects } from "@/constants/projectsData";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen container mx-auto md:mt-12 mt-0 xl:px-0 lg:px-3 md:px-7 px-3">
       <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="relative text-center mb-12">
            <SparklesPreview title={"My works"} />
            <h2 className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl w-[375px] md:w-[450px] font-bold">Featured Projects</h2>
            <p className="text-xs text-textPrimary dark:text-textSecondary"> Browse through all my projects and see my work</p>
          </div>
        </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {projects?.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
