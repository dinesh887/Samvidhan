function getSiteUrl(request) {
  const configured = process.env.SITE_URL || process.env.VITE_SITE_URL
  return (configured || 'https://www.mysamvidhan.in').replace(/\/$/, '')
}

export default function handler(request, response) {
  const siteUrl = getSiteUrl(request)
  response.setHeader('Content-Type', 'text/plain; charset=utf-8')
  response.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400')
  response.status(200).send(`User-agent: *\nAllow: /\nDisallow: /dashboard\nDisallow: /progress\nDisallow: /bookmarks\nDisallow: /premium-quiz\nDisallow: /api/\nSitemap: ${siteUrl}/sitemap.xml\n`)
}