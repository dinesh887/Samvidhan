import { useState } from 'react'
import { amendments, amendmentPath } from './data/amendments'
import { SiteHeader, SiteFooter, Seo } from './ArticlePages.jsx'
import { articles, articlePath } from './data/articles'
import { localizedArticle } from './data/marathiArticles.js'
import { marathiAmendments } from './data/marathiPageContent.js'
import { useLanguage } from './LanguageContext.jsx'
import './AmendmentPages.css'

const origin = 'https://www.mysamvidhan.in'
const schemaFor = (title, path, summary) => ({ '@context': 'https://schema.org', '@graph': [
  ...(path === '/amendments' ? [] : [{ '@type': 'Article', headline: title, description: summary, mainEntityOfPage: `${origin}${path}`, publisher: { '@type': 'Organization', name: 'MySamvidhan', url: origin } }]),
  { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: origin }, { '@type': 'ListItem', position: 2, name: 'Constitutional Amendments', item: `${origin}/amendments` }, ...(path === '/amendments' ? [] : [{ '@type': 'ListItem', position: 3, name: title, item: `${origin}${path}` }])] },
] })
const ordinal = (number, mr) => mr ? `${number}वी` : `${number}${number === 1 ? 'st' : number === 2 ? 'nd' : number === 3 ? 'rd' : 'th'}`

