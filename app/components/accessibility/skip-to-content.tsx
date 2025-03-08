"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function SkipToContent() {
  const [isFocused, setIsFocused] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <a
      href="#main-content"
      className={cn(
        "fixed top-4 left-4 z-[100] bg-[#8B0000] text-white px-4 py-2 rounded-md transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#8B0000]",
        isFocused ? "translate-y-0" : "-translate-y-20",
      )}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      Saltar al contenido principal
    </a>
  )
}

