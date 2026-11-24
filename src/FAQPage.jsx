import { useMemo, useState } from 'react'
import { Seo, SiteFooter, SiteHeader } from './ArticlePages.jsx'
import { useLanguage } from './LanguageContext.jsx'
import { faqCategories, faqs } from './data/faqs.js'
import FAQAccordion from './FAQAccordion.jsx'
import './FAQPage.css'

const origin = 'https://www.mysamvidhan.in'
const copy = {
  en: {
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about the Indian Constitution, MySamvidhan and how to explore the educational content available on the website.',
    search: 'Search questions and answers', placeholder: 'Try Article 21, Fundamental Duties or amendments…', clear: 'Clear search', all: 'All topics', results: 'questions', noResults: 'No questions match your search.', noResultsHint: 'Try another keyword or clear your search to browse all topics.', helpTitle: 'Still have a question?', helpText: 'Send us a message or suggest a correction through the Contact page.', contact: 'Contact MySamvidhan', related: 'Explore the website',
  },
  mr: {
    title: 'वारंवार विचारले जाणारे प्रश्न',
    description: 'भारतीय संविधान, MySamvidhan आणि संकेतस्थळावरील शैक्षणिक मजकुराबद्दलची सामान्य उत्तरे येथे शोधा.',
    search: 'प्रश्न आणि उत्तरे शोधा', placeholder: 'कलम २१, मूलभूत कर्तव्ये किंवा घटनादुरुस्ती शोधा…', clear: 'शोध पुसून टाका', all: 'सर्व विषय', results: 'प्रश्न', noResults: 'तुमच्या शोधाशी जुळणारे प्रश्न सापडले नाहीत.', noResultsHint: 'दुसरा शब्द वापरा किंवा सर्व विषय पाहण्यासाठी शोध पुसून टाका.', helpTitle: 'अजून प्रश्न आहे?', helpText: 'संपर्क पृष्ठावरून संदेश पाठवा किंवा दुरुस्ती सुचवा.', contact: 'MySamvidhan शी संपर्क साधा', related: 'संकेतस्थळाचा अभ्यास करा',
  },
}

export default function FAQPage() {
  const { language } = useLanguage()
  const t = copy[language]
  const categories = useMemo(() => faqCategories.filter((category) => faqs.some((item) => item.category === category.id)), [])
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const normalizedQuery = query.trim().toLocaleLowerCase()
  const results = useMemo(() => faqs.filter((item) => {
    const matchesCategory = normalizedQuery || activeCategory === 'all' || item.category === activeCategory
    const content = `${item.q.en} ${item.q.mr} ${item.a.en} ${item.a.mr}`.toLocaleLowerCase()
    return matchesCategory && (!normalizedQuery || normalizedQuery.split(/\s+/).every((term) => content.includes(term)))
  }), [activeCategory, normalizedQuery])
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', name: `${t.title} | MySamvidhan`, description: t.description, url: `${origin}/faq` },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: language === 'mr' ? 'मुख्यपृष्ठ' : 'Home', item: origin }, { '@type': 'ListItem', position: 2, name: t.title, item: `${origin}/faq` }] },
  ] }
  function updateQuery(value) {
    setQuery(value)
    if (value.trim()) setActiveCategory('all')
  }
  function clear() { setQuery(''); setActiveCategory('all') }

  return <><Seo title={`${t.title} | MySamvidhan`} description={t.description} path="/faq" schema={schema}/><SiteHeader/>
    <main className="faq-page">
      <nav className="faq-breadcrumb" aria-label={language === 'mr' ? 'मार्गक्रमण' : 'Breadcrumb'}><a href="/">{language === 'mr' ? 'मुख्यपृष्ठ' : 'Home'}</a><span aria-hidden="true">›</span><span aria-current="page">{t.title}</span></nav>
      <header className="faq-hero"><p className="faq-eyebrow">{language === 'mr' ? 'संविधान समजून घ्या' : 'MY SAMVIDHAN · HELP & LEARNING'}</p><h1>{t.title}</h1><p>{t.description}</p></header>
      <section className="faq-search-section" aria-label={t.search}>
        <form className="faq-search-form" role="search" onSubmit={(event) => event.preventDefault()}><label htmlFor="faq-search-input">{t.search}</label><div><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.5"/><path d="m16 16 5 5"/></svg><input id="faq-search-input" type="search" value={query} onChange={(event) => updateQuery(event.target.value)} placeholder={t.placeholder}/>{query && <button type="button" onClick={clear} aria-label={t.clear}>×</button>}</div></form>
      </section>
      <section className="faq-content" aria-labelledby="faq-results-heading">
        <nav className="faq-categories" aria-label={language === 'mr' ? 'प्रश्नांचे विषय' : 'FAQ categories'}><button type="button" className={activeCategory === 'all' ? 'active' : ''} aria-pressed={activeCategory === 'all'} onClick={() => { setActiveCategory('all'); setQuery('') }}>{t.all}<span>{faqs.length}</span></button>{categories.map((category) => { const count = faqs.filter((item) => item.category === category.id).length; return <button type="button" key={category.id} className={activeCategory === category.id ? 'active' : ''} aria-pressed={activeCategory === category.id} onClick={() => { setActiveCategory(category.id); setQuery('') }}>{category[language]}<span>{count}</span></button> })}</nav>
        <div className="faq-results"><div className="faq-results-heading"><h2 id="faq-results-heading">{activeCategory === 'all' || normalizedQuery ? (language === 'mr' ? 'सर्व प्रश्न' : 'Questions and answers') : categories.find((category) => category.id === activeCategory)?.[language]}</h2><p>{results.length} {t.results}</p></div>
          {results.length ? <FAQAccordion items={results} language={language} groupName="faq-page"/> : <div className="faq-empty"><h3>{t.noResults}</h3><p>{t.noResultsHint}</p><button type="button" onClick={clear}>{t.clear}</button></div>}
        </div>
      </section>
      <section className="faq-bottom"><div><p className="faq-eyebrow">{t.related}</p><h2>{t.helpTitle}</h2><p>{t.helpText}</p></div><a href="/contact">{t.contact}<span aria-hidden="true">→</span></a></section>
    </main><SiteFooter/></>
}
