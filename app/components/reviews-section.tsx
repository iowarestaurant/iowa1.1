"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Datos de reseñas actualizados con avatares reales
const reviews = [
  {
    id: 1,
    name: "María Fernández",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-5L1yokeGxotUqwtWRvCpD78lbJYukS.png",
    rating: 5,
    date: "hace 2 semanas",
    comment: "Excelente lugar para comer. La parrilla es espectacular y el servicio muy atento. Volvería sin dudarlo.",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%286%29-jDfiBWpcBA5d8iwBP4WGzp2OjL8SXA.png",
    rating: 5,
    date: "hace 1 mes",
    comment:
      "Increíble experiencia. La carne perfectamente cocinada y las pastas caseras son deliciosas. El ambiente es muy acogedor y el personal muy amable.",
  },
  {
    id: 3,
    name: "Laura Gómez",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%281%29-ITYcrqHCXztftGVijHYvrqLkHLfpDx.png",
    rating: 4,
    date: "hace 2 meses",
    comment:
      "Muy buena comida y excelente atención. Los precios son razonables para la calidad que ofrecen. Recomendable para ir en familia.",
  },
  {
    id: 4,
    name: "Juan Pérez",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%284%29-xX1A0L0RTOn5fnSGaqKbfqGvQpRHUr.png",
    rating: 5,
    date: "hace 3 meses",
    comment:
      "La mejor parrilla de la zona. El bife de chorizo es espectacular y las guarniciones muy bien preparadas. El servicio es rápido y atento.",
  },
  {
    id: 5,
    name: "Ana Martínez",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%285%29-OvAMX1poTm4cdHg7uG0FdpVZts1zG7.png",
    rating: 5,
    date: "hace 3 meses",
    comment:
      "Lugar con mucha historia y excelente comida. Las milanesas son enormes y deliciosas. El ambiente es muy agradable y familiar.",
  },
  {
    id: 6,
    name: "Roberto Sánchez",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%283%29-C87ApB6AUnNFeA4wfUmB7APG1QX5XO.png",
    rating: 4,
    date: "hace 4 meses",
    comment:
      "Muy buena relación calidad-precio. La comida es abundante y sabrosa. El lugar tiene un encanto especial con su decoración tradicional.",
  },
  {
    id: 7,
    name: "Diana López",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%282%29-Z9WP9HeNNdhRTZJom8anU8OHumrHB3.png",
    rating: 5,
    date: "hace 4 meses",
    comment:
      "Una experiencia gastronómica única. Los platos son generosos y deliciosos. El servicio es excepcional y el ambiente muy acogedor.",
  },
]

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = { mobile: 1, tablet: 2, desktop: 3 }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= reviews.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? reviews.length - 1 : prevIndex - 1))
  }

  // Renderizar estrellas basadas en la calificación
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
      ))
  }

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Descubre por qué nuestros clientes nos eligen y vuelven una y otra vez.
          </p>
        </motion.div>

        <div className="relative">
          {/* Controles de navegación para móvil y tablet */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-2 md:px-4 z-10">
            <button
              onClick={prevSlide}
              className="bg-white/80 hover:bg-white text-[#8B0000] p-2 rounded-full shadow-md transition-colors"
              aria-label="Anterior reseña"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/80 hover:bg-white text-[#8B0000] p-2 rounded-full shadow-md transition-colors"
              aria-label="Siguiente reseña"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Carrusel de reseñas */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {reviews.map((review) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] p-4"
                >
                  <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={review.avatar || "/placeholder.svg"}
                          alt={review.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{review.name}</h3>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>

                    <div className="flex mb-3">{renderStars(review.rating)}</div>

                    <p className="text-gray-700 flex-grow">{review.comment}</p>

                    <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">Vía Google Reviews</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Indicadores de página */}
          <div className="flex justify-center mt-6 gap-2">
            {Array(Math.ceil(reviews.length / itemsPerPage.mobile))
              .fill(0)
              .map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === currentIndex ? "bg-[#8B0000]" : "bg-gray-300"
                  }`}
                  aria-label={`Ir a la página ${i + 1}`}
                />
              ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Button className="bg-[#8B0000] hover:bg-[#6B0000] text-white" asChild>
            <a
              href="https://www.google.com/search?q=opiniones+de+parrilla+%26+restaurant+iowa+villa+del+dique"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver más reseñas en Google
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

