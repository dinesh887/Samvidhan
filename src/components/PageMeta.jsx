import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSeoRoute, siteConfig } from '../data/seoConfig'
import { getArticleById } from '../data/articles'
import { getCurrentAffairBySlug } from '../data/currentAffairs'
import { useLanguage } from '../context/LanguageContext'

const SITE_URL = (
  import.meta.env.VITE_SITE_URL || siteConfig.url || 'https://www.mysamvidhan.in'
).replace(/\/+$/, '')

function setMeta(attribute, value, content) {
  let element = document.head.querySelector(
    `meta[${attribute}="${value}"]`
  )

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function setLink(rel, href) {
  let element = document.head.querySelector(
    `link[rel="${rel}"]`
  )

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

export default function PageMeta() {
  const { pathname } = useLocation()
  const { language, pick } = useLanguage()

  useEffect(() => {
    console.log('PageMeta running:', pathname)
    const config = getSeoRoute(pathname)

    const article = pathname.startsWith('/article/')
      ? getArticleById(pathname.split('/').pop())
      : null
    const currentAffair = pathname.startsWith('/current-affairs/')
      ? getCurrentAffairBySlug(pathname.split('/').pop())
      : null

    const title = article
      ? `${article.articleNumber} — ${pick(article.title)} | Samvidhan`
      : currentAffair
        ? pick(currentAffair.seoTitle || currentAffair.title)
      : pick(config.title)

    const description = article
      ? pick(article.simpleExplanation)
      : currentAffair
        ? pick(currentAffair.shortDescription)
      : pick(config.description)

    // Remove trailing slash except for homepage
    const cleanPath =
      pathname === '/'
        ? '/'
        : pathname.replace(/\/+$/, '')

    // Canonical URL — query parameters and hash are excluded
    const canonicalUrl =
      cleanPath === '/'
        ? SITE_URL
        : `${SITE_URL}${cleanPath}`

    document.title = title

    setMeta('name', 'description', description)

    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('property', 'og:site_name', siteConfig.name)

    setMeta('name', 'twitter:card', 'summary')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)

    setMeta(
  'name',
  'robots',
  pathname === '/premium'
    ? 'noindex, follow'
    : config.indexable === false
      ? 'noindex, nofollow'
      : 'index, follow'
)

    // Dynamic canonical
    setLink('canonical', canonicalUrl)

  }, [pathname, language, pick])

  return null
}
