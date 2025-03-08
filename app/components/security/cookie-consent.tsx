"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

// Extender el tipo Window para incluir gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [hasConsented, setHasConsented] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookie-consent")
    if (consent === "accepted" || consent === "rejected") {
      setHasConsented(true)
    } else {
      // Show consent banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setHasConsented(true)
    setShowConsent(false)

    // Enable analytics if accepted
    try {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: "granted",
        })
      }
    } catch (error) {
      console.debug("Error updating consent:", error)
    }
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setHasConsented(true)
    setShowConsent(false)

    // Disable analytics if rejected
    try {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: "denied",
        })
      }
    } catch (error) {
      console.debug("Error updating consent:", error)
    }
  }

  if (hasConsented || !showConsent) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-4"
        role="dialog"
        aria-labelledby="cookie-consent-title"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 id="cookie-consent-title" className="text-lg font-semibold">
                Uso de cookies
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Al continuar navegando, acepta
                nuestro uso de cookies.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={handleReject} className="text-sm">
                Rechazar
              </Button>
              <Button onClick={handleAccept} className="bg-[#8B0000] hover:bg-[#6B0000] text-white text-sm">
                Aceptar
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

