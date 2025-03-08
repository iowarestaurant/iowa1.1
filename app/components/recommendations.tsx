"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, AlertTriangle, Lightbulb, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Recommendation {
  id: string
  type: "warning" | "tip" | "success"
  title: string
  description: string
}

export default function Recommendations() {
  const [showRecommendations, setShowRecommendations] = useState(true)
  const [dismissedRecommendations, setDismissedRecommendations] = useState<string[]>([])

  const recommendations: Recommendation[] = [
    {
      id: "mobile-optimization",
      type: "warning",
      title: "Optimización para móviles",
      description:
        "Asegúrate de probar el sitio en diferentes dispositivos móviles para garantizar una experiencia óptima.",
    },
    {
      id: "image-optimization",
      type: "tip",
      title: "Optimización de imágenes",
      description:
        "Considera comprimir más las imágenes para mejorar el tiempo de carga, especialmente en conexiones lentas.",
    },
    {
      id: "analytics",
      type: "success",
      title: "Analytics implementado",
      description:
        "El seguimiento de analytics está correctamente configurado. Recuerda revisar los datos periódicamente.",
    },
    {
      id: "backup",
      type: "warning",
      title: "Respaldo de contenido",
      description: "Implementa un sistema de respaldo regular para el contenido y la base de datos del sitio.",
    },
  ]

  const filteredRecommendations = recommendations.filter((rec) => !dismissedRecommendations.includes(rec.id))

  const dismissRecommendation = (id: string) => {
    setDismissedRecommendations([...dismissedRecommendations, id])
  }

  if (!showRecommendations || filteredRecommendations.length === 0) return null

  return (
    <div className="fixed bottom-24 right-6 z-40 w-80 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center justify-between bg-gray-100 px-4 py-2">
        <h3 className="font-medium text-gray-800">Recomendaciones</h3>
        <button
          onClick={() => setShowRecommendations(false)}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Cerrar recomendaciones"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="max-h-80 overflow-y-auto">
        <AnimatePresence>
          {filteredRecommendations.map((rec) => (
            <motion.div
              key={rec.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-b border-gray-100 p-4"
            >
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  {rec.type === "warning" && <AlertTriangle className="h-5 w-5 text-amber-500" />}
                  {rec.type === "tip" && <Lightbulb className="h-5 w-5 text-blue-500" />}
                  {rec.type === "success" && <Check className="h-5 w-5 text-green-500" />}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900">{rec.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{rec.description}</p>
                  <div className="mt-3 flex justify-end">
                    <Button variant="ghost" size="sm" onClick={() => dismissRecommendation(rec.id)} className="text-xs">
                      Entendido
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

