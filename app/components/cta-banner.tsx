"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Utensils, Calendar, Star } from "lucide-react"

export default function CtaBanner() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#111] text-white overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern"></div>
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-[#8B0000] rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#8B0000] rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                ¿Listo para una experiencia gastronómica única?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Reserva tu mesa ahora y disfruta de la auténtica parrilla argentina en un ambiente acogedor y elegante.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="bg-[#8B0000] hover:bg-[#6B0000] text-white text-lg px-8 py-6 flex items-center gap-2"
                  asChild
                >
                  <a
                    href="https://wa.me/543512082818?text=Hola,%20quisiera%20hacer%20una%20reserva%20en%20IOWA%20Restaurant"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="h-5 w-5" />
                    Reservar Mesa
                  </a>
                </Button>

                <Button
                  size="lg"
                  className="bg-transparent border border-white hover:bg-white/10 text-white text-lg px-8 py-6 flex items-center gap-2"
                  asChild
                >
                  <a href="/menu">
                    <Utensils className="h-5 w-5" />
                    Ver Menú
                  </a>
                </Button>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative w-64 h-64 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/30 animate-spin-slow"></div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xl font-bold">Más de 50 años</p>
                  <p className="text-sm text-gray-300">de tradición gastronómica</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

