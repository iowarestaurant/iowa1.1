"use client"

import { useEffect } from "react"

interface ImagePreloaderProps {
  imageSrcs: string[]
}

export default function ImagePreloader({ imageSrcs }: ImagePreloaderProps) {
  useEffect(() => {
    // Only preload in production or when not on slow connections
    if (process.env.NODE_ENV !== "production") return

    // Check for slow connections
    if (navigator.connection) {
      const connection = navigator.connection as any
      if (connection.saveData || (connection.effectiveType && connection.effectiveType.includes("2g"))) {
        return
      }
    }

    const preloadImages = () => {
      imageSrcs.forEach((src) => {
        const img = new Image()
        img.src = src
      })
    }

    // Use requestIdleCallback if available, otherwise use setTimeout
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(() => preloadImages())
    } else {
      setTimeout(preloadImages, 1000)
    }
  }, [imageSrcs])

  return null
}

