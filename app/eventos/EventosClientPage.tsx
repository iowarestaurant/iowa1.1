"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Calendar, Users, Utensils, Music, Camera, Gift } from "lucide-react"
import SiteHeader from "../components/site-header"
import SiteFooter from "../components/site-footer"
import CtaBanner from "../components/cta-banner"
import EventGallery from "../components/event-gallery"

const eventTypes = [
  {
    title: "Bodas",
    description: "Hacemos de tu día especial un momento inolvidable con nuestra gastronomía y servicio",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Menús personalizados",
      "Decoración temática",
      "Servicio de catering completo",
      "Coordinación con otros proveedores",
    ],
  },
  {
    title: "Corporativos",
    description: "Eventos empresariales con la mejor atención y calidad gastronómica",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    features: ["Almuerzos ejecutivos", "Coffee breaks", "Cenas de gala", "Equipamiento audiovisual"],
  },
  {
    title: "Cumpleaños",
    description: "Celebra tu día con un menú personalizado y una experiencia única",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
    features: ["Tortas personalizadas", "Decoración temática", "Menús para todas las edades", "Animación opcional"],
  },
  {
    title: "Aniversarios",
    description: "Celebra tus momentos más importantes con una experiencia gastronómica inolvidable",
    image: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=2069&auto=format&fit=crop",
    features: ["Ambientación romántica", "Menús degustación", "Servicio personalizado", "Detalles especiales"],
  },
  {
    title: "Eventos Sociales",
    description: "Reuniones, fiestas y celebraciones con el mejor servicio y gastronomía",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop",
    features: ["Espacios adaptables", "Menús variados", "Servicio de bebidas", "Música y entretenimiento"],
  },
  {
    title: "Graduaciones",
    description: "Celebra tus logros académicos con una fiesta inolvidable",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070&auto=format&fit=crop",
    features: ["Paquetes para grupos", "Menús especiales", "Decoración temática", "Fotografía profesional opcional"],
  },
]

const services = [
  {
    icon: <Calendar className="h-8 w-8 text-[#006341]" />,
    title: "Planificación Completa",
    description: "Nos encargamos de todos los detalles para que solo te preocupes por disfrutar",
  },
  {
    icon: <Utensils className="h-8 w-8 text-[#006341]" />,
    title: "Gastronomía Premium",
    description: "Menús personalizados con los mejores ingredientes y preparaciones",
  },
  {
    icon: <Users className="h-8 w-8 text-[#006341]" />,
    title: "Personal Calificado",
    description: "Equipo profesional con amplia experiencia en eventos de todo tipo",
  },
  {
    icon: <Music className="h-8 w-8 text-[#006341]" />,
    title: "Sonido y Ambientación",
    description: "Equipamiento completo para crear la atmósfera perfecta",
  },
  {
    icon: <Camera className="h-8 w-8 text-[#006341]" />,
    title: "Fotografía y Video",
    description: "Capturamos los momentos más especiales de tu evento",
  },
  {
    icon: <Gift className="h-8 w-8 text-[#006341]" />,
    title: "Detalles Personalizados",
    description: "Pequeños toques que hacen la diferencia en tu celebración",
  },
]

export default function EventosClientPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden pt-20">
        <Image
          src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2073&auto=format&fit=crop"
          alt="IOWA Eventos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoiowa%20%287%29-0PJXoERREuXd9rl7FCM8wkfe4ukIXr.png"
                alt="IOWA Eventos Logo"
                width={280}
                height={140}
                className="h-auto mx-auto brightness-0 invert"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto"
            >
              Creamos experiencias gastronómicas únicas para tus momentos más especiales
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Hacemos de tu evento un momento inolvidable
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-700 mb-8"
            >
              En IOWA Eventos estamos presentes en cada reunión, festejo o evento importante para vos, con el objetivo
              de llevar a cabo una experiencia única y diferente. Cocinamos con amor y creamos momentos únicos con mucha
              magia!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button className="bg-[#006341] hover:bg-[#004d33] text-white px-8 py-6 text-lg" asChild>
                <a
                  href="https://wa.me/5493512082818?text=Hola,%20me%20gustaría%20información%20sobre%20eventos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contactar Ahora
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Nuestros Servicios
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Tipos de Eventos
          </motion.h2>

          <div className="grid gap-12">
            {eventTypes.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-xl">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{event.title}</h3>
                  <p className="text-gray-700 text-lg mb-6">{event.description}</p>
                  <ul className="space-y-2">
                    {event.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#006341] mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <EventGallery />

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Lo que dicen nuestros clientes
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "María Fernández",
                event: "Boda",
                quote:
                  "Superaron todas nuestras expectativas. La comida fue exquisita y el servicio impecable. Todos nuestros invitados quedaron encantados.",
              },
              {
                name: "Carlos Rodríguez",
                event: "Evento Corporativo",
                quote:
                  "Profesionales en todo sentido. Se encargaron de cada detalle y nos permitieron concentrarnos en nuestros invitados. Definitivamente volveremos a contratarlos.",
              },
              {
                name: "Laura Gómez",
                event: "Cumpleaños de 50",
                quote:
                  "Mi fiesta fue perfecta gracias a IOWA. El menú personalizado fue un éxito y la atención de todo el personal fue excepcional.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="mb-4 text-[#006341] text-4xl font-serif">"</div>
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaBanner />

      <SiteFooter />
    </div>
  )
}

