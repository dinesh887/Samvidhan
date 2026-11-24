import { useEffect, useMemo, useState } from 'react'
import { currentAffairs, currentAffairsPath } from './data/currentAffairs'
import { SiteHeader, SiteFooter, Seo } from './ArticlePages.jsx'
import { articles, articlePath } from './data/articles'
import { localizedArticle } from './data/marathiArticles.js'
import { useLanguage } from './LanguageContext.jsx'
import { languageLabels } from './data/languageLabels.js'
import { localizedCurrentAffairs } from './data/marathiCurrentAffairs.js'
import './CurrentAffairsPages.css'

const origin = 'https://www.mysamvidhan.in'
const isDate = (value) => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`))
const displayDate = (date, language = 'en') => isDate(date) ? new Intl.DateTimeFormat(language === 'mr' ? 'mr-IN' : 'en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`)) : ''
const slugify = (heading) => heading.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const wordCount = (item, language = 'en') => {
  const text = [item.summary, item.introduction, ...(item.content || []).flatMap((section) => [section.heading, ...(section.paragraphs || []), ...(section.bullets || []), ...(section.items || []).map((entry) => typeof entry === 'string' ? entry : entry?.text || '')])].filter(Boolean).join(' ')
  if (typeof Intl.Segmenter === 'function') return [...new Intl.Segmenter(language === 'mr' ? 'mr-IN' : 'en', { granularity: 'word' }).segment(text)].filter((part) => part.isWordLike).length
  return text.trim().split(/\s+/).filter(Boolean).length
}
const readingTime = (item, language = 'en') => Math.max(1, Math.ceil(wordCount(item, language) / (language === 'mr' ? 160 : 200)))
const storyImage = (value) => typeof value === 'string' ? { src: value, alt: '' } : value?.src ? value : null

function sectionIdMap(content = []) {
  const seen = new Map()
  return content.map((section, index) => {
    const base = slugify(section.heading || `section-${index + 1}`) || `section-${index + 1}`
    const count = (seen.get(base) || 0) + 1
    seen.set(base, count)
    return { section, id: count === 1 ? base : `${base}-${count}` }
  })
}

