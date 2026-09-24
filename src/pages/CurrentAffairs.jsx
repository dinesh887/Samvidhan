import { Link, useParams } from 'react-router-dom'
import { BookOpen, HelpCircle, Lightbulb, Link2, Sparkles } from 'lucide-react'
import PageMeta from '../components/PageMeta'
import CurrentAffairsCard from '../components/CurrentAffairsCard'
import { useLanguage } from '../context/LanguageContext'
import { currentAffairs, getCurrentAffairBySlug } from '../data/currentAffairs'

function formatDate(date, language) {
  return new Date(`${date}T00:00:00`).toLocaleDateString(
    language === 'mr' ? 'mr-IN' : 'en-IN',
    { day: 'numeric', month: 'long', year: 'numeric' }
  )
}

export function CurrentAffairsList() {
  const { language } = useLanguage()

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <PageMeta />
      <header>
        <h1
          lang={language}
          className="font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl"
        >
          {language === 'mr' ? 'चालू घडामोडी' : 'Current Affairs'}
        </h1>
        <p
          lang={language}
          className="mt-2 max-w-3xl text-ink/60 dark:text-ink-dark/60"
        >
          {language === 'mr'
            ? 'भारतीय संविधान आणि राज्यशास्त्राशी संबंधित महत्त्वाच्या चालू घडामोडी समजून घ्या.'
            : 'Understand important current affairs related to the Indian Constitution and polity.'}
        </p>
      </header>

      <section
        aria-label={language === 'mr' ? 'चालू घडामोडी लेख' : 'Current affairs articles'}
        className="mt-8 grid gap-5 sm:grid-cols-2"
      >
        {[...currentAffairs]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((article) => (
          <CurrentAffairsCard key={article.id} article={article} />
        ))}
      </section>
    </div>
  )
}

