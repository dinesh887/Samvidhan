import { articles } from '../data/articles'
import { getCategoryByKey } from '../data/categories'

// Searches Article number, English/Marathi title, keywords, and category
// name. Matching is case-insensitive and diacritics-agnostic is not
// needed since Marathi keywords are stored as typed.
export function searchArticles(query, list = articles) {
  const q = (query || '').trim().toLowerCase()
  if (!q) return list

  return list.filter((article) => {
    const numberMatch = article.articleNumber.toLowerCase().includes(q)
    const idMatch = article.id.toLowerCase() === q.replace(/^article\s*/i, '')
    const titleEnMatch = article.title.en.toLowerCase().includes(q)
    const titleMrMatch = article.title.mr.includes(query || '')
    const keywordMatch = article.keywords.some((k) => k.toLowerCase().includes(q))
    const category = getCategoryByKey(article.categoryKey)
    const categoryMatch =
      category &&
      (category.title.en.toLowerCase().includes(q) || category.title.mr.includes(query || ''))

    return numberMatch || idMatch || titleEnMatch || titleMrMatch || keywordMatch || categoryMatch
  })
}

export function filterByCategory(list, categoryKey) {
  if (!categoryKey || categoryKey === 'all') return list
  return list.filter((a) => a.categoryKey === categoryKey)
}

export function sortArticles(list, direction = 'asc') {
  const parseNum = (a) => parseFloat(a.id.replace(/[^0-9.]/g, '')) || 0
  return [...list].sort((a, b) =>
    direction === 'asc' ? parseNum(a) - parseNum(b) : parseNum(b) - parseNum(a)
  )
}
