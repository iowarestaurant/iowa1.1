"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Instagram,
  Facebook,
  Youtube,
  MessageSquare,
  Globe,
  ExternalLink,
  MapPin,
  Mail,
  Clock,
  ChevronRight,
  Share2,
  X,
  Star,
  Calendar,
  Utensils,
} from "lucide-react"
import { useInView } from "react-intersection-observer"

// Define social links and other important links
const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/restaurant_iowa",
    icon: <Instagram className="h-6 w-6" />,
    color: "bg-black border border-white/20",
    hoverColor: "hover:bg-[#E1306C]",
    textColor: "text-white",
    ariaLabel: "Visitar Instagram de IOWA Restaurant",
  },
  {
    name: "Facebook",
    url: "https://m.facebook.com/100055667471994/",
    icon: <Facebook className="h-6 w-6" />,
    color: "bg-black border border-white/20",
    hoverColor: "hover:bg-[#1877F2]",
    textColor: "text-white",
    ariaLabel: "Visitar Facebook de IOWA Restaurant",
  },
  {
    name: "Instagram Eventos",
    url: "https://www.instagram.com/iowa.eventos.gastronomicos",
    icon: <Instagram className="h-6 w-6" />,
    color: "bg-black border border-white/20",
    hoverColor: "hover:bg-[#E1306C]",
    textColor: "text-white",
    ariaLabel: "Visitar Instagram de IOWA Eventos Gastronómicos",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@saboresdecalamuchita?si=yEU2UH2xZri_aLsB",
    icon: <Youtube className="h-6 w-6" />,
    color: "bg-black border border-white/20",
    hoverColor: "hover:bg-[#FF0000]",
    textColor: "text-white",
    ariaLabel: "Visitar canal de YouTube",
  },
  {
    name: "WhatsApp",
    url: "https://api.whatsapp.com/send?phone=543512082818",
    icon: <MessageSquare className="h-6 w-6" />,
    color: "bg-black border border-white/20",
    hoverColor: "hover:bg-[#25D366]",
    textColor: "text-white",
    ariaLabel: "Contactar por WhatsApp",
  },
  {
    name: "Sitio Web",
    url: "https://www.iowa.ar",
    icon: <Globe className="h-6 w-6" />,
    color: "bg-black border border-white/20",
    hoverColor: "hover:bg-white hover:text-black",
    textColor: "text-white",
    ariaLabel: "Visitar sitio web oficial",
  },
]

const importantLinks = [
  {
    name: "Reservar Mesa",
    url: "https://wa.me/543512082818?text=Hola,%20quisiera%20hacer%20una%20reserva%20en%20IOWA%20Restaurant",
    icon: <Calendar className="h-5 w-5" />,
    description: "Reserva tu mesa para una experiencia gastronómica única",
    ariaLabel: "Reservar mesa por WhatsApp",
    highlight: true,
  },
  {
    name: "Ver Menú",
    url: "/menu",
    icon: <Utensils className="h-5 w-5" />,
    description: "Descubre nuestra variedad de platos tradicionales e innovadores",
    ariaLabel: "Ver nuestro menú",
    highlight: false,
  },
  {
    name: "Eventos",
    url: "/eventos",
    icon: <ExternalLink className="h-5 w-5" />,
    description: "Conoce nuestros servicios para eventos y celebraciones especiales",
    ariaLabel: "Información sobre eventos",
    highlight: false,
  },
  {
    name: "Horarios",
    url: "#horarios",
    icon: <Clock className="h-5 w-5" />,
    description: "Domingo a Miércoles: 12:00-15:30 | Jueves a Sábado: 12:00-15:30 y 20:00-00:30",
    ariaLabel: "Ver horarios de atención",
    highlight: false,
  },
  {
    name: "Contacto",
    url: "mailto:iowaparrillarestaurant@gmail.com",
    icon: <Mail className="h-5 w-5" />,
    description: "Escríbenos para cualquier consulta o información adicional",
    ariaLabel: "Contactar por email",
    highlight: false,
  },
]

