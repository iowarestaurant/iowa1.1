export async function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://www.iowa.ar/sitemap.xml`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    },
  )
}

