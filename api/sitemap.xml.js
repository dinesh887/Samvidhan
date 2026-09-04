import { seoRoutes } from '../src/data/seoConfig.js'
import { articles } from '../src/data/articles.js'

function getSiteUrl(request) {
  const configured = process.env.SITE_URL || process.env.VITE_SITE_URL
  if (configured) return configured.replace(/\/$/, '')
  const host = request.headers['x-forwarded-host'] || request.headers.host
  const protocol = request.headers['x-forwarded-proto'] || 'https'
  return `${protocol}://${host}`
}

function escapeXml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
}

export default function handler(request, response) {
  const siteUrl = getSiteUrl(request)
  const lastmod = new Date().toISOString().slice(0, 10)
  const staticUrls = Object.entries(seoRoutes).filter(([path, config]) => config.indexable !== false && !path.includes(':'))
  const urls = staticUrls.map(([path, config]) => ({ path, priority: config.priority || '0.5', changefreq: config.changefreq || 'monthly' }))
  const articleUrls = articles.map((article) => ({ path: `/article/${article.id}`, priority: '0.7', changefreq: 'monthly' }))
  const entries = [...urls, ...articleUrls].map(({ path, priority, changefreq }) => `  <url><loc>${escapeXml(`${siteUrl}${path}`)}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`).join('\n')
  response.setHeader('Content-Type', 'application/xml; charset=utf-8')
  response.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400')
  response.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`)
}