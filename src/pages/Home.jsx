import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Lightbulb, ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import CategoryCard from '../components/CategoryCard'
import ArticleCard from '../components/ArticleCard'
import { useLanguage } from '../context/LanguageContext'
import { exploreCards } from '../data/categories'
import { articles } from '../data/articles'
import { getTodaysFact } from '../data/facts'
import Advertisement from '../components/Advertisement'
import RecommendedBooks from '../components/RecommendedBooks'
import { books } from '../data/books'

const FEATURED_IDS = ['14', '19', '21', '21a', '32']

export default function Home() {
  const { t, pick, language } = useLanguage()
  const fact = getTodaysFact()

  const featured = FEATURED_IDS.map((id) => articles.find((a) => a.id === id)).filter(Boolean)

  return (
    <div>
      <Hero />
      <Advertisement placement="banner" />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-2xl">
          <h2 lang={language} className="font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl">
            {t('explore_heading')}
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {exploreCards.map((card) => (
            <CategoryCard key={card.path} {...card} />
          ))}
        </div>
      </section>
      <RecommendedBooks books={books} />

      <section className="border-y border-navy/10 dark:border-ink-dark/10 bg-white/40 dark:bg-white/[0.02]">
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

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
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
