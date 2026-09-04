import { seoRoutes, siteConfig } from '../src/data/seoConfig.js'
import { articles } from '../src/data/articles.js'

const routeLabels = {
  '/': 'Constitution of India',
  '/articles': 'Articles',
  '/faq': 'Frequently Asked Questions about the Indian Constitution',
  '/fundamental-rights': 'Fundamental Rights',
  '/fundamental-duties': 'Fundamental Duties',
  '/directive-principles': 'Directive Principles of State Policy',
  '/amendments': 'Constitutional Amendments',
  '/quiz': 'Constitution Quiz',
  '/learn': 'Important Articles and educational content',
  '/exam-preparation': 'Exam Preparation',
  '/about': 'About Us',
  '/contact': 'Contact Us',
  '/privacy': 'Privacy Policy',
  '/terms': 'Terms & Conditions',
}

export function getSiteUrl(request) {
  const configured = process.env.SITE_URL || process.env.VITE_SITE_URL
  if (configured) return configured.replace(/\/$/, '')
  const host = request.headers['x-forwarded-host'] || request.headers.host
  const protocol = request.headers['x-forwarded-proto'] || 'https'
  return `${protocol}://${host}`
}

export function getPublicEntries(siteUrl) {
  const pages = Object.entries(seoRoutes)
    .filter(([path, config]) => config.indexable !== false && !path.includes(':'))
    .map(([path, config]) => ({ path, title: config.title, description: config.description, label: routeLabels[path] || config.title.en }))
  const articlePages = articles.map((article) => ({ path: `/article/${article.id}`, label: article.articleNumber, title: article.title, description: article.simpleExplanation, article }))
  return [...pages, ...articlePages].map((entry) => ({ ...entry, url: `${siteUrl}${entry.path}` }))
}

export function buildLlms(siteUrl) {
  const entries = getPublicEntries(siteUrl)
  const links = entries.map((entry) => `- ${entry.label}: ${entry.url}`).join('\n')
  return `# ${siteConfig.name}\n\n> Samvidhan is an independent educational and informational platform about the Constitution of India. It provides accessible constitutional learning for citizens, students and exam aspirants.\n\n## Public pages\n\n${links}\n\n## Important coverage\n\n- Constitution of India: ${siteUrl}/\n- Articles and important Articles: ${siteUrl}/articles\n- Fundamental Rights: ${siteUrl}/fundamental-rights\n- Fundamental Duties: ${siteUrl}/fundamental-duties\n- Directive Principles of State Policy: ${siteUrl}/directive-principles\n- Schedules: covered within the Constitution of India educational material\n- Constitutional Amendments: ${siteUrl}/amendments\n- Educational content: ${siteUrl}/learn\n- About Us: ${siteUrl}/about\n- Contact Us: ${siteUrl}/contact\n\nThis file describes public, indexable content. Private, account, administrative, test and error routes are intentionally excluded. English and Marathi content are available on the same routes through the site language switcher.`
}

export function buildLlmsFull(siteUrl) {
  const entries = getPublicEntries(siteUrl)
  const sections = entries.map((entry) => {
    const articleContent = entry.article ? `\n\nOfficial text: ${entry.article.officialText.en}\n\nSimple explanation: ${entry.article.simpleExplanation.en}\n\nVery simple: ${entry.article.verySimple.en}` : ''
    return `## ${entry.label}\n\nCanonical URL: ${entry.url}\n\n### English\n\nTitle: ${entry.title.en}\n\nDescription: ${entry.description.en}${articleContent}\n\n### Marathi\n\nशीर्षक: ${entry.title.mr}\n\nवर्णन: ${entry.description.mr}${entry.article ? `\n\nसोपे स्पष्टीकरण: ${entry.article.simpleExplanation.mr}\n\nअगदी सोपे: ${entry.article.verySimple.mr}` : ''}`
  }).join('\n\n')
  return `# ${siteConfig.name} — Full AI-readable content\n\nSamvidhan is an independent educational and informational platform about the Constitution of India. This document lists public, indexable pages and their available English and Marathi content.\n\n${sections}\n\n## Exclusions\n\nPrivate account pages, administrative pages, test pages, error pages and non-indexable utility routes are excluded.`
}