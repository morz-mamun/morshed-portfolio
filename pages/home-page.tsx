"use client";
import Banner from "@/components/home/banner/banner";
import CelebrationEffect from "@/components/celebration-effect";
// import WelcomeModal from "@/components/welcome-modal";
import AboutMe from "@/components/home/aboutMe/aboutMe";
import Experience from "@/components/home/experience/experience";
import MySkills from "@/components/home/mySkills/mySkills";
import Projects from "@/components/home/my-works/projects";
import ContactMe from "@/components/home/contact-me/contact-me";
import { scrollToSection } from "@/utils/scrollToSection";
import { useEffect } from "react";

export default function HomePage() {
useEffect(() => {
  const hash = window.location.hash;
  if (hash) {
    const id = hash.replace("#", "");
    // Timeout to ensure DOM is ready
    setTimeout(() => scrollToSection(id), 100);
  }
}, []);
  return (
    <main className="container mx-auto overflow-hidden">
      <CelebrationEffect />
      {/* <WelcomeModal /> */}
      <div className="xl:px-0 px-3">
        <Banner />
      </div>
      <AboutMe />
      <div className="xl:px-0 md:px-7 px-3">
        <Experience />
        <MySkills />
      </div>
      <div className="xl:px-0 md:px-3 px-3">
        <Projects />
      </div>
      <div className="xl:px-0 md:px-7 px-3">
        <ContactMe />
      </div>
    </main>
  );
}
