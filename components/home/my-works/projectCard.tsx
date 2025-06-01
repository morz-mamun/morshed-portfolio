"use client";
import { motion } from "framer-motion";
import { ArrowBigRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";

export type TProject = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  images: string[];
  coreFeatures: string[];
  coreTechnology: string[];
  challengesFaced: string[];
  futurePlans: string[];
  versionInfo: string[];
  liveLink: string;
  repositoryLink: string;
}
export default function ProjectCard({ project, index }: { project :TProject, index: number}) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-xl overflow-hidden border group`}
    >
      <div className="relative overflow-hidden">
        <div className="w-full h-48">
          <Image
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 overflow-hidden"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <div className="flex gap-3">
            {project.repositoryLink && (
              <a
                href={project.repositoryLink}
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
      <div className="xl:p-6 p-4">
        <h3 className="text-xl font-bold mb-2 group-hover:text-brand transition-colors">
          {project.title}
        </h3>
        <p
          className={`mb-4 text-sm xl:text-base text-textPrimary dark:text-textPrimary`}
        >
          {project?.shortDescription.length > 110
            ? `${project?.shortDescription.slice(0, 110)}...`
            : project?.shortDescription}
        </p>
        {/* Core Technologies */}
        <div className="flex justify-between">
          <div className="flex flex-wrap gap-2">
            {project?.coreTechnology?.slice(0, 2).map((tech: string) => (
              <Badge
                key={tech}
                variant="outline"
                className={`bg-brand/10 text-textPrimary dark:textPrimary border-border hover:bg-brand/20 hover:text-brand hover:border-brand/50 transition-colors px-2 py-1`}
              >
                {tech}
              </Badge>
            ))}
            {project?.coreTechnology?.length > 2 && (
              <Badge
                variant="outline"
                className={`bg-brand/10 text-textPrimary dark:textPrimary border-border hover:bg-brand/20 hover:text-brand hover:border-brand/50 transition-colors px-2 py-1`}
              >
                +{project?.coreTechnology?.length - 2}
              </Badge>
            )}
          </div>
          {/* see project details button */}
          <Link href={`/projects/${project.id}`}>
            <Badge
              variant="outline"
              className="bg-brand/10 border-border hover:bg-brand/20 hover:text-brand hover:border-brand/50 transition-colors px-2 py-1"
            >
              See Project <ArrowBigRight size={16} />
            </Badge>
          </Link>
        </div>
      </div>
      <BorderBeam
        duration={8}
        delay={3}
        size={200}
        className="from-transparent via-blue-500 to-transparent"
      />
    </motion.div>
  );
}
