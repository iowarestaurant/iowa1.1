"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Servicio de Catering",
    description: "Creamos experiencias gastronómicas únicas para tus eventos especiales",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/service_1-4cecee4b53b8290d47e9e199ab8148e0-kUoQnqEXs403AbG8XReZ22gkwvNIJY.png",
  },
  {
    title: "Asadores y Carne Propia",
    description: "La mejor selección de cortes preparados por expertos asadores",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/service_7-eac5655c624d1a874d281655c1caa195-keSFvA9cmkOrGQ6DlsyKdBx5Vi9jbR.jpeg",
  },
  {
    title: "Festivales",
    description: "Llevamos nuestra gastronomía a los mejores eventos y festivales",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/service_3-3770e6a3ff58267ed8f2e8c80bee8cf9-i0mOtsno57WnmPllZTsM5LsZdD1QOa.png",
  },
  {
    title: "Pizzas a la Parrilla",
    description: "Una fusión única de la tradición italiana y el sabor del asado",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/service_5-cf08ff91df899a47239bb931f5565ae8-I9HLH7UATWuoC4ifxJbetGxM0dcn1o.png",
  },
  {
    title: "Barra de Bebidas",
    description: "Cócteles artesanales y bebidas premium para tu evento",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/service_8-fc6e327e4c60da709492cc41aa1ae154-1D3mA5dXm7ZcCDhtGcFvb2aZrGKwf8.png",
  },
  {
    title: "DJ y Sonido Propio",
    description: "Música profesional para crear el ambiente perfecto",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/service_9-ed459bc69574bf7d0884f0f6bbb7b4ac-XdHirJgYPhPmt2XzUeaigaPnTEK9Zj.png",
  },
]

export default function ServicesSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Estamos presentes en cada reunión, festejo o evento importante para vos, con el objetivo de llevar a cabo
              una experiencia única y diferente. Cocinamos con amor y creamos momentos únicos con mucha magia!
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:opacity-60" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Contactanos</h3>
          <div className="flex items-center justify-center gap-2 text-xl font-medium text-[#8B0000]">
            <Phone className="h-6 w-6" />
            <a href="tel:+5493512082818" className="hover:underline">
              +54 9 3512 08-2818
            </a>
          </div>
          <Button className="mt-6 bg-[#8B0000] hover:bg-[#6B0000] text-white" asChild>
            <a href="https://wa.me/5493512082818" target="_blank" rel="noopener noreferrer">
              Contactar por WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

