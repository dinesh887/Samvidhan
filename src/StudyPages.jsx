import { Seo, SiteFooter, SiteHeader } from './ArticlePages.jsx'
import RelatedContent from './RelatedContent.jsx'
import { useLanguage } from './LanguageContext.jsx'
import './StudyPages.css'

const origin = 'https://www.mysamvidhan.in'
const books = [
  { image: '/images/books/bharatache-sanvidhan.jpg', alt: 'The Constitution of India, Marathi edition', title: 'The Constitution of India', author: 'Dr. Babasaheb Ambedkar', description: { en: 'A Marathi edition of the Constitution of India, updated up to the 106th Constitutional Amendment.', mr: '१०६व्या घटनादुरुस्तीपर्यंत अद्ययावत केलेली भारतीय संविधानाची मराठी आवृत्ती.' }, href: 'https://link.amazon/B0c3E6ZnQ' },
  { image: '/images/books/upsc.jpg', alt: 'Indian Polity, eighth edition', title: 'Indian Polity — 8th Edition', author: 'M. Laxmikanth', description: { en: 'A Marathi polity reference for UPSC and MPSC preparation, with structured chapters and solved questions.', mr: 'UPSC आणि MPSC परीक्षांच्या तयारीसाठी प्रकरणे व सराव प्रश्नांसह मराठी संदर्भग्रंथ.' }, href: 'https://link.amazon/B06aGhdJp' },
]
const learningTracks = [
  { id: 'articles', title: { en: 'Article Explained', mr: 'कलमांचे स्पष्टीकरण' }, text: { en: 'Read clear explanations of individual Articles.', mr: 'संविधानातील निवडक कलमांची सोपी स्पष्टीकरणे वाचा.' }, href: '/articles' },
  { id: 'rights', title: { en: 'Fundamental Rights Explained', mr: 'मूलभूत हक्कांचे स्पष्टीकरण' }, text: { en: 'Understand rights, remedies and real-world meaning.', mr: 'हक्क, घटनात्मक उपाय आणि त्यांचा संदर्भ समजून घ्या.' }, href: '/fundamental-rights' },
  { id: 'basics', title: { en: 'Constitution Basics', mr: 'संविधानाची मूलतत्त्वे' }, text: { en: 'Start with the structure and language of the Constitution.', mr: 'संविधानाची रचना आणि त्यातील संज्ञांपासून सुरुवात करा.' }, href: '/preamble' },
  { id: 'amendments', title: { en: 'Important Amendments', mr: 'महत्त्वाच्या घटनादुरुस्त्या' }, text: { en: 'Trace the changes that shaped constitutional practice.', mr: 'संविधानाच्या वाटचालीवर परिणाम करणाऱ्या दुरुस्त्या पाहा.' }, href: '/amendments' },
  { id: 'mpsc', title: { en: 'MPSC Preparation', mr: 'MPSC परीक्षेची तयारी' }, text: { en: 'Build a focused foundation for MPSC polity study.', mr: 'MPSC राज्यशास्त्राच्या अभ्यासासाठी मूलभूत संकल्पना समजून घ्या.' }, href: '/exam-preparation#mpsc' },
  { id: 'upsc', title: { en: 'UPSC Preparation', mr: 'UPSC परीक्षेची तयारी' }, text: { en: 'Develop depth through structured polity practice.', mr: 'राज्यशास्त्राचा पद्धतशीर अभ्यास करून विषयाची सखोल समज वाढवा.' }, href: '/exam-preparation#upsc' },
]

function Breadcrumb({ language, current }) {
  return <nav className="study-breadcrumb" aria-label={language === 'mr' ? 'मार्गक्रमण' : 'Breadcrumb'}><a href="/">{language === 'mr' ? 'मुख्यपृष्ठ' : 'Home'}</a><span aria-hidden="true">›</span><span aria-current="page">{current}</span></nav>
}

