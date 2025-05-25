'use client'
import { navLinks } from '@/constants/navLinks'
import { scrollToSection } from '@/utils/scrollToSection'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MobileNavbar () {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Update window width state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize() // initial check
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Handle scroll and touch events
  useEffect(() => {
    if (!isMobile) return

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show navbar when scrolling up or when at the bottom of the page
      if (
        currentScrollY < lastScrollY ||
        window.innerHeight + currentScrollY >= document.body.offsetHeight - 100
      ) {
        setIsVisible(true)
      }
      // Hide after a delay when scrolling down
      else if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        // Add a small delay before hiding to prevent flickering
        const timer = setTimeout(() => {
          setIsVisible(false)
        }, 300)
        return () => clearTimeout(timer)
      }

      setLastScrollY(currentScrollY)
    }

    const handleTouch = () => {
      setIsVisible(true)

      // Hide navbar after 3 seconds of inactivity
      const timer = setTimeout(() => {
        if (window.scrollY === lastScrollY) {
          setIsVisible(false)
        }
      }, 3000)

      return () => clearTimeout(timer)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('touchstart', handleTouch)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('touchstart', handleTouch)
    }
  }, [isMobile, lastScrollY])

  return (
    <nav
      className={`md:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 shadow-t z-50 border-t border-gray-200 dark:border-gray-700 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <ul className='flex justify-around items-center py-2'>
        {navLinks?.map((link, index) => (
          <li key={link.name}>
            <button
              onClick={() => scrollToSection(link?.id)}
              className={`${
                pathname === link.href
                  ? 'text-primary dark:text-brand font-light after:w-full'
                  : 'text-primary dark:text-primary dark:font-light'
              } hover:text-emerald-400 transition-colors relative overflow-hidden
                ${
                  index % 2 === 0
                    ? 'after:clip-path-button-1'
                    : 'after:clip-path-button-2'
                }
                after:absolute after:bottom-0 after:left-0 ${
                  pathname === link.href ? 'after:w-full pb-1' : 'after:w-0'
                } after:h-0.5 after:bg-brand dark:after:bg-brand/80
                hover:after:w-full after:transition-all after:duration-400
              `}
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
