import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { articles } from '../src/data/articles.js'
import { currentAffairs } from '../src/data/currentAffairs.js'
import { seoRoutes, siteConfig } from '../src/data/seoConfig.js'

const root = process.cwd()
const template = await readFile(join(root, 'dist/index.html'), 'utf8')
const { render } = await import(pathToFileURL(join(root, 'dist-server/entry-server.js')).href)
const siteUrl = (process.env.VITE_SITE_URL || siteConfig.url).replace(/\/+$/, '')

const routes = [
  ...Object.entries(seoRoutes)
    .filter(([path, config]) => config.indexable !== false && !path.includes(':'))
    .map(([path]) => path),
  ...articles.map((article) => `/article/${article.id}`),
  ...currentAffairs.map((article) => `/current-affairs/${article.slug}`),
]

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

function metadata(path) {
  const article = path.startsWith('/article/')
    ? articles.find((item) => item.id === path.slice('/article/'.length))
    : null
  const currentAffair = path.startsWith('/current-affairs/')
    ? currentAffairs.find((item) => item.slug === path.slice('/current-affairs/'.length))
    : null
  const config = seoRoutes[path] || seoRoutes['/article/:id'] || seoRoutes['/']
  const title = article
    ? `${article.articleNumber} — ${article.title.en} | Samvidhan`
    : currentAffair
      ? currentAffair.seoTitle.en
      : config.title.en
  const description = article ? article.simpleExplanation.en : currentAffair ? currentAffair.shortDescription.en : config.description.en
  const canonical = `${siteUrl}${path === '/' ? '/' : path.replace(/\/+$/, '')}`
  return `<title>${escapeHtml(title)}</title>\n    <meta name="description" content="${escapeHtml(description)}" />\n    <meta name="robots" content="index, follow" />\n    <link rel="canonical" href="${escapeHtml(canonical)}" />\n    <meta property="og:title" content="${escapeHtml(title)}" />\n    <meta property="og:description" content="${escapeHtml(description)}" />\n    <meta property="og:type" content="website" />\n    <meta property="og:url" content="${escapeHtml(canonical)}" />\n    <meta property="og:site_name" content="${escapeHtml(siteConfig.name)}" />\n    <meta name="twitter:card" content="summary" />\n    <meta name="twitter:title" content="${escapeHtml(title)}" />\n    <meta name="twitter:description" content="${escapeHtml(description)}" />`
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