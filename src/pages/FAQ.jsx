import { useEffect, useMemo, useState } from 'react'
import { ChevronDown, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { faqCategories, faqs } from '../data/faqs'
import { useLanguage } from '../context/LanguageContext'

export default function FAQ() {
  const { language, pick } = useLanguage()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [openId, setOpenId] = useState(null)

  useEffect(() => { setOpenId(null) }, [language, category, query])

  const visibleFaqs = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase(language)
    return faqs.filter((faq) => {
      const matchesCategory = category === 'all' || faq.category === category
      const searchable = `${pick(faq.question)} ${pick(faq.answer)}`.toLocaleLowerCase(language)
      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery))
    })
  }, [category, language, pick, query])

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <nav aria-label={language === 'mr' ? 'मार्गक्रमण' : 'Breadcrumb'} className="mb-8 text-sm text-ink/50 dark:text-ink-dark/50"><Link to="/" className="hover:text-saffron">{language === 'mr' ? 'मुख्यपृष्ठ' : 'Home'}</Link><span className="mx-2" aria-hidden="true">→</span><span lang={language}>{language === 'mr' ? 'वारंवार विचारले जाणारे प्रश्न' : 'FAQ'}</span></nav>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">{language === 'mr' ? 'माहिती केंद्र' : 'Knowledge centre'}</p>
      <h1 lang={language} className="font-display mt-3 text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl">{language === 'mr' ? 'वारंवार विचारले जाणारे प्रश्न' : 'Frequently Asked Questions'}</h1>
      <p lang={language} className="mt-3 max-w-2xl text-ink/60 dark:text-ink-dark/60">{language === 'mr' ? 'भारतीय संविधानाबद्दल सामान्य आणि परीक्षाभिमुख प्रश्नांची स्पष्ट उत्तरे शोधा.' : 'Find clear answers to common and exam-focused questions about the Constitution of India.'}</p>

      <div className="mt-8 relative">
        <Search size={18} className="pointer-events-none absolute left-4 top-3.5 text-ink/40 dark:text-ink-dark/40" />
        <label htmlFor="faq-search" className="sr-only">{language === 'mr' ? 'वारंवार विचारले जाणारे प्रश्न शोधा' : 'Search FAQs'}</label>
        <input id="faq-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={language === 'mr' ? 'वारंवार विचारले जाणारे प्रश्न शोधा...' : 'Search FAQs...'} lang={language} className="w-full rounded-full border border-navy/15 bg-white py-3 pl-11 pr-4 text-sm text-ink placeholder:text-ink/40 focus:outline-none dark:border-ink-dark/20 dark:bg-white/5 dark:text-ink-dark dark:placeholder:text-ink-dark/40" />
      </div>

      <div className="mt-5 flex flex-wrap gap-2" aria-label={language === 'mr' ? 'प्रश्नांच्या श्रेणी' : 'FAQ categories'}>
        <button type="button" onClick={() => setCategory('all')} className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${category === 'all' ? 'border-navy bg-navy text-paper dark:border-saffron dark:bg-saffron dark:text-ink' : 'border-navy/15 text-navy/70 dark:border-ink-dark/20 dark:text-ink-dark/70'}`}>{language === 'mr' ? 'सर्व प्रश्न' : 'All FAQs'}</button>
        {faqCategories.map((item) => <button key={item.key} type="button" onClick={() => setCategory(item.key)} lang={language} className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${category === item.key ? 'border-navy bg-navy text-paper dark:border-saffron dark:bg-saffron dark:text-ink' : 'border-navy/15 text-navy/70 dark:border-ink-dark/20 dark:text-ink-dark/70'}`}>{pick(item.title)}</button>)}
      </div>

      <div className="mt-8 divide-y divide-navy/10 rounded-2xl border border-navy/10 bg-white/60 dark:divide-ink-dark/10 dark:border-ink-dark/10 dark:bg-white/[0.04]">
        {visibleFaqs.map((faq) => {
          const isOpen = openId === faq.id
          return <article key={faq.id}><h2><button id={`faq-question-${faq.id}`} type="button" aria-expanded={isOpen} aria-controls={`faq-answer-${faq.id}`} onClick={() => setOpenId(isOpen ? null : faq.id)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-sm font-semibold text-navy dark:text-ink-dark sm:px-6"><span lang={language}>{pick(faq.question)}</span><ChevronDown size={18} className={`shrink-0 text-saffron transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} /></button></h2><div id={`faq-answer-${faq.id}`} role="region" aria-labelledby={`faq-question-${faq.id}`} className={`grid transition-[grid-template-rows] duration-200 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}><div className="overflow-hidden"><div className="px-5 pb-5 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70 sm:px-6"> <p lang={language}>{pick(faq.answer)}</p>{faq.link && <Link to={faq.link} lang={language} className="mt-3 inline-block text-sm font-medium text-saffron">{pick(faq.linkLabel)} →</Link>}</div></div></div></article>
        })}
      </div>
      {visibleFaqs.length === 0 && <p lang={language} className="mt-12 text-center text-sm text-ink/55 dark:text-ink-dark/55">{language === 'mr' ? 'कोणतेही प्रश्न सापडले नाहीत. दुसरा शब्द वापरून शोधा.' : 'No FAQs found. Try a different search term.'}</p>}
    </div>
  )
}