export function CurrentAffairDetails() {
  const { slug } = useParams()
  const { language, pick } = useLanguage()
  const article = getCurrentAffairBySlug(slug || '')

  if (!article) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <PageMeta />
        <h1 className="font-display text-2xl font-semibold text-navy dark:text-ink-dark">
          {language === 'mr' ? 'लेख सापडला नाही' : 'Article not found'}
        </h1>
        <Link to="/current-affairs" className="mt-4 inline-block text-saffron">
          {language === 'mr' ? 'चालू घडामोडींकडे परत जा' : 'Back to Current Affairs'}
        </Link>
      </div>
    )
  }

  const category = language === 'mr' ? article.categoryMr : article.category
  const seoSections = article.seoSections?.[language] || []
  const faqs = article.faq?.[language] || []
  const mcqs = article.mcqs?.[language] || []
  const related = (article.relatedSlugs || [])
    .map((relatedSlug) => getCurrentAffairBySlug(relatedSlug))
    .filter(Boolean)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <PageMeta />

      <nav aria-label={language === 'mr' ? 'पृष्ठ मार्गक्रमण' : 'Breadcrumb'} className="mb-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink/50 dark:text-ink-dark/50">
          <li><Link to="/" className="hover:text-saffron">{language === 'mr' ? 'मुख्यपृष्ठ' : 'Home'}</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link to="/current-affairs" className="hover:text-saffron">{language === 'mr' ? 'चालू घडामोडी' : 'Current Affairs'}</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-navy dark:text-ink-dark">{pick(article.title)}</li>
        </ol>
      </nav>

      <header>
        <time dateTime={article.date} className="text-sm font-medium text-saffron">
          {formatDate(article.date, language)}
        </time>
        <h1 lang={language} className="mt-1 font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl">
          {pick(article.title)}
        </h1>
        <span lang={language} className="mt-3 inline-block rounded-full bg-leaf/10 px-3 py-1 text-xs font-medium text-leaf dark:text-leaf-light">
          {category}
        </span>
      </header>

      <section className="mt-8">
        <h2 lang={language} className="flex items-center gap-2 font-display text-xl font-semibold text-navy dark:text-ink-dark">
          <BookOpen size={20} className="text-saffron" />
          {language === 'mr' ? 'परिचय' : 'Introduction'}
        </h2>
        <p lang={language} className="mt-3 text-base leading-relaxed text-ink/80 dark:text-ink-dark/80">
          {pick(article.introduction || article.content)}
        </p>
      </section>

      <section className="mt-8">
        <h2 lang={language} className="flex items-center gap-2 font-display text-lg font-semibold text-navy dark:text-ink-dark">
          <BookOpen size={18} className="text-saffron" />
          {language === 'mr' ? 'सोप्या भाषेत स्पष्टीकरण' : 'Simple Explanation'}
        </h2>
        <p lang={language} className="mt-3 text-base leading-relaxed text-ink/80 dark:text-ink-dark/80">
          {pick(article.simpleExplanation)}
        </p>
      </section>

      <section className="mt-8">
        <h2 lang={language} className="flex items-center gap-2 font-display text-lg font-semibold text-navy dark:text-ink-dark">
          <Sparkles size={18} className="text-saffron" />
          {language === 'mr' ? 'अगदी सोपे स्पष्टीकरण' : 'Very Simple Explanation'}
        </h2>
        <p lang={language} className="mt-3 rounded-xl bg-navy/[0.04] p-5 text-base leading-relaxed text-navy dark:bg-white/[0.05] dark:text-ink-dark">
          {pick(article.verySimple)}
        </p>
      </section>

      <section className="mt-8">
        <h2 lang={language} className="flex items-center gap-2 font-display text-lg font-semibold text-navy dark:text-ink-dark">
          <Lightbulb size={18} className="text-saffron" />
          {language === 'mr' ? 'उदाहरण' : 'Example'}
        </h2>
        <p lang={language} className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70">
          {pick(article.example)}
        </p>
      </section>

      {seoSections.length > 0 && (
        <section className="mt-8 space-y-6">
          {seoSections.map((section, index) => (
            <div key={index}>
              <h2 lang={language} className="font-display text-lg font-semibold text-navy dark:text-ink-dark">
                {section.heading}
              </h2>
              <p lang={language} className="mt-3 text-base leading-relaxed text-ink/80 dark:text-ink-dark/80">
                {section.content}
              </p>
            </div>
          ))}
        </section>
      )}

      {faqs.length > 0 && (
        <section className="mt-10">
          <h2 lang={language} className="flex items-center gap-2 font-display text-xl font-semibold text-navy dark:text-ink-dark">
            <HelpCircle size={20} className="text-saffron" />
            {language === 'mr' ? 'वारंवार विचारले जाणारे प्रश्न' : 'Frequently Asked Questions'}
          </h2>
          <div className="mt-4 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-xl border border-navy/10 bg-white/60 p-5 dark:border-ink-dark/10 dark:bg-white/[0.04]">
                <h3 lang={language} className="font-semibold text-navy dark:text-ink-dark">{faq.question}</h3>
                <p lang={language} className="mt-2 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {mcqs.length > 0 && (
        <section className="mt-10">
          <h2 lang={language} className="font-display text-xl font-semibold text-navy dark:text-ink-dark">
            {language === 'mr' ? 'बहुपर्यायी प्रश्न' : 'Multiple Choice Questions'}
          </h2>
          <div className="mt-4 space-y-4">
            {mcqs.map((mcq, index) => (
              <div key={index} className="rounded-xl border border-navy/10 bg-white/60 p-5 dark:border-ink-dark/10 dark:bg-white/[0.04]">
                <h3 lang={language} className="font-semibold text-navy dark:text-ink-dark">{mcq.question}</h3>
                <ul className="mt-3 grid gap-2 text-sm text-ink/70 dark:text-ink-dark/70 sm:grid-cols-2">
                  {mcq.options.map((option) => <li key={option}>{option}</li>)}
                </ul>
                <p lang={language} className="mt-3 text-sm font-medium text-leaf dark:text-leaf-light">
                  {language === 'mr' ? 'योग्य उत्तर' : 'Correct answer'}: {mcq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-10">
          <h2 lang={language} className="flex items-center gap-2 font-display text-lg font-semibold text-navy dark:text-ink-dark">
            <Link2 size={18} className="text-saffron" />
            {language === 'mr' ? 'संबंधित चालू घडामोडी' : 'Related Current Affairs'}
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {related.map((relatedArticle) => (
              <Link key={relatedArticle.id} to={`/current-affairs/${relatedArticle.slug}`} className="rounded-full border border-navy/15 px-4 py-2 text-sm text-navy transition-colors hover:border-saffron/50 hover:text-saffron dark:border-ink-dark/20 dark:text-ink-dark">
                {pick(relatedArticle.title)}
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="mt-10 border-t border-navy/10 pt-6 text-xs text-ink/45 dark:border-ink-dark/10 dark:text-ink-dark/45">
  <span>
    {language === 'mr' ? 'स्रोत' : 'Source'}:{' '}
    {article.source?.url ? (
      <a
        href={article.source.url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-saffron"
      >
        {article.source.title || 'The Indian Express'}
      </a>
    ) : (
      article.source?.title || '—'
    )}
  </span>
</div>
    </div>
  )
}

export default CurrentAffairsList
