import { useMemo, useState } from 'react'
import { SiteFooter, SiteHeader, Seo } from './ArticlePages.jsx'
import { searchSite } from './data/searchIndex.js'
import { useLanguage } from './LanguageContext.jsx'
import './SearchPage.css'

const copy = {
  en: { title: 'Search MySamvidhan', description: 'Search constitutional articles, rights, duties, amendments, current affairs and learning content.', input: 'Search by article number, title or keyword', submit: 'Search', clear: 'Clear', results: 'Search results', empty: 'Enter a topic, Article number or keyword to search across MySamvidhan.', none: 'No matching content found. Try a different keyword.', count: 'results', type: 'Section' },
  mr: { title: 'MySamvidhan वर शोधा', description: 'संविधानातील कलमे, हक्क, कर्तव्ये, घटनादुरुस्त्या, चालू घडामोडी आणि शैक्षणिक मजकूर शोधा.', input: 'कलम क्रमांक, शीर्षक किंवा शब्दाने शोधा', submit: 'शोधा', clear: 'पुसून टाका', results: 'शोध परिणाम', empty: 'MySamvidhan वर शोधण्यासाठी विषय, कलम क्रमांक किंवा शब्द लिहा.', none: 'जुळणारा मजकूर सापडला नाही. दुसरा शब्द वापरून पाहा.', count: 'परिणाम', type: 'विभाग' },
}

export default function SearchPage() {
  const { language } = useLanguage()
  const text = copy[language]
  const [query, setQuery] = useState(new URLSearchParams(window.location.search).get('q') || new URLSearchParams(window.location.search).get('search') || '')
  const results = useMemo(() => searchSite(query, language), [query, language])
  function update(value) {
    setQuery(value)
    const url = new URL(window.location.href)
    value.trim() ? url.searchParams.set('q', value) : url.searchParams.delete('q')
    url.searchParams.delete('search')
    window.history.replaceState({}, '', url)
  }
  return <><Seo title={`${text.title} | MySamvidhan`} description={text.description} path="/search" schema={{'@context':'https://schema.org','@type':'SearchResultsPage','name':text.title,'url':'https://www.mysamvidhan.in/search'}}/><SiteHeader/><main className="global-search-page"><nav className="global-search-breadcrumb" aria-label={language === 'mr' ? 'मार्गक्रमण' : 'Breadcrumb'}><a href="/">{language === 'mr' ? 'मुख्यपृष्ठ' : 'Home'}</a><span aria-hidden="true">›</span><span aria-current="page">{text.title}</span></nav><header className="global-search-heading"><h1>{text.title}</h1><p>{text.description}</p></header><form className="global-search-form" role="search" onSubmit={(event) => event.preventDefault()}><label className="sr-only" htmlFor="global-search-input">{text.input}</label><input id="global-search-input" type="search" value={query} onChange={(event) => update(event.target.value)} placeholder={text.input} autoComplete="off"/><button type="submit">{text.submit}</button><button type="button" className="global-search-clear" onClick={() => update('')} disabled={!query}>{text.clear}</button></form><section className="global-search-results" aria-live="polite"><h2>{text.results}{query.trim() ? ` · ${results.length} ${text.count}` : ''}</h2>{!query.trim() ? <p className="global-search-message">{text.empty}</p> : results.length ? <ul>{results.map((item, index) => <li key={`${item.url}-${item.title}-${index}`}><a href={item.url}><span>{item.type}</span><strong>{item.title}</strong><small>{item.text.slice(0, 260)}{item.text.length > 260 ? '…' : ''}</small></a></li>)}</ul> : <p className="global-search-message">{text.none}</p>}</section></main><SiteFooter/></>
}
