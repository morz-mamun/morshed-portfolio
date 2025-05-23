"use client";
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
    <section id="about" className="container mx-auto flex items-center justify-center mb-20">
      <motion.div
        className="relative w-full max-w-6xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        // viewport={{ once: true }}
      >
        <div className="absolute inset-0 h-full w-full scale-[0.9] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative h-full overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          <div className="flex flex-col items-center">
            {/* HEADING */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            //   viewport={{ once: true }}
            >
              <TypewriterEffectSmooth
                cursorClassName="bg-brand"
                words={words}
              />
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            //   viewport={{ once: true }}
              className="max-w-2xl text-center text-textPrimary dark:text-textPrimary"
            >
              I'm a passionate MERN Stack Developer with expertise in building
              modern, responsive web applications. Combining strong frontend
              skills with backend knowledge, I create seamless user experiences
              backed by robust server architectures. I enjoy turning complex
              problems into simple, beautiful, and intuitive solutions.
            </motion.p>

            <div className="w-full flex flex-col lg:flex-row justify-between gap-6 mt-8">
              {/* Journey Text */}
              <motion.div
                className="max-w-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                // viewport={{ once: true }}
              >
                <h3 className="mb-3 text-xl font-semibold">My Journey</h3>
                <div className="text-textPrimary dark:text-textPrimary space-y-4">
                  {[
                    " My journey in web development began with a simple curiosity about how websites work, which soon grew into a deep passion for building clean, functional, and beautiful digital experiences.",
                    " During the COVID-19 pandemic, I faced immense personal loss, including the passing of my big brother. In those difficult times, I turned to programming as a way to heal and grow. Though I struggled with focus and consistency at first, everything changed in 2023 when I enrolled in the “Complete Web Development” course by Programming Hero, while juggling a part-time marketing job and tutoring to support myself.",
                    " With dedication and the help of their Job Placement team, I landed my first role as a MERN stack developer. Since then, I’ve worked with amazing teams, built real-world applications, and continue to expand my skills—especially in React, Next.js, Remix, and backend development.",
                    "Each line of code I write is a step forward in a journey shaped by resilience, purpose, and a love for creating meaningful web experiences.",
                  ].map((text, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * i }}
                    //   viewport={{ once: true }}
                    >
                      {text}
                    </motion.p>
                  ))}
                </div>
              </motion.div>

              {/* Button (optional animation) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                // viewport={{ once: true }}
              >
                <Button>
                  <div></div>
                </Button>
              </motion.div>

              {/* Skills Marquee */}
              <motion.div
                className="relative flex h-[520px] w-full flex-row items-center justify-center overflow-hidden rounded-lg bg-background/10 p-4 shadow-md"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                // viewport={{ once: true }}
              >
                <Marquee pauseOnHover vertical className="[--duration:20s]">
                  {firstRow?.map((skill, index) => (
                    <Card key={index} skill={skill} />
                  ))}
                </Marquee>
                <Marquee
                  reverse
                  pauseOnHover
                  vertical
                  className="[--duration:20s]"
                >
                  {secondRow?.map((skill, index) => (
                    <Card key={index} skill={skill} />
                  ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
