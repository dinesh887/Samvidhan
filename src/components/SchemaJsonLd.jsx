import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import {
  getArticleById,
  getRelatedArticles,
} from '../data/articles'

import { getSeoRoute, siteConfig } from '../data/seoConfig'
import { useLanguage } from '../context/LanguageContext'
import { faqs } from '../data/faqs'

const SCHEMA_ID = 'samvidhan-jsonld'

const SITE_URL = (
  import.meta.env.VITE_SITE_URL || siteConfig.url
).replace(/\/$/, '')

function upsertSchema(graph) {
  let script = document.head.querySelector(`#${SCHEMA_ID}`)

  if (!script) {
    script = document.createElement('script')
    script.id = SCHEMA_ID
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }

  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph,
  })
}

function removeSchema() {
  document.head.querySelector(`#${SCHEMA_ID}`)?.remove()
}

export default function SchemaJsonLd() {
  const { pathname } = useLocation()
  const { language, pick } = useLanguage()

  useEffect(() => {
    const config = getSeoRoute(pathname)

    const article = pathname.startsWith('/article/')
      ? getArticleById(pathname.split('/').pop())
      : null

    if (
      config.indexable === false ||
      (pathname.startsWith('/article/') && !article)
    ) {
      removeSchema()
      return
    }

    const canonical = `${SITE_URL}${pathname}`

    const pageTitle = article
      ? `${article.articleNumber} — ${pick(article.title)} | Samvidhan`
      : pick(config.title)

    const pageDescription = article
      ? pick(article.simpleExplanation)
      : pick(config.description)

    const pageId = `${canonical}#webpage`
    const breadcrumbId = `${canonical}#breadcrumb`
    const articleId = article ? `${canonical}#article` : null
    const faqPageId = `${canonical}#faq`

    const organizationDescription =
      language === 'mr'
        ? 'भारतीय संविधान समजून घेणे सोपे करणारे स्वतंत्र शैक्षणिक आणि माहितीपर व्यासपीठ.'
        : 'An independent educational and informational platform that makes the Constitution of India easy to understand.'

    const graph = [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}#organization`,
        name: siteConfig.name,
        url: SITE_URL,
        description: organizationDescription,
      },

      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}#website`,
        name: siteConfig.name,
        url: SITE_URL,
        description: organizationDescription,
        publisher: {
          '@id': `${SITE_URL}#organization`,
        },
        inLanguage: language,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_URL}/articles?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },

      {
        '@type': 'WebPage',
        '@id': pageId,
        url: canonical,
        name: pageTitle,
        description: pageDescription,
        isPartOf: {
          '@id': `${SITE_URL}#website`,
        },
        about: {
          '@id': `${SITE_URL}#organization`,
        },
        breadcrumb: {
          '@id': breadcrumbId,
        },
        inLanguage: language,
        ...(article
          ? {
              mainEntity: {
                '@id': articleId,
              },
            }
          : {}),
        ...(pathname === '/faq'
          ? {
              mainEntity: {
                '@id': faqPageId,
              },
            }
          : {}),
      },

      {
        '@type': 'BreadcrumbList',
        '@id': breadcrumbId,
        itemListElement: article
          ? [
              {
                '@type': 'ListItem',
                position: 1,
                name: language === 'mr' ? 'मुख्यपृष्ठ' : 'Home',
                item: SITE_URL,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: language === 'mr' ? 'सर्व कलमे' : 'Articles',
                item: `${SITE_URL}/articles`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: pick(article.title),
                item: canonical,
              },
            ]
          : [
              {
                '@type': 'ListItem',
                position: 1,
                name: language === 'mr' ? 'मुख्यपृष्ठ' : 'Home',
                item: SITE_URL,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name:
                  pathname === '/faq'
                    ? language === 'mr'
                      ? 'वारंवार विचारले जाणारे प्रश्न'
                      : 'FAQ'
                    : pageTitle,
                item: canonical,
              },
            ],
      },
    ]

    if (article) {
      const relatedArticles = getRelatedArticles(article, 6)

      const articleSchema = {
        '@type': 'Article',
        '@id': articleId,
        headline: pick(article.title),
        description: pageDescription,
        mainEntityOfPage: {
          '@id': pageId,
        },
        url: canonical,
        inLanguage: language,
        isPartOf: {
          '@id': `${SITE_URL}#website`,
        },
        publisher: {
          '@id': `${SITE_URL}#organization`,
        },

        ...(article.articleNumber
          ? {
              articleSection: article.articleNumber,
            }
          : {}),

        ...(article.categoryKey
          ? {
              keywords: [
                article.articleNumber,
                article.categoryKey,
                'Indian Constitution',
                'भारतीय संविधान',
              ]
                .filter(Boolean)
                .join(', '),
            }
          : {}),

        ...(article.lastVerified
          ? {
              dateModified: article.lastVerified,
            }
          : {}),

        ...(relatedArticles.length
          ? {
              isBasedOn: relatedArticles.map(
                (relatedArticle) =>
                  `${SITE_URL}/article/${relatedArticle.id}`
              ),
            }
          : {}),
      }

      graph.push(articleSchema)
    }

    if (pathname === '/faq') {
      graph.push({
        '@type': 'FAQPage',
        '@id': faqPageId,
        url: canonical,
        name: pageTitle,
        inLanguage: language,

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

    upsertSchema(graph)
  }, [pathname, language, pick])

  return null
}