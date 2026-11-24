// The three records below are the verified Current Affairs items already shown
// on the homepage. Optional detail fields are omitted unless present in source.
import { migratedCurrentAffairs } from './migratedCurrentAffairs.js'

const curatedCurrentAffairs = [
  {
    slug: 'two-child-norm-supreme-court-larger-bench-2026', category: 'Polity and Constitution', publishedAt: '2026-11-05',
    title: 'Two-Child Norm and Indian Constitution: Supreme Court Seeks Reconsideration',
    summary: 'The Supreme Court has referred the 2003 Javed judgment on the two-child disqualification for local body elections to a larger bench for reconsideration.',
    icon: 'SC', content: [
      { heading: 'What happened', paragraphs: ['On 4 November 2026, the Supreme Court referred the question of the two-child disqualification for local body elections to a larger bench, asking it to reconsider the 2003 Javed judgment. The reference means the legal question is under reconsideration; it is not a final ruling overturning that judgment.'] },
      { heading: 'Constitutional connection', paragraphs: ['The existing explainer connects the issue to equality and personal liberty under Articles 14 and 21. The constitutional questions concern how the disqualification operates and the rights arguments raised around it.'] },
    ], relatedArticles: ['14', '21'], seo: { description: 'The Supreme Court has referred the two-child norm disqualification question to a larger bench for reconsideration. Read the constitutional context.' },
  },
  {
    slug: 'malad-appapada-krantinagar-120-feet-dp-road-rehabilitation', category: 'Local News and Civic Issues', publishedAt: '2026-11-03',
    title: 'Malad DP Road Project: Rehabilitation Concerns',
    summary: 'Residents have raised concerns about rehabilitation linked to the proposed 120-foot Development Plan road in Malad.',
    icon: 'CIVIC', content: [],
  },
  {
    slug: 'save-bhimashankar-saidongar-karjat-tree-felling-2026', category: 'Environment', publishedAt: '2026-10-25',
    title: 'Bhimashankar Hydropower Project Debate',
    summary: 'Explore the proposed Karjat project, reported tree felling and the environmental concerns raised around it.',
    icon: 'ENV', content: [
      { heading: 'Project and reported concerns', paragraphs: ['The proposed Saidongar-I Karjat pumped storage project has prompted concern over reported felling of 32,490 trees. The Forest Department clarified that the proposed project area is not inside the Bhimashankar Wildlife Sanctuary.'] },
    ],
  },
]

const cleanSourceText = (value) => String(value || '').replace(/<br\s*\/?\s*>/gi, '\n').replace(/<\/p\s*>/gi, '\n\n').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").trim()
const localizedSections = (record, language) => {
  const sections = []
  const addText = (heading, field) => {
    const text = cleanSourceText(record[field]?.[language])
    if (text) sections.push({ heading, paragraphs: text.split(/\n\s*\n/).filter(Boolean) })
  }
  addText(language === 'mr' ? 'परिचय' : 'Introduction', 'introduction')
  addText(language === 'mr' ? 'सविस्तर स्पष्टीकरण' : 'Detailed explanation', 'simpleExplanation')
  addText(language === 'mr' ? 'थोडक्यात' : 'In brief', 'verySimple')
  addText(language === 'mr' ? 'उदाहरण' : 'Example', 'example')
  const officialText = cleanSourceText(record.officialText?.[language])
  if (officialText) sections.push({ heading: language === 'mr' ? 'अधिकृत मजकूर' : 'Official text', paragraphs: officialText.split(/\n\s*\n/).filter(Boolean) })
  for (const item of record.seoSections?.[language] || []) {
    const text = cleanSourceText(item.content)
    if (text) sections.push({ heading: item.heading, paragraphs: text.split(/\n\s*\n/).filter(Boolean) })
  }
  const faq = record.faq?.[language] || []
  if (faq.length) sections.push({ heading: language === 'mr' ? 'वारंवार विचारले जाणारे प्रश्न' : 'Frequently asked questions', items: faq.map((item) => `${item.question} ${item.answer}`) })
  const mcqs = record.mcqs?.[language] || []
  if (mcqs.length) sections.push({ heading: language === 'mr' ? 'ज्ञान तपासा' : 'Knowledge check', items: mcqs.map((item) => `${item.question} ${item.options?.join(' · ') || ''} ${item.answer || ''}`) })
  return sections
}

const curatedBySlug = new Map(curatedCurrentAffairs.map((item) => [item.slug, item]))
const migratedBySlug = new Map(migratedCurrentAffairs.map((item) => [item.slug, item]))
const migratedStories = migratedCurrentAffairs.map((record) => {
  const current = curatedBySlug.get(record.slug)
  const publishedAt = record.date || current?.publishedAt || ''
  const sourceName = record.source?.name || record.source?.title || ''
  const sourceUrl = record.source?.url
  const related = (record.relatedIds || []).map(String)
  return {
    ...(current || {}),
    slug: record.slug,
    category: current?.category || record.category || record.categoryMr || 'Current Affairs',
    publishedAt,
    updatedAt: record.updatedAt || current?.updatedAt,
    title: current?.title || record.title?.en || record.id,
    summary: current?.summary || record.shortDescription?.en || record.seoDescription?.en || '',
    introduction: record.introduction?.en || '',
    content: [...(current?.content || []), ...localizedSections(record, 'en')],
    relatedArticles: [...new Set([...(current?.relatedArticles || []), ...related])],
    relatedCurrentAffairs: [...new Set([...(current?.relatedCurrentAffairs || []), ...(record.relatedSlugs || [])])],
    sources: sourceUrl ? [{ title: sourceName || 'Source', url: sourceUrl }] : [],
    seo: current?.seo || { title: record.seoTitle?.en, description: record.seoDescription?.en || record.shortDescription?.en },
    migration: record,
  }
})

export const currentAffairs = migratedStories.map((story) => {
  const record = migratedBySlug.get(story.slug)
  return record ? { ...story, sourceTranslations: record, contentEn: localizedSections(record, 'en'), contentMr: localizedSections(record, 'mr') } : story
})
export const currentAffairsPath = (slug) => `/current-affairs/${slug}`
