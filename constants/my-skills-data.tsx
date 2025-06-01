import { Code, Database, Palette, Server, Terminal, PenToolIcon as Tool } from "lucide-react"
import { JSX } from "react"
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiRemix, SiTailwindcss, SiRedux, SiAntdesign, SiFramer, SiShadcnui, SiExpress, SiMongodb, SiMongoose, SiJavascript, SiTypescript, SiNpm, SiPnpm, SiGithub, SiPostman } from "react-icons/si";
import { TbApi } from "react-icons/tb";   
   
  export interface Skill {
       name: string
       icon: JSX.Element | string
       color?: string
   }
   
   export interface SkillCategory {
       name: string
       icon: JSX.Element
       skills: Skill[]
   }
   
   export const skillCategories: SkillCategory[] = [
        {
            name: "Frontend",
            icon: <Code className="h-5 w-5 text-primary dark:text-brand" />,
            skills: [
                { name: "React.js", icon: <FaReact className="text-primary dark:text-cyan-400" /> },
                { name: "Next.js", icon: <SiNextdotjs className="text-primary dark:text-white" /> },
                { name: "Remix", icon: <SiRemix className="text-primary dark:text-blue-500" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-primary dark:text-cyan-400" /> },
                { name: "Redux", icon: <SiRedux className="text-primary dark:text-purple-500" /> },
                { name: "ShadCN UI", icon: <SiShadcnui className="text-primary dark:text-white" /> },
                { name: "Ant Design", icon: <SiAntdesign className="text-primary dark:text-blue-500" /> },
                { name: "Framer Motion", icon: <SiFramer className="text-primary dark:text-pink-500" /> },
            ],
        },
        {
            name: "Tools",
            icon: <Tool className="h-5 w-5 text-primary dark:text-brand" />,
            skills: [
                // { name: "VS Code", icon: <VscCode className="text-primary dark:text-blue-500" /> },
                { name: "NPM", icon: <SiNpm className="text-primary dark:text-red-500" /> },
                { name: "PNPM", icon: <SiPnpm className="text-primary dark:text-yellow-500" /> },
                { name: "GitHub", icon: <SiGithub className="text-primary dark:text-white" /> },
                { name: "Postman", icon: <SiPostman className="text-primary dark:text-orange-500" /> },
            ],
        },
        {
            name: "Backend",
            icon: <Server className="h-5 w-5 text-primary dark:text-brand" />,
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-primary dark:text-green-500" /> },
                { name: "Express.js", icon: <SiExpress className="text-primary dark:text-white" /> },
                { name: "REST API", icon: <TbApi className="text-primary dark:text-teal-400" /> },
            ],
        },
        {
            name: "Database",
            icon: <Database className="h-5 w-5 text-primary dark:text-brand" />,
            skills: [
                { name: "MongoDB", icon: <SiMongodb className="text-primary dark:text-green-500" /> },
                { name: "Mongoose ODM", icon: <SiMongoose className="text-primary dark:text-red-500" /> },
            ],
        },
        {
            name: "Programming",
            icon: <Terminal className="h-5 w-5 text-primary dark:text-brand" />,
            skills: [
                { name: "JavaScript", icon: <SiJavascript className="text-primary dark:text-yellow-500" /> },
                { name: "TypeScript", icon: <SiTypescript className="text-primary dark:text-blue-500" /> },
            ],
        },

    ]