// Horarios del restaurante
const horarios = [
  { dias: "Domingo, Lunes, Martes y Miércoles", horas: "12:00 - 15:30" },
  { dias: "Jueves, Viernes y Sábado", horas: "12:00 - 15:30 y 20:00 - 00:30" },
]

// Testimonios destacados
const testimonios = [
  {
    nombre: "María Fernández",
    texto: "Excelente lugar para comer. La parrilla es espectacular y el servicio muy atento. Volvería sin dudarlo.",
    rating: 5,
  },
  {
    nombre: "Carlos Rodríguez",
    texto: "Increíble experiencia. La carne perfectamente cocinada y las pastas caseras son deliciosas.",
    rating: 5,
  },
  {
    nombre: "Laura Gómez",
    texto: "Muy buena comida y excelente atención. Los precios son razonables para la calidad que ofrecen.",
    rating: 4,
  },
]

export default function BioLinkPage() {
  const [mounted, setMounted] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const mapRef = useRef<HTMLDivElement>(null)
  const { ref: mapInViewRef, inView: mapIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Cambiar testimonial cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonios.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Inicializar el mapa cuando esté visible
  useEffect(() => {
    if (mapIsVisible && mapRef.current) {
      // El mapa se cargará solo cuando sea visible en la pantalla
      const mapIframe = document.createElement("iframe")
      mapIframe.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3390.0456418694196!2d-64.45134203491619!3d-32.17399617499999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d298c11ef338c7%3A0xc4d659d50fa2a0da!2sParrilla%20%26%20Restaurant%20IOWA!5e0!3m2!1ses!2sar!4v1714252800000!5m2!1ses!2sar"
      mapIframe.width = "100%"
      mapIframe.height = "100%"
      mapIframe.style.border = "0"
      mapIframe.allowFullscreen = true
      mapIframe.loading = "lazy"
      mapIframe.referrerPolicy = "no-referrer-when-downgrade"
      mapIframe.title = "Ubicación de IOWA Parrilla & Restaurant"
      mapIframe.ariaLabel = "Mapa de ubicación de IOWA Parrilla & Restaurant"

      // Limpiar el contenedor antes de añadir el iframe
      if (mapRef.current.firstChild) {
        mapRef.current.removeChild(mapRef.current.firstChild)
      }

      mapRef.current.appendChild(mapIframe)
    }
  }, [mapIsVisible])

  // Compartir la página
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "IOWA Parrilla & Restaurant",
          text: "Descubre IOWA Parrilla & Restaurant - Más de 50 años de tradición gastronómica",
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error compartiendo:", error)
        setShowShareMenu(true)
      }
    } else {
      setShowShareMenu(true)
    }
  }

  // Copiar URL al portapapeles
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
    alert("¡Enlace copiado al portapapeles!")
    setShowShareMenu(false)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      {/* Fondo con patrón sutil */}
      <div
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
          backgroundSize: "100px 100px",
        }}
        aria-hidden="true"
      />

      {/* Botón flotante para compartir */}
      <button
        onClick={handleShare}
        className="fixed bottom-6 right-6 z-50 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition-colors"
        aria-label="Compartir página"
      >
        <Share2 className="h-6 w-6" />
      </button>

      {/* Menú de compartir */}
      <AnimatePresence>
        {showShareMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-20 right-6 z-50 bg-white text-black p-4 rounded-lg shadow-xl"
          >
            <button
              onClick={() => setShowShareMenu(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              aria-label="Cerrar menú de compartir"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="font-bold mb-3">Compartir</h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/?text=${encodeURIComponent(
                      "Descubre IOWA Parrilla & Restaurant - " + window.location.href,
                    )}`,
                    "_blank",
                  )
                }
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
              >
                <MessageSquare className="h-5 w-5 text-[#25D366]" />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={() =>
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                    "_blank",
                  )
                }
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
              >
                <Facebook className="h-5 w-5 text-[#1877F2]" />
                <span>Facebook</span>
              </button>
              <button onClick={copyToClipboard} className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
                <Globe className="h-5 w-5" />
                <span>Copiar enlace</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-3xl px-4 py-16 flex flex-col items-center">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-12"
        >
          <motion.div
            className="relative w-40 h-40 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Image src="/iowa-logo.png" alt="IOWA Restaurant Logo" fill priority className="object-contain" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            IOWA Parrilla & Restaurant
          </h1>
          <p className="text-gray-300 text-center max-w-md mb-4">
            Más de 50 años de tradición gastronómica en Villa del Dique, Córdoba
          </p>
          <div className="flex items-center text-sm text-gray-400">
            <MapPin className="h-4 w-4 mr-1" />
            <span>Villa del Dique, Córdoba, Argentina</span>
          </div>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-full mb-12 overflow-hidden"
        >
          <div className="relative h-[120px] bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4">
            <AnimatePresence mode="wait">
              {testimonios.map(
                (testimonio, index) =>
                  index === activeTestimonial && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 p-4 flex flex-col justify-between"
                    >
                      <p className="text-gray-300 italic text-sm">"{testimonio.texto}"</p>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{testimonio.nombre}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < testimonio.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
          <div className="flex justify-center mt-3 gap-1">
            {testimonios.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeTestimonial ? "bg-white" : "bg-white/30"
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full mb-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} ${link.textColor} ${link.hoverColor} rounded-xl p-4 flex items-center justify-center gap-3 transition-all duration-300`}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              aria-label={link.ariaLabel}
            >
              {link.icon}
              <span className="font-medium">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Important Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full space-y-4 mb-12"
        >
          {importantLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : "_self"}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : ""}
              className={`backdrop-blur-sm transition-all duration-300 rounded-xl p-4 flex items-center gap-4 w-full border ${
                link.highlight
                  ? "bg-white/10 border-white/20 hover:bg-white/15"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              aria-label={link.ariaLabel}
            >
              <div
                className={`${
                  link.highlight ? "bg-gradient-to-br from-white to-gray-300" : "bg-white"
                } text-black rounded-full p-3 flex-shrink-0`}
              >
                {link.icon}
              </div>
              <div className="flex-1">
                <h3 className={`font-medium ${link.highlight ? "text-white" : ""}`}>{link.name}</h3>
                <p className="text-sm text-gray-300">{link.description}</p>
              </div>
              <ChevronRight className={`h-5 w-5 ${link.highlight ? "text-white/70" : "text-gray-500"}`} />
            </motion.a>
          ))}
        </motion.div>

        {/* Mapa de ubicación */}
        <motion.div
          ref={mapInViewRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full mb-12"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            Nuestra Ubicación
          </h2>
          <a
            href="https://maps.app.goo.gl/qhUk3ADv518ZJPic8"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full hover:opacity-95 transition-opacity"
            aria-label="Ver ubicación en Google Maps"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              ref={mapRef}
              className="w-full h-[300px] rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-black/20"
              aria-label="Mapa de ubicación de IOWA Parrilla & Restaurant"
            >
              <div className="w-full h-full bg-white/5 flex items-center justify-center">
                <div className="animate-pulse">Cargando mapa...</div>
              </div>
            </motion.div>
          </a>
          <div className="flex justify-between items-center mt-3">
            <p className="text-sm text-gray-400">Av. San Martin, Villa del Dique, Córdoba</p>
            <a
              href="https://maps.app.goo.gl/qhUk3ADv518ZJPic8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/80 hover:text-white flex items-center gap-1"
            >
              <span>Cómo llegar</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </motion.div>

        {/* Horarios */}
        <motion.div
          id="horarios"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-full mb-12 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg shadow-black/20"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            Horarios de Atención
          </h2>
          <div className="space-y-3">
            {horarios.map((horario, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:justify-between">
                <p className="font-medium">{horario.dias}</p>
                <p className="text-gray-300">{horario.horas}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          <p>© {new Date().getFullYear()} IOWA Parrilla & Restaurant</p>
          <p className="mt-1">Todos los derechos reservados</p>
          <a
            href="https://dualitydomain.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-xs text-gray-400 hover:text-white transition-colors"
            aria-label="Sitio web de Duality Domain"
          >
            Powered by{" "}
            <span className="font-semibold ml-1 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white">
              Duality Domain
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
