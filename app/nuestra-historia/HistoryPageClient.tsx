"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SiteHeader from "../components/site-header"
import SiteFooter from "../components/site-footer"
import CtaBanner from "../components/cta-banner"

export default function HistoryPageClient() {
  const historyItems = [
    {
      year: "1973",
      title: "Los Inicios",
      description:
        "IOWA abre sus puertas por primera vez como un pequeño restaurante familiar en Villa del Dique. Con una propuesta gastronómica basada en la auténtica parrilla argentina, rápidamente se convirtió en un punto de encuentro para los lugareños y turistas que buscaban disfrutar de buena comida en un ambiente acogedor.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240817-WA0060%281%29.jpg-tduT89xnaaWrpzsjnf04cEJgw17RtZ.jpeg",
      imagePosition: "right",
    },
    {
      year: "1980s",
      title: "Crecimiento y Reconocimiento",
      description:
        "Durante esta década, IOWA Pool se consolidó como un referente gastronómico en la región. La familia fundadora trabajó incansablemente para mantener la calidad y el servicio que los caracterizaba, ganando premios y reconocimientos que validaban su esfuerzo y dedicación a la excelencia culinaria.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240817-WA0062%281%29.jpg-M3PkcH9hN4ZeqL34RxQMEzWjPbMWvb.jpeg",
      imagePosition: "left",
    },
    {
      year: "1990s",
      title: "Segunda Generación",
      description:
        "La segunda generación de la familia toma las riendas del negocio, aportando nuevas ideas mientras mantiene la esencia y tradición que hicieron famoso a IOWA. Con un enfoque renovado pero respetando las raíces, el restaurante continuó creciendo y adaptándose a los nuevos tiempos.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240817-WA0063%281%29.jpg-bC4Ym5bdTjmIy6Tu8Q2vmMCnxg2s64.jpeg",
      imagePosition: "right",
    },
    {
      year: "2000s",
      title: "Modernización",
      description:
        "Con el cambio de siglo, IOWA se renovó incorporando nuevas técnicas culinarias y ampliando su menú, siempre manteniendo como protagonista la parrilla tradicional. La infraestructura del restaurante también se modernizó para ofrecer una experiencia más confortable a los comensales, sin perder el encanto que lo caracteriza.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240817-WA0065%281%29.jpg-evvKQMaU6JLHbr8U4qY0X7YAAcaMX0.jpeg",
      imagePosition: "left",
    },
    {
      year: "2010s",
      title: "Expansión y Reconocimiento Internacional",
      description:
        "IOWA comenzó a recibir reconocimiento internacional, atrayendo a turistas de todo el mundo que buscaban experimentar la auténtica parrilla argentina. El equipo de chefs se fortaleció con nuevos talentos que aportaron frescura y creatividad a la propuesta gastronómica.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240817-WA0064%281%29.jpg-v8NPuY05L26TkX8XYYjVKKv4YNgI3N.jpeg",
      imagePosition: "right",
    },
    {
      year: "Actualidad",
      title: "Tercera y Cuarta Generación",
      description:
        "Hoy, la tercera y cuarta generación de la familia continúan el legado, fusionando tradición con innovación. Mantenemos viva la pasión por la gastronomía que ha caracterizado a IOWA durante más de 50 años, honrando nuestras raíces mientras miramos hacia el futuro.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240817-WA0083.jpg-jPSbuQSxFV9cP3ue5vxH4zZqnBTDOy.jpeg",
      imagePosition: "left",
    },
    {
      year: "El Futuro",
      title: "Mirando Hacia Adelante",
      description:
        "Con la mirada puesta en el futuro, pero sin olvidar nuestras raíces, en IOWA seguimos comprometidos con ofrecer experiencias gastronómicas memorables. Las nuevas generaciones continúan aprendiendo y preservando las tradiciones familiares, asegurando que nuestro legado perdure por muchos años más.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240817-WA0066%281%29.jpg-Pzdz1mrstMHULRdZcX4OyIRST8EDBh.jpeg",
      imagePosition: "right",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden pt-20">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240817-WA0089.jpg-a5oMCQP9EreQkUxSsBYz90TIDVoGZl.jpeg"
          alt="Tradición familiar"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div className="container px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Nuestra Historia
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto"
            >
              Más de 50 años de tradición gastronómica
            </motion.p>
          </div>
        </div>
      </section>

      {/* History Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-32">
            {historyItems.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Year indicator */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                  <div className="bg-[#8B0000] text-white text-xl font-bold px-6 py-2 rounded-full inline-block">
                    {item.year}
                  </div>
                </div>

                <div
                  className={`flex flex-col ${
                    item.imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  <div className="flex-1 w-full">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-xl">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              Valores que nos Definen
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-8"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#8B0000]">Tradición</h3>
                <p className="text-gray-700">
                  Mantenemos vivas las recetas y técnicas tradicionales que han pasado de generación en generación.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#8B0000]">Familia</h3>
                <p className="text-gray-700">
                  Somos una familia unida por la pasión por la gastronomía y el servicio a nuestros clientes.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#8B0000]">Excelencia</h3>
                <p className="text-gray-700">
                  Buscamos la perfección en cada plato, utilizando los mejores ingredientes y técnicas.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner />

      <SiteFooter />
    </div>
  )
}

