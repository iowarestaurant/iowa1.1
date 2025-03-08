import MenuPageClient from "./MenuPageClient"

// Añadir metadatos específicos para la página de menú
export const metadata = {
  title: "Menú | Parrilla, Pastas y Más",
  description:
    "Descubre nuestra variedad de platos tradicionales e innovadores. Parrilla argentina, pastas caseras, opciones para celíacos y veganos, y una cuidada selección de vinos.",
  openGraph: {
    title: "Menú de IOWA Parrilla & Restaurant",
    description:
      "Descubre nuestra variedad de platos tradicionales e innovadores. Parrilla argentina, pastas caseras, opciones para celíacos y veganos, y una cuidada selección de vinos.",
  },
}

export default function MenuPage() {
  return <MenuPageClient />
}