function TrailLinks({ language }) {
  const items = language === 'mr'
    ? [['संविधानातील कलमे', '/articles'], ['मूलभूत हक्क', '/fundamental-rights'], ['मूलभूत कर्तव्ये', '/fundamental-duties'], ['राज्याची मार्गदर्शक तत्त्वे', '/directive-principles'], ['प्रश्नमंजुषा', '/quiz']]
    : [['Constitutional Articles', '/articles'], ['Fundamental Rights', '/fundamental-rights'], ['Fundamental Duties', '/fundamental-duties'], ['Directive Principles', '/directive-principles'], ['Quiz', '/quiz']]
  return <nav className="study-trail" aria-label={language === 'mr' ? 'अभ्यासासाठी पुढील विषय' : 'Continue learning'}>{items.map(([label, href]) => <a href={href} key={href}>{label}<span aria-hidden="true">→</span></a>)}</nav>
}

function BookList({ language }) {
  const labels = language === 'mr'
    ? { eyebrow: 'वाचनसूची', title: 'संदर्भग्रंथ', buy: 'पुस्तक पहा', affiliate: 'या पृष्ठावरील काही पुस्तक दुवे संलग्न (affiliate) दुवे असू शकतात. त्यांद्वारे खरेदी केल्यास आम्हाला अतिरिक्त खर्चाशिवाय कमिशन मिळू शकते.' }
    : { eyebrow: 'READING LIST', title: 'Recommended Books', buy: 'View book', affiliate: 'Some links on this page may be affiliate links. We may earn a commission at no additional cost to you.' }
  return <section className="study-books"><div className="study-section-heading"><p className="study-eyebrow">{labels.eyebrow}</p><h2>{labels.title}</h2></div><div className="study-book-grid">{books.map((book) => <article className="study-book" key={book.title}><img src={book.image} alt={book.alt} loading="lazy"/><div><h3>{book.title}</h3><p className="study-book-author">{book.author}</p><p>{book.description[language]}</p><a href={book.href} target="_blank" rel="sponsored noreferrer">{labels.buy} <span aria-hidden="true">↗</span></a></div></article>)}</div><p className="study-affiliate-note">{labels.affiliate}</p></section>
}

export function LearnPage() {
  const { language } = useLanguage()
  const mr = language === 'mr'
  const title = mr ? 'भारतीय संविधानाचा अभ्यास करा' : 'Learn Indian Constitution'
  const description = mr ? 'तुमच्या आवडीनुसार अभ्यासाचा मार्ग निवडा आणि संविधानातील महत्त्वाच्या संकल्पना क्रमाने समजून घ्या.' : 'Choose a path that matches your curiosity, then build from reliable constitutional concepts.'
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'CollectionPage', name: `${title} | MySamvidhan`, description, url: `${origin}/learn` },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: mr ? 'मुख्यपृष्ठ' : 'Home', item: origin }, { '@type': 'ListItem', position: 2, name: title, item: `${origin}/learn` }] },
  ] }
  return <><Seo title={`${title} | MySamvidhan`} description={description} path="/learn" schema={schema}/><SiteHeader/><main className="study-page"><Breadcrumb language={language} current={title}/><header className="study-hero"><p className="study-eyebrow">{mr ? 'मार्गदर्शित सुरुवात' : 'A GUIDED STARTING POINT'}</p><h1>{title}</h1><p>{description}</p></header><section className="study-tracks" aria-label={mr ? 'अभ्यासाचे मार्ग' : 'Learning paths'}>{learningTracks.map((track) => <article key={track.id}><p className="study-track-number">{String(learningTracks.indexOf(track) + 1).padStart(2, '0')}</p><h2>{track.title[language]}</h2><p>{track.text[language]}</p><a href={track.href}>{mr ? 'अभ्यास सुरू करा' : 'Explore this path'} <span aria-hidden="true">→</span></a></article>)}</section><BookList language={language}/><section className="study-next"><div><p className="study-eyebrow">{mr ? 'पुढील पाऊल' : 'NEXT STEP'}</p><h2>{mr ? 'अभ्यासाची उजळणी करा' : 'Review what you have learned'}</h2><p>{mr ? 'विषयांचा अभ्यास केल्यानंतर प्रश्नमंजुषेतून तुमची समज तपासा.' : 'After exploring a topic, use the quiz to review your understanding.'}</p></div><a href="/quiz">{mr ? 'प्रश्नमंजुषा सुरू करा' : 'Start the quiz'} <span aria-hidden="true">→</span></a></section></main><SiteFooter/></>
}

