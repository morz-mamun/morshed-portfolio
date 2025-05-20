import Banner from "@/components/home/banner/banner"
import CelebrationEffect from "@/components/celebration-effect"
import WelcomeModal from "@/components/welcome-modal"
import AboutMe from "@/components/home/aboutMe/aboutMe"
import Experience from "@/components/home/experience/experience"
import TerminalWidget from "@/components/terminal-widget/terminal-widget"
import MySkills from "@/components/home/mySkills/mySkills"
import Projects from "@/components/home/my-works/projects"
import ContactMe from "@/components/home/contact-me/contact-me"


export default function Home () {
  return (
    <main className="container mx-auto py-8">
      <CelebrationEffect />
      <WelcomeModal />
      <Banner />
      <AboutMe />
      <Experience />
      <TerminalWidget />
      <MySkills />
      <Projects />
      <ContactMe />
    </main>
  )
}
