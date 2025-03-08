"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const eventTypes = [
  {
    title: "Bodas",
    description: "Hacemos de tu día especial un momento inolvidable con nuestra gastronomía y servicio",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Corporativos",
    description: "Eventos empresariales con la mejor atención y calidad gastronómica",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "Cumpleaños",
    description: "Celebra tu día con un menú personalizado y una experiencia única",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
  },
]

export default function EventsSection() {
  return (
    <section className="w-full py-16 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoiowa%20%283%29-utawB0UBX0KVjRDkO8Lw9s48mrXBtI.png"
              alt="IOWA Eventos Logo"
              width={240}
              height={120}
              className="h-auto"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-700 max-w-3xl mx-auto"
          >
            Celebra tus momentos más importantes con nosotros. Ofrecemos espacios únicos y menús personalizados para
            crear experiencias memorables en cada ocasión especial.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {eventTypes.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <div className="relative h-80">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                <p className="text-sm mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button asChild className="bg-[#8B0000] hover:bg-[#6B0000] text-white px-8 py-6 text-lg">
            <Link href="/eventos">Conocer Más</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

