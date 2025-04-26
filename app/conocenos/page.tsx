import type { Metadata } from "next"
import BioLinkPage from "./bio-link-page"

export const metadata: Metadata = {
  title: "Conócenos | IOWA Parrilla & Restaurant",
  description: "Descubre todas nuestras redes sociales y mantente conectado con IOWA Parrilla & Restaurant.",
  openGraph: {
    title: "Conócenos | IOWA Parrilla & Restaurant",
    description: "Descubre todas nuestras redes sociales y mantente conectado con IOWA Parrilla & Restaurant.",
    images: [
      {
        url: "/conocenos-og.jpg",
        width: 1200,
        height: 630,
        alt: "IOWA Parrilla & Restaurant - Conócenos",
      },
    ],
  },
}

export default function ConocenosPage() {
  return <BioLinkPage />
}
