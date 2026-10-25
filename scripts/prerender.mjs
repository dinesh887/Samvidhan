import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { articles } from '../src/data/articles.js'
import { currentAffairs } from '../src/data/currentAffairs.js'
import { seoRoutes, siteConfig } from '../src/data/seoConfig.js'
import { getSeoMetadata } from '../src/utils/seoMetadata.js'
import { buildStructuredData } from '../src/utils/structuredData.js'

const root = process.cwd()
const template = await readFile(join(root, 'dist/index.html'), 'utf8')
const { render } = await import(pathToFileURL(join(root, 'dist-server/entry-server.js')).href)
const siteUrl = (process.env.VITE_SITE_URL || siteConfig.url).replace(/\/+$/, '')

const routes = [
  ...Object.entries(seoRoutes)
    .filter(([path, config]) => (config.indexable !== false || path === '/privacy-policy') && !path.includes(':'))
    .map(([path]) => path),
  ...articles.map((article) => `/article/${article.id}`),
  ...currentAffairs.map((article) => `/current-affairs/${article.slug}`),
]

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

function metadata(path) {
  const meta = getSeoMetadata(path, 'en')
  const graph = buildStructuredData(path, '', 'en')
  const jsonLd = graph.length
    ? `<script id="samvidhan-jsonld" type="application/ld+json">${JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': graph,
      }).replace(/</g, '\\u003c')}</script>`
    : ''

  return `<title>${escapeHtml(meta.title)}</title>
    <meta name="description" content="${escapeHtml(meta.description)}" />
    <meta name="robots" content="${escapeHtml(meta.robots)}" />
    <link rel="canonical" href="${escapeHtml(meta.canonicalUrl)}" />
    <meta property="og:title" content="${escapeHtml(meta.title)}" />
    <meta property="og:description" content="${escapeHtml(meta.description)}" />
    <meta property="og:type" content="${escapeHtml(meta.ogType)}" />
    <meta property="og:url" content="${escapeHtml(meta.canonicalUrl)}" />
    <meta property="og:site_name" content="${escapeHtml(siteConfig.name)}" />
    <meta property="og:image" content="${escapeHtml(meta.image)}" />
    <meta property="og:image:alt" content="${escapeHtml(meta.imageAlt)}" />
    <meta property="og:locale" content="en_IN" />
    <meta name="twitter:card" content="${meta.ogType === 'article' ? 'summary_large_image' : 'summary'}" />
    <meta name="twitter:title" content="${escapeHtml(meta.title)}" />
    <meta name="twitter:description" content="${escapeHtml(meta.description)}" />
    <meta name="twitter:image" content="${escapeHtml(meta.image)}" />
    <meta name="twitter:image:alt" content="${escapeHtml(meta.imageAlt)}" />
    ${jsonLd}`
}

for (const path of routes) {
  const html = template
    .replace(/<title>.*?<\/title>/, metadata(path))
    .replace('<div id="root"></div>', `<div id="root">${render(path)}</div>`)
  const output = path === '/' ? join(root, 'dist/index.html') : join(root, `dist${path}/index.html`)
  await mkdir(dirname(output), { recursive: true })
  await writeFile(output, html)
}

console.log(`Prerendered ${routes.length} public routes.`)