function SourceList({ sources, labels }) {
  if (!sources.length) return null
  return <section id="sources" className="ca-sources" aria-labelledby="ca-sources-title">
    <h2 id="ca-sources-title">{labels.sources}</h2>
    <ul>{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M14 4h6v6m0-6-9 9"/><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/></svg></a></li>)}</ul>
  </section>
}

export function CurrentAffairsListingPage() {
  const { language } = useLanguage()
  const labels = languageLabels[language].currentAffairsPage
  const localStories = useMemo(() => localizedCurrentAffairs(currentAffairs, language), [language])
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('newest')
  const [page, setPage] = useState(1)
  const pageSize = 6
  const categories = useMemo(() => [...new Set(localStories.map((story) => story.category).filter(Boolean))].sort(), [localStories])
  const stories = useMemo(() => [...localStories].sort((a, b) => {
    const dateA = isDate(a.publishedAt) ? a.publishedAt : ''
    const dateB = isDate(b.publishedAt) ? b.publishedAt : ''
    return sort === 'oldest' ? dateA.localeCompare(dateB) : dateB.localeCompare(dateA)
  }), [sort, localStories])
  const featured = useMemo(() => [...localStories].sort((a, b) => (isDate(b.publishedAt) ? b.publishedAt : '').localeCompare(isDate(a.publishedAt) ? a.publishedAt : ''))[0], [localStories])
  const filtered = useMemo(() => {
    const term = query.trim().toLocaleLowerCase()
    return stories.filter((story) => (category === 'all' || story.category === category) && (!term || [story.title, story.summary, story.category, ...(story.content || []).flatMap((section) => [section.heading, ...(section.paragraphs || []), ...(section.bullets || [])]), story.migration].filter(Boolean).map((value) => typeof value === 'string' ? value : JSON.stringify(value)).join(' ').toLocaleLowerCase().includes(term)))
  }, [stories, query, category])
  const showFeatured = Boolean(featured && !query.trim() && category === 'all' && sort === 'newest')
  const browseStories = showFeatured ? filtered.filter((story) => story.slug !== featured.slug) : filtered
  const visibleStories = browseStories.slice(0, page * pageSize)
  const hasMore = visibleStories.length < browseStories.length
  const relatedArticles = useMemo(() => new Map(localStories.map((story) => [story.slug, [...new Set(story.relatedArticles || [])].map((number) => articles.find((article) => article.number === number)).filter(Boolean)])), [localStories])
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'CollectionPage', name: 'Constitutional Current Affairs | MySamvidhan', description: 'Follow important news, developments and events connected to the Indian Constitution, rights, governance and democracy.', url: `${origin}/current-affairs` },
    { '@type': 'ItemList', itemListElement: stories.map((story, index) => ({ '@type': 'ListItem', position: index + 1, url: `${origin}${currentAffairsPath(story.slug)}`, name: story.title })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: origin }, { '@type': 'ListItem', position: 2, name: 'Current Affairs', item: `${origin}/current-affairs` }] },
  ] }
  const exploreLinks = [[languageLabels[language].articles, '/articles'], [languageLabels[language].fundamentalRights, '/fundamental-rights'], [languageLabels[language].fundamentalDuties, '/fundamental-duties'], [languageLabels[language].directivePrinciples, '/directive-principles'], [languageLabels[language].amendments, '/amendments'], [languageLabels[language].preamble, '/preamble']]
  return <><Seo title="Constitutional Current Affairs | MySamvidhan" description="Follow important news, developments and events connected to the Indian Constitution, rights, governance and democracy." path="/current-affairs" schema={schema}/><SiteHeader/>
    <main className="ca-page ca-listing-page">
      <nav className="ca-breadcrumb" aria-label="Breadcrumb"><a href="/">{languageLabels[language].home}</a><span aria-hidden="true">/</span><span aria-current="page">{languageLabels[language].currentAffairs}</span></nav>
      <header className="ca-listing-hero"><p className="ca-category">{labels.eyebrow}</p><h1>{labels.title}</h1><p>{labels.intro}</p></header>
      {showFeatured && <section className={`ca-featured${storyImage(featured.featuredImage) ? ' has-image' : ' text-led'}`} aria-labelledby="ca-featured-title">
        {storyImage(featured.featuredImage) && <a className="ca-featured-image" href={currentAffairsPath(featured.slug)} aria-label={`Read: ${featured.title}`}><img src={storyImage(featured.featuredImage).src} alt={storyImage(featured.featuredImage).alt || ''} fetchPriority="high"/></a>}
        <div className="ca-featured-copy"><p className="ca-category">{labels.featured} &middot; {featured.category}</p><h2 id="ca-featured-title"><a href={currentAffairsPath(featured.slug)}>{featured.title}</a></h2>{featured.summary && <p>{featured.summary}</p>}<div className="ca-featured-meta">{isDate(featured.publishedAt) && <time dateTime={featured.publishedAt}>{displayDate(featured.publishedAt, language)}</time>}<span>{readingTime(featured, language)} {language === 'mr' ? 'मिनिटे वाचन' : 'min read'}</span></div><a className="ca-story-link" href={currentAffairsPath(featured.slug)}>{labels.readStory} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></a></div>
        {!storyImage(featured.featuredImage) && <aside className="ca-featured-aside" aria-label={language==='mr'?'ठळक बातमीचा तपशील':'Featured story details'}><span>{language==='mr'?'ताज्या घडामोडी':'THE LATEST'}</span>{isDate(featured.publishedAt) && <time dateTime={featured.publishedAt}>{displayDate(featured.publishedAt, language)}</time>}{relatedArticles.get(featured.slug)?.length > 0 && <div><small>{labels.connection}</small>{relatedArticles.get(featured.slug).map((article) => {const local=localizedArticle(article,language);return <a key={article.number} href={articlePath(article.number)}>{language==='mr'?'कलम':'Article'} {article.number}<span>{local.title}</span></a>})}</div>}</aside>}
      </section>}
      <section className="ca-browse" aria-labelledby="ca-browse-title">
        <div className="ca-browse-heading"><div><p className="ca-category">{labels.newsDesk}</p><h2 id="ca-browse-title">{labels.browse}</h2></div><p>{filtered.length} {filtered.length === 1 ? labels.story : labels.stories}</p></div>
        <form className="ca-filters" role="search" onSubmit={(event) => event.preventDefault()}>
          <label className="ca-search-label">{labels.searchLabel}<input type="search" value={query} onChange={(event) => { setQuery(event.target.value); setPage(1) }} placeholder={labels.searchPlaceholder}/></label>
          <div className="ca-category-filter" role="group" aria-label={language==='mr'?'बातम्यांचा प्रकार निवडा':'Filter stories by category'}><span>{labels.category}</span><button type="button" aria-pressed={category === 'all'} className={category === 'all' ? 'selected' : ''} onClick={() => { setCategory('all'); setPage(1) }}>{labels.all}</button>{categories.map((entry) => <button type="button" key={entry} aria-pressed={category === entry} className={category === entry ? 'selected' : ''} onClick={() => { setCategory(entry); setPage(1) }}>{entry}</button>)}</div>
          <label>{labels.sort}<select value={sort} onChange={(event) => { setSort(event.target.value); setPage(1) }}><option value="newest">{labels.newest}</option><option value="oldest">{labels.oldest}</option></select></label>
          {(query || category !== 'all' || sort !== 'newest') && <button className="ca-clear-filters" type="button" onClick={() => { setQuery(''); setCategory('all'); setSort('newest'); setPage(1) }}>{labels.clear}</button>}
        </form>
        <div className="ca-story-list" aria-live="polite">
          {visibleStories.length ? visibleStories.map((story) => {
            const image = storyImage(story.featuredImage)
            const connections = relatedArticles.get(story.slug) || []
            return <article className={`ca-story${image ? ' has-image' : ''}`} key={story.slug}>
              {image && <a className="ca-story-image" href={currentAffairsPath(story.slug)} aria-label={`Read: ${story.title}`}><img src={image.src} alt={image.alt || ''} loading="lazy"/></a>}
              <div className="ca-story-copy"><p className="ca-category">{story.category}</p><h3><a href={currentAffairsPath(story.slug)}>{story.title}</a></h3>
                <div className="ca-story-meta">{isDate(story.publishedAt) && <time dateTime={story.publishedAt}>{displayDate(story.publishedAt, language)}</time>}<span>{readingTime(story, language)} {language === 'mr' ? 'मिनिटे वाचन' : 'min read'}</span></div>
                {story.summary && <p>{story.summary}</p>}
                {connections.length > 0 && <div className="ca-story-connections" aria-label={language==='mr'?'संबंधित घटनात्मक कलमे':'Related Constitutional Articles'}>{connections.map((article) => <a key={article.number} href={articlePath(article.number)}>{language==='mr'?'कलम':'Article'} {article.number}</a>)}</div>}
                <a className="ca-story-link" href={currentAffairsPath(story.slug)}>{labels.readStory} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></a>
              </div>
            </article>
          }) : <div className="ca-empty"><h3>{labels.noResults}</h3><p>{labels.noResultsHint}</p><button type="button" onClick={() => { setQuery(''); setCategory('all'); setSort('newest'); setPage(1) }}>{labels.clearFilters}</button></div>}
        </div>
        {hasMore && <button className="ca-load-more" type="button" onClick={() => setPage((value) => value + 1)}>{labels.loadMore}</button>}
      </section>
      <nav className="ca-explore-more" aria-label="Explore more constitutional topics"><p className="ca-category">{labels.explore}</p><h2>{labels.exploreTitle}</h2><div>{exploreLinks.map(([label, href]) => <a href={href} key={href}>{label}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></a>)}</div></nav>
    </main><SiteFooter/>
  </>
}

