"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface FocusTrapProps {
  isActive: boolean
  children: React.ReactNode
}

export default function FocusTrap({ isActive, children }: FocusTrapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (isActive) {
      // Store the currently focused element
      previousFocusRef.current = document.activeElement as HTMLElement

      // Focus the first focusable element in the trap
      focusFirstElement()

      // Add event listener for tab key
      document.addEventListener("keydown", handleTabKey)
    } else {
      // Restore focus when trap is deactivated
      if (previousFocusRef.current) {
        previousFocusRef.current.focus()
      }

      // Remove event listener
      document.removeEventListener("keydown", handleTabKey)
    }

    return () => {
      document.removeEventListener("keydown", handleTabKey)
      if (previousFocusRef.current) {
        previousFocusRef.current.focus()
      }
    }
  }, [isActive])

  const focusFirstElement = () => {
    if (!containerRef.current) return

    const focusableElements = getFocusableElements()
    if (focusableElements.length > 0) {
      focusableElements[0].focus()
    }
  }

  const getFocusableElements = () => {
    if (!containerRef.current) return []

    return Array.from(
      containerRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),
    ) as HTMLElement[]
  }

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== "Tab") return

    const focusableElements = getFocusableElements()
    if (focusableElements.length === 0) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    // If shift+tab on first element, move to last element
    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault()
      lastElement.focus()
    }
    // If tab on last element, move to first element
    else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault()
      firstElement.focus()
    }
  }

  return <div ref={containerRef}>{children}</div>
}

