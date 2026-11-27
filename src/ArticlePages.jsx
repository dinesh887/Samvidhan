import { useEffect, useMemo, useState } from 'react'
import { articles, articleByNumber, articlePath, expandedContent, relatedArticleNumbers } from './data/articles'
import RelatedContent from './RelatedContent.jsx'
import { Brand } from './Brand.jsx'
import { LanguageSwitch, useLanguage } from './LanguageContext.jsx'
import { languageLabels } from './data/languageLabels.js'
import { localizedArticle, localizedArticles } from './data/marathiArticles.js'
import { socialLinks } from './data/socialLinks.js'
import SocialLinks from './SocialLinks.jsx'
import ReadableText from './components/ReadableText.jsx'
import './ArticleContent.css'
import './ArticlePages.css'

const origin = 'https://www.mysamvidhan.in'
const constitutionText = 'https://www.legislative.gov.in/static/uploads/2025/08/b9a933fb88c0a5afba254256bc55a3f0.pdf'
const routeHref = (path) => path === '/' || path === '/articles' || path === '/current-affairs' || path === '/quiz' || path === '/faq' || path === '/learn' || path === '/exam-preparation' || path.startsWith('/article/') || path.startsWith('/fundamental-rights') || path.startsWith('/amendments') || path.startsWith('/current-affairs/') || ['/fundamental-duties','/directive-principles','/preamble','/about','/contact','/privacy','/privacy-policy','/terms','/terms-and-conditions','/disclaimer'].includes(path) ? (path==='/terms'?'/terms-and-conditions':path) : `${origin}${path}`
const parts = [...new Set(articles.map((article) => article.part))]
const textMeta = (name, content, property = false) => {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
  let tag = document.head.querySelector(selector)
  if (!tag) { tag = document.createElement('meta'); property ? tag.setAttribute('property', name) : tag.setAttribute('name', name); document.head.append(tag) }
  tag.content = content
}

export function Seo({ title, description, path, schema }) {
  useEffect(() => {
    document.title = title
    textMeta('description', description)
    textMeta('og:type', schema?.['@graph']?.some((item) => ['Article', 'NewsArticle'].includes(item['@type'])) ? 'article' : 'website', true)
    textMeta('og:title', title, true)
    textMeta('og:description', description, true)
    textMeta('og:url', `${origin}${path}`, true)
    textMeta('twitter:card', 'summary')
    textMeta('twitter:title', title)
    textMeta('twitter:description', description)
    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.append(canonical) }
    canonical.href = `${origin}${path}`
    let script = document.head.querySelector('#page-schema')
    if (!script) { script = document.createElement('script'); script.id = 'page-schema'; script.type = 'application/ld+json'; document.head.append(script) }
    script.textContent = JSON.stringify(schema)
    return () => { document.head.querySelector('#page-schema')?.remove() }
  }, [title, description, path, schema])
  return null
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { language } = useLanguage()
  const labels = languageLabels[language]
  const links = [[labels.home,'/'],[labels.articles,'/articles'],[labels.currentAffairs,'/current-affairs'],[labels.fundamentalRights,'/fundamental-rights'],[labels.amendments,'/amendments'],[labels.quiz,'/quiz'],[labels.about,'/about']]
  return <header className="article-header"><Brand /><button className="menu-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="article-nav" onClick={()=>setOpen(!open)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d={open?'m6 6 12 12M18 6 6 18':'M3 6h18M3 12h18M3 18h18'}/></svg></button><nav id="article-nav" className={open?'nav open':'nav'} aria-label="Main navigation">{links.map(([label,href])=><a key={href} href={routeHref(href)} className={window.location.pathname===href || (href==='/fundamental-rights'&&window.location.pathname.startsWith(href))?'active':''} onClick={()=>setOpen(false)}>{label}</a>)}<details className="nav-more"><summary>{labels.more}</summary><div><a href={routeHref('/fundamental-duties')}>{labels.fundamentalDuties}</a><a href={routeHref('/directive-principles')}>{labels.directivePrinciples}</a><a href={routeHref('/preamble')}>{labels.preamble}</a><a href={routeHref('/learn')}>{labels.learn}</a><a href={routeHref('/exam-preparation')}>{labels.examPreparation}</a></div></details></nav><LanguageSwitch /><a href="/search" className="header-search" aria-label={labels.search}><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.5"/><path d="m16 16 5 5"/></svg></a></header>
}

