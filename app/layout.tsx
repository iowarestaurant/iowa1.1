import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import WhatsAppButton from "./components/whatsapp-button"
import type { Metadata } from "next"

// Optimizar carga de fuentes
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

// Metadatos globales para SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://www.iowa.ar"),
  title: {
    default: "IOWA Parrilla & Restaurant | Auténtica Parrilla Argentina",
    template: "%s | IOWA Parrilla & Restaurant",
  },
  description:
    "Restaurante con más de 50 años de tradición gastronómica en Villa del Dique, Córdoba. Especialistas en parrilla argentina, eventos y catering.",
  keywords: [
    "restaurante",
    "parrilla argentina",
    "Villa del Dique",
    "Córdoba",
    "eventos",
    "catering",
    "comida argentina",
  ],
  authors: [{ name: "IOWA Parrilla & Restaurant" }],
  creator: "IOWA Parrilla & Restaurant",
  publisher: "IOWA Parrilla & Restaurant",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.iowa.ar",
    title: "IOWA Parrilla & Restaurant | Auténtica Parrilla Argentina",
    description:
      "Restaurante con más de 50 años de tradición gastronómica en Villa del Dique, Córdoba. Especialistas en parrilla argentina, eventos y catering.",
    siteName: "IOWA Parrilla & Restaurant",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IOWA Parrilla & Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IOWA Parrilla & Restaurant | Auténtica Parrilla Argentina",
    description:
      "Restaurante con más de 50 años de tradición gastronómica en Villa del Dique, Córdoba. Especialistas en parrilla argentina, eventos y catering.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#8B0000",
      },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "verificación-google",
  },
  category: "restaurant",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#8B0000" />
        <meta name="msapplication-TileColor" content="#8B0000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Preconectar a dominios externos para mejorar rendimiento */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />

        {/* Asegurar que los estilos se carguen correctamente */}

        {/* SEO Local - Schema.org para Restaurante */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "IOWA Parrilla & Restaurant",
              image: "https://www.iowa.ar/og-image.jpg",
              "@id": "https://www.iowa.ar",
              url: "https://www.iowa.ar",
              telephone: "+543512082818",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. San Martin",
                addressLocality: "Villa del Dique",
                addressRegion: "Córdoba",
                postalCode: "X5862",
                addressCountry: "AR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -31.815,
                longitude: -64.408335,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Sunday"],
                  opens: "12:00",
                  closes: "15:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Thursday", "Friday", "Saturday"],
                  opens: "12:00",
                  closes: "15:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Thursday", "Friday", "Saturday"],
                  opens: "20:00",
                  closes: "00:30",
                },
              ],
              servesCuisine: ["Parrilla Argentina", "Cocina Argentina"],
              priceRange: "$$",
              menu: "https://www.iowa.ar/menu",
              acceptsReservations: "True",
              potentialAction: {
                "@type": "ReserveAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://wa.me/543512082818?text=Hola,%20quisiera%20hacer%20una%20reserva%20en%20IOWA%20Restaurant",
                },
                result: {
                  "@type": "Reservation",
                  name: "Reserva en IOWA Parrilla & Restaurant",
                },
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden bg-background text-foreground`}>
        {/* Contenido principal */}
        <main id="main-content">{children}</main>

        <WhatsAppButton />
      </body>
    </html>
  )
}

