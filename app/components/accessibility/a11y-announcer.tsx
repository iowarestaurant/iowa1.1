"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

// Global state for announcements
let globalAnnouncement = ""
let announcementTimeoutId: NodeJS.Timeout | null = null

export function announce(message: string, assertive = false) {
  globalAnnouncement = message

  // Clear previous timeout if exists
  if (announcementTimeoutId) {
    clearTimeout(announcementTimeoutId)
  }

  // Dispatch custom event to notify components
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("announce", {
        detail: { message, assertive },
      }),
    )

    // Clear announcement after 3 seconds
    announcementTimeoutId = setTimeout(() => {
      globalAnnouncement = ""
      window.dispatchEvent(
        new CustomEvent("announce", {
          detail: { message: "", assertive: false },
        }),
      )
    }, 3000)
  }
}

export default function A11yAnnouncer() {
  const [announcement, setAnnouncement] = useState("")
  const [assertive, setAssertive] = useState(false)
  const pathname = usePathname()

  // Listen for announcement events
  useEffect(() => {
    const handleAnnouncement = (event: Event) => {
      const customEvent = event as CustomEvent
      setAnnouncement(customEvent.detail.message)
      setAssertive(customEvent.detail.assertive)
    }

    window.addEventListener("announce", handleAnnouncement)
    return () => window.removeEventListener("announce", handleAnnouncement)
  }, [])

  // Announce page changes
  useEffect(() => {
    // Wait for page to settle
    const timeoutId = setTimeout(() => {
      const pageTitle = document.title
      if (pageTitle) {
        announce(`Navegó a ${pageTitle}`)
      }
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [pathname])

  if (!announcement) return null

  return (
    <>
      <div aria-live="polite" aria-atomic="true" className="sr-only" style={{ display: assertive ? "none" : "block" }}>
        {announcement}
      </div>
      <div
        aria-live="assertive"
        aria-atomic="true"
        className="sr-only"
        style={{ display: assertive ? "block" : "none" }}
      >
        {assertive ? announcement : ""}
      </div>
    </>
  )
}

