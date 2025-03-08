import { ImageResponse } from "next/og"

export const alt = "IOWA Parrilla & Restaurant"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#8B0000",
        color: "white",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fondo con patrón */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#8B0000",
          opacity: 0.1,
          backgroundImage:
            "linear-gradient(30deg, #000000 12%, transparent 12.5%, transparent 87%, #000000 87.5%, #000000), linear-gradient(150deg, #000000 12%, transparent 12.5%, transparent 87%, #000000 87.5%, #000000), linear-gradient(30deg, #000000 12%, transparent 12.5%, transparent 87%, #000000 87.5%, #000000), linear-gradient(150deg, #000000 12%, transparent 12.5%, transparent 87%, #000000 87.5%, #000000), linear-gradient(60deg, #00000077 25%, transparent 25.5%, transparent 75%, #00000077 75%, #00000077), linear-gradient(60deg, #00000077 25%, transparent 25.5%, transparent 75%, #00000077 75%, #00000077)",
          backgroundSize: "80px 140px",
          backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px",
        }}
      />

      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 40,
          backgroundColor: "white",
          borderRadius: "50%",
          padding: 20,
          width: 200,
          height: 200,
        }}
      >
        <svg width="160" height="80" viewBox="0 0 120 60">
          <text x="60" y="40" fontSize="40" fontWeight="bold" textAnchor="middle" fill="#8B0000">
            IOWA
          </text>
        </svg>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 40px",
        }}
      >
        <h1
          style={{
            fontSize: 64,
            fontWeight: "bold",
            margin: 0,
            marginBottom: 16,
          }}
        >
          IOWA Parrilla & Restaurant
        </h1>
        <p
          style={{
            fontSize: 32,
            margin: 0,
            opacity: 0.9,
          }}
        >
          Más de 50 años de tradición gastronómica
        </p>
      </div>
    </div>,
    {
      ...size,
    },
  )
}