export function AmendmentsLandingPage() {
  const { language } = useLanguage()
  const mr = language === 'mr'
  const [query, setQuery] = useState('')
  const [year, setYear] = useState('all')
  const years = [...new Set(amendments.map((entry) => entry.year))].sort((a, b) => a - b)
  const results = amendments.filter((entry) => (year === 'all' || year === Number(entry.year)) && `${entry.number} ${entry.year} ${entry.title} ${entry.summary} ${marathiAmendments[entry.slug]?.title || ''} ${marathiAmendments[entry.slug]?.summary || ''} ${(entry.topics || []).join(' ')} ${(entry.affectedArticles || []).map((article) => article.number).join(' ')}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()))
  const t = mr ? {
    title: 'भारताच्या घटनादुरुस्त्या', eyebrow: 'बदलते संविधान', intro: 'भारतीय संविधानातील दुरुस्त्या, त्यांनी केलेले बदल आणि घटनात्मक चौकटीचा झालेला विकास जाणून घ्या.',
    explore: 'घटनादुरुस्त्या पाहा', chronology: 'कालानुक्रमे पाहा', explorer: 'दुरुस्ती शोधा', find: 'घटनादुरुस्ती शोधा',
    count: `${amendments.length} पैकी ${results.length} दाखवल्या`, search: 'क्रमांक, वर्ष, शीर्षक, विषय किंवा कलमानुसार शोधा', placeholder: 'उदा. 86, शिक्षण किंवा कलम 21A',
    year: 'वर्ष', allYears: 'सर्व वर्षे', clear: 'फिल्टर काढा', details: 'तपशील पाहा',
    none: 'या फिल्टरशी जुळणारी दुरुस्ती नाही. दुसरा शोध वापरा किंवा फिल्टर काढा.',
  } : {
    title: 'Constitutional Amendments of India', eyebrow: 'THE CONSTITUTION, EVOLVING', intro: 'Explore amendments to the Constitution of India, the changes they introduced and how the constitutional framework has evolved.',
    explore: 'Explore amendments', chronology: 'Browse chronologically', explorer: 'AMENDMENT EXPLORER', find: 'Find an amendment',
    count: `${results.length} of ${amendments.length} listed`, search: 'Search by number, year, title, topic or Article', placeholder: 'Try 86, education or Article 21A',
    year: 'Year', allYears: 'All years', clear: 'Clear filters', details: 'View details',
    none: 'No amendments match these filters. Try another search or clear filters.',
  }
  return <><Seo title={`${t.title} | MySamvidhan`} description={t.intro} path="/amendments" schema={schemaFor(t.title, '/amendments', t.intro)} /><SiteHeader/><main className="amendment-page">
    <section className="amendment-hero"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p>{t.intro}</p><div className="amendment-hero-links"><a href="#amendment-explorer">{t.explore} ↓</a><a href="#chronology">{t.chronology}</a></div></section>
    <section id="amendment-explorer" className="amendment-explorer"><div className="amendment-section-heading"><div><span className="eyebrow">{t.explorer}</span><h2>{t.find}</h2></div><p>{t.count}</p></div><div className="amendment-controls"><label>{t.search}<input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.placeholder} /></label><label>{t.year}<select value={year} onChange={(event) => setYear(event.target.value)}><option value="all">{t.allYears}</option>{years.map((value) => <option key={value} value={value}>{value}</option>)}</select></label><button type="button" onClick={() => { setQuery(''); setYear('all') }}>{t.clear}</button></div>
      <div id="chronology" className="amendment-list" aria-live="polite">{results.map((entry) => {const localized = mr ? { ...entry, ...marathiAmendments[entry.slug] } : entry; return <article className="amendment-row" key={entry.slug}><div className="amendment-year">{entry.year}<small>{mr ? 'वर्ष' : 'YEAR'}</small></div><div className="amendment-info"><p>{mr ? `संविधानाची ${ordinal(entry.number, true)} घटनादुरुस्ती` : `CONSTITUTION (${ordinal(entry.number, false)}) AMENDMENT`}</p><h3>{localized.title}</h3><p className="amendment-summary">{localized.summary}</p><a href={amendmentPath(entry.slug)}>{t.details} <span aria-hidden="true">→</span></a></div></article>})}{!results.length && <p className="amendment-empty">{t.none}</p>}</div>
    </section></main><SiteFooter/></>
}

export function AmendmentDetailPage({ slug }) {
  const { language } = useLanguage()
  const mr = language === 'mr'
  const source = amendments.find((entry) => entry.slug === slug)
  if (!source) return <><SiteHeader/><main className="amendment-page amendment-not-found"><h1>{mr ? 'घटनादुरुस्ती सापडली नाही' : 'Amendment not found'}</h1><a href="/amendments">{mr ? 'सर्व घटनादुरुस्त्यांकडे परत जा' : 'Back to amendments'}</a></main><SiteFooter/></>
  const item = mr ? { ...source, ...marathiAmendments[source.slug] } : source
  const numberLabel = ordinal(item.number, mr)
  const title = mr ? `${numberLabel} घटनादुरुस्ती अधिनियम (${item.year})` : `${numberLabel} Constitutional Amendment Act (${item.year})`
  const description = item.summary
  return <><Seo title={`${title} | MySamvidhan`} description={description} path={amendmentPath(item.slug)} schema={schemaFor(title, amendmentPath(item.slug), description)}/><SiteHeader/><main className="amendment-page amendment-detail"><nav className="amendment-breadcrumb" aria-label={mr ? 'मार्गक्रमण' : 'Breadcrumb'}><a href="/">{mr ? 'मुख्यपृष्ठ' : 'Home'}</a><span>/</span><a href="/amendments">{mr ? 'घटनादुरुस्त्या' : 'Amendments'}</a><span>/</span><span>{numberLabel} {mr ? 'दुरुस्ती' : 'Amendment'}</span></nav><header className="amendment-detail-hero"><p className="eyebrow">{mr ? `घटनात्मक दुरुस्ती · ${item.year}` : `CONSTITUTIONAL AMENDMENT · ${item.year}`}</p><h1>{mr ? `${numberLabel} घटनादुरुस्ती अधिनियम, ${item.year}` : `The ${numberLabel} Constitutional Amendment Act, ${item.year}`}</h1><h2>{item.title}</h2><p>{item.summary}</p></header><div className="amendment-detail-body"><article><section id="overview"><h2>{mr ? 'आढावा' : 'Overview'}</h2><p>{item.summary}</p></section>{item.affectedArticles?.length > 0 && <section id="constitutional-provisions"><h2>{mr ? 'ओळखलेल्या घटनात्मक तरतुदी' : 'Constitutional provision identified'}</h2><ul>{item.affectedArticles.map((entry) => {const article=articles.find((candidate)=>candidate.number===entry.number);const local=article?localizedArticle(article,language):entry;return <li key={entry.number}><a href={articlePath(entry.number)}>{mr?'कलम':'Article'} {entry.number}: {local.title}</a><p>{mr?'या दुरुस्तीने कलम 21A समाविष्ट केले, असे उपलब्ध आढाव्यात नमूद आहे.':entry.explanation}</p></li>})}</ul></section>}<p className="amendment-content-note">{mr?'या पृष्ठावर संकेतस्थळाच्या स्रोत सामग्रीतील उपलब्ध सारांश दिला आहे. सत्यापित माहिती उपलब्ध नसलेल्या ठिकाणी सविस्तर पार्श्वभूमी, तरतुदीनुसार बदल आणि संदर्भ समाविष्ट केलेले नाहीत.':'This page reflects the amendment summary currently available in the site’s source content. Detailed background, provision-by-provision changes and references are not included where verified material is unavailable.'}</p></article><aside><span>{mr?'या पृष्ठावर':'IN THIS PAGE'}</span><a href="#overview">{mr?'आढावा':'Overview'}</a>{item.affectedArticles?.length > 0 && <a href="#constitutional-provisions">{mr?'घटनात्मक तरतूद':'Constitutional provision'}</a>}</aside></div><a className="amendment-back" href="/amendments">← {mr?'सर्व घटनादुरुस्त्या':'All amendments'}</a></main><SiteFooter/></>
}

