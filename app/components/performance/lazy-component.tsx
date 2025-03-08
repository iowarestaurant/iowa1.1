"use client"

import { useState, useEffect, type ReactNode } from "react"
import { useInView } from "react-intersection-observer"

interface LazyComponentProps {
  children: ReactNode
  placeholder?: ReactNode
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export default function LazyComponent({
  children,
  placeholder,
  threshold = 0.1,
  rootMargin = "200px 0px",
  triggerOnce = true,
}: LazyComponentProps) {
  const [isClient, setIsClient] = useState(false)
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce,
  })

  useEffect(() => {
    setIsClient(true)
  }, [])

  // On server or when JS is disabled, render children directly for better SEO
  if (!isClient) {
    return <>{children}</>
  }

  return <div ref={ref}>{inView ? children : placeholder || <div className="min-h-[100px]" />}</div>
}

