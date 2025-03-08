import HistoryPageClient from "./HistoryPageClient"

// Añadir metadatos específicos para la página de historia
export const metadata = {
  title: "Nuestra Historia | Más de 50 Años de Tradición",
  description:
    "Conoce la historia de IOWA Parrilla & Restaurant, un legado gastronómico que comenzó en 1973 y continúa con la tercera y cuarta generación de la familia.",
  openGraph: {
    title: "Historia de IOWA Parrilla & Restaurant",
    description:
      "Conoce la historia de IOWA Parrilla & Restaurant, un legado gastronómico que comenzó en 1973 y continúa con la tercera y cuarta generación de la familia.",
  },
}

export default function HistoryPage() {
  return <HistoryPageClient />
}

