"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ChefFeature() {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block rounded-lg bg-[#8B0000]/10 px-3 py-1 text-sm text-[#8B0000] font-medium">
              Sabores de Calamuchita
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nicolás Barra en Living Room
            </h2>
            <p className="text-lg text-gray-700 md:text-xl">
              Nuestro chef y dueño Nicolás Barra comparte sus secretos culinarios en el programa Living Room de Río
              Tercero. Descubre recetas exclusivas y técnicas profesionales para llevar la gastronomía de IOWA a tu
              hogar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#8B0000] hover:bg-[#6B0000] text-white">
                <a
                  href="https://youtube.com/@saboresdecalamuchita?si=yEU2UH2xZri_aLsB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Ver Canal <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-xl shadow-xl"
          >
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/intCtcg8-dM"
                title="Nicolás Barra en Living Room"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

