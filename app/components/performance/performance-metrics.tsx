"use client"

import { useEffect, useState } from "react"

interface Metric {
  name: string
  value: number
  rating: "good" | "needs-improvement" | "poor"
}

export default function PerformanceMetrics() {
  const [metrics, setMetrics] = useState<Metric[]>([])
  const [showMetrics, setShowMetrics] = useState(false)

  useEffect(() => {
    // Solo ejecutar en desarrollo y cuando se active manualmente
    if (process.env.NODE_ENV !== "development") return

    const collectMetrics = () => {
      if (!("performance" in window) || !("getEntriesByType" in performance)) return

      try {
        // Get Core Web Vitals and other metrics
        const paintEntries = performance.getEntriesByType("paint")
        const navigationEntries = performance.getEntriesByType("navigation")

        const fcp = paintEntries.find((entry) => entry.name === "first-contentful-paint")?.startTime || 0

        const newMetrics: Metric[] = []

        // First Contentful Paint
        newMetrics.push({
          name: "First Contentful Paint",
          value: Math.round(fcp),
          rating: fcp < 1800 ? "good" : fcp < 3000 ? "needs-improvement" : "poor",
        })

        // DOM Content Loaded
        if (navigationEntries.length > 0) {
          const nav = navigationEntries[0] as PerformanceNavigationTiming

          newMetrics.push({
            name: "DOM Content Loaded",
            value: Math.round(nav.domContentLoadedEventEnd - nav.domContentLoadedEventStart),
            rating: "good", // Simplified rating
          })

          newMetrics.push({
            name: "Load Time",
            value: Math.round(nav.loadEventEnd - nav.startTime),
            rating: nav.loadEventEnd - nav.startTime < 2500 ? "good" : "needs-improvement",
          })
        }

        // Collect Largest Contentful Paint if available
        if ("PerformanceObserver" in window) {
          const lcpObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries()
            const lastEntry = entries[entries.length - 1]

            if (lastEntry) {
              const lcp = lastEntry.startTime

              newMetrics.push({
                name: "Largest Contentful Paint",
                value: Math.round(lcp),
                rating: lcp < 2500 ? "good" : lcp < 4000 ? "needs-improvement" : "poor",
              })

              setMetrics((prevMetrics) => {
                const filtered = prevMetrics.filter((m) => m.name !== "Largest Contentful Paint")
                return [
                  ...filtered,
                  {
                    name: "Largest Contentful Paint",
                    value: Math.round(lcp),
                    rating: lcp < 2500 ? "good" : lcp < 4000 ? "needs-improvement" : "poor",
                  },
                ]
              })
            }
          })

          lcpObserver.observe({ type: "largest-contentful-paint", buffered: true })
        }

        setMetrics(newMetrics)
      } catch (error) {
        console.error("Error collecting performance metrics:", error)
      }
    }

    // Wait for page to load
    if (document.readyState === "complete") {
      collectMetrics()
    } else {
      window.addEventListener("load", collectMetrics)
      return () => window.removeEventListener("load", collectMetrics)
    }
  }, [])

  // Desactivar la visualización por defecto
  return null

  // El código original que se activaría solo si quisiéramos mostrar las métricas
  /*
  if (process.env.NODE_ENV !== 'development' || metrics.length === 0) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        zIndex: 9999,
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '12px',
        cursor: 'pointer'
      }}
      onClick={() => setShowMetrics(!showMetrics)}
    >
      <div style={{ fontWeight: 'bold', marginBottom: showMetrics ? '8px' : '0' }}>
        Performance Metrics {showMetrics ? '▼' : '▶'}
      </div>
      
      {showMetrics && (
        <div>
          {metrics.map((metric, index) => (
            <div key={index} style={{ marginBottom: '5px' }}>
              <span>{metric.name}: </span>
              <span
                style={{
                  color: 
                    metric.rating === 'good' ? '#00C853' : 
                    metric.rating === 'needs-improvement' ? '#FFD600' : 
                    '#FF5252'
                }}
              >
                {metric.value}ms
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
  */
}

