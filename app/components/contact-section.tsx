"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Phone, Mail, Facebook, Instagram, MessageSquare } from "lucide-react"
import ContactForm from "./contact-form"

export default function ContactSection() {
  return (
    <section id="contacto" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Contacto</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Estamos a tu disposición para resolver cualquier consulta, recibir tus comentarios o ayudarte a reservar tu
            mesa.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[#8B0000] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium mb-1">Dirección</h3>
                    <p className="text-gray-700">Av. San Martin, X5862 Villa del Dique, Córdoba</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-[#8B0000] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium mb-1">Horarios</h3>
                    <p className="text-gray-700">Domingo, Lunes, Martes y Miércoles: 12:00 - 15:30</p>
                    <p className="text-gray-700">Jueves, Viernes y Sábado: 12:00 - 15:30 y 20:00 - 00:30</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-[#8B0000] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium mb-1">Teléfono</h3>
                    <a href="tel:+543512082818" className="text-gray-700 hover:text-[#8B0000] transition-colors">
                      0351 208-2818
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-[#8B0000] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <a
                      href="mailto:iowaparrillarestaurant@gmail.com"
                      className="text-gray-700 hover:text-[#8B0000] transition-colors"
                    >
                      iowaparrillarestaurant@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageSquare className="h-6 w-6 text-[#8B0000] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium mb-1">WhatsApp</h3>
                    <a
                      href="https://api.whatsapp.com/send?phone=543512082818"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#8B0000] transition-colors"
                    >
                      +54 351 208-2818
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="text-lg font-medium mb-3">Síguenos</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/restaurant_iowa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#8B0000] text-white p-3 rounded-full hover:bg-[#6B0000] transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://m.facebook.com/100055667471994/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#8B0000] text-white p-3 rounded-full hover:bg-[#6B0000] transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=543512082818"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#8B0000] text-white p-3 rounded-full hover:bg-[#6B0000] transition-colors"
                      aria-label="WhatsApp"
                    >
                      <MessageSquare className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3390.0456418694196!2d-64.40833492432826!3d-31.81499997487307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d7a0c5c7c2acf%3A0x8a0d34280f77c705!2sAv.%20San%20Mart%C3%ADn%2C%20X5862%20Villa%20del%20Dique%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1710107633971!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación de IOWA Parrilla & Restaurant"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

