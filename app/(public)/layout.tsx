"use client"
import Footer from '@/components/shared/footer'
import MobileNavbar from '@/components/shared/navbar/mobileNavbar'
import Navbar from '@/components/shared/navbar/navbar'

export default function PublicLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='container mx-auto px-2 lg:px-4 min-h-screen'>
      {/* navbar */}
      <Navbar />

      {/* main content */}
      <div className='min-h-screen'>{children}</div>

      {/* scroll to top button */}
      {/* <button
        onClick={() => window.scrollTo(0, 0)}
        className='fixed bottom-4 right-4 p-2 bg-blue-500 text-white rounded-full shadow-lg'
      >
        Scroll to Top
      </button> */}

      {/* mobile navbar */}
      <MobileNavbar />
      {/* footer */}
      <Footer />
    </main>
  )
}