export function SiteFooter() {
  const { language } = useLanguage()
  const labels = languageLabels[language]
  const mr = language === 'mr'
  const href = routeHref
  return <footer className="footer">
    <div className="footer-main">
      <div className="footer-about">
        <Brand footer />
        <p>{mr ? 'भारतीय संविधान सोप्या भाषेत समजून घेण्यासाठी वाचकांना मदत करणारे स्वतंत्र शैक्षणिक व्यासपीठ.' : 'An independent educational platform helping readers understand the Constitution of India in simple language.'}</p>
        <h2 className="footer-social-heading">{mr ? 'आम्हाला फॉलो करा' : 'Follow Us'}</h2>
        <SocialLinks links={socialLinks}/>
      </div>
      <nav className="footer-column" aria-label={mr ? 'संविधानाचा अभ्यास' : 'Explore the Constitution'}>
        <h2>{mr ? 'संविधानाचा अभ्यास' : 'Explore Constitution'}</h2>
        <a href={href('/articles')}>{labels.articles}</a>
        <a href={href('/fundamental-rights')}>{labels.fundamentalRights}</a>
        <a href={href('/fundamental-duties')}>{labels.fundamentalDuties}</a>
        <a href={href('/directive-principles')}>{labels.directivePrinciples}</a>
        <a href={href('/amendments')}>{labels.amendments}</a>
        <a href={href('/preamble')}>{labels.preamble}</a>
      </nav>
      <nav className="footer-column" aria-label={mr ? 'शिक्षण आणि अद्यतने' : 'Learning and updates'}>
        <h2>{mr ? 'शिका आणि अद्यतने' : 'Learning & Updates'}</h2>
        <a href={href('/current-affairs')}>{labels.currentAffairs}</a>
        <a href={href('/quiz')}>{labels.quiz}</a>
        <a href={href('/learn')}>{labels.learn}</a>
        <a href={href('/exam-preparation')}>{labels.examPreparation}</a>
        <a href={href('/faq')}>{labels.faq}</a>
      </nav>
      <nav className="footer-column" aria-label={mr ? 'MySamvidhan माहिती' : 'About MySamvidhan'}>
        <h2>MySamvidhan</h2>
        <a href={href('/about')}>{labels.about}</a>
        <a href={href('/contact')}>{labels.contact}</a>
        <a href={href('/privacy-policy')}>{labels.privacy}</a>
        <a href={href('/terms-and-conditions')}>{labels.terms}</a>
        <a href={href('/disclaimer')}>{labels.disclaimer}</a>
      </nav>
    </div>
    <div className="footer-bottom"><span>&copy; {new Date().getFullYear()} MySamvidhan. {labels.rightsReserved}</span><span>{labels.educationalOnly}</span></div>
  </footer>
}

const articleSchema = (article) => ({'@context':'https://schema.org','@graph':[
  {'@type':'WebPage','@id':`${origin}${articlePath(article.number)}#webpage`,'url':`${origin}${articlePath(article.number)}`,'name':`Article ${article.number} – ${article.title} | MySamvidhan`,'description':article.summary,'isPartOf':{'@id':`${origin}/#website`}},
  {'@type':'Article','headline':`Article ${article.number}: ${article.title}`,'description':article.summary,'mainEntityOfPage':`${origin}${articlePath(article.number)}`,'publisher':{'@type':'Organization','name':'MySamvidhan','url':origin},...(article.image?{image:`${origin}${article.image}`}:{})},
  {'@type':'BreadcrumbList','itemListElement':[{'@type':'ListItem','position':1,'name':'Home','item':origin},{'@type':'ListItem','position':2,'name':'Articles','item':`${origin}/articles`},{'@type':'ListItem','position':3,'name':`Article ${article.number}`,'item':`${origin}${articlePath(article.number)}`}]}
]})

