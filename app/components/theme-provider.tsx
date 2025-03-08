"use client"

import type * as React from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Versión simplificada que no depende de next-themes
  return <>{children}</>
}

