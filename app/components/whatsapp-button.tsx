"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { MessageSquare } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const buttonRef = useRef<HTMLAnchorElement>(null)

  // Show button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setShowTooltip(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    // Show button after 3 seconds even without scroll
    const timer = setTimeout(() => {
      setIsVisible(true)

      // Show tooltip briefly
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 5000)
    }, 3000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  // Handle keyboard focus
  const handleFocus = () => {
    setShowTooltip(true)
  }

  const handleBlur = () => {
    setShowTooltip(false)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      buttonRef.current?.click()
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative">
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -10 }}
                  className="absolute right-full mr-3 bottom-1/2 transform translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap"
                  role="tooltip"
                  id="whatsapp-tooltip"
                >
                  <div className="font-medium text-sm">¿Necesitas ayuda?</div>
                  <div className="text-xs text-gray-600">Contáctanos por WhatsApp</div>
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
                </motion.div>
              )}
            </AnimatePresence>

            <a
              ref={buttonRef}
              href="https://wa.me/543512082818?text=Hola,%20estoy%20visitando%20su%20sitio%20web%20y%20me%20gustaría%20obtener%20más%20información"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              aria-label="Contactar por WhatsApp"
              aria-describedby="whatsapp-tooltip"
            >
              <MessageSquare className="h-8 w-8 text-white" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

