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

export default function Navbar () {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
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

  const handleMenuToggle = () => {
    setIsMobile(!isMobile)
  }

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <header
      className={`sticky w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-900/90 backdrop-blur-md py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className='container mx-auto px-4 flex justify-between items-center'>
        <Link href='#' className='flex items-center gap-2 text-xl font-bold'>
          <div className='clip-path-icon-box bg-emerald-500/20 p-1'>
            <Frame className='h-8 w-8 text-emerald-500' />
          </div>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600'>
            Morshed Alam
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-8'>
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-zinc-300 hover:text-emerald-400 transition-colors relative overflow-hidden
                ${
                  index % 2 === 0
                    ? 'after:clip-path-button-1'
                    : 'after:clip-path-button-2'
                }
                after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-500
                hover:after:w-full after:transition-all after:duration-300
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

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-white focus:outline-none'
          onClick={handleMenuToggle}
          aria-label='Toggle menu'
        >
          {isMobile ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
    </header>
  )
}
