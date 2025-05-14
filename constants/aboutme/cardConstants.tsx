import { Code, Database, Layers, Palette, Shield, Users } from "lucide-react";

export const skills = [
  {
    icon: <Code />,
    iconColor: "text-violet-600",
    title: "Express & Node.js",
    description: "Building robust RESTful APIs and server-side applications with Express.js and Node.js for seamless data flow.",
  },
  {
    icon: <Layers />,
    iconColor: "text-amber-600",
    title: "Full Stack Integration",
    description: "Connecting frontend and backend seamlessly with efficient state management and optimized data fetching.",
  },
  {
    icon: <Palette />,
    iconColor: "text-sky-600",
    title: "Frontend Mastery",
    description: "Creating responsive, accessible, and performant UIs with React, Nextjs, Remix, Redux, and modern CSS frameworks.",
  },
  {
    icon: <Database />,
    iconColor: "text-emerald-600",
    title: "MongoDB Expertise",
    description: "Designing efficient NoSQL database schemas and implementing optimized queries for scalable applications.",
  },
  {
    icon: <Shield />,
    iconColor: "text-red-600",
    title: "Security Focus",
    description: "Implementing authentication, authorization, and secure coding practices to protect user data and applications.",
  },
  {
    icon: <Users />,
    iconColor: "text-teal-600",
    title: "Collaborative Approach",
    description: "Working effectively in agile teams with version control, code reviews, and clear communication.",
  },
];
