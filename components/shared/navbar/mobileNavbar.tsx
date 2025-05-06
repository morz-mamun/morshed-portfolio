'use client'
import { navLinks } from '@/constants/navLinks'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MobileNavbar () {
  const pathname = usePathname()
  console.log('pathname', pathname)
  const [isMobile, setIsMobile] = useState(false)
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
    <nav className='fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 shadow-t z-50 border-t border-gray-200 dark:border-gray-700 transition-all duration-500'>
      <ul className='flex justify-around items-center py-2'>
        {navLinks.map(link => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={cn(
                'flex flex-col items-center text-xs transition-all duration-300',
                pathname === link.href
                  ? 'text-emerald-500 font-semibold scale-110'
                  : 'text-gray-600 dark:text-gray-300 hover:text-emerald-400'
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
