import { articles, articlePath } from '../src/data/articles.js'
import { currentAffairs, currentAffairsPath } from '../src/data/currentAffairs.js'

const sitePages = [
  ['/', 'MySamvidhan'],
  ['/articles', 'Constitutional Articles'],
  ['/current-affairs', 'Current Affairs'],
  ['/fundamental-rights', 'Fundamental Rights'],
  ['/fundamental-duties', 'Fundamental Duties'],
  ['/directive-principles', 'Directive Principles'],
  ['/amendments', 'Constitutional Amendments'],
  ['/preamble', 'The Preamble'],
  ['/quiz', 'Constitution Quiz'],
  ['/faq', 'Frequently Asked Questions'],
  ['/learn', 'Learning Guides'],
  ['/exam-preparation', 'Exam Preparation'],
  ['/about', 'About MySamvidhan'],
  ['/contact', 'Contact MySamvidhan'],
  ['/privacy-policy', 'Privacy Policy'],
  ['/terms-and-conditions', 'Terms and Conditions'],
  ['/disclaimer', 'Disclaimer'],
]

const textOf = (value) => typeof value === 'string' ? value : value?.en || ''

export function getSiteUrl(request) {
  const configured = process.env.SITE_URL || process.env.VITE_SITE_URL
  if (configured) return configured.replace(/\/$/, '')
  const host = request?.headers?.['x-forwarded-host'] || request?.headers?.host
  const protocol = request?.headers?.['x-forwarded-proto'] || 'https'
  return host ? `${protocol}://${host}` : 'https://www.mysamvidhan.in'
}

export function getPublicEntries(siteUrl) {
  const pages = sitePages.map(([path, label]) => ({ path, label, title: label, description: label }))
  const articlePages = articles.map((article) => ({
    path: articlePath(article.number),
    label: `Article ${article.number}: ${article.title}`,
    title: article.title,
    description: article.summary || article.content || '',
  }))
  const currentAffairPages = currentAffairs.map((item) => ({
    path: currentAffairsPath(item.slug),
    label: textOf(item.title),
    title: textOf(item.title),
    description: textOf(item.summary) || textOf(item.shortDescription),
  }))
  return [...pages, ...articlePages, ...currentAffairPages].map((entry) => ({ ...entry, url: `${siteUrl}${entry.path}` }))
}

export function buildLlms(siteUrl) {
  const entries = getPublicEntries(siteUrl)
  const links = entries.map((entry) => `- ${entry.label}: ${entry.url}`).join('\n')
  return `# MySamvidhan\n\nAn independent educational website about the Constitution of India, available in English and Marathi.\n\n## Public pages\n\n${links}\n`
}

export function buildLlmsFull(siteUrl) {
  const entries = getPublicEntries(siteUrl)
  return `# MySamvidhan — Full content index\n\n${entries.map((entry) => `## ${entry.label}\n\nCanonical URL: ${entry.url}\n\n${entry.description}`).join('\n\n')}`
}
