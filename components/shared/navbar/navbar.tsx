'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  Frame,
  Sun,
  Moon
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { navLinks } from '@/constants/navLinks'
import { usePathname } from 'next/navigation'

export default function Navbar () {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  console.log(pathname)

  const { theme, setTheme } = useTheme()

  // * Listen for scroll events to update sticky behavior.
  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // * Update window width state.
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize() // initial check
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-2 z-[9999] transition-all transform ease-in-out duration-500 my-3',
        !isMobile && scrolled ? 'scale-90' : 'scale-100'
      )}
    >
      <div className='container mx-auto md:px-0 px-0 flex justify-between items-center'>
        <Link href='#' className='flex items-center gap-2 text-xl font-bold'>
          <div className='clip-path-icon-box bg-brand/20 p-1'>
            <Frame className='h-8 w-8 text-brand' />
          </div>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600'>
            Morshed Alam
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-6'>
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${
                pathname === link.href
                  ? 'text-emerald-500 dark:text-emerald-400 font-light after:w-full'
                  : 'text-primary dark:text-primary dark:font-light'
              } hover:text-emerald-400 transition-colors relative overflow-hidden
                ${
                  index % 2 === 0
                    ? 'after:clip-path-button-1'
                    : 'after:clip-path-button-2'
                }
                after:absolute after:bottom-0 after:left-0 ${
                  pathname === link.href ? 'after:w-full' : 'after:w-0'
                } after:h-0.5 after:bg-brand dark:after:bg-brand/80
                hover:after:w-full after:transition-all after:duration-400
              `}
            >
              {link.name}
            </Link>
          ))}
          {/* Theme change button */}

          <Button
            variant='ghost'
            size='icon'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='rounded-full clip-path-icon'
            aria-label='Toggle theme'
          >
            {mounted && theme === 'dark' ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </Button>
          <Button className='bg-emerald-600 hover:bg-emerald-700 text-white clip-path-button-1'>
            Download CV
          </Button>
        </nav>
      </div>
    </header>
  )
}
