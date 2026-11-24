import { readFileSync } from 'node:fs'
import { articles, articlePath } from '../src/data/articles.js'
import { fundamentalRights } from '../src/data/fundamentalRights.js'
import { amendments, amendmentPath } from '../src/data/amendments.js'
import { currentAffairs, currentAffairsPath } from '../src/data/currentAffairs.js'

const sourceFiles = ['src/App.jsx', 'src/ArticlePages.jsx', 'src/RightsPages.jsx', 'src/RelatedContent.jsx', 'src/AmendmentPages.jsx', 'src/CurrentAffairsPages.jsx', 'src/CivicPages.jsx', 'src/FooterPages.jsx', 'src/StudyPages.jsx', 'src/data/articles.js', 'src/data/fundamentalRights.js', 'src/data/amendments.js', 'src/data/currentAffairs.js', 'src/data/civicPrinciples.js', 'src/data/faqs.js']
const articleRouteDeclarations = articles.map((article) => articlePath(article.number).toLowerCase())
const rightRouteDeclarations = ['/fundamental-rights', ...fundamentalRights.map((right) => `/fundamental-rights/${right.slug}`)].map((path) => path.toLowerCase())
const amendmentRouteDeclarations = ['/amendments', ...amendments.map((item) => amendmentPath(item.slug))].map((path) => path.toLowerCase())
const affairsRouteDeclarations = currentAffairs.map((item) => currentAffairsPath(item.slug)).map((path) => path.toLowerCase())
// Published destinations not yet rendered by this local React app.
const publishedRouteDeclarations = [
  '/search',
  '/current-affairs',
  '/current-affairs/two-child-norm-supreme-court-larger-bench-2026',
  '/current-affairs/malad-appapada-krantinagar-120-feet-dp-road-rehabilitation',
  '/current-affairs/save-bhimashankar-saidongar-karjat-tree-felling-2026',
  '/current-affairs/right-to-protest-public-order-india',
  '/fundamental-duties', '/directive-principles', '/amendments', '/quiz',
  '/about', '/contact', '/faq', '/learn', '/exam-preparation', '/privacy', '/privacy-policy', '/terms', '/disclaimer',
]
const civicRouteDeclarations = ['/fundamental-duties', '/directive-principles', '/preamble']
const footerRouteDeclarations = ['/about', '/contact', '/privacy-policy', '/terms-and-conditions', '/disclaimer']
const routeDeclarations = ['/', '/articles', ...articleRouteDeclarations, ...rightRouteDeclarations, ...amendmentRouteDeclarations, ...affairsRouteDeclarations, ...civicRouteDeclarations, ...footerRouteDeclarations, ...publishedRouteDeclarations.filter((path) => !['/amendments', ...civicRouteDeclarations, ...footerRouteDeclarations, '/terms'].includes(path) && !currentAffairs.some((item) => currentAffairsPath(item.slug) === path))]
const routeCounts = new Map()
for (const route of routeDeclarations) routeCounts.set(route, (routeCounts.get(route) ?? 0) + 1)
const duplicates = [...routeCounts].filter(([, count]) => count > 1).map(([route]) => route)
const knownRoutes = new Set(routeDeclarations)
const pageIds = new Map()
const links = []
const hrefAttribute = /href\s*=\s*(?:"([^"]+)"|'([^']+)'|\{(?:routeHref|siteHref|rightsPath)\(['"]([^'"]+)['"]\)\})/g
const hrefData = /\bhref\s*:\s*['"]([^'"]+)['"]/g
for (const file of sourceFiles) {
  const source = readFileSync(file, 'utf8')
  pageIds.set(file, new Set([...source.matchAll(/\bid\s*=\s*["']([^"']+)["']/g)].map((match) => match[1])))
  for (const pattern of [hrefAttribute, hrefData]) {
    pattern.lastIndex = 0
    for (const match of source.matchAll(pattern)) links.push({ file, href: match[1] || match[2] || match[3] })
  }
}
const unresolved = [], brokenFragments = []
for (const link of links) {
  if (!link.href || link.href.startsWith('mailto:') || link.href.startsWith('tel:')) continue
  let path = link.href, fragment = ''
  if (/^https?:\/\//i.test(path)) {
    const url = new URL(path)
    if (url.hostname !== 'www.mysamvidhan.in' && url.hostname !== 'mysamvidhan.in') continue
    path = url.pathname
    fragment = decodeURIComponent(url.hash.slice(1))
  } else if (path.startsWith('#')) {
    fragment = decodeURIComponent(path.slice(1))
    path = link.file === 'src/App.jsx' ? '/' : link.file === 'src/RightsPages.jsx' ? '/fundamental-rights' : link.file === 'src/AmendmentPages.jsx' ? '/amendments' : link.file === 'src/CurrentAffairsPages.jsx' ? '/current-affairs/two-child-norm-supreme-court-larger-bench-2026' : link.file === 'src/CivicPages.jsx' ? '/fundamental-duties' : '/articles'
  } else {
    const hashIndex = path.indexOf('#')
    if (hashIndex >= 0) { fragment = decodeURIComponent(path.slice(hashIndex + 1)); path = path.slice(0, hashIndex) }
  }
  path = path.split('?', 1)[0].replace(/\/+$/, '') || '/'
  const normalized = path.toLowerCase()
  if (!knownRoutes.has(normalized)) {
    unresolved.push(`${link.file}: ${link.href}`)
    continue
  }
  if (fragment && (normalized === '/' || normalized === '/articles' || normalized.startsWith('/article/') || normalized.startsWith('/fundamental-rights/'))) {
    const targetFile = normalized === '/' ? 'src/App.jsx' : normalized.startsWith('/fundamental-rights') ? 'src/RightsPages.jsx' : normalized.startsWith('/amendments') ? 'src/AmendmentPages.jsx' : normalized.startsWith('/current-affairs/') ? 'src/CurrentAffairsPages.jsx' : civicRouteDeclarations.includes(normalized) ? 'src/CivicPages.jsx' : footerRouteDeclarations.includes(normalized) ? 'src/FooterPages.jsx' : 'src/ArticlePages.jsx'
    if (!pageIds.get(targetFile)?.has(fragment)) brokenFragments.push(`${link.file}: ${link.href} (missing #${fragment} target in ${targetFile})`)
  }
}
if (duplicates.length || unresolved.length || brokenFragments.length) {
  for (const [label, entries] of [['Duplicate route declarations', duplicates], ['Unresolved internal routes', unresolved], ['Broken in-page links', brokenFragments]]) {
    if (!entries.length) continue
    console.error(`${label}:`)
    for (const entry of entries) console.error(`- ${entry}`)
  }
  process.exitCode = 1
} else {
  console.log(`Checked ${links.length} declared links, ${routeDeclarations.length} unique routes, and local fragment targets; no broken links found.`)
}
