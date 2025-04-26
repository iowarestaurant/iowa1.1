import { ImageResponse } from "next/og"

export const alt = "IOWA Parrilla & Restaurant - Conócenos"
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
        backgroundColor: "#000000",
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
          opacity: 0.05,
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 40,
          width: 200,
          height: 200,
        }}
      >
        {/* Representación simplificada del logo IOWA */}
        <div
          style={{
            width: 180,
            height: 180,
            border: "2px solid white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <div style={{ display: "flex", marginBottom: 10 }}>
            <div style={{ width: 20, height: 60, backgroundColor: "white", marginRight: 20 }}></div>
            <div style={{ width: 60, height: 60, border: "4px solid white", borderRadius: "50%" }}></div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ fontSize: 60, fontWeight: "bold" }}>WA</div>
          </div>
        </div>
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
        <div
          style={{
            fontSize: 64,
            fontWeight: "bold",
            margin: 0,
            marginBottom: 16,
          }}
        >
          CONÓCENOS
        </div>
        <div
          style={{
            fontSize: 32,
            margin: 0,
            opacity: 0.9,
          }}
        >
          IOWA Parrilla & Restaurant
        </div>
        <div
          style={{
            fontSize: 24,
            margin: "16px 0 0 0",
            opacity: 0.7,
          }}
        >
          Todas nuestras redes sociales en un solo lugar
        </div>
      </div>

      {/* Iconos de redes sociales */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {["Instagram", "Facebook", "YouTube", "WhatsApp"].map((name) => (
          <div
            key={name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 60,
              height: 60,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            {name[0]}
          </div>
        ))}
      </div>
    </div>,
    {
      ...size,
    },
  )
}
