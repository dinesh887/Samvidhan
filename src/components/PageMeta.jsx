import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { getSeoMetadata } from '../utils/seoMetadata'

function setMeta(attribute, value, content) {
  let element = document.head.querySelector(`meta[${attribute}="${value}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function setLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

export default function PageMeta(overrides = {}) {
  const { pathname, search } = useLocation()
  const { language } = useLanguage()

  useEffect(() => {
    const metadata = getSeoMetadata(pathname, language, { ...overrides, search })
    const lang = language === 'mr' ? 'mr-IN' : 'en-IN'

    document.title = metadata.title
    document.documentElement.lang = lang

    setMeta('name', 'description', metadata.description)
    setMeta('name', 'robots', metadata.robots)

    setMeta('property', 'og:title', metadata.title)
    setMeta('property', 'og:description', metadata.description)
    setMeta('property', 'og:type', metadata.ogType)
    setMeta('property', 'og:url', metadata.canonicalUrl)
    setMeta('property', 'og:site_name', 'Samvidhan')
    setMeta('property', 'og:image', metadata.image)
    setMeta('property', 'og:image:alt', metadata.imageAlt)
    setMeta('property', 'og:locale', lang.replace('-', '_'))

    setMeta('name', 'twitter:card', metadata.ogType === 'article' ? 'summary_large_image' : 'summary')
    setMeta('name', 'twitter:title', metadata.title)
    setMeta('name', 'twitter:description', metadata.description)
    setMeta('name', 'twitter:image', metadata.image)
    setMeta('name', 'twitter:image:alt', metadata.imageAlt)

    setLink('canonical', metadata.canonicalUrl)

    if (metadata.article?.keywords?.length) {
      setMeta('name', 'keywords', metadata.article.keywords.join(', '))
    } else {
      document.head.querySelector('meta[name="keywords"]')?.remove()
    }
  }, [pathname, search, language, overrides.title, overrides.description, overrides.canonical, overrides.robots])

  return null
}
