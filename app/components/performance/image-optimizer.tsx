"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "loading" | "placeholder"> {
  fallbackSrc?: string
  lowQualitySrc?: string
  aspectRatio?: string
  containerClassName?: string
}

export default function OptimizedImage({
  src,
  alt,
  fallbackSrc = "/placeholder.svg",
  lowQualitySrc,
  aspectRatio = "aspect-[4/3]",
  containerClassName,
  className,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(lowQualitySrc || src)

  // Reset states when src changes
  useEffect(() => {
    setIsLoaded(false)
    setError(false)
    setCurrentSrc(lowQualitySrc || src)
  }, [src, lowQualitySrc])

  const handleLoad = () => {
    setIsLoaded(true)
    if (lowQualitySrc && currentSrc === lowQualitySrc) {
      setCurrentSrc(src)
    }
  }

  const handleError = () => {
    setError(true)
    setCurrentSrc(fallbackSrc)
  }

  // Si es una imagen de hero (fill=true), no aplicar el aspect ratio
  const containerClass = props.fill
    ? cn("relative overflow-hidden", containerClassName)
    : cn("relative overflow-hidden", aspectRatio, containerClassName)

  return (
    <div className={containerClass}>
      {/* Loading skeleton */}
      {!isLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" aria-hidden="true" />}

      <Image
        src={error ? fallbackSrc : currentSrc}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          props.fill ? "object-cover" : "",
          className,
        )}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        {...props}
      />
    </div>
  )
}

