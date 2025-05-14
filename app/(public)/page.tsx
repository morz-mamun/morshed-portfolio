import Banner from "@/components/home/banner/banner"
import CelebrationEffect from "@/components/celebration-effect"
import WelcomeModal from "@/components/welcome-modal"
import AboutMe from "@/components/home/aboutMe/aboutMe"

export default function Home () {
  return (
    <main className="min-h-screen">
      <CelebrationEffect />
      <WelcomeModal />
      <Banner />
      <AboutMe />
    </main>
  )
}
