import { getArticleById } from '../data/articles.js'
import { getCurrentAffairBySlug } from '../data/currentAffairs.js'
import { getSeoRoute, seoRoutes, siteConfig } from '../data/seoConfig.js'

const SITE_URL = (
  import.meta.env?.VITE_SITE_URL ||
  (typeof process !== 'undefined' ? process.env?.VITE_SITE_URL : '') ||
  siteConfig.url
).replace(/\/+$/, '')

export function getCanonicalUrl(pathname) {
  const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
  return `${SITE_URL}${cleanPath}`
}

export function getSeoMetadata(pathname, language, overrides = {}) {
  const route = getSeoRoute(pathname)
  const article = pathname.startsWith('/article/')
    ? getArticleById(pathname.split('/').pop())
    : null
  const currentAffair = pathname.startsWith('/current-affairs/')
    ? getCurrentAffairBySlug(pathname.split('/').pop())
    : null
  const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
  const isFilteredArticleList = cleanPath === '/articles' && Boolean(overrides.search)

  let title = ''
  let description = ''
  let ogType = 'website'
  let image = `${SITE_URL}/images/mysamvidhan-logo.svg`
  let imageAlt = siteConfig.name

  if (article) {
    const number = String(article.articleNumber || '')
      .replace(/^article\s*/i, '')
      .replace(/^कलम\s*/i, '')
      .trim()
    const articleTitle = language === 'mr' ? article.title.mr : article.title.en

    title = language === 'mr'
  ? `कलम ${number} : अर्थ, तरतुदी आणि MPSC-UPSC | MySamvidhan`
  : `Article ${number}: Meaning and Provisions | MPSC UPSC`
    description = language === 'mr'
  ? `भारतीय संविधानातील कलम ${number} सोप्या मराठी आणि English मध्ये समजून घ्या. ${articleTitle}चा अर्थ, घटनात्मक तरतुदी आणि MPSC-UPSC परीक्षेसाठी महत्त्वाचे मुद्दे वाचा.`
  : `Understand Article ${number} of the Indian Constitution in English and Marathi. Learn its meaning, constitutional provisions and key points for UPSC and MPSC preparation.`
    image = `${SITE_URL}/images/articles/article-${String(article.id).toLowerCase()}.webp`
    imageAlt = `${article.articleNumber} — ${articleTitle}`
    ogType = 'article'
  } else if (currentAffair) {
    title = language === 'mr'
      ? currentAffair.seoTitle?.mr || currentAffair.title.mr
      : currentAffair.seoTitle?.en || currentAffair.title.en
    description = language === 'mr'
      ? currentAffair.shortDescription.mr
      : currentAffair.shortDescription.en
    ogType = 'article'
  } else if (seoRoutes[cleanPath]?.title && seoRoutes[cleanPath]?.description) {
    title = language === 'mr' ? route.title.mr : route.title.en
    description = language === 'mr' ? route.description.mr : route.description.en
  } else {
    title = language === 'mr' ? 'पृष्ठ सापडले नाही | MySamvidhan' : 'Page Not Found | MySamvidhan'
    description = language === 'mr'
      ? 'विनंती केलेले पृष्ठ सापडले नाही.'
      : 'The requested page could not be found.'
  }

  const canonicalUrl = getCanonicalUrl(pathname)
  const isUnknownDetail = (
    (pathname.startsWith('/article/') && !article) ||
    (pathname.startsWith('/current-affairs/') && !currentAffair)
  )
  const robots = overrides.robots || (
    isUnknownDetail || route.indexable === false || isFilteredArticleList
      ? 'noindex, follow'
      : 'index, follow'
  )

  return {
    title: overrides.title || title,
    description: overrides.description || description,
    canonicalUrl: overrides.canonical
      ? getCanonicalUrl(overrides.canonical)
      : canonicalUrl,
    robots,
    ogType,
    image,
    imageAlt,
    language,
    indexable: robots.startsWith('index'),
    article,
    currentAffair,
  }
}
