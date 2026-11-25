import { articles, articlePath } from '../src/data/articles.js'
import { currentAffairs, currentAffairsPath } from '../src/data/currentAffairs.js'
import { amendments, amendmentPath } from '../src/data/amendments.js'
import { fundamentalRights } from '../src/data/fundamentalRights.js'

const staticPaths = [
  '/', '/articles', '/current-affairs', '/fundamental-rights',
  '/fundamental-duties', '/directive-principles', '/amendments',
  '/preamble', '/quiz', '/faq', '/learn', '/exam-preparation',
  '/about', '/contact', '/privacy-policy', '/terms-and-conditions', '/disclaimer',
]

function getSiteUrl(request) {
  const configured = process.env.SITE_URL || process.env.VITE_SITE_URL
  return (configured || 'https://www.mysamvidhan.in').replace(/\/$/, '')
}

function escapeXml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
  })[character])
}

export default function handler(request, response) {
  const siteUrl = getSiteUrl(request)
  const paths = [...new Set([
    ...staticPaths,
    ...articles.map((article) => articlePath(article.number)),
    ...fundamentalRights.map((right) => `/fundamental-rights/${right.slug}`),
    ...currentAffairs.map((item) => currentAffairsPath(item.slug)),
    ...amendments.map((amendment) => amendmentPath(amendment.slug)),
  ])]
  const entries = paths.map((path) => `  <url><loc>${escapeXml(`${siteUrl}${path}`)}</loc></url>`).join('\n')
  response.setHeader('Content-Type', 'application/xml; charset=utf-8')
  response.setHeader('Cache-Control', 'public, max-age=0, s-maxage=300, must-revalidate')
  response.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`)
}