function ContentSection({ section, id, relatedArticles }) {
  const isConnection = /constitutional connection|constitutional context|घटनात्मक संबंध|घटनात्मक संदर्भ/i.test(section.heading || '')
  return <section id={id}>
    {section.heading && <h2>{section.heading}</h2>}
    {section.paragraphs?.map((paragraph, index) => <p key={`p-${index}`}>{paragraph}</p>)}
    {section.quote && <blockquote>{typeof section.quote === 'string' ? <p>{section.quote}</p> : <><p>{section.quote.text}</p>{section.quote.citation && <cite>{section.quote.citation}</cite>}</>}</blockquote>}
    {section.bullets?.length > 0 && <ul>{section.bullets.map((bullet, index) => <li key={`b-${index}`}>{bullet}</li>)}</ul>}
    {section.items?.length > 0 && <ol>{section.items.map((entry, index) => <li key={`i-${index}`}>{entry}</li>)}</ol>}
    {section.image?.src && <figure><img src={section.image.src} alt={section.image.alt || ''} loading="lazy"/>{section.image.caption && <figcaption>{section.image.caption}</figcaption>}</figure>}
    {isConnection && relatedArticles.length > 0 && <ul className="ca-connection-links">{relatedArticles.map((article) => <li key={article.number}><a href={articlePath(article.number)}>Article {article.number}: {article.title}</a></li>)}</ul>}
  </section>
}

