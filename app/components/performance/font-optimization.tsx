"use client"

import { useEffect } from "react"

export default function FontOptimization() {
  useEffect(() => {
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

    // Intentar aplicar font-display: swap usando una forma segura para TypeScript
    try {
      const styleSheets = document.styleSheets
      for (let i = 0; i < styleSheets.length; i++) {
        try {
          const cssRules = styleSheets[i].cssRules
          for (let j = 0; j < cssRules.length; j++) {
            const rule = cssRules[j]
            if (rule instanceof CSSFontFaceRule) {
              // Usar bracket notation en lugar de dot notation para evitar errores de TypeScript
              if (!(rule.style as any)["font-display"]) {
                ;(rule.style as any)["font-display"] = "swap"
              }
            }
          }
        } catch (e) {
          // CORS restrictions may prevent accessing cssRules
          console.warn("Could not access cssRules for stylesheet", e)
        }
      }
    } catch (error) {
      // Silently fail if browser doesn't support this feature
      console.debug("Font display optimization failed:", error)
    }
  }, [])

  return null
}

