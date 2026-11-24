import { useState } from 'react'
import { ArticleDetailPage, ArticleListingPage, SiteFooter } from './ArticlePages.jsx'
import { FundamentalRightDetailPage, FundamentalRightsLandingPage } from './RightsPages.jsx'
import { AmendmentsLandingPage, AmendmentDetailPage } from './AmendmentPages.jsx'
import { CurrentAffairsDetailPage, CurrentAffairsListingPage } from './CurrentAffairsPages.jsx'
import { FundamentalDutiesPage, DirectivePrinciplesPage, PreamblePage } from './CivicPages.jsx'
import { AboutPage, ContactPage, PrivacyPage, TermsPage, DisclaimerPage } from './FooterPages.jsx'
import { currentAffairs, currentAffairsPath } from './data/currentAffairs'
import { localizedCurrentAffairs } from './data/marathiCurrentAffairs.js'
import { localizedArticle } from './data/marathiArticles.js'
import { articleByNumber } from './data/articles.js'
import QuizPage from './QuizPage.jsx'
import SearchPage from './SearchPage.jsx'
import { LearnPage, ExamPreparationPage } from './StudyPages.jsx'
import FAQPage from './FAQPage.jsx'
import FAQAccordion from './FAQAccordion.jsx'
import { faqs } from './data/faqs.js'
import { Brand } from './Brand.jsx'
import { LanguageProvider, LanguageSwitch, useLanguage } from './LanguageContext.jsx'
import { languageLabels } from './data/languageLabels.js'
import './App.css'

