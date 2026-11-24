import { articles, articlePath } from './articles.js'
import { fundamentalRights } from './fundamentalRights.js'
import { duties, dpspArticles, preambleValues } from './civicPrinciples.js'
import { amendments, amendmentPath } from './amendments.js'
import { currentAffairs, currentAffairsPath } from './currentAffairs.js'
import { quizTopics } from './quizQuestions.js'
import { faqs } from './faqs.js'
import { localizedArticle } from './marathiArticles.js'
import { localizedCurrentAffairs } from './marathiCurrentAffairs.js'
import { marathiAmendments, marathiDpsp, marathiDuties, marathiPreambleValues, marathiRights } from './marathiPageContent.js'

const words = (value) => {
  if (value == null) return ''
  if (typeof value !== 'object') return String(value)
  return Object.values(value).map(words).join(' ')
}
const normalizeSearchText = (value) => String(value ?? '').normalize('NFC').toLocaleLowerCase()
const ordinal = (value) => value % 100 >= 11 && value % 100 <= 13 ? `${value}th` : `${value}${({ 1: 'st', 2: 'nd', 3: 'rd' })[value % 10] || 'th'}`
const item = (en, mr, url, textEn = '', textMr = '', typeEn = 'Section', typeMr = 'विभाग') => ({
  title: { en, mr: mr || en }, url, text: { en: textEn, mr: textMr || textEn }, type: { en: typeEn, mr: typeMr },
  searchText: normalizeSearchText(`${en} ${mr || ''} ${textEn} ${textMr || ''} ${typeEn} ${typeMr}`),
})

export const searchableContent = [
  ...articles.map((entry) => {
    const mr = localizedArticle(entry, 'mr')
    return item(`Article ${entry.number}: ${entry.title}`, `कलम ${entry.number}: ${mr.title}`, articlePath(entry.number),
      words([entry.part, entry.category, entry.summary, entry.keywords, entry.content, entry.introduction, entry.example, entry.constitutionalText, entry.migrationSections, entry.migrationFaq, entry.sources]),
      words([mr.part, mr.category, mr.summary, mr.keywords, mr.content, mr.migrationSections]), 'Constitutional Article', 'घटनात्मक कलम')
  }),
  ...fundamentalRights.map((entry) => {
    const mr = marathiRights[entry.slug] || {}
    return item(entry.title, mr.title, `/fundamental-rights/${entry.slug}`,
      words([entry.articleRange, entry.introduction, entry.detail]), words([mr.introduction, mr.detail]), 'Fundamental Right', 'मूलभूत हक्क')
  }),
  item('Fundamental Duties', 'मूलभूत कर्तव्ये', '/fundamental-duties', words(duties), words(marathiDuties), 'Constitutional topic', 'घटनात्मक विषय'),
  ...dpspArticles.map((entry) => {
    const mr = marathiDpsp[entry.n] || []
    return item(`Article ${entry.n}: ${entry.title}`, `कलम ${entry.n}: ${mr[0] || entry.title}`, '/directive-principles',
      words(entry), words(mr), 'Directive Principle', 'राज्याच्या मार्गदर्शक तत्त्व')
  }),
  ...preambleValues.map((entry, index) => {
    const mr = marathiPreambleValues[index] || []
    return item(entry[0], mr[0], '/preamble', words(entry.slice(1)), words(mr.slice(1)), 'Preamble', 'प्रस्तावना')
  }),
  ...amendments.map((entry) => {
    const mr = marathiAmendments[entry.slug] || {}
    return item(`${ordinal(entry.number)} Amendment: ${entry.title}`, `${entry.number} वी घटनादुरुस्ती: ${mr.title || entry.title}`, amendmentPath(entry.slug),
      words([entry.year, entry.summary, entry.topics, entry.affectedArticles]), words([entry.year, mr.summary, mr.title]), 'Constitutional Amendment', 'घटनादुरुस्ती')
  }),
  ...currentAffairs.map((entry, index) => {
    const mr = localizedCurrentAffairs(currentAffairs, 'mr')[index]
    return item(entry.title, mr.title, currentAffairsPath(entry.slug),
      words([entry.summary, entry.introduction, entry.content, entry.category, entry.sources, entry.migration]),
      words([mr.summary, mr.introduction, mr.content, mr.category, entry.migration, entry.sources]), 'Current Affairs', 'चालू घडामोड')
  }),
  ...faqs.map((entry) => item(entry.q.en, entry.q.mr, '/faq', entry.a.en, entry.a.mr, 'FAQ', 'सामान्य प्रश्न')),
  ...quizTopics.flatMap((topic) => topic.facts.map((entry) => item(entry.question, entry.questionMr, '/quiz',
    words([topic.name.en, topic.description.en, entry.answer, entry.explanation]),
    words([topic.name.mr, topic.description.mr, entry.answerMr, entry.explanationMr]), 'Quiz', 'प्रश्नमंजुषा'))),
  item('Learn Indian Constitution', '\u092d\u093e\u0930\u0924\u0940\u092f \u0938\u0902\u0935\u093f\u0927\u093e\u0928\u093e\u091a\u093e \u0905\u092d\u094d\u092f\u093e\u0938', '/learn', 'learning guides Article explanations Fundamental Rights Constitution basics amendments', '\u0905\u092d\u094d\u092f\u093e\u0938 \u092e\u093e\u0930\u094d\u0917\u0926\u0930\u094d\u0936\u0915 \u0915\u0932\u092e \u092e\u0942\u0932\u092d\u0942\u0924 \u0939\u0915\u094d\u0915 \u0938\u0902\u0935\u093f\u0927\u093e\u0928 \u0926\u0941\u0930\u0941\u0938\u094d\u0924\u094d\u092f\u093e', 'Learning guide', '\u0905\u092d\u094d\u092f\u093e\u0938 \u092e\u093e\u0930\u094d\u0917\u0926\u0930\u094d\u0936\u0915'),
  item('MPSC and UPSC Exam Preparation', 'MPSC \u0906\u0923\u093f UPSC \u092a\u0930\u0940\u0915\u094d\u0937\u093e \u0924\u092f\u093e\u0930\u0940', '/exam-preparation', 'exam preparation polity practice MPSC UPSC Constitution questions', '\u092a\u0930\u0940\u0915\u094d\u0937\u093e \u0924\u092f\u093e\u0930\u0940 \u0930\u093e\u091c\u094d\u092f\u0936\u093e\u0938\u094d\u0924\u094d\u0930 \u0938\u0930\u093e\u0935 \u092a\u094d\u0930\u0936\u094d\u0928', 'Exam preparation', '\u092a\u0930\u0940\u0915\u094d\u0937\u093e \u0924\u092f\u093e\u0930\u0940'),
]

export function searchSite(query, language = 'en') {
  const normalizedQuery = normalizeSearchText(query).trim()
  const terms = normalizedQuery.split(/\s+/u).filter(Boolean)
  if (!terms.length) return []
  return searchableContent.filter((entry) => terms.every((term) => entry.searchText.includes(term)))
    .sort((a, b) => {
      const titleA = normalizeSearchText(a.title.en + ' ' + a.title.mr)
      const titleB = normalizeSearchText(b.title.en + ' ' + b.title.mr)
      const score = (title) => title === normalizedQuery ? 3 : title.startsWith(normalizedQuery) ? 2 : title.includes(normalizedQuery) ? 1 : 0
      return score(titleB) - score(titleA)
    })
    .map((entry) => ({ ...entry, title: entry.title[language] || entry.title.en, text: entry.text[language] || entry.text.en, type: entry.type[language] || entry.type.en }))
}

