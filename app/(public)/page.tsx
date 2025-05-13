import Banner from "@/components/home/banner/banner"
import CelebrationEffect from "@/components/celebration-effect"
import Navbar from "@/components/shared/navbar/navbar"
import WelcomeModal from "@/components/welcome-modal"

export default function Home () {
  return (
    <main className="min-h-screen">
      <CelebrationEffect />
      <WelcomeModal />
      <Banner />
    </main>
  )
}
