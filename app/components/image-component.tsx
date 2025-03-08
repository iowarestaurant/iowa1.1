"use client"

import { useState } from "react"
import Image from "next/image"

interface ResponsiveImageProps {
  src: string
  alt: string
  aspectRatio?: string
  className?: string
}

export default function ResponsiveImage({
  src,
  alt,
  aspectRatio = "aspect-[4/3]",
  className = "",
}: ResponsiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative ${aspectRatio} w-full overflow-hidden rounded-xl shadow-xl ${className}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className={`object-cover transition-transform duration-500 hover:scale-105 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {!isLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>}
    </div>
  )
}

