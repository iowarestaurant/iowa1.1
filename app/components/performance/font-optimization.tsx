"use client"

import { useEffect } from "react"

export default function FontOptimization() {
  useEffect(() => {
    // Add font display swap to all font faces
    const styleSheets = document.styleSheets
    for (let i = 0; i < styleSheets.length; i++) {
      try {
        const cssRules = styleSheets[i].cssRules
        for (let j = 0; j < cssRules.length; j++) {
          const rule = cssRules[j]
          if (rule instanceof CSSFontFaceRule) {
            if (!rule.style.fontDisplay) {
              rule.style.fontDisplay = "swap"
            }
          }
        }
      } catch (e) {
        // CORS restrictions may prevent accessing cssRules
        console.warn("Could not access cssRules for stylesheet", e)
      }
    }

    // Preload critical fonts
    const preloadLinks = [{ href: "/fonts/inter-var.woff2", type: "font/woff2", crossOrigin: "anonymous" }]

    preloadLinks.forEach((link) => {
      const preloadLink = document.createElement("link")
      preloadLink.rel = "preload"
      preloadLink.as = "font"
      preloadLink.href = link.href
      preloadLink.type = link.type
      if (link.crossOrigin) {
        preloadLink.crossOrigin = link.crossOrigin
      }
      document.head.appendChild(preloadLink)
    })
  }, [])

  return null
}

