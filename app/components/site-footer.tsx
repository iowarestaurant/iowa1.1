import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, MessageSquare } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="w-full bg-black text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoiowa%20%287%29-0PJXoERREuXd9rl7FCM8wkfe4ukIXr.png"
              alt="IOWA Restaurant Logo"
              width={120}
              height={60}
              className="h-auto brightness-0 invert"
            />
            <p className="text-sm text-gray-400">
              Auténtica parrilla argentina con más de 50 años de tradición en Villa del Dique.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {[
                { name: "Nosotros", href: "/nuestra-historia" },
                { name: "Eventos", href: "#" },
                { name: "Menú", href: "/menu" },
                { name: "Contacto", href: "/#contacto" },
                { name: "Reservas", href: "#" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Horarios</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Domingo, Lunes, Martes y Miércoles: 12:00 - 15:30</li>
              <li>Jueves, Viernes y Sábado: 12:00 - 15:30 y 20:00 - 00:30</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Av. San Martin, X5862 Villa del Dique</li>
              <li>Córdoba, Argentina</li>
              <li>
                <a href="tel:+543512082818" className="hover:text-white transition-colors">
                  0351 208-2818
                </a>
              </li>
              <li>
                <a href="mailto:iowaparrillarestaurant@gmail.com" className="hover:text-white transition-colors">
                  iowaparrillarestaurant@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} IOWA Parrilla & Restaurant. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="https://www.instagram.com/restaurant_iowa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://m.facebook.com/100055667471994/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=543512082818"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <MessageSquare className="h-5 w-5" />
              <span className="sr-only">WhatsApp</span>
            </Link>
          </div>
        </div>

        {/* Powered by Duality Domain */}
        <div className="mt-6 text-center text-xs text-gray-600">
          <p>
            Powered by{" "}
            <a
              href="https://dualitydomain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Duality Domain
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

