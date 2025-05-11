"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SiteHeader from "../components/site-header"
import SiteFooter from "../components/site-footer"
import ReviewsSection from "../components/reviews-section"
import CtaBanner from "../components/cta-banner"

export default function MenuPageClient() {
  const [activeTab, setActiveTab] = useState("todos")

  const menuCategories = [
    { id: "todos", label: "Todos" },
    { id: "entradas", label: "Para Picar" },
    { id: "principales", label: "Principales" },
    { id: "elaboracion", label: "Elaboración Propia" },
    { id: "parrilla", label: "Parrilla" },
    { id: "postres", label: "Postres" },
    { id: "bebidas", label: "Bebidas" },
  ]

  const menuImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-zAhPiRocyLZDnVaUldnshioMfcQjuS.png",
      alt: "IOWA - Desde 1970 - Cuarta Generación",
      categories: ["todos"],
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-c4sHTauwYnznNm41i4JuiPtllMVJGD.png",
      alt: "Menú - Sugerencias del Chef",
      categories: ["todos", "principales", "elaboracion"],
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-rCbhXHuvz7Ofq1eyKLpx9Shfd8qjS2.png",
      alt: "Menú - Para ir picando y Popular",
      categories: ["todos", "entradas"],
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-1kCmIk0jNzmMWuEOvx3rupzARHrJxH.png",
      alt: "Menú - Lomitería y Pizzas",
      categories: ["todos", "principales"],
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-qsv8sptIpYTFbHfUBTskB6b7oH8l9h.png",
      alt: "Menú - Principales y Salsas",
      categories: ["todos", "principales", "parrilla"],
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-R8UTwlXAgJ99S990J8J0PY26p0cLUA.png",
      alt: "Menú - Lo que más nos gusta hacer - Pastas",
      categories: ["todos", "elaboracion"],
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-1DoDfU9zL5hr5TCz5RXxWLuLmFrBVY.png",
      alt: "Menú - Infantil, Ensaladas y Postres",
      categories: ["todos", "postres"],
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-5z0RUzVfPBBYzpO0cczUbnxcUhYyv2.png",
      alt: "Carta de Bebidas - Sin Alcohol y Cervezas",
      categories: ["todos", "bebidas"],
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-sjXSDmlGtozUI4O9ENdkOEI9gWwhHe.png",
      alt: "Carta de Bebidas - Vinos Blancos",
      categories: ["todos", "bebidas"],
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-28SbIOIy5rID0JvdqNXv87vlvEfF1r.png",
      alt: "Carta de Bebidas - Vinos Tintos",
      categories: ["todos", "bebidas"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden pt-20">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240817-WA0089.jpg-a5oMCQP9EreQkUxSsBYz90TIDVoGZl.jpeg"
          alt="IOWA Menú"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div className="container px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Nuestro Menú
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto"
            >
              Tradición gastronómica desde 1970
            </motion.p>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Carta Completa</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Nuestra carta ofrece una amplia variedad de platos tradicionales de la parrilla argentina, pastas caseras
              de elaboración propia, opciones para compartir, y una cuidada selección de vinos y bebidas.
            </p>
          </motion.div>

          <div className="mb-10">
            <Tabs defaultValue="todos" className="w-full">
              <TabsList className="flex flex-wrap justify-center mb-8 h-auto">
                {menuCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="px-4 py-2 m-1 data-[state=active]:bg-[#8B0000] data-[state=active]:text-white"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {menuCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {menuImages
                      .filter((image) => image.categories.includes(category.id))
                      .map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-white rounded-xl shadow-md overflow-hidden"
                        >
                          <div className="relative aspect-[3/4] w-full">
                            <Image
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* CTA Section */}
      <CtaBanner />

      <SiteFooter />
    </div>
  )
}
