import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { getSeoRoute, siteConfig } from '../data/seoConfig'
import { getArticleById } from '../data/articles'
import { getCurrentAffairBySlug } from '../data/currentAffairs'
import { useLanguage } from '../context/LanguageContext'

const SITE_URL = (
  import.meta.env.VITE_SITE_URL ||
  siteConfig.url ||
  'https://www.mysamvidhan.in'
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

    let title = ''
    let description = ''
    let ogType = 'website'

    /*
     * ARTICLE PAGE SEO
     */
    if (article) {
      const rawNumber = String(article.articleNumber || '')

      const number = rawNumber
        .replace(/^article\s*/i, '')
        .replace(/^कलम\s*/i, '')
        .trim()

      const articleTitle = pick(article.title)

      if (language === 'mr') {
        title = `कलम ${number} – ${article.title?.mr || articleTitle} | MySamvidhan`

        description =
          `भारतीय संविधानातील कलम ${number} सोप्या मराठीत आणि इंग्रजीत समजून घ्या. ` +
          `${article.title?.mr || 'कलमाचा'} अर्थ, प्रमुख तरतुदी, उदाहरणे आणि महत्त्व जाणून घ्या.`
      } else {
        title = `Article ${number} – ${article.title?.en || articleTitle} | MySamvidhan`

        description =
          `Learn about Article ${number} of the Indian Constitution in simple English and Marathi. ` +
          `Understand its meaning, key provisions, examples and importance.`
      }

      ogType = 'article'
    }

    /*
     * CURRENT AFFAIRS PAGE
     */
    else if (currentAffair) {
      title = pick(
        currentAffair.seoTitle || currentAffair.title
      )

      description = pick(
        currentAffair.shortDescription
      )

      ogType = 'article'
    }

    /*
     * OTHER WEBSITE PAGES
     */
    else {
      title = pick(config.title)
      description = pick(config.description)
    }

    /*
     * Remove trailing slash except homepage
     */
    const cleanPath =
      pathname === '/'
        ? '/'
        : pathname.replace(/\/+$/, '')

    /*
     * Canonical URL
     * Query parameters and hash are excluded
     */
    const canonicalUrl =
      cleanPath === '/'
        ? SITE_URL
        : `${SITE_URL}${cleanPath}`

    /*
     * Document title
     */
    document.title = title

    /*
     * Meta description
     */
    setMeta(
      'name',
      'description',
      description
    )

    /*
     * Open Graph
     */
    setMeta(
      'property',
      'og:title',
      title
    )

    setMeta(
      'property',
      'og:description',
      description
    )

    setMeta(
      'property',
      'og:type',
      ogType
    )

    setMeta(
      'property',
      'og:url',
      canonicalUrl
    )

    setMeta(
      'property',
      'og:site_name',
      siteConfig.name
    )

    /*
     * Twitter
     */
    setMeta(
      'name',
      'twitter:card',
      'summary'
    )

    setMeta(
      'name',
      'twitter:title',
      title
    )

    setMeta(
      'name',
      'twitter:description',
      description
    )

    /*
     * Robots
     */
    setMeta(
      'name',
      'robots',
      pathname === '/premium'
        ? 'noindex, follow'
        : config.indexable === false
          ? 'noindex, nofollow'
          : 'index, follow'
    )

    /*
     * Canonical
     */
    setLink(
      'canonical',
      canonicalUrl
    )
  }, [pathname, language, pick])

  return null
}