"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24" aria-labelledby="about-heading">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" aria-hidden="true" />

      <div className="container relative px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block rounded-lg bg-[#8B0000]/10 px-3 py-1 text-sm text-[#8B0000] font-medium">
              Nuestra Historia
            </div>
            <h2 id="about-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Iowa Parrilla & Resto
            </h2>
            <p className="text-lg text-gray-700 md:text-xl">
              Somos un Restaurante que lleva más de 50 años en la gastronomía. Actualmente transitamos la tercera y
              cuarta generación de esta pasión que nos toca vivir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#8B0000] hover:bg-[#6B0000] text-white">
                <Link href="/nuestra-historia">Conocer Más</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-xl w-full"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240817-WA0081%281%29.jpg-gjkiSO5wrF1UZZ9nW4cnR8f9vyPAJZ.jpeg"
                alt="Tradición familiar en IOWA Restaurant"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

