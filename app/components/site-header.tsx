"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MenuIcon, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Check initial scroll position
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMenuOpen])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsMenuOpen(false)
    }
  }

  const navLinks = [
    { href: "/nuestra-historia", label: "Nosotros" },
    { href: "/eventos", label: "Eventos" },
    { href: "/menu", label: "Menú" },
    { href: "/#contacto", label: "Contacto" },
  ]

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <Link
                href="/"
                className="flex items-center justify-center"
                aria-label="IOWA Restaurant - Página principal"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoiowa%20%287%29-0PJXoERREuXd9rl7FCM8wkfe4ukIXr.png"
                  alt="IOWA Restaurant Logo"
                  width={120}
                  height={60}
                  className={`h-auto transition-all duration-300 ${
                    isScrolled || isMenuOpen ? "brightness-0" : "brightness-0 invert"
                  }`}
                  priority
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium transition-colors ${
                    isScrolled ? "text-black hover:text-[#8B0000]" : "text-white hover:text-white/80"
                  } ${pathname === link.href ? "underline underline-offset-4" : ""}`}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button & Reservation */}
            <div className="flex items-center gap-4">
              <Button
                className={`hidden md:flex transition-colors ${
                  isScrolled
                    ? "bg-[#8B0000] hover:bg-[#6B0000] text-white"
                    : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                }`}
                asChild
              >
                <a
                  href="https://wa.me/543512082818?text=Hola,%20quisiera%20hacer%20una%20reserva%20en%20IOWA%20Restaurant"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Reservar mesa por WhatsApp"
                >
                  Reservar Mesa
                </a>
              </Button>

              <button
                ref={menuButtonRef}
                className="md:hidden relative z-50 p-2 rounded-md"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? (
                  <X className={`h-6 w-6 text-black`} aria-hidden="true" />
                ) : (
                  <MenuIcon
                    className={`h-6 w-6 transition-colors ${isScrolled ? "text-black" : "text-white"}`}
                    aria-hidden="true"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-20 md:hidden overflow-y-auto overflow-x-hidden"
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación móvil"
          >
            <div className="flex flex-col h-full">
              <nav className="flex-1 overflow-y-auto px-4 sm:px-6 py-8" aria-label="Navegación móvil">
                <div className="space-y-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-xl font-medium ${
                        pathname === link.href ? "text-[#8B0000]" : "text-black"
                      }`}
                      aria-current={pathname === link.href ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>

              <div className="p-4 sm:p-6 border-t">
                <Button
                  className="w-full bg-[#8B0000] hover:bg-[#6B0000] text-white"
                  onClick={() => setIsMenuOpen(false)}
                  asChild
                >
                  <a
                    href="https://wa.me/543512082818?text=Hola,%20quisiera%20hacer%20una%20reserva%20en%20IOWA%20Restaurant"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Reservar mesa por WhatsApp"
                  >
                    Reservar Mesa
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

