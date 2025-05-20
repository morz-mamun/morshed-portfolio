"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { BackgroundBeams } from "../../ui/background-beams"
import SparklesPreview from "./sparklesPreview"
import { Typewriter } from "react-simple-typewriter"
import { ConfettiButton } from "@/components/magicui/confetti"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // setMounted(true)
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 🛑 Don't render until mounted to avoid hydration mismatch
  // if (!mounted) return null

  return (
    <section className="relative h-[calc(100vh-6rem)] flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Content */}
      <div className="z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <SparklesPreview title={"MERN Stack Developer"} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400`}
        >
          Hi, I'm <span className="text-brand/70">Morshed Alam</span>
          <br />
          <span className="text-4xl font-normal text-zinc-400">
            <Typewriter
              words={["Frontend Developer", "MERN Stack Developer"]}
              loop={Infinity}
              cursor
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-textPrimary dark:text-textPrimary mb-8 max-w-2xl mx-auto"
        >
          Full-stack developer specializing in MongoDB, Express, React, and Node.js. Creating responsive, performant,
          and beautiful web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <div className="relative">
            <ConfettiButton> View My Work</ConfettiButton>
          </div>
          <ConfettiButton>Contact Me</ConfettiButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-6 mt-12"
        >
          <a href="#" className="text-zinc-400 hover:text-white transition-colors clip-path-icon-container">
            <Github size={24} className="clip-path-icon" />
          </a>
          <a href="#" className="text-zinc-400 hover:text-white transition-colors clip-path-icon-container">
            <Linkedin size={24} className="clip-path-icon" />
          </a>
          <a href="#" className="text-zinc-400 hover:text-white transition-colors clip-path-icon-container">
            <Twitter size={24} className="clip-path-icon" />
          </a>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-5"
        animate={{
          y: [0, 10, 0],
          opacity: scrollY > 100 ? 0 : 1,
        }}
        transition={{
          y: { repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" },
          opacity: { duration: 0.3 },
        }}
      >
        <ArrowDown className="text-brand" size={24} />
      </motion.div>
    </section>
  )
}