export function CurrentAffairsDetailPage({ slug }) {
  const { language } = useLanguage()
  const labels = languageLabels[language].currentAffairsPage
  const item = localizedCurrentAffairs(currentAffairs, language).find((entry) => entry.slug === slug)
  const [copied, setCopied] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 760px)').matches)
  const sections = useMemo(() => sectionIdMap(item?.content || []), [item])
  const toc = useMemo(() => sections.filter(({ section }) => section.heading).map(({ section, id }) => ({ title: section.heading, id })), [sections])

  useEffect(() => {
    if (!item) return undefined
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      document.documentElement.style.setProperty('--reading-progress', `${max > 0 ? Math.min(100, window.scrollY / max * 100) : 0}%`)
    }
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      document.documentElement.style.removeProperty('--reading-progress')
    }
  }, [item])

  useEffect(() => {
    if (!item || toc.length < 2 || !('IntersectionObserver' in window)) return undefined
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      if (visible[0]) setActiveSection(visible[0].target.id)
    }, { rootMargin: '-15% 0px -68% 0px' })
    toc.forEach(({ id }) => {
      const target = document.getElementById(id)
      if (target) observer.observe(target)
    })
    return () => observer.disconnect()
  }, [item, toc])

  useEffect(() => {
    const media = window.matchMedia('(max-width: 760px)')
    const update = () => setIsMobile(media.matches)
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  if (!item) return <><SiteHeader/><main className="ca-page ca-not-found"><h1>{labels.notFound}</h1><p>{labels.notFoundHint}</p><a href={`${origin}/current-affairs`}>{labels.browseAll}</a></main><SiteFooter/></>

  const articleLinks = [...new Set(item.relatedArticles || [])].map((number) => articles.find((article) => article.number === number)).filter(Boolean)
  const allLocalized = localizedCurrentAffairs(currentAffairs, language)
  const related = [...new Set(item.relatedCurrentAffairs || [])].filter((relatedSlug) => relatedSlug !== item.slug).map((relatedSlug) => allLocalized.find((entry) => entry.slug === relatedSlug)).filter(Boolean)
  const index = currentAffairs.findIndex((entry) => entry.slug === item.slug)
  const previous = currentAffairs[index + 1]
  const next = currentAffairs[index - 1]
  const datePublished = isDate(item.publishedAt) ? item.publishedAt : undefined
  const dateModified = isDate(item.updatedAt) ? item.updatedAt : undefined
  const image = typeof item.featuredImage === 'string' ? { src: item.featuredImage, alt: '' } : item.featuredImage?.src ? item.featuredImage : null
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'NewsArticle', headline: item.title, description: item.summary, mainEntityOfPage: `${origin}${currentAffairsPath(item.slug)}`, publisher: { '@type': 'Organization', name: 'MySamvidhan', url: origin }, ...(datePublished ? { datePublished } : {}), ...(dateModified ? { dateModified } : {}), ...(image ? { image: [`${origin}${image.src}`] } : {}) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: origin }, { '@type': 'ListItem', position: 2, name: 'Current Affairs', item: `${origin}/current-affairs` }, { '@type': 'ListItem', position: 3, name: item.title, item: `${origin}${currentAffairsPath(item.slug)}` }] },
  ] }
  const pageTitle = language === 'mr' ? `${item.title} | MySamvidhan` : (item.seo?.title || `${item.title} | MySamvidhan`)
  const description = language === 'mr' ? item.summary : (item.seo?.description || item.summary)
  const readingMinutes = readingTime(item, language)

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch { setCopied(false) }
  }
  async function shareArticle() {
    try {
      if (navigator.share) await navigator.share({ title: item.title, url: window.location.href })
      else await copyLink()
    } catch { /* A dismissed share sheet is not an error for the reader. */ }
  }

  return <><Seo title={pageTitle} description={description} path={currentAffairsPath(item.slug)} schema={schema}/>
    <div className="ca-reading-progress" aria-hidden="true"/><SiteHeader/>
    <main className="ca-page">
      <nav className="ca-breadcrumb" aria-label={language === 'mr' ? 'मार्गदर्शक दुवे' : 'Breadcrumb'}><a href="/">{languageLabels[language].home}</a><span aria-hidden="true">/</span><a href="/current-affairs">{languageLabels[language].currentAffairs}</a><span aria-hidden="true">/</span><span aria-current="page">{item.title}</span></nav>
      <header className="ca-hero">
        {item.category && <p className="ca-category">{item.category}</p>}
        <h1>{item.title}</h1>
        {item.summary && <p className="ca-deck">{item.summary}</p>}
        <div className="ca-byline">{datePublished && <time dateTime={datePublished}>{language === 'mr' ? 'प्रकाशित' : 'Published'} {displayDate(datePublished, language)}</time>}{dateModified && <time dateTime={dateModified}>{language === 'mr' ? 'अद्ययावत' : 'Updated'} {displayDate(dateModified, language)}</time>}<span>{readingMinutes} {language === 'mr' ? 'मिनिटे वाचन' : 'min read'}</span></div>
        <div className="ca-actions"><button onClick={shareArticle} type="button" aria-label={labels.share}>{labels.share}</button><button onClick={() => window.print()} type="button">{labels.print}</button><button onClick={copyLink} type="button" aria-live="polite">{copied ? labels.copied : (language === 'mr' ? 'दुवा कॉपी करा' : 'Copy link')}</button></div>
      </header>
      {image && <figure className="ca-featured-image"><img src={image.src} alt={image.alt || ''} fetchPriority="high"/>{image.caption && <figcaption>{image.caption}</figcaption>}</figure>}
      <div className="ca-layout">
        <aside className="ca-sidebar">
          {toc.length > 1 && <details open={!isMobile} className="ca-toc"><summary>{labels.onPage}</summary><nav aria-label={labels.onPage}>{toc.map(({ title, id }) => <a className={activeSection === id ? 'ca-toc-active' : ''} key={id} href={`#${id}`} onClick={() => setActiveSection(id)}>{title}</a>)}</nav></details>}
        </aside>
        <article className="ca-article">
          {item.introduction && <p className="ca-introduction">{item.introduction}</p>}
          {sections.map(({ section, id }) => <ContentSection key={id} section={section} id={id} relatedArticles={articleLinks}/>)}
          {(item.constitutionalConnection?.length > 0 || articleLinks.length > 0) && !sections.some(({ section }) => /constitutional connection|constitutional context|घटनात्मक संबंध|घटनात्मक संदर्भ/i.test(section.heading || '')) && <section id="constitutional-connection" className="ca-connections"><h2>{labels.connection}</h2>{item.constitutionalConnection?.map((entry, index) => <p key={index}>{entry}</p>)}{articleLinks.length > 0 && <ul className="ca-connection-links">{articleLinks.map((article) => <li key={article.number}><a href={articlePath(article.number)}>{language === 'mr' ? `कलम ${article.number}: ${article.title}` : `Article ${article.number}: ${article.title}`}</a></li>)}</ul>}</section>}
          <SourceList sources={item.sources || []} labels={labels}/>
          <nav className="ca-prev-next" aria-label={languageLabels[language].currentAffairs}>{previous ? <a href={currentAffairsPath(previous.slug)}><small>{labels.previous}</small><span>{allLocalized.find((entry) => entry.slug === previous.slug)?.title || previous.title}</span></a> : <span/>}{next ? <a href={currentAffairsPath(next.slug)}><small>{labels.next}</small><span>{allLocalized.find((entry) => entry.slug === next.slug)?.title || next.title}</span></a> : <span/>}</nav>
        </article>
      </div>
      {(related.length > 0 || articleLinks.length > 0) && <section className="ca-related" aria-labelledby="ca-related-title"><p className="ca-category">{language === 'mr' ? 'पुढे वाचा' : 'CONTINUE READING'}</p><h2 id="ca-related-title">{language === 'mr' ? 'संबंधित वाचन' : 'Related reading'}</h2>{related.length > 0 && <div className="ca-related-group"><h3>{language === 'mr' ? 'संबंधित चालू घडामोडी' : 'Related current affairs'}</h3><div>{related.map((entry) => <a key={entry.slug} href={currentAffairsPath(entry.slug)}><small>{entry.category}{isDate(entry.publishedAt) && ` · ${displayDate(entry.publishedAt, language)}`}</small><strong>{entry.title}</strong>{entry.summary && <p>{entry.summary}</p>}</a>)}</div></div>}{articleLinks.length > 0 && <div className="ca-related-group"><h3>{language === 'mr' ? 'संबंधित घटनात्मक कलमे' : 'Constitutional Articles'}</h3><div>{articleLinks.map((article) => <a key={article.number} href={articlePath(article.number)}><small>{language === 'mr' ? `कलम ${article.number}` : `Article ${article.number}`}</small><strong>{article.title}</strong></a>)}</div></div>}</section>}
    </main><SiteFooter/>
  </>
}
