"use client"

import { useEffect } from "react"

interface ImagePreloaderProps {
  imageSrcs: string[]
}

export default function ImagePreloader({ imageSrcs }: ImagePreloaderProps) {
  useEffect(() => {
    // Only preload in production or when not on slow connections
    if (process.env.NODE_ENV !== "production") return

    // Función segura para precargar imágenes
    const preloadImages = () => {
      imageSrcs.forEach((src) => {
        const img = new Image()
        img.src = src
      })
    }

    // Verificar conexiones lentas de manera segura para TypeScript
    try {
      // Comprobar si la API NetworkInformation está disponible
      // Usamos una verificación segura para TypeScript
      if ("connection" in navigator && (navigator as any).connection) {
        const connection = (navigator as any).connection
        if (connection.saveData || (connection.effectiveType && connection.effectiveType.includes("2g"))) {
          // No precargar en conexiones lentas o cuando saveData está activado
          return
        }
      }
    } catch (error) {
      // Silenciar errores - continuar con la precarga
      console.debug("Network information API not available")
    }

    // Use requestIdleCallback if available, otherwise use setTimeout
    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        ;(window as any).requestIdleCallback(() => preloadImages())
      } else {
        setTimeout(preloadImages, 1000)
      }
    }
  }, [imageSrcs])

  return null
}

