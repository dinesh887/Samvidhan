import { writeFile } from 'node:fs/promises'
import { articles, articlePath } from '../src/data/articles.js'
import { currentAffairs, currentAffairsPath } from '../src/data/currentAffairs.js'
import { amendments, amendmentPath } from '../src/data/amendments.js'
import { fundamentalRights } from '../src/data/fundamentalRights.js'

const origin = 'https://www.mysamvidhan.in'
const fixedPaths = [
  '/', '/articles', '/current-affairs', '/fundamental-rights',
  '/fundamental-duties', '/directive-principles', '/amendments',
  '/preamble', '/quiz', '/faq', '/learn', '/exam-preparation', '/about', '/contact', '/privacy-policy',
  '/terms-and-conditions', '/disclaimer',
]
const paths = [...new Set([
  ...fixedPaths,
  ...articles.map((item) => articlePath(item.number)),
  ...fundamentalRights.map((item) => `/fundamental-rights/${item.slug}`),
  ...currentAffairs.map((item) => currentAffairsPath(item.slug)),
  ...amendments.map((item) => amendmentPath(item.slug)),
])]
for (const path of paths) {
  if (!path.startsWith('/') || path.includes('?') || path.includes('#')) {
    throw new Error(`Invalid canonical sitemap path: ${path}`)
  }
}
const xmlEscape = (value) => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
})[character])
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${xmlEscape(`${origin}${path}`)}</loc></url>`).join('\n')}
</urlset>
`

await writeFile(new URL('../public/sitemap.xml', import.meta.url), xml, 'utf8')
await writeFile(new URL('../public/robots.txt', import.meta.url), `User-agent: *
Allow: /
Sitemap: ${origin}/sitemap.xml
`, 'utf8')
console.log(`Wrote ${paths.length} canonical content routes to public/sitemap.xml`)
