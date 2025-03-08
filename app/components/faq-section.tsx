"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Es necesario hacer reserva?",
    answer:
      "Recomendamos hacer reserva, especialmente para fines de semana y feriados. Puedes reservar llamando al 0351 208-2818 o enviándonos un mensaje por WhatsApp.",
  },
  {
    question: "¿Tienen opciones vegetarianas o veganas?",
    answer:
      "Sí, contamos con varias opciones vegetarianas y veganas en nuestro menú. Puedes consultar la sección 'Veganos' en nuestra carta o preguntar a nuestro personal por las opciones disponibles.",
  },
  {
    question: "¿Tienen opciones para celíacos?",
    answer:
      "Sí, disponemos de opciones sin gluten para personas celíacas. Estas están claramente identificadas en nuestra carta en la sección 'Celíacos'.",
  },
  {
    question: "¿Realizan eventos privados?",
    answer:
      "Sí, organizamos eventos privados como cumpleaños, aniversarios, reuniones corporativas y más. Contamos con un servicio de catering completo y podemos adaptar el menú según tus necesidades. Contáctanos para más información.",
  },
  {
    question: "¿Cuál es el método de pago?",
    answer:
      "Aceptamos efectivo, tarjetas de débito y crédito. También aceptamos transferencias bancarias para eventos y reservas anticipadas.",
  },
  {
    question: "¿Tienen estacionamiento?",
    answer: "Sí, contamos con estacionamiento propio para nuestros clientes.",
  },
  {
    question: "¿Se puede llevar mascota?",
    answer:
      "Permitimos mascotas en nuestra terraza exterior, siempre que estén con correa y sean amigables con otros comensales.",
  },
  {
    question: "¿Tienen menú infantil?",
    answer: "Sí, tenemos opciones especiales para los más pequeños en nuestra sección 'Infantil' del menú.",
  },
]

export default function FaqSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestro restaurante y servicios.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-700">
            ¿No encuentras lo que buscas?{" "}
            <a href="/#contacto" className="text-[#8B0000] hover:underline">
              Contáctanos
            </a>{" "}
            y te responderemos a la brevedad.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

