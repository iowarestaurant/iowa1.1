"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Accessibility, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AccessibilityStatement() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 left-6 z-40 bg-[#8B0000] text-white p-3 rounded-full shadow-lg hover:bg-[#6B0000] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B0000]"
        aria-label="Abrir declaración de accesibilidad"
      >
        <Accessibility className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-xl p-6 max-h-[80vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="accessibility-title"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 id="accessibility-title" className="text-xl font-bold">
                  Declaración de Accesibilidad
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Cerrar declaración de accesibilidad"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-4">
                <p>
                  En IOWA Parrilla & Restaurant, nos comprometemos a garantizar que nuestro sitio web sea accesible para
                  todos los usuarios, independientemente de sus capacidades o discapacidades.
                </p>

                <h3 className="text-lg font-semibold">Nuestro compromiso</h3>
                <p>
                  Trabajamos continuamente para mejorar la accesibilidad de nuestro sitio web siguiendo las pautas de
                  accesibilidad WCAG 2.1 nivel AA.
                </p>

                <h3 className="text-lg font-semibold">Características de accesibilidad</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Navegación por teclado para todos los elementos interactivos</li>
                  <li>Textos alternativos para imágenes</li>
                  <li>Estructura semántica del contenido</li>
                  <li>Contraste adecuado entre texto y fondo</li>
                  <li>Posibilidad de aumentar el tamaño del texto sin pérdida de funcionalidad</li>
                  <li>Compatibilidad con lectores de pantalla</li>
                </ul>

                <h3 className="text-lg font-semibold">Contacto</h3>
                <p>Si encuentras algún problema de accesibilidad en nuestro sitio web, por favor contáctanos:</p>
                <p>
                  <a href="mailto:iowaparrillarestaurant@gmail.com" className="text-[#8B0000] hover:underline">
                    iowaparrillarestaurant@gmail.com
                  </a>
                </p>

                <div className="pt-4">
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-[#8B0000] hover:bg-[#6B0000] text-white"
                  >
                    Cerrar
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

