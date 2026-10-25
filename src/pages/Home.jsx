import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Lightbulb, ArrowRight, BookOpenCheck } from 'lucide-react'
import Hero from '../components/Hero'
import CategoryCard from '../components/CategoryCard'
import ArticleCard from '../components/ArticleCard'
import CurrentAffairsCard from '../components/CurrentAffairsCard'
import { useLanguage } from '../context/LanguageContext'
import { exploreCards } from '../data/categories'
import { articles } from '../data/articles'
import { currentAffairs } from '../data/currentAffairs'
import { getTodaysFact } from '../data/facts'
import Advertisement from '../components/Advertisement'
import RecommendedBooks from '../components/RecommendedBooks'
import FAQSection from "../components/FAQSection";
import { books } from '../data/books'

const FEATURED_IDS = ['14', '19', '21', '21A', '32']

export default function Home() {
  const { t, pick, language } = useLanguage()
  const fact = getTodaysFact()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return

    const sections = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    document.documentElement.classList.add('motion-ready')

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])

  const featured = FEATURED_IDS.map((id) => articles.find((a) => a.id === id)).filter(Boolean)
  const recentAffairs = [...currentAffairs]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)

  return (
    <div>
      <Hero />
      <Advertisement placement="banner" />

      <section data-reveal className="scroll-reveal mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-2xl">
          <h2 lang={language} className="font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl">
            {t('explore_heading')}
          </h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {exploreCards.map((card) => (
            <CategoryCard key={card.path} {...card} />
          ))}
        </div>
      </section>

      <section data-reveal className="scroll-reveal mx-auto max-w-7xl px-4 sm:px-6 pb-14">
        <h2 lang={language} className="font-display text-2xl font-semibold text-navy dark:text-ink-dark sm:text-3xl">
          {language === 'mr' ? 'अभ्यासाची सुरुवात कशी कराल?' : 'A simple way to get started'}
        </h2>
        <p lang={language} className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65">
          {language === 'mr'
            ? 'उपलब्ध शैक्षणिक साधनांमधून विषय निवडा, संबंधित कलमांचे स्पष्टीकरण वाचा आणि शेवटी प्रश्नमंजुषेतून स्वतःची उजळणी करा.'
            : 'Choose a topic from the available study guides, read the related Article explanations, and use the quiz to review what you have learned.'}
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            {
              path: '/fundamental-rights',
              title: { en: '1. Start with a topic', mr: '१. विषय निवडा' },
              text: { en: 'Begin with Fundamental Rights, Duties or Directive Principles.', mr: 'मूलभूत अधिकार, कर्तव्ये किंवा मार्गदर्शक तत्त्वांपासून सुरुवात करा.' },
            },
            {
              path: '/articles',
              title: { en: '2. Read selected Articles', mr: '२. निवडक कलमे वाचा' },
              text: { en: 'Use the Article list to open the explanations currently available on the site.', mr: 'संकेतस्थळावर सध्या उपलब्ध असलेली कलमांची स्पष्टीकरणे वाचण्यासाठी यादी वापरा.' },
            },
            {
              path: '/quiz',
              title: { en: '3. Review with the quiz', mr: '३. प्रश्नमंजुषेतून उजळणी करा' },
              text: { en: 'Answer the quiz questions and check your score at the end.', mr: 'प्रश्नमंजुषेतील प्रश्न सोडवा आणि शेवटी आपला गुणांक पाहा.' },
            },
          ].map((step) => (
            <Link
              key={step.path}
              to={step.path}
              className="rounded-2xl border border-navy/10 bg-white/60 p-5 transition-colors hover:border-gold/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron dark:border-ink-dark/10 dark:bg-white/[0.04]"
            >
              <h3 lang={language} className="font-display text-base font-semibold text-navy dark:text-ink-dark">
                {pick(step.title)}
              </h3>
              <p lang={language} className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65">
                {pick(step.text)}
              </p>
            </Link>
          ))}
        </div>
      </section>
      <RecommendedBooks books={books} />
      

      <section data-reveal className="scroll-reveal border-y border-navy/10 dark:border-ink-dark/10 bg-white/40 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 lang={language} className="font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl">
              {t('important_articles')}
            </h2>
            <Link
              to="/articles"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-saffron"
            >
              {t('view_all_articles')} <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {featured.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {recentAffairs.length > 0 && (
        <section data-reveal className="scroll-reveal mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 lang={language} className="font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl">
                {t('nav_current_affairs')}
              </h2>
            </div>
            <Link to="/current-affairs" className="inline-flex items-center gap-1.5 text-sm font-medium text-saffron">
              {t('view_all_articles')} <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {recentAffairs.map((article) => (
              <CurrentAffairsCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}

      <section data-reveal className="scroll-reveal mx-auto max-w-7xl px-4 sm:px-6">
        <div className="quiz-invitation flex flex-col gap-5 rounded-2xl border border-gold/30 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
              <BookOpenCheck size={22} />
            </div>
            <div>
              <h2 lang={language} className="font-display text-xl font-semibold text-navy dark:text-ink-dark sm:text-2xl">
                {t('quiz_title')}
              </h2>
            </div>
          </div>
          <Link
            to="/quiz"
            lang={language}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-navy-light"
          >
            {t('quiz_start')} <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <FAQSection />
      <section data-reveal className="scroll-reveal mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 dark:bg-white/[0.02]">
        <div className="flex flex-col gap-6 rounded-2xl border border-gold/30 bg-gold/[0.06] p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
            <Lightbulb size={22} />
          </div>
          <div>
            <h3 lang={language} className="font-display text-lg font-semibold text-navy dark:text-ink-dark">
              {t('did_you_know')}
            </h3>
            <p lang={language} className="mt-1.5 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70">
              {pick(fact)}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
