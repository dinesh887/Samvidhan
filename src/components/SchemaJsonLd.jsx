import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { buildStructuredData } from '../utils/structuredData'

const SCHEMA_ID = 'samvidhan-jsonld'

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
  }).replace(/</g, '\\u003c')
}

function removeSchema() {
  document.head.querySelector(`#${SCHEMA_ID}`)?.remove()
}

export default function SchemaJsonLd() {
  const { pathname, search } = useLocation()
  const { language } = useLanguage()

  useEffect(() => {
    const graph = buildStructuredData(pathname, search, language)
    if (graph.length) upsertSchema(graph)
    else removeSchema()
  }, [pathname, search, language])

  return null
}
