"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

// Datos de la galería
const galleryItems = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    alt: "Boda elegante",
    category: ["bodas", "todos"],
    title: "Boda en Jardín",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    alt: "Evento corporativo",
    category: ["corporativos", "todos"],
    title: "Conferencia Anual",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
    alt: "Cumpleaños",
    category: ["cumpleanos", "todos"],
    title: "Cumpleaños 50",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=2069&auto=format&fit=crop",
    alt: "Aniversario",
    category: ["aniversarios", "todos"],
    title: "Aniversario de Bodas",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop",
    alt: "Evento social",
    category: ["sociales", "todos"],
    title: "Fiesta de Verano",
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
    alt: "Video de evento",
    category: ["bodas", "todos"],
    title: "Highlights Boda Marina y Juan",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2073&auto=format&fit=crop",
    alt: "Evento corporativo",
    category: ["corporativos", "todos"],
    title: "Lanzamiento de Producto",
  },
  {
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    alt: "Video de cumpleaños",
    category: ["cumpleanos", "todos"],
    title: "Cumpleaños Sorpresa",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070&auto=format&fit=crop",
    alt: "Graduación",
    category: ["graduaciones", "todos"],
    title: "Graduación Universidad",
  },
]

export default function EventGallery() {
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const lightboxRef = useRef<HTMLDivElement>(null)

  const openLightbox = (item: (typeof galleryItems)[0], index: number) => {
    setSelectedItem(item)
    setCurrentIndex(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedItem(null)
    document.body.style.overflow = "auto"
  }

  const navigateGallery = (direction: "next" | "prev") => {
    const filteredItems = galleryItems.filter((item) =>
      selectedItem ? item.category.some((cat) => selectedItem.category.includes(cat)) : true,
    )

    let newIndex = currentIndex
    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredItems.length
    } else {
      newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    }

    setSelectedItem(filteredItems[newIndex])
    setCurrentIndex(newIndex)
  }

  // Cerrar lightbox al hacer clic fuera de la imagen
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (lightboxRef.current && e.target === lightboxRef.current) {
      closeLightbox()
    }
  }

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galería de Eventos</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explora nuestra galería de eventos realizados y déjate inspirar para tu próxima celebración.
          </p>
        </motion.div>

        <Tabs defaultValue="todos" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8 h-auto bg-gray-900/50 overflow-x-auto max-w-full">
            {[
              { id: "todos", label: "Todos" },
              { id: "bodas", label: "Bodas" },
              { id: "corporativos", label: "Corporativos" },
              { id: "cumpleanos", label: "Cumpleaños" },
              { id: "aniversarios", label: "Aniversarios" },
              { id: "sociales", label: "Eventos Sociales" },
              { id: "graduaciones", label: "Graduaciones" },
            ].map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-3 py-2 m-1 text-sm md:text-base data-[state=active]:bg-[#006341] data-[state=active]:text-white whitespace-nowrap"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {["todos", "bodas", "corporativos", "cumpleanos", "aniversarios", "sociales", "graduaciones"].map(
            (category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {galleryItems
                    .filter((item) => item.category.includes(category))
                    .map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative group overflow-hidden rounded-lg cursor-pointer w-full h-full"
                        onClick={() => openLightbox(item, index)}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden w-full h-full">
                          <Image
                            src={item.type === "video" ? item.thumbnail : item.src}
                            alt={item.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          {item.type === "video" && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                <Play className="h-6 w-6 md:h-8 md:w-8 text-white fill-white" />
                              </div>
                            </div>
                          )}

                          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-white font-medium text-sm md:text-base">{item.title}</h3>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
            ),
          )}
        </Tabs>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            ref={lightboxRef}
            onClick={handleBackdropClick}
          >
            <button
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
            >
              <X className="h-6 w-6" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                navigateGallery("prev")
              }}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                navigateGallery("next")
              }}
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="max-w-full w-full max-h-[80vh] relative px-2 md:px-0">
              {selectedItem.type === "image" ? (
                <div className="relative w-full h-[50vh] md:h-[80vh]">
                  <Image
                    src={selectedItem.src || "/placeholder.svg"}
                    alt={selectedItem.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="relative w-full pb-[56.25%] h-0">
                  <iframe
                    src={selectedItem.src}
                    className="absolute top-0 left-0 w-full h-full"
                    allowFullScreen
                    title={selectedItem.title}
                  ></iframe>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-xl font-medium">{selectedItem.title}</h3>
                {selectedItem.type === "video" && (
                  <a
                    href={selectedItem.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white text-sm mt-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Ver en YouTube
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

