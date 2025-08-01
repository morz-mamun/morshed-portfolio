"use client"

import SparklesPreview from "../banner/sparklesPreview";
import { SkillsAnimation } from "./skillsAnimation";
import SkillCard from "./skillCard";
import { BorderBeam } from "@/components/magicui/border-beam";
import { skillCategories } from "@/constants/my-skills-data";
import { motion } from "framer-motion";

export default function MySkills() {

    return (
        <section className="my-40 max-w-7xl mx-auto">
            {/* Section heading */}
            <motion.div
                className="relative text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <SparklesPreview title={"My Technical Skills"} />
                <h2 className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-5xl font-bold w-[375px] mx-auto">
                    Skill Highlights
                </h2>
                <p className="text-sm text-textPrimary dark:text-textPrimary">Key technical and professional strengths at a glance.</p>
            </motion.div>

            {/* content */}
            <div className="flex flex-col lg:flex-row justify-between item-center gap-10">
                {/* skills cards */}
                <motion.div
                    className="relative overflow-hidden rounded-xl"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}

                >
                    <div className="columns-1 md:columns-2 gap-3 space-y-6 pt-2 px-2">
                        {skillCategories?.map((category) => (
                            <div key={category.name} className="break-inside-avoid">
                                <SkillCard category={category} />
                            </div>
                        ))}
                    </div>
                    <BorderBeam
                        duration={10}
                        delay={3}
                        size={200}
                        className="from-transparent via-blue-500 to-transparent"
                    />
                </motion.div>

                {/* skills animation */}
                <motion.div
                    className="w-full flex items-center justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}

                >
                    <SkillsAnimation />
                </motion.div>
            </div>

        </section>
    )
}
