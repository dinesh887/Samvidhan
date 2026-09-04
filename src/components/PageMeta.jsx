import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSeoRoute, siteConfig } from '../data/seoConfig'
import { getArticleById } from '../data/articles'
import { useLanguage } from '../context/LanguageContext'

const SITE_URL = (import.meta.env.VITE_SITE_URL || siteConfig.url).replace(/\/$/, '')

function setMeta(attribute, value, content) {
  let element = document.head.querySelector(`meta[${attribute}="${value}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }
  element.content = content
}

function setLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.rel = rel
    document.head.appendChild(element)
  }
  element.href = href
}

export default function PageMeta() {
  const { pathname } = useLocation()
  const { language, pick } = useLanguage()

  useEffect(() => {
    const config = getSeoRoute(pathname)
    const article = pathname.startsWith('/article/') ? getArticleById(pathname.split('/').pop()) : null
    const title = article ? `${article.articleNumber} — ${pick(article.title)} | Samvidhan` : pick(config.title)
    const description = article ? pick(article.simpleExplanation) : pick(config.description)
    const url = `${SITE_URL}${pathname}`

    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:site_name', siteConfig.name)
    setMeta('name', 'twitter:card', 'summary')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'robots', config.indexable === false ? 'noindex, nofollow' : 'index, follow')
    setLink('canonical', url)
  }, [pathname, language, pick])

  return null
}
