import ProjectPage from "@/pages/project-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Morshed | Projects',
  description:
    'Explore a collection of Morshed’s featured web development projects and creative work.',
}
export default function Projects() {
  return (
    <ProjectPage />
  );
}
