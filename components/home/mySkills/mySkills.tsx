"use client"

import { Code, Database, Palette, Server, Terminal, PenToolIcon as Tool } from "lucide-react"
import { JSX, useState } from "react"
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiRemix, SiTailwindcss, SiRedux, SiAntdesign, SiFramer, SiShadcnui, SiExpress, SiMongodb, SiMongoose, SiJavascript, SiTypescript, SiNpm, SiPnpm, SiGithub, SiPostman } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import SparklesPreview from "../banner/sparklesPreview";
import { SkillsAnimation } from "./skillsAnimation";

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

export default function MySkills() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null)

    const skillCategories: SkillCategory[] = [
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

    const handleCategoryHover = (categoryName: string) => {
        setActiveCategory(categoryName)
    }

    const handleCategoryLeave = () => {
        setActiveCategory(null)
    }

    return (
        <section className="py-16 max-w-7xl mx-auto">
            {/* Section heading */}
            <div className="text-center mb-12">
                <SparklesPreview title={"My technical skills"} />
                <h2 className="text-4xl md:text-5xl font-bold">Skill Highlights</h2>
            </div>
            {/* content */}
            <div className="flex justify-betwen item-center gap-4">
                {/* skills cards */}
                <div className="mt-8 columns-1 md:columns-2 gap-4 space-y-4">
                    {skillCategories?.map((category) => (
                        <div key={category.name} className="break-inside-avoid">
                            <div
                                className="bg-[#0f1524] rounded-xl p-6 transition-all duration-300 hover:bg-[#151b2e]"
                                onMouseEnter={() => handleCategoryHover(category.name)}
                                onMouseLeave={handleCategoryLeave}
                            >
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="text-blue-400">{category.icon}</div>
                                    <h3 className="text-xl font-semibold">{category.name}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <div
                                            key={`${category.name}-${skill.name}`}
                                            className={`flex items-center gap-2 p-3 rounded-md bg-[#1a1f2e] transition-all duration-300 ${activeCategory === category.name ? "opacity-100" : "opacity-90"
                                                }`}
                                        >
                                            <div className={`flex items-center justify-center w-6 h-6 rounded ${skill.color || ""}`}>
                                                {skill.icon}
                                            </div>
                                            <span className="text-sm">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/*  */}
                <div className="w-full">
                    <SkillsAnimation />
                </div>
            </div>

        </section>
    )
}
