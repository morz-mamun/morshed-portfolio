import { Code, Database, Palette, Server, Terminal, PenToolIcon as Tool } from "lucide-react"
import { JSX } from "react"
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiRemix, SiTailwindcss, SiRedux, SiAntdesign, SiFramer, SiShadcnui, SiExpress, SiMongodb, SiMongoose, SiJavascript, SiTypescript, SiNpm, SiPnpm, SiGithub, SiPostman } from "react-icons/si";
import { TbApi } from "react-icons/tb";   
   
   interface Skill {
       name: string
       icon: JSX.Element | string
       color?: string
   }
   
   interface SkillCategory {
       name: string
       icon: JSX.Element
       skills: Skill[]
   }
   
   export const skillCategories: SkillCategory[] = [
        {
            name: "Frontend",
            icon: <Code className="h-5 w-5" />,
            skills: [
                { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
                { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
                { name: "Remix", icon: <SiRemix className="text-blue-500" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
                { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
                { name: "ShadCN UI", icon: <SiShadcnui className="text-white" /> },
                { name: "Ant Design", icon: <SiAntdesign className="text-blue-500" /> },
                { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
            ],
        },
        {
            name: "Tools",
            icon: <Tool className="h-5 w-5" />,
            skills: [
                // { name: "VS Code", icon: <VscCode className="text-blue-500" /> },
                { name: "NPM", icon: <SiNpm className="text-red-500" /> },
                { name: "PNPM", icon: <SiPnpm className="text-yellow-500" /> },
                { name: "GitHub", icon: <SiGithub className="text-white" /> },
                { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
            ],
        },
        {
            name: "Backend",
            icon: <Server className="h-5 w-5" />,
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
                { name: "Express.js", icon: <SiExpress className="text-white" /> },
                { name: "REST API", icon: <TbApi className="text-teal-400" /> },
            ],
        },
        {
            name: "Database",
            icon: <Database className="h-5 w-5" />,
            skills: [
                { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
                { name: "Mongoose ODM", icon: <SiMongoose className="text-red-500" /> },
            ],
        },
        {
            name: "Programming",
            icon: <Terminal className="h-5 w-5" />,
            skills: [
                { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
                { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
            ],
        },

    ]