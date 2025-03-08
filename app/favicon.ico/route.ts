import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#8B0000",
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "sans-serif",
      }}
    >
      I
    </div>,
    {
      width: 32,
      height: 32,
    },
  )
}

