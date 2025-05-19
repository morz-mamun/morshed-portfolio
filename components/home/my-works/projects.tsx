"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import SparklesPreview from "../banner/sparklesPreview";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCarousel from "./project-carousel";
import ProjectCarouselWithThumbnails from "./project-carousel-with-thumbnails.tsx";
import ProjectCard from "./projectCard";
import { projects } from "@/constants/projectsData";
import Link from "next/link";

export default function Projects() {
  // const [viewMode, setViewMode] = useState<"thumbnails" | "grid">("thumbnails")

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
            <h2 className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-bold">
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
          <Button asChild>
            <Link href="/projects" className="flex items-center gap-2">
              <span>See all projects</span>
              <ExternalLink size={20} />
            </Link>
          </Button>
        </div>
        {/* view change tabs */}
        {/* <Tabs defaultValue="thumbnails" onValueChange={(value) => setViewMode(value as any)}>
          <TabsList>
            <TabsTrigger value="thumbnails">With Thumbnails</TabsTrigger>
            <TabsTrigger value="grid">Grid</TabsTrigger>
          </TabsList>
        </Tabs> */}

        <div className="">
          {/* {viewMode === "carousel" && <ProjectCarousel projects={projects} filteredProjects={projects} />} */}

          {/* all projects show with thumbnails */}
          {/* {viewMode === "thumbnails" && (
            <ProjectCarouselWithThumbnails projects={projects} filteredProjects={projects} />
          )} */}

          {/* all projects show as grid */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {projects?.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
    </BackgroundBeamsWithCollision>
  );
}
