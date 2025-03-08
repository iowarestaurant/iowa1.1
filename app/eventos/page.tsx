import EventosClientPage from "./EventosClientPage"

// Añadir metadatos específicos para la página de eventos
export const metadata = {
  title: "Eventos | Bodas, Corporativos y Celebraciones",
  description:
    "Organizamos eventos personalizados para bodas, cumpleaños, aniversarios, eventos corporativos y más. Servicio de catering completo con la mejor gastronomía.",
  openGraph: {
    title: "Eventos en IOWA Parrilla & Restaurant",
    description:
      "Organizamos eventos personalizados para bodas, cumpleaños, aniversarios, eventos corporativos y más. Servicio de catering completo con la mejor gastronomía.",
  },
}

export default function EventosPage() {
  return <EventosClientPage />
}

