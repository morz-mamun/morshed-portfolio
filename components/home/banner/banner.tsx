"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { BackgroundBeams } from "../../ui/background-beams";
import SparklesPreview from "./sparklesPreview";
import { Typewriter } from "react-simple-typewriter";
import { ConfettiButton } from "@/components/magicui/confetti";
import { scrollToSection } from "@/utils/scrollToSection";
import TerminalWidget from "@/components/terminal-widget/terminal-widget";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // setMounted(true)
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="banner"
      className="relative h-[calc(100vh-6rem)] flex flex-col justify-center items-center px-4 overflow-hidden"
    >
      {/* Content */}
      <div className="w-full md:max-w-4xl z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SparklesPreview title={"MERN Stack Developer"} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-200 dark:bg-gradient-to-r dark:from-white dark:to-gray-600`}
        >
          Hi, I&apos;m <span>Morshed Alam</span>
          <br />
          <span className="text-lg md:text-3xl font-normal text-textPrimary dark:text-textPrimary">
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
          className="w-full md:max-w-md lg:max-w-xl mx-auto text-sm lg:text-lg text-textPrimary dark:text-textPrimary mb-8"
        >
          MERN Stack Developer specialize in frontend development. Skilled in
          React, Remix, Next.js, and building fast, responsive web apps with
          Node.js, Express, MongoDB and Mongoose.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex gap-4 justify-center">
            <div onClick={() => scrollToSection("projects")}>
              <ConfettiButton> View My Work</ConfettiButton>
            </div>
            <div onClick={() => scrollToSection("contact")}>
              <ConfettiButton>Contact Me</ConfettiButton>
            </div>
          </div>
          <TerminalWidget />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-6 mt-12 w-fit mx-auto px-7 py-4 rounded-full shadow-xl shadow-primary/60 dark:shadow-brand/60"
        >
          <a
            href="https://github.com/morz-mamun"
            target="_blank"
            className="text-primary/70 hover:text-primary dark:hover:text-brand transition-colors clip-path-icon-container"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/md-morshed-alam-2324022a4"
            target="_blank"
            className="text-primary/70 hover:text-primary dark:hover:text-brand transition-colors clip-path-icon-container"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://x.com/morzMamun"
            target="_blank"
            className="text-primary/70 hover:text-primary dark:hover:text-brand transition-colors clip-path-icon-container"
          >
            <Twitter size={24} />
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
          y: {
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "easeInOut",
          },
          opacity: { duration: 0.3 },
        }}
      >
        <ArrowDown className="dark:text-brand" size={24} />
      </motion.div>
    </section>
  );
}