export function ExamPreparationPage() {
  const { language } = useLanguage()
  const mr = language === 'mr'
  const title = mr ? 'परीक्षेची तयारी' : 'Exam Preparation'
  const description = mr ? 'MPSC आणि UPSC परीक्षार्थ्यांसाठी संविधान आणि राज्यशास्त्राचा पद्धतशीर अभ्यास.' : 'Structured Constitution and polity practice for MPSC and UPSC learners.'
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', name: `${title} | MySamvidhan`, description, url: `${origin}/exam-preparation` },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: mr ? 'मुख्यपृष्ठ' : 'Home', item: origin }, { '@type': 'ListItem', position: 2, name: mr ? 'अभ्यास' : 'Learn', item: `${origin}/learn` }, { '@type': 'ListItem', position: 3, name: title, item: `${origin}/exam-preparation` }] },
  ] }
  return <><Seo title={`${title} | MySamvidhan`} description={description} path="/exam-preparation" schema={schema}/><SiteHeader/><main className="study-page"><Breadcrumb language={language} current={title}/><header className="study-hero"><p className="study-eyebrow">{mr ? 'अभ्यासाचे मार्ग' : 'STUDY TRACKS'}</p><h1>{title}</h1><p>{description}</p></header><section className="exam-tracks" aria-label={mr ? 'परीक्षेनुसार अभ्यास' : 'Exam study tracks'}><article id="mpsc"><p className="study-eyebrow">MPSC</p><h2>{mr ? 'MPSC साठी संविधानाचा अभ्यास' : 'MPSC Constitution Preparation'}</h2><p>{mr ? 'मूलभूत कलमांपासून महाराष्ट्र-केंद्रित उजळणीपर्यंतचा अभ्यासाचा मार्ग.' : 'A practical path from foundational Articles to Maharashtra-focused revision.'}</p><TrailLinks language={language}/><a className="study-primary-link" href="/articles">{mr ? 'कलमांचा अभ्यास करा' : 'Browse constitutional Articles'} <span aria-hidden="true">→</span></a></article><article id="upsc"><p className="study-eyebrow">UPSC</p><h2>{mr ? 'UPSC राज्यशास्त्राची तयारी' : 'UPSC Polity Preparation'}</h2><p>{mr ? 'नागरी सेवा परीक्षांसाठी आवश्यक संकल्पनांची सखोल समज आणि तर्काधारित सराव.' : 'Build conceptual depth and practise the reasoning expected in civil services exams.'}</p><TrailLinks language={language}/><a className="study-primary-link" href="/directive-principles">{mr ? 'राज्यशास्त्र विषय पाहा' : 'Explore polity topics'} <span aria-hidden="true">→</span></a></article></section><BookList language={language}/><RelatedContent title={mr ? 'पुढील अभ्यास' : 'Continue learning'} items={[{ href: '/learn', label: mr ? 'अभ्यास मार्गदर्शक' : 'Learning guide', description: mr ? 'संविधानाचा अभ्यास सुरू करण्यासाठी विषय निवडा.' : 'Choose a topic path to begin exploring the Constitution.' }, { href: '/quiz', label: mr ? 'प्रश्नमंजुषा' : 'Constitution Quiz', description: mr ? 'अभ्यासलेल्या विषयांची उजळणी करा.' : 'Review topics you have studied.' }]}/></main><SiteFooter/></>
}
