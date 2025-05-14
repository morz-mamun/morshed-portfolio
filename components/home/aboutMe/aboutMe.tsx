"use client"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { words } from "@/constants/aboutme/aboutMe";
import { skills } from "@/constants/aboutme/cardConstants";
import Card from "./card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/moving-border";
import { Marquee } from "@/components/magicui/marquee";

export default function AboutMe() {
    const firstRow = skills.slice(0, skills.length / 2);
    const secondRow = skills.slice(skills.length / 2);

    return (
        <section className="container mx-auto flex items-center justify-center mb-20">
            <div className="relative w-full max-w-6xl">
                <div className="absolute inset-0 h-full w-full scale-[0.9] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
                <div className="relative h-full overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
                    <div className="flex flex-col items-center">
                        {/*HEADING  */}
                        <TypewriterEffectSmooth cursorClassName="bg-brand" words={words} />
                        {/* description */}
                        <p className="max-w-4xl text-center text-textPrimary dark:text-textPrimary">I'm a passionate MERN Stack Developer with expertise in building modern, responsive web applications. Combining strong frontend skills with backend knowledge, I create seamless user experiences backed by robust server architectures. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.</p>


                        <div className="w-full flex justify-between gap-6 mt-8">
                            <div className="max-w-lg">
                                <h3 className="mb-3 text-xl font-semibold">My Journy</h3>
                                <div className="text-textPrimary dark:text-textPrimary space-y-4">
                                    <p> My journey in web development began with a simple curiosity about how websites work, which soon grew into a deep passion for building clean, functional, and beautiful digital experiences.</p>

                                    <p> During the COVID-19 pandemic, I faced immense personal loss, including the passing of my big brother. In those difficult times, I turned to programming as a way to heal and grow. Though I struggled with focus and consistency at first, everything changed in 2023 when I enrolled in the “Complete Web Development” course by Programming Hero, while juggling a part-time marketing job and tutoring to support myself.</p>

                                    <p> With dedication and the help of their Job Placement team, I landed my first role as a MERN stack developer. Since then, I’ve worked with amazing teams, built real-world applications, and continue to expand my skills—especially in React, Next.js, Remix, and backend development.</p>

                                    <p>Each line of code I write is a step forward in a journey shaped by resilience, purpose, and a love for creating meaningful web experiences.</p>
                                </div>
                            </div>
                            <div>
                                <Button>
                                    <div></div>
                                </Button>
                            </div>

                            <div className="relative flex h-[520px] w-full flex-row items-center justify-center overflow-hidden rounded-lg bg-background/10 p-4 shadow-md">
                                <Marquee pauseOnHover vertical className="[--duration:20s]">
                                    {firstRow?.map((skill, index) => (
                                        <Card key={index} skill={skill}  />
                                    ))}
                                </Marquee>
                               <Marquee reverse  pauseOnHover vertical className="[--duration:20s]">
                                    {secondRow?.map((skill, index) => (
                                        <Card key={index} skill={skill}  />
                                    ))}
                                </Marquee>
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
                                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
                            </div>
                            {/* cards */}
                            {/* <div className=" mt-8 columns-1 md:columns-2 gap-4 space-y-4">
                                {skills?.map((skill, index) => (
                                    <div key={index} className="break-inside-avoid">
                                        <Card skill={skill} />
                                    </div>
                                ))}
                            </div> */}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}