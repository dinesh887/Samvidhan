const clean = (value = '') =>
  String(value)
    .replace(/\s+/g, ' ')
    .trim()

const unique = (items) => [
  ...new Set(
    items
      .map(clean)
      .filter(Boolean)
  ),
]

export function generateArticleSEO(article) {
  if (!article) return null

  const rawArticleNumber = clean(article.articleNumber || '')

  const number = rawArticleNumber
    .replace(/^article\s*/i, '')
    .replace(/^कलम\s*/i, '')
    .trim()

  const englishTitle = clean(
    typeof article.title === 'object'
      ? article.title?.en
      : article.title
  )

  const marathiTitle = clean(
    typeof article.title === 'object'
      ? article.title?.mr
      : ''
  )

  const articleKeyword = `Article ${number}`
  const marathiKeyword = `कलम ${number}`

  const keywords = unique([
    // English keywords
    articleKeyword,
    `${articleKeyword} Indian Constitution`,
    `${articleKeyword} of Indian Constitution`,
    `${articleKeyword} explained`,
    `What is ${articleKeyword}`,
    `${articleKeyword} meaning`,
    `${articleKeyword} in simple words`,
    `${articleKeyword} explanation`,
    `${articleKeyword} India`,
    `${articleKeyword} constitution`,

    // Marathi keywords
    marathiKeyword,
    `${marathiKeyword} भारतीय संविधान`,
    `भारतीय संविधान ${marathiKeyword}`,
    `${marathiKeyword} मराठीत`,
    `${marathiKeyword} म्हणजे काय`,
    `${marathiKeyword} माहिती`,
    `${marathiKeyword} स्पष्टीकरण`,

    // Article-specific title keywords
    englishTitle,
    marathiTitle,

    // Existing keywords from article
    ...(Array.isArray(article.keywords)
      ? article.keywords
      : []),
  ])

  const titleEn =
    `${articleKeyword} – ${englishTitle || 'Indian Constitution'}`

  const titleMr =
    `${marathiKeyword} – ${marathiTitle || 'भारतीय संविधान'}`

  const descriptionEn =
    `${articleKeyword} of the Indian Constitution explained in simple English and Marathi. Learn its meaning, key provisions, importance and constitutional context.`

  const descriptionMr =
    `भारतीय संविधानातील ${marathiKeyword} सोप्या मराठी आणि इंग्रजी भाषेत समजून घ्या. ${marathiTitle || 'या कलमाचा'} अर्थ, प्रमुख तरतुदी आणि महत्त्व जाणून घ्या.`

  return {
    title: titleEn,
    titleEn,
    titleMr,

    description: descriptionEn,
    descriptionEn,
    descriptionMr,

    primaryKeyword: articleKeyword,

    keywords,

    canonicalPath: `/article/${article.id}`,

    robots: 'index, follow',
  }
}