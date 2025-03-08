"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import AboutSection from "./components/about-section"
import SiteHeader from "./components/site-header"
import SiteFooter from "./components/site-footer"
import ServicesSection from "./components/services-section"
import EventsSection from "./components/events-section"
import ContactSection from "./components/contact-section"
import ReviewsSection from "./components/reviews-section"
import FaqSection from "./components/faq-section"
import WhatsAppButton from "./components/whatsapp-button"
import CtaBanner from "./components/cta-banner"
import ChefFeature from "./components/chef-feature"
// Asegurarse de importar Image directamente de next/image
import Image from "next/image"

const heroSlides = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveInsta.to_450108921_841620801367234_441272498840807960_n.jpg-x4ZgM6kR5hIbmiDDBa3nwfl460mkTW.jpeg",
    title: "Arte Culinario",
    subtitle: "Cada plato es una obra maestra preparada con pasión",
    position: "object-left-top",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveInsta.to_450381833_1184031569302360_6357979180195562129_n.jpg-0ed5lYswC4L8hUp22CDFoTrk34CcTk.jpeg",
    title: "Auténtica Parrilla Argentina",
    subtitle: "El sabor de la tradición desde 1979",
    position: "object-center",
  },
]

export default function RestaurantPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <WhatsAppButton />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden" aria-label="Presentación">
          {/* Slides */}
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{
                opacity: currentSlide === index ? 1 : 0,
                scale: currentSlide === index ? 1 : 1.1,
              }}
              transition={{
                opacity: { duration: 1 },
                scale: { duration: 6 },
              }}
              className="absolute inset-0"
              style={{ zIndex: currentSlide === index ? 1 : 0 }}
              aria-hidden={currentSlide !== index}
            >
              <div className="absolute inset-0 bg-black/40 z-10" />
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className={`object-cover ${slide.position}`}
                priority={index === 0}
                sizes="100vw"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: currentSlide === index ? 1 : 0,
                  y: currentSlide === index ? 0 : 20,
                }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    y: currentSlide === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    y: currentSlide === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-xl md:text-2xl max-w-3xl mb-8"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    y: currentSlide === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    size="lg"
                    className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/30 text-lg px-8 py-6"
                    asChild
                  >
                    <a
                      href="https://wa.me/543512082818?text=Hola,%20quisiera%20hacer%20una%20reserva%20en%20IOWA%20Restaurant"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Reservar mesa por WhatsApp"
                    >
                      Reservar Mesa
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    asChild
                    className="bg-[#8B0000] hover:bg-[#6B0000] text-white backdrop-blur-sm text-lg px-8 py-6"
                  >
                    <Link href="/menu">Ver Menú</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}

          {/* Slide Indicators */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3"
            role="tablist"
            aria-label="Controles de presentación"
          >
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-16 h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-white" : "bg-white/40"
                }`}
                aria-label={`Diapositiva ${index + 1}`}
                aria-selected={currentSlide === index}
                role="tab"
              >
                <span className="sr-only">Diapositiva {index + 1}</span>
              </button>
            ))}
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Chef Feature Section */}
        <ChefFeature />

        {/* Services Section */}
        <ServicesSection />

        {/* Events Section */}
        <EventsSection />

        {/* Reviews Section */}
        <ReviewsSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Reservation CTA */}
        <CtaBanner />
      </main>

      <SiteFooter />
    </div>
  )
}

