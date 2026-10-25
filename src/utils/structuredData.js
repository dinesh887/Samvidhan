import { articles, getArticleById } from '../data/articles.js'
import { currentAffairs, getCurrentAffairBySlug } from '../data/currentAffairs.js'
import { getSeoRoute, siteConfig } from '../data/seoConfig.js'
import { faqs } from '../data/faqs.js'
import { getBreadcrumbItems, translateBreadcrumb } from './breadcrumbItems.js'
import { getCanonicalUrl } from './seoMetadata.js'

const SITE_URL = (
  import.meta.env?.VITE_SITE_URL ||
  (typeof process !== 'undefined' ? process.env?.VITE_SITE_URL : '') ||
  siteConfig.url
).replace(/\/+$/, '')
const LOGO_URL = `${SITE_URL}/images/mysamvidhan-logo.svg`

function localize(value, language) {
  return language === 'mr' ? value?.mr || '' : value?.en || ''
}

function getBreadcrumbSchema(pathname, search, language, pageUrl) {
  const items = getBreadcrumbItems(pathname, search, {
    language,
    t: (key) => translateBreadcrumb(key, language),
    pick: (value) => localize(value, language),
  })

  if (!items.length) return null

  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.to
        ? { item: getCanonicalUrl(item.to) }
        : {}),
    })),
  }
}

function getVisiblePageType(pathname) {
  if (pathname === '/about') return 'AboutPage'
  if (pathname === '/contact') return 'ContactPage'
  if (pathname === '/articles' || pathname === '/current-affairs') return 'CollectionPage'
  return 'WebPage'
}

function getArticleList(pathname, language) {
  const list = pathname === '/articles' ? articles : currentAffairs
  return {
    '@type': 'ItemList',
    itemListElement: list.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: pathname === '/articles'
        ? `${SITE_URL}/article/${item.id}`
        : `${SITE_URL}/current-affairs/${item.slug}`,
      name: pathname === '/articles'
        ? item.articleNumber
        : localize(item.title, language),
    })),
  }
}

export function buildStructuredData(pathname, search = '', language = 'en') {
  const route = getSeoRoute(pathname)
  const article = pathname.startsWith('/article/')
    ? getArticleById(pathname.split('/').pop())
    : null
  const currentAffair = pathname.startsWith('/current-affairs/')
    ? getCurrentAffairBySlug(pathname.split('/').pop())
    : null

  if (
    route.indexable === false ||
    (pathname === '/articles' && Boolean(search)) ||
    (pathname.startsWith('/article/') && !article) ||
    (pathname.startsWith('/current-affairs/') && !currentAffair) ||
    (!route.title && !article && !currentAffair)
  ) {
    return []
  }

  const pageUrl = getCanonicalUrl(pathname)
  const pick = (value) => localize(value, language)
  const title = article
    ? `${article.articleNumber} — ${pick(article.title)} | ${siteConfig.name}`
    : currentAffair
      ? pick(currentAffair.seoTitle || currentAffair.title)
      : pick(route.title)
  const description = article
    ? pick(article.simpleExplanation)
    : currentAffair
      ? pick(currentAffair.shortDescription)
      : pick(route.description)
  const organizationId = `${SITE_URL}#organization`
  const websiteId = `${SITE_URL}#website`
  const pageId = `${pageUrl}#webpage`
  const breadcrumb = getBreadcrumbSchema(pathname, search, language, pageUrl)
  const graph = [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: siteConfig.name,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
      },
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      name: siteConfig.name,
      url: SITE_URL,
      publisher: { '@id': organizationId },
      inLanguage: language === 'mr' ? 'mr-IN' : 'en-IN',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/articles?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': getVisiblePageType(pathname),
      '@id': pageId,
      url: pageUrl,
      name: title,
      description,
      isPartOf: { '@id': websiteId },
      inLanguage: language === 'mr' ? 'mr-IN' : 'en-IN',
      ...(breadcrumb ? { breadcrumb: { '@id': breadcrumb['@id'] } } : {}),
      ...(article || currentAffair
        ? { mainEntity: { '@id': `${pageUrl}#article` } }
        : {}),
      ...(pathname === '/articles' || pathname === '/current-affairs'
        ? { mainEntity: getArticleList(pathname, language) }
        : {}),
    },
  ]

  if (breadcrumb) graph.push(breadcrumb)

  if (article) {
    graph.push({
      '@type': 'Article',
      '@id': `${pageUrl}#article`,
      headline: pick(article.title),
      description,
      image: `${SITE_URL}/images/articles/article-${String(article.id).toLowerCase()}.webp`,
      mainEntityOfPage: { '@id': pageId },
      url: pageUrl,
      inLanguage: language === 'mr' ? 'mr-IN' : 'en-IN',
      publisher: { '@id': organizationId },
      ...(article.articleNumber ? { articleSection: article.articleNumber } : {}),
      ...(article.keywords?.length ? { keywords: article.keywords.join(', ') } : {}),
    })
  }

  if (currentAffair) {
    graph.push({
      '@type': 'Article',
      '@id': `${pageUrl}#article`,
      headline: pick(currentAffair.title),
      description,
      mainEntityOfPage: { '@id': pageId },
      url: pageUrl,
      inLanguage: language === 'mr' ? 'mr-IN' : 'en-IN',
      publisher: { '@id': organizationId },
      ...(currentAffair.date ? { datePublished: currentAffair.date } : {}),
      ...(currentAffair.updatedAt
        ? { dateModified: currentAffair.updatedAt }
        : {}),
      ...(currentAffair.category ? { articleSection: currentAffair.category } : {}),
      ...(currentAffair.keywords?.length
        ? { keywords: currentAffair.keywords.join(', ') }
        : {}),
    })
  }

  if (pathname === '/faq') {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      url: pageUrl,
      name: title,
      inLanguage: language === 'mr' ? 'mr-IN' : 'en-IN',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: pick(faq.question),
        acceptedAnswer: {
          '@type': 'Answer',
          text: pick(faq.answer),
        },
      })),
    })
  }

  return graph
}
