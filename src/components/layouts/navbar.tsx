/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/button'
import logo from "@/public/logo.png"
import Image from 'next/image'


const navItems = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Galerie', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`bg-white/70 backdrop-blur-md fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled 
        ? 'bg-white/70 backdrop-blur-md py-2' 
        : 'py-4'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className={`text-2xl font-bold transition-all duration-300 ${
            isScrolled ? 'text-primary-800' : 'text-primary-900'
          }`}>
            <Link href="/" className='text-primary'> 
              <Image src={logo} width={70} height={70} alt="Logo" /> 
            </Link>
          </div>
          
          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className={`transition-all duration-300 relative group ${
                    pathname === item.href
                      ? 'text-primary font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
          
         <div className='flex items-center gap-2'>
            <Button className="hidden md:inline-flex" asChild>
              
              <Link 
                href="/appointment">
                  Prendre RDV
              </Link>
            </Button>
          
         </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden  mt-4 pb-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className={`block transition-all duration-300 ${
                      pathname === item.href
                        ? 'text-primary font-semibold'
                        : 'text-gray-600 hover:text-primary-900'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button className="mt-4 w-full" asChild>
              <Link href="/appointment">
                Prendre RDV
              </Link>
            </Button>
           
          </div>
        )}
      </div>
    </header>
  )
}