const site = 'https://www.mysamvidhan.in'
const footerRoutes=['/about','/contact','/privacy','/privacy-policy','/terms','/terms-and-conditions','/disclaimer']
const siteHref = (path) => path === '/' || path === '/articles' || path === '/current-affairs' || path === '/quiz' || path === '/faq' || path === '/learn' || path === '/exam-preparation' || path.startsWith('/article/') || path.startsWith('/fundamental-rights') || path.startsWith('/amendments') || path.startsWith('/current-affairs/') || ['/fundamental-duties','/directive-principles','/preamble',...footerRoutes].includes(path) ? (path==='/terms'?'/terms-and-conditions':path) : `${site}${path}`
const articles = [
  { number: '14', title: 'Right to Equality', text: 'Article 14 guarantees equality before the law and equal protection of the laws to every person.', href: '/article/14', image: '/images/articles/article-14.webp' },
  { number: '19', title: 'Freedoms of Citizens', text: 'Six important freedoms, including speech and expression, with constitutionally defined limits.', href: '/article/19', image: '/images/articles/article-19.webp' },
  { number: '21', title: 'Life and Personal Liberty', text: 'A broad protection of life and personal liberty, interpreted through the courts over time.', href: '/article/21', image: '/images/articles/article-21.webp' },
  { number: '21A', title: 'Right to Education', text: 'Free and compulsory education for children between six and fourteen years of age.', href: '/article/21A', image: '/images/articles/article-21a.webp' },
  { number: '32', title: 'Constitutional Remedies', text: 'The right to approach the Supreme Court to enforce Fundamental Rights.', href: '/article/32', image: '/images/articles/article-32.webp' },
]
const homeCopy = {
  en: {
    skip: 'Skip to content', constitution: 'THE CONSTITUTION OF INDIA', headline: <>Understand the<br/>Constitution.<br/><em>Know Your Rights.</em></>, intro: 'Explore the Indian Constitution, understand your fundamental rights, duties and democratic principles through simple and informative guides.', searchLabel: 'Search articles and topics', searchPlaceholder: 'Search article, topic or keyword...', search: 'Search', popular: 'Popular:', article: 'Article', exploreTitle: 'Explore the Constitution', exploreIntro: 'Discover the key parts of the Indian Constitution and learn how they shape our democracy.', topics: ['Constitutional Articles','Fundamental Rights','Fundamental Duties','Directive Principles','Constitutional Amendments','The Preamble'], topicText: ['Explore simplified explanations of selected Articles.','Understand the freedoms and protections in Part III.','Learn about the responsibilities of citizens.','Explore principles guiding government policy.','See how the Constitution changes over time.','Explore the opening values of the Constitution.'], booksIntro: 'Reference books on the Constitution and Indian polity.', articlesTitle: 'Important Articles of the Constitution', articlesIntro: 'Explore important constitutional articles and the rights, freedoms and protections they provide.', readExplanation: 'Read explanation', updatesTitle: 'Latest Constitutional & Civic Updates', updatesIntro: 'Stay informed about constitutional developments, legal updates, government policies and important civic issues.', viewAll: 'View all updates', readMore: 'Read more', quizEyebrow: 'LEARN BY DOING', quizTitle: 'Test Your Constitution Knowledge', quizIntro: 'Challenge yourself with the interactive quiz and see what you know.', startQuiz: 'Start the quiz', quickAnswers: 'QUICK ANSWERS', faqTitle: 'Frequently Asked Questions', moreFaq: 'More common questions', footerAbout: 'An independent educational platform helping readers understand the Constitution of India in simple language.',
  },
  mr: {
    skip: 'मजकुराकडे जा', constitution: 'भारताचे संविधान', headline: <>संविधान समजून घ्या.<br/><em>आपले हक्क जाणून घ्या.</em></>, intro: 'भारतीय संविधानाचा सोप्या मार्गदर्शकांद्वारे अभ्यास करा. आपले मूलभूत हक्क, कर्तव्ये आणि लोकशाहीची तत्त्वे समजून घ्या.', searchLabel: 'कलमे आणि विषय शोधा', searchPlaceholder: 'कलम क्रमांक, विषय किंवा शब्द शोधा...', search: 'शोधा', popular: 'लोकप्रिय:', article: 'कलम', exploreTitle: 'संविधानाचा अभ्यास करा', exploreIntro: 'भारतीय संविधानातील महत्त्वाचे भाग जाणून घ्या आणि ते आपल्या लोकशाहीला कसा आकार देतात ते समजून घ्या.', topics: ['संविधानातील कलमे','मूलभूत हक्क','मूलभूत कर्तव्ये','राज्याच्या धोरणाची मार्गदर्शक तत्त्वे','घटनादुरुस्त्या','प्रस्तावना'], topicText: ['निवडक कलमांचे सोप्या भाषेतील स्पष्टीकरण वाचा.','भाग III मधील स्वातंत्र्ये आणि संरक्षण समजून घ्या.','नागरिकांच्या जबाबदाऱ्या जाणून घ्या.','सरकारी धोरणांना दिशा देणारी तत्त्वे जाणून घ्या.','काळानुसार संविधानात झालेले बदल पाहा.','संविधानाच्या सुरुवातीच्या मूल्यांचा परिचय करून घ्या.'], booksIntro: 'संविधान आणि भारतीय राज्यव्यवस्थेवरील संदर्भग्रंथ.', articlesTitle: 'संविधानातील महत्त्वाची कलमे', articlesIntro: 'महत्त्वाची घटनात्मक कलमे आणि त्यांद्वारे मिळणारे हक्क, स्वातंत्र्ये व संरक्षण जाणून घ्या.', readExplanation: 'स्पष्टीकरण वाचा', updatesTitle: 'नवीन घटनात्मक आणि नागरी घडामोडी', updatesIntro: 'घटनात्मक घडामोडी, कायदेविषयक बातम्या, सरकारी धोरणे आणि महत्त्वाच्या नागरी प्रश्नांची माहिती मिळवा.', viewAll: 'सर्व बातम्या पाहा', readMore: 'पुढे वाचा', quizEyebrow: 'कृतीतून शिका', quizTitle: 'संविधानाविषयीचे ज्ञान तपासा', quizIntro: 'परस्परसंवादी प्रश्नमंजुषेत सहभागी व्हा आणि तुमचे ज्ञान तपासा.', startQuiz: 'प्रश्नमंजुषा सुरू करा', quickAnswers: 'थोडक्यात उत्तरे', faqTitle: 'वारंवार विचारले जाणारे प्रश्न', moreFaq: 'अधिक सामान्य प्रश्न', footerAbout: 'भारतीय संविधान सोप्या भाषेत समजून घेण्यासाठी मदत करणारे स्वतंत्र शैक्षणिक व्यासपीठ.',
  },
}
const makeUpdates = (language) => localizedCurrentAffairs(currentAffairs, language).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, 3).map((item) => ({ category: item.category, date: new Intl.DateTimeFormat(language === 'mr' ? 'mr-IN' : 'en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${item.publishedAt}T00:00:00Z`)), title: item.title, text: item.summary, href: currentAffairsPath(item.slug), icon: item.icon }))
const topics = [
  ['articles', 'Constitutional Articles', 'Explore simplified explanations of selected Articles.', '/articles'],
  ['rights', 'Fundamental Rights', 'Understand the freedoms and protections in Part III.', '/fundamental-rights'],
  ['duties', 'Fundamental Duties', 'Learn about the responsibilities of citizens.', '/fundamental-duties'],
  ['principles', 'Directive Principles', 'Explore principles guiding government policy.', '/directive-principles'],
  ['amendments', 'Constitutional Amendments', 'See how the Constitution changes over time.', '/amendments'],
  ['preamble', 'The Preamble', 'Explore the opening values of the Constitution.', '/preamble'],
]
const recommendedBooks = [
  { image: '/images/books/bharatache-sanvidhan.jpg', alt: 'The Constitution of India, Marathi edition', title: 'The Constitution of India', author: 'Dr. Babasaheb Ambedkar', tag: { en: 'INDIAN CONSTITUTION · MARATHI', mr: 'भारतीय संविधान · मराठी' }, description: { en: 'A Marathi edition of the Constitution of India, updated up to the 106th Constitutional Amendment.', mr: '१०६व्या घटनादुरुस्तीपर्यंत अद्ययावत केलेली भारतीय संविधानाची मराठी आवृत्ती.' }, href: 'https://link.amazon/B0c3E6ZnQ' },
  { image: '/images/books/upsc.jpg', alt: 'Indian Polity, eighth edition', title: 'Indian Polity — 8th Edition', author: 'M. Laxmikanth', tag: { en: 'UPSC / MPSC · MARATHI', mr: 'UPSC / MPSC · मराठी' }, description: { en: 'A Marathi polity reference for UPSC and MPSC preparation, with structured chapters and solved questions.', mr: 'UPSC आणि MPSC परीक्षांच्या तयारीसाठी प्रकरणे व सराव प्रश्नांसह मराठी संदर्भग्रंथ.' }, href: 'https://link.amazon/B06aGhdJp' },
]
const iconPaths = {
  articles: <><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v6h6M10 13h6M10 17h6"/></>,
  rights: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
  duties: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 8v6M23 11h-6"/></>,
  principles: <><path d="M3 21h18M5 18h14M6 18V9h12v9M4 9h16L12 3 4 9Z"/><path d="M9 11v5m3-5v5m3-5v5"/></>,
  amendments: <><path d="M12 3v6m0 0-3-3m3 3 3-3M5 11v8h14v-8M8 15h8"/></>,
  preamble: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/><path d="M8 7h8M8 11h8"/></>,
  search: <><circle cx="10.8" cy="10.8" r="6.5"/><path d="m16 16 5 5"/></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
}
const Icon = ({ name, className = 'topic-icon' }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{iconPaths[name]}</svg>

function HeroArt({ language }) {
  return <div className="hero-art" role="img" aria-label="Illustration of the Constitution of India in front of Parliament">
    <div className="sky-orb" /><svg className="chakra-wheel" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="18"/><circle cx="24" cy="24" r="3"/>{Array.from({length:12},(_,i)=><path key={i} d="M24 6v15" transform={`rotate(${i*30} 24 24)`}/>)}</svg>
    <svg className="parliament" viewBox="0 0 580 220" aria-hidden="true"><path d="M26 194h528M70 185h440M106 179V98h368v81M91 98h398L290 31 91 98Z" fill="#e6d1ae" stroke="#8c7250" strokeWidth="4"/><path d="M158 106v66m42-66v66m42-66v66m42-66v66m42-66v66m42-66v66m42-66v66" stroke="#947b5b" strokeWidth="13"/><path d="M75 184h430" stroke="#b69c76" strokeWidth="8"/><path d="M116 95h348" stroke="#b69c76" strokeWidth="5"/></svg>
    <div className="tricolor" aria-hidden="true"><i/><i/><i/></div>
    <div className="constitution-book"><span>{language === 'mr' ? 'भारताचे' : 'THE'}</span><strong>{language === 'mr' ? <>भारतीय<br/>संविधान</> : <>CONSTITUTION<br/>OF INDIA</>}</strong><svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="17"/><circle cx="24" cy="24" r="2"/>{Array.from({length:12},(_,i)=><path key={i} d="M24 7v15" transform={`rotate(${i*30} 24 24)`}/>)}</svg><small>सत्यमेव जयते</small></div>
    <div className="hero-ground" />
  </div>
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { language } = useLanguage()
  const labels = languageLabels[language]
  const copy = homeCopy[language]
  const visibleUpdates = makeUpdates(language)
  const nav = [[labels.home,'/'],[labels.articles,'/articles'],[labels.currentAffairs,'/current-affairs'],[labels.fundamentalRights,'/fundamental-rights'],[labels.amendments,'/amendments'],[labels.quiz,'/quiz'],[labels.about,'/about']]
  function search(e) { e.preventDefault(); const term = query.trim(); if (term) window.location.href = `/search?q=${encodeURIComponent(term)}` }
  return <>
    <a className="skip-link" href="#main">{copy.skip}</a>
    <header className="site-header"><Brand />
      <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}><svg viewBox="0 0 24 24" aria-hidden="true"><path d={menuOpen ? 'm6 6 12 12M18 6 6 18' : 'M3 6h18M3 12h18M3 18h18'} /></svg></button>
      <nav id="main-nav" className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">{nav.map(([name, path]) => <a key={path} className={window.location.pathname===path?'active':''} href={siteHref(path)} onClick={() => setMenuOpen(false)}>{name}</a>)}<details className="nav-more"><summary>{labels.more}</summary><div><a href={siteHref('/fundamental-duties')}>{labels.fundamentalDuties}</a><a href={siteHref('/directive-principles')}>{labels.directivePrinciples}</a><a href={siteHref('/preamble')}>{labels.preamble}</a><a href={siteHref('/learn')}>{labels.learn}</a><a href={siteHref('/exam-preparation')}>{labels.examPreparation}</a></div></details></nav>
      <LanguageSwitch />
      <a className="header-search" href="/search" aria-label={labels.search}><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.5"/><path d="m16 16 5 5"/></svg></a>
    </header>
    <main id="main">
      <section className="hero"><div className="hero-copy"><p className="eyebrow"><span/> {copy.constitution}</p><h1>{copy.headline}</h1><p className="hero-description">{copy.intro}</p>
        <form id="search" className="search-box" onSubmit={search}><label className="sr-only" htmlFor="site-search">{copy.searchLabel}</label><Icon name="search" className="search-icon"/><input id="site-search" value={query} onChange={e=>setQuery(e.target.value)} placeholder={copy.searchPlaceholder}/><button>{copy.search} <Icon name="arrow" className="inline-icon"/></button></form>
        <div className="popular"><span>{copy.popular}</span>{['14','19','21','32'].map(n=><a key={n} href={`/article/${n}`}>{copy.article} {n}</a>)}</div>
      </div><HeroArt language={language}/></section>
      <section className="section explore" aria-labelledby="explore-title"><div className="section-heading"><span/><div><h2 id="explore-title">{copy.exploreTitle}</h2><p>{copy.exploreIntro}</p></div><span/></div>
        <div className="topic-grid">{topics.map(([icon,, ,path],index)=><a className="topic" key={path} href={siteHref(path)}><Icon name={icon}/><strong>{copy.topics[index]}</strong><small>{copy.topicText[index]}</small></a>)}</div>
      </section>
      <section className="home-reading section" aria-labelledby="recommended-title"><div className="home-reading-heading"><div><p className="eyebrow">{labels.recommended}</p><h2 id="recommended-title">{labels.recommendedTitle}</h2></div><p>{language === 'mr' ? 'संविधान आणि भारतीय राज्यव्यवस्थेवरील संदर्भग्रंथ.' : 'Reference books on the Constitution and Indian polity.'}</p></div><div className="home-book-list">{recommendedBooks.map((book) => <article className="home-book" key={book.title}><img src={book.image} alt={book.alt} loading="lazy"/><div><p className="home-book-tag">{book.tag[language]}</p><h3>{book.title}</h3><p className="home-book-author">{book.author}</p><p className="home-book-description">{book.description[language]}</p><a href={book.href} target="_blank" rel="sponsored noreferrer">{labels.bookBuy}<Icon name="arrow" className="inline-icon"/></a></div></article>)}</div><p className="home-book-disclosure">{labels.affiliate}</p></section>
      <section className="section articles-section"><div className="section-heading compact"><span/><h2>{copy.articlesTitle}</h2><span/></div><p className="section-intro">{copy.articlesIntro}</p>
        <div className="article-grid">{articles.map((item,i)=>{const source=articleByNumber(item.number);const local=localizedArticle(source||item,language);return <a href={item.href} className={`article-card art-${i+1}`} key={item.number}><div className="article-visual"><img src={item.image} alt={`${copy.article} ${item.number} illustration`} loading="lazy" decoding="async"/><Icon name={i===0?'rights':i===1?'duties':i===4?'articles':'preamble'} className="article-card-icon"/><b>{copy.article.toLocaleUpperCase()} {item.number}</b></div><div className="article-body"><h3>{local.title}</h3><p>{local.summary}</p><span className="read-more">{copy.readExplanation} <Icon name="arrow" className="inline-icon"/></span></div></a>})}</div>
      </section>
      <section className="section updates-section"><div className="updates-heading"><div><h2>{copy.updatesTitle}</h2><p>{copy.updatesIntro}</p></div><a href={siteHref('/current-affairs')}>{copy.viewAll} <b>→</b></a></div>
        <div className="updates-list">{visibleUpdates.map(item=><article className="update" key={item.title}><div className="update-mark" aria-hidden="true">{item.icon}</div><div className="update-content"><div className="update-meta"><span>{item.category}</span><time>{item.date}</time></div><h3><a href={item.href}>{item.title}</a></h3><p>{item.text}</p><a className="read-more" href={item.href}>{copy.readMore} <Icon name="arrow" className="inline-icon"/></a></div></article>)}</div>
      </section>
      <section className="quiz-row" aria-label={language === 'mr' ? 'प्रश्नमंजुषा आणि वारंवार विचारले जाणारे प्रश्न' : 'Quiz and frequently asked questions'}><div className="quiz-banner"><div className="quiz-symbol" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H20v19H7.5A2.5 2.5 0 0 0 5 23V4.5Z"/><path d="M5 5h12M9 9h7m-7 4h7"/></svg></div><div><p className="eyebrow">{copy.quizEyebrow}</p><h2>{copy.quizTitle}</h2><p>{copy.quizIntro}</p></div><a href="/quiz">{copy.startQuiz} <Icon name="arrow" className="inline-icon"/></a></div>
        <div className="faq"><div className="faq-title"><svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.5"/><path d="m16 16 5 5"/></svg><div><p className="eyebrow">{copy.quickAnswers}</p><h2>{copy.faqTitle}</h2></div></div><FAQAccordion items={faqs.filter((item) => item.homepage)} language={language} groupName="home-faq"/><a className="faq-more" href={siteHref('/faq')}>{copy.moreFaq} →</a></div></section>
    </main>
    <SiteFooter />
  </>
}
function AppContent() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (path === '/faq') return <FAQPage />
  if (path === '/learn') return <LearnPage />
  if (path === '/exam-preparation') return <ExamPreparationPage />
  if (path === '/quiz') return <QuizPage />
  if (path === '/search') return <SearchPage />
  if (path === '/articles') return <ArticleListingPage />
  if (path === '/current-affairs') return <CurrentAffairsListingPage />
  if (path === '/fundamental-duties') return <FundamentalDutiesPage />
  if (path === '/directive-principles') return <DirectivePrinciplesPage />
  if (path === '/preamble') return <PreamblePage />
  if (path === '/about') return <AboutPage />
  if (path === '/contact') return <ContactPage />
  if (path === '/privacy') return <PrivacyPage />
  if (path === '/privacy-policy') return <PrivacyPage />
  if (path === '/terms' || path === '/terms-and-conditions') return <TermsPage />
  if (path === '/disclaimer') return <DisclaimerPage />
  if (path === '/amendments') return <AmendmentsLandingPage />
  const amendmentMatch = path.match(/^\/amendments\/([\w-]+)$/i)
  if (amendmentMatch) return <AmendmentDetailPage slug={decodeURIComponent(amendmentMatch[1])} />
  const affairsMatch = path.match(/^\/current-affairs\/([\w-]+)$/i)
  if (affairsMatch) return <CurrentAffairsDetailPage slug={decodeURIComponent(affairsMatch[1])} />
  if (path === '/fundamental-rights') return <FundamentalRightsLandingPage />
  const rightMatch = path.match(/^\/fundamental-rights\/([\w-]+)$/i)
  if (rightMatch) return <FundamentalRightDetailPage slug={decodeURIComponent(rightMatch[1])} />
  const match = path.match(/^\/article\/([\w-]+)$/i)
  if (match) return <ArticleDetailPage number={decodeURIComponent(match[1])} />
  return <HomePage />
}

export default function App() { return <LanguageProvider><AppContent /></LanguageProvider> }