function ArticleParagraphs({paragraphs,related}) {
  const linked = new Set()
  const relevantNumbers = related.map((item) => item.number)
  if(!relevantNumbers.length)return paragraphs.map((paragraph,index)=><ReadableText key={index} text={paragraph}/>)
  const referencePattern = new RegExp('\\bArticle\\s+('+relevantNumbers.join('|')+')\\b','g')
  const renderLinkedText = (paragraph,index) => {
    const pieces=[];let last=0,match
    referencePattern.lastIndex=0
    while((match=referencePattern.exec(paragraph))!==null){
      const target=articleByNumber(match[1])
      if(!target||linked.has(target.number))continue
      pieces.push(paragraph.slice(last,match.index),<a key={`${index}-${match.index}`} href={articlePath(target.number)}>{match[0]}</a>)
      last=match.index+match[0].length;linked.add(target.number)
    }
    if(!pieces.length)return paragraph
    pieces.push(paragraph.slice(last))
    return pieces
  }
  return paragraphs.map((paragraph,index)=><ReadableText key={index} text={paragraph} renderInline={(text)=>renderLinkedText(text,index)}/> )
}

export function ArticleListingPage() {
  const { language } = useLanguage()
  const labels = languageLabels[language]
  const copy = labels.articlesPage
  const localArticles = useMemo(() => localizedArticles(articles, language), [language])
  const params = new URLSearchParams(window.location.search)
  const [query,setQuery] = useState(params.get('search') || '')
  const [part,setPart] = useState(params.get('part') || 'All')
  const [page,setPage] = useState(Math.max(1,Number(params.get('page')) || 1))
  const pageSize = 10
  const results = useMemo(()=>{
    const term=query.trim().toLocaleLowerCase()
    return localArticles.filter((article)=> (part==='All' || article.part===part) && (!term || [article.number,article.title,article.part,article.category,article.summary,article.keywords,article.content,article.migrated].map((value)=>typeof value==='string'?value:JSON.stringify(value||'')).join(' ').toLocaleLowerCase().includes(term)))
  },[query,part,localArticles])
  const pageCount=Math.max(1,Math.ceil(results.length/pageSize))
  const currentPage=Math.min(page,pageCount)
  const visible=results.slice((currentPage-1)*pageSize,currentPage*pageSize)
  useEffect(()=>{
    const url=new URL(window.location.href)
    query?url.searchParams.set('search',query):url.searchParams.delete('search')
    part==='All'?url.searchParams.delete('part'):url.searchParams.set('part',part)
    currentPage>1?url.searchParams.set('page',String(currentPage)):url.searchParams.delete('page')
    window.history.replaceState({},'',url)
  },[query,part,currentPage])
  const schema={'@context':'https://schema.org','@graph':[{'@type':'CollectionPage','name':'Articles of the Indian Constitution - Simple Explanations | MySamvidhan','description':'Explore the Articles of the Indian Constitution with simple explanations. Search constitutional Articles by number, topic and Part.','url':`${origin}/articles`},{'@type':'ItemList','name':'Constitutional Articles','itemListElement':articles.map((item,index)=>({'@type':'ListItem','position':index+1,'url':`${origin}${articlePath(item.number)}`,'name':`Article ${item.number}: ${item.title}`}))},{'@type':'BreadcrumbList','itemListElement':[{'@type':'ListItem','position':1,'name':'Home','item':origin},{'@type':'ListItem','position':2,'name':'Articles','item':`${origin}/articles`}] }] }
  return <><Seo title="Articles of the Indian Constitution – Simple Explanations | MySamvidhan" description="Explore the Articles of the Indian Constitution with simple explanations. Search constitutional Articles by number, topic and Part." path="/articles" schema={schema}/><SiteHeader/><main className="article-listing"><nav className="article-breadcrumbs" aria-label={language === 'mr' ? 'मार्गक्रमण' : 'Breadcrumb'}><a href="/">{labels.home}</a><span aria-hidden="true">&gt;</span><span aria-current="page">{labels.articles}</span></nav>
    <section className="listing-hero"><div className="listing-hero-art" aria-hidden="true"><svg className="listing-chakra" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18"/><circle cx="24" cy="24" r="3"/>{Array.from({length:12},(_,i)=><path key={i} d="M24 6v15" transform={`rotate(${i*30} 24 24)`}/>)}</svg><svg viewBox="0 0 580 220"><path d="M26 194h528M70 185h440M106 179V98h368v81M91 98h398L290 31 91 98Z" fill="#e6d1ae" stroke="#8c7250" strokeWidth="4"/><path d="M158 106v66m42-66v66m42-66v66m42-66v66m42-66v66m42-66v66m42-66v66" stroke="#947b5b" strokeWidth="13"/></svg><svg className="tiny-flag" viewBox="0 0 48 32"><path fill="#f28c28" d="M0 0h48v10.7H0z"/><path fill="#fff" d="M0 10.7h48v10.6H0z"/><path fill="#16804a" d="M0 21.3h48V32H0z"/><circle cx="24" cy="16" r="4.4" fill="none" stroke="#174b7a" strokeWidth="1.3"/><path d="M24 11v10m-5-5h10m-8.5-3.5 7 7m0-7-7 7" stroke="#174b7a" strokeWidth=".8"/></svg></div><div className="listing-hero-copy"><p className="eyebrow"><span/> {language === 'mr' ? 'विषय शोधा' : 'EXPLORE'}</p><h1>{copy.title}</h1><p>{copy.description}</p><a className="listing-cta" href="#article-results">{copy.browse}</a></div></section>
    <section className="listing-tools" aria-label={language === 'mr' ? 'कलमे शोधा आणि फिल्टर करा' : 'Search and filter articles'}><form id="article-search" className="article-search" role="search" onSubmit={(event)=>event.preventDefault()}><label className="sr-only" htmlFor="article-query">{copy.searchBy}</label><svg className="article-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.5"/><path d="m16 16 5 5"/></svg><input id="article-query" value={query} onChange={(event)=>{setQuery(event.target.value);setPage(1)}} placeholder={copy.searchPlaceholder}/><button type="submit" className="search-submit">{copy.search || (language === 'mr' ? 'शोधा' : 'Search')}</button>{query && <button type="button" className="search-clear" onClick={()=>{setQuery('');setPage(1)}}>{copy.clear}</button>}</form><div className="part-filter" aria-label={language === 'mr' ? 'संविधानाच्या भागानुसार फिल्टर करा' : 'Filter by constitutional Part'}><button className={part==='All'?'selected':''} aria-pressed={part==='All'} onClick={()=>{setPart('All');setPage(1)}}>{copy.all} <span>{articles.length}</span></button>{parts.map((value)=><button key={value} className={part===value?'selected':''} onClick={()=>{setPart(value);setPage(1)}} aria-pressed={part===value}>{copy.part} {value}</button>)}</div></section>
    <section id="article-results" className="listing-results" aria-live="polite"><div className="results-heading"><h2>{copy.results}</h2><p>{results.length} {results.length===1?copy.article:copy.articlesCount}{query?` matching “${query.trim()}”`:''}{part!=='All'?` · Part ${part}`:''}</p></div>{visible.length?<div className="article-list">{visible.map(article=><article key={article.number} className="article-list-row"><a className="article-number-box" href={articlePath(article.number)} aria-label={`${language === 'mr' ? 'कलम' : 'Read Article'} ${article.number}`}><small>{language === 'mr' ? 'कलम' : 'Article'}</small><strong>{article.number}</strong></a><div className="article-list-copy"><div className="article-list-title"><h3><a href={articlePath(article.number)}>{article.title}</a></h3><span className="part-badge">{copy.part} {article.part}</span></div><p className="article-category">{article.category}</p><p>{article.summary}</p></div><a className="list-read" href={articlePath(article.number)}>{copy.readMore} <svg className="list-read-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></article>)}</div>:<div className="no-results"><h3>{copy.noResults}</h3><p>{copy.noResultsHint}</p><button onClick={()=>{setQuery('');setPart('All')}}>{copy.clearFilters}</button></div>}
      {pageCount>1&&<nav className="pagination" aria-label={language === 'mr' ? 'कलमांची पाने' : 'Article pages'}><button disabled={currentPage<=1} onClick={()=>setPage(currentPage-1)} aria-label={copy.previous}>‹</button>{Array.from({length:pageCount},(_,index)=>index+1).map(value=><button key={value} className={currentPage===value?'current':''} onClick={()=>setPage(value)} aria-label={`Page ${value}`} aria-current={currentPage===value?'page':undefined}>{value}</button>)}<button disabled={currentPage>=pageCount} onClick={()=>setPage(currentPage+1)} aria-label={copy.next}>›</button></nav>}</section>
    <section className="article-reading-note"><div><h2>{copy.organized}</h2><p>{copy.organizedText}</p></div><nav aria-label={copy.related}><a href={routeHref('/fundamental-rights')}>{labels.fundamentalRights} →</a><a href={routeHref('/fundamental-duties')}>{labels.fundamentalDuties} →</a><a href={routeHref('/directive-principles')}>{labels.directivePrinciples} →</a><a href={routeHref('/preamble')}>{labels.preamble} →</a><a href={routeHref('/amendments')}>{labels.amendments} →</a></nav></section>
  </main><SiteFooter/></>
}

export function ArticleDetailPage({number}) {
  const { language } = useLanguage()
  const labels = languageLabels[language].articlesPage
  const mr = language === 'mr'
  const article=localizedArticle(articleByNumber(number), language)
  const idx=article?articles.findIndex((entry)=>entry.number===article.number):-1
  const previous=idx>0?localizedArticle(articles[idx-1],language):undefined,next=idx>=0?localizedArticle(articles[idx+1],language):undefined
  const related=useMemo(()=>article?(article.related || relatedArticleNumbers[article.number] || []).map((n)=>localizedArticle(articleByNumber(n),language)).filter(Boolean):[],[article,language])
  const schema=article?articleSchema(article):null
  const paragraphs=useMemo(()=>article?(article.content || expandedContent[article.number] || article.summary).split(/\n\s*\n/).filter(Boolean):[],[article])
  const toc=useMemo(()=>article?[{id:'article-overview',label:`${labels.understanding} ${article.number}`},...(article.example?[{id:'article-example',label:language==='mr'?'उदाहरण':'Example'}]:[]),...(article.migrationSections?.length?[{id:'article-context',label:language==='mr'?'अधिक स्पष्टीकरण':'Further explanation'}]:[]),...(article.importantPoints?.length?[{id:'important-points',label:labels.importantPoints}]:[]),...(article.migrationFaq?.length?[{id:'article-faq',label:language==='mr'?'वारंवार विचारले जाणारे प्रश्न':'Frequently asked questions'}]:[]),...(article.migrationMcqs?.length?[{id:'article-knowledge-check',label:language==='mr'?'ज्ञान तपासा':'Knowledge check'}]:[]),...(article.whyItMatters?[{id:'why-it-matters',label:labels.whyItMatters}]:[]),...(related.length?[{id:'related-articles',label:labels.related}]:[]),...(article.sources?.length?[{id:'article-sources',label:labels.sources}]:[]),{id:'article-source',label:labels.sourceNote}]:[],[article,related,labels,language])
  const relatedLearning=article?[...(article.part==='III'?[{href:'/fundamental-rights',label:mr?'मूलभूत हक्क पाहा':'Explore Fundamental Rights',description:mr?'भाग III मधील विषयगट आणि संबंधित कलमांची माहिती पाहा.':'See the Part III topic groups and related Article guides.'}]:[]),...(article.number==='21A'?[{href:constitutionText,label:mr?'कलम 51A: मूलभूत कर्तव्ये':'Article 51A: Fundamental Duties',description:mr?'अधिकृत संविधानातील कलम 51A वाचा.':'Read Article 51A in the official Constitution.'},{href:routeHref('/fundamental-duties'),label:mr?'मूलभूत कर्तव्ये':'Fundamental Duties',description:mr?'भाग IVA मधील सर्व अकरा कर्तव्ये पाहा.':'Explore all eleven duties in Part IVA.'},{href:routeHref('/amendments'),label:mr?'घटनादुरुस्त्या':'Constitutional Amendments',description:mr?'86व्या घटनादुरुस्तीने कलम 21A समाविष्ट केले.':'The 86th Amendment added Article 21A.'}]:[]),...(article.number==='51A'?[{href:routeHref('/fundamental-duties'),label:mr?'मूलभूत कर्तव्ये':'Fundamental Duties',description:mr?'कर्तव्यांचा अभ्यास मार्गदर्शक उघडा.':'Open the duties study guide.'}]:[]),...(article.number==='14'||article.number==='21'?[{href:routeHref('/current-affairs/two-child-norm-supreme-court-larger-bench-2026'),label:mr?'दोन अपत्य निकष आणि संविधान':'Two-Child Norm and the Constitution',description:mr?'कलम 14 आणि 21 संदर्भातील चालू घडामोडींचे स्पष्टीकरण.':'A current affairs explainer discussing Articles 14 and 21.'}]:[]),...(article.number==='19'?[{href:routeHref('/current-affairs/right-to-protest-public-order-india'),label:mr?'निषेधाचा हक्क आणि सार्वजनिक सुव्यवस्था':'Right to Protest and Public Order',description:mr?'कलम 19 शी संबंधित चालू घडामोडींचे स्पष्टीकरण.':'A current affairs explainer connected to Article 19.'}]:[])]:[]
  const [progress,setProgress]=useState(0),[activeSection,setActiveSection]=useState('article-overview'),[shareMessage,setShareMessage]=useState('')
  useEffect(()=>{
    if(!article)return undefined
    const update=()=>{const el=document.documentElement;setProgress(el.scrollHeight<=innerHeight?0:Math.round(scrollY/(el.scrollHeight-innerHeight)*100))}
    update();window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update)
    const observer=new IntersectionObserver(entries=>{const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);if(visible[0])setActiveSection(visible[0].target.id)},{rootMargin:'-18% 0px -65% 0px'})
    toc.forEach(item=>{const target=document.getElementById(item.id);if(target)observer.observe(target)})
    return()=>{window.removeEventListener('scroll',update);window.removeEventListener('resize',update);observer.disconnect()}
  },[article,toc])
  if(!article) return <><Seo title="Article not found | MySamvidhan" description="This article could not be found in the available MySamvidhan article collection." path={`/article/${number}`} schema={{'@context':'https://schema.org','@type':'WebPage','name':'Article not found'}}/><SiteHeader/><main className="article-missing"><p className="eyebrow">{language === 'mr' ? 'कलम सापडले नाही' : 'ARTICLE NOT FOUND'}</p><h1>{labels.missing}</h1><p>{labels.missingHint}</p><a href="/articles">{labels.allAvailable}</a></main><SiteFooter/></>
  async function shareArticle(){try{if(navigator.share)await navigator.share({title:`Article ${article.number}: ${article.title}`,url:window.location.href});else{await navigator.clipboard.writeText(window.location.href);setShareMessage(labels.copied);setTimeout(()=>setShareMessage(''),2200)}}catch{setShareMessage(labels.unavailable);setTimeout(()=>setShareMessage(''),2200)}}
  return <><Seo title={article.seo?.title || `Article ${article.number} - ${article.title} | MySamvidhan`} description={(article.seo?.description || article.summary).slice(0,155)} path={articlePath(article.number)} schema={schema}/><SiteHeader/><div className="reading-progress" style={{width:`${progress}%`}} aria-hidden="true"/><main className="article-detail">
    <nav className="article-breadcrumbs" aria-label={language === 'mr' ? 'मार्गक्रमण' : 'Breadcrumb'}><a href="/">{language === 'mr' ? 'मुख्यपृष्ठ' : 'Home'}</a><span aria-hidden="true">&gt;</span><a href="/articles">{language === 'mr' ? 'कलमे' : 'Articles'}</a><span aria-hidden="true">&gt;</span><span aria-current="page">Article {article.number}</span></nav>
    <header className="detail-hero"><div><p className="detail-kicker">{labels.part} {article.part}</p><h1>{language==='mr'?'कलम':'Article'} {article.number} - {article.title}</h1><div className="detail-meta"><span>{language === 'mr' ? 'कलम' : 'Article'} {article.number}</span><span>{article.category}</span></div><p className="detail-intro">{article.introduction || article.summary}</p></div>{article.image?<img className="detail-image" src={article.image} alt={`${language==='mr'?'कलम':'Article'} ${article.number}: ${article.title}`} fetchPriority="high"/>:<div className="detail-art" aria-hidden="true"><span className="detail-chakra">&#x273A;</span><div className="gavel">&#x2696;</div></div>}</header>
    <div className="article-tools" aria-label="Article actions"><button onClick={()=>window.print()}>{labels.print}</button><button onClick={shareArticle}>{labels.share}</button>{shareMessage&&<span role="status">{shareMessage}</span>}</div>
    <div className="detail-layout"><aside className="table-of-contents"><details open><summary>{labels.onPage}</summary><nav aria-label="Table of contents">{toc.map(item=><a className={activeSection===item.id?'toc-active':''} key={item.id} href={`#${item.id}`}>{item.label}</a>)}</nav></details></aside><article className="detail-content"><section id="article-overview"><h2>{labels.understanding} {article.number}</h2>{article.constitutionalText&&<blockquote className="constitutional-text"><strong>{labels.constitutionalText}</strong><ReadableText text={article.constitutionalText}/>{article.constitutionalTextSource&&<cite><a href={article.constitutionalTextSource.url}>{article.constitutionalTextSource.label}</a></cite>}</blockquote>}<ArticleParagraphs paragraphs={paragraphs} related={related}/>{article.explanationSections?.map((section,index)=><section className="nested-explanation" key={section.id||index}><h3>{section.heading}</h3>{section.paragraphs?.map((text,i)=><ReadableText key={i} text={text}/>)}{section.items&&<ul>{section.items.map((item,i)=><li key={i}>{typeof item==='string'?<ReadableText text={item}/>:<><strong>{item.title}</strong> <ReadableText text={item.text}/></>}</li>)}</ul>}</section>)}</section>
      {article.importantPoints?.length>0&&<section id="important-points"><h2>{mr?'महत्त्वाचे मुद्दे':'Important points'}</h2><ul>{article.importantPoints.map((point,i)=><li key={i}>{typeof point==='string'?point:<><strong>{point.title}</strong> {point.text}</>}</li>)}</ul></section>}
      {article.example&&<section id="article-example"><h2>{language==='mr'?'उदाहरण':'Example'}</h2>{article.example.split(/\n\s*\n/).filter(Boolean).map((paragraph,index)=><ReadableText key={index} text={paragraph}/>)}</section>}
      {article.migrationSections?.length>0&&<section id="article-context"><h2>{language==='mr'?'अधिक स्पष्टीकरण':'Further explanation'}</h2>{article.migrationSections.map((section,index)=><div className="nested-explanation" key={index}><h3>{section.heading}</h3>{String(section.content||'').split(/\n\s*\n/).filter(Boolean).map((paragraph,i)=><ReadableText key={i} text={paragraph}/>)}</div>)}</section>}
      {article.migrationFaq?.length>0&&<section id="article-faq" className="article-faq"><h2>{mr?'वारंवार विचारले जाणारे प्रश्न':'Frequently asked questions'}</h2><ol>{article.migrationFaq.map((faq,index)=><li key={`${faq.question}-${index}`}><div><h3>{faq.question}</h3><ReadableText text={faq.answer}/></div></li>)}</ol></section>}
      {article.migrationMcqs?.length>0&&<section id="article-knowledge-check" className="article-knowledge-check"><h2>{mr?'ज्ञान तपासा':'Knowledge check'}</h2><ol className="article-mcqs">{article.migrationMcqs.map((mcq,index)=><li key={`${mcq.question}-${index}`}><h3>{mcq.question}</h3><ol type="A" className="article-mcq-options">{mcq.options?.map((option,optionIndex)=><li key={`${option}-${optionIndex}`}>{option}</li>)}</ol>{mcq.answer&&<p className="article-mcq-answer"><strong>{mr?'योग्य उत्तर':'Correct answer'}:</strong> {mcq.answer}</p>}</li>)}</ol></section>}
      {article.whyItMatters&&<section id="why-it-matters"><h2>{mr?'याचे महत्त्व':'Why it matters'}</h2><ReadableText text={article.whyItMattersMr||article.whyItMatters}/></section>}
      {related.length>0&&<section id="related-articles" className="detail-related"><h2>{mr?'संबंधित घटनात्मक कलमे':'Related Constitutional Articles'}</h2><div className="related-grid">{related.map(item=><a key={item.number} href={articlePath(item.number)}><span>{mr?'कलम':'Article'} {item.number}</span><strong>{item.title}</strong><small>{item.summary}</small><b aria-hidden="true">&gt;</b></a>)}</div></section>}
      {article.sources?.length>0&&<section id="article-sources"><h2>{labels.sources}</h2><ul>{article.sources.map((source,index)=><li key={index}><a href={source.url}>{source.label}</a></li>)}</ul></section>}
      <RelatedContent items={relatedLearning}/>
      <section id="article-source" className="source-note"><div><strong>{labels.sourceNote}</strong><p>{mr?'हा लेख केवळ शैक्षणिक आणि माहितीपर उद्देशांसाठी आहे; तो कायदेशीर सल्ला नाही. अधिकृत शब्दरचनेसाठी भारतीय संविधानाचा संदर्भ घ्या.':'This article is intended for educational and informational purposes only and does not constitute legal advice. For authoritative wording, consult the Constitution of India.'}</p></div></section>
      <nav className="article-next-prev" aria-label={mr?'इतर कलमे':'More articles'}>{previous?<a href={articlePath(previous.number)}><small>&lt; {mr?'मागील कलम':'Previous article'}</small><strong>{mr?'कलम':'Article'} {previous.number}</strong><span>{previous.title}</span></a>:<span/>}{next?<a href={articlePath(next.number)}><small>{mr?'पुढील कलम':'Next article'} &gt;</small><strong>{mr?'कलम':'Article'} {next.number}</strong><span>{next.title}</span></a>:<span/>}</nav>
    </article></div>
  </main><SiteFooter/></>
}

