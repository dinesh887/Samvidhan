import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { seoRoutes } from './src/data/seoConfig.js'
import { articles } from './src/data/articles.js'
import { buildLlms, buildLlmsFull } from './api/llmsUtils.js'

function siteUrl(request) {
  const configured = process.env.SITE_URL || process.env.VITE_SITE_URL
  if (configured) return configured.replace(/\/$/, '')
  return `http://${request.headers.host}`
}

function escapeXml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
}

function localSeoMiddleware() {
  return {
    name: 'samvidhan-local-seo-endpoints',
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        if (request.url === '/robots.txt') {
          const baseUrl = siteUrl(request)
          response.statusCode = 200
          response.setHeader('Content-Type', 'text/plain; charset=utf-8')
          response.end(`User-agent: *\nAllow: /\nDisallow: /dashboard\nDisallow: /progress\nDisallow: /bookmarks\nDisallow: /premium-quiz\nDisallow: /api/\nSitemap: ${baseUrl}/sitemap.xml\n`)
          return
        }

        if (request.url === '/sitemap.xml') {
          const baseUrl = siteUrl(request)
          const lastmod = new Date().toISOString().slice(0, 10)
          const routes = Object.entries(seoRoutes).filter(([path, config]) => config.indexable !== false && !path.includes(':'))
          const staticEntries = routes.map(([path, config]) => `<url><loc>${escapeXml(`${baseUrl}${path}`)}</loc><lastmod>${lastmod}</lastmod><changefreq>${config.changefreq || 'monthly'}</changefreq><priority>${config.priority || '0.5'}</priority></url>`)
          const articleEntries = articles.map((article) => `<url><loc>${escapeXml(`${baseUrl}/article/${article.id}`)}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`)
          response.statusCode = 200
          response.setHeader('Content-Type', 'application/xml; charset=utf-8')
          response.end(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${[...staticEntries, ...articleEntries].join('')}</urlset>`)
          return
        }

        if (request.url === '/llms.txt' || request.url === '/llms-full.txt') {
          const baseUrl = siteUrl(request)
          response.statusCode = 200
          response.setHeader('Content-Type', 'text/plain; charset=utf-8')
          response.end(request.url === '/llms.txt' ? buildLlms(baseUrl) : buildLlmsFull(baseUrl))
          return
        }

        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), localSeoMiddleware()],
})
