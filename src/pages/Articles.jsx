import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowUpDown, X, BookOpen } from 'lucide-react'
import ArticleCard from '../components/ArticleCard'
import PageMeta from '../components/PageMeta'
import { useLanguage } from '../context/LanguageContext'
import { articles } from '../data/articles'
import { categories } from '../data/categories'
import {
  searchArticles,
  filterByCategory,
  sortArticles,
} from '../utils/searchArticles'
import Advertisement from '../components/Advertisement'

export default function Articles() {
  const { t, pick, language } = useLanguage()
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [category, setCategory] = useState(
    searchParams.get('category') || 'all'
  )
  const [sort, setSort] = useState('asc')

  useEffect(() => {
    setQuery(searchParams.get('q') || '')
    setCategory(searchParams.get('category') || 'all')
  }, [searchParams])

  const results = useMemo(() => {
    let list = searchArticles(query, articles)
    list = filterByCategory(list, category)
    list = sortArticles(list, sort)
    return list
  }, [query, category, sort])

  const updateParams = (next) => {
    const params = new URLSearchParams(searchParams)

    Object.entries(next).forEach(([key, value]) => {
      if (value && value !== 'all') {
        params.set(key, value)
      } else {
        params.delete(key)
      }
    })

    setSearchParams(params)
  }

  const isFiltered = Boolean(query || category !== 'all')

  const pageTitle =
    language === 'mr'
      ? 'भारतीय संविधानातील सर्व कलमे | MySamvidhan'
      : 'Indian Constitution Articles | MySamvidhan'

  const pageDescription =
    language === 'mr'
      ? 'भारतीय संविधानातील कलमे सोप्या मराठी आणि इंग्रजी भाषेत जाणून घ्या. मूलभूत अधिकार, नागरिकत्व, संसद, न्यायपालिका आणि इतर घटनात्मक तरतुदी समजून घ्या.'
      : 'Explore Articles of the Indian Constitution in simple English and Marathi. Learn about Fundamental Rights, citizenship, Parliament, judiciary and other constitutional provisions.'

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">

      {/* SEO */}
      <PageMeta
        title={pageTitle}
        description={pageDescription}
        canonical="/articles"
        robots={isFiltered ? 'noindex, follow' : 'index, follow'}
      />

      {/* Page heading */}
      <header>
        <h1
          lang={language}
          className="font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl"
        >
          {t('articles_page_title')}
        </h1>

        <p
          lang={language}
          className="mt-2 max-w-3xl text-ink/60 dark:text-ink-dark/60"
        >
          {t('articles_page_sub')}
        </p>

        {/* SEO-friendly introduction */}
        <div
          lang={language}
          className="mt-5 max-w-4xl text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70"
        >
          {language === 'mr' ? (
            <p>
              भारतीय संविधानातील विविध कलमे नागरिकांचे अधिकार, कर्तव्ये,
              शासनव्यवस्था आणि देशाच्या घटनात्मक रचनेशी संबंधित महत्त्वाच्या
              तरतुदी स्पष्ट करतात. MySamvidhan वर ही कलमे सोप्या मराठी आणि
              इंग्रजी भाषेत समजून घेता येतात.
            </p>
          ) : (
            <p>
              The Articles of the Indian Constitution define important
              provisions relating to fundamental rights, citizenship,
              government, Parliament, judiciary and the constitutional
              framework of India. Explore these Articles in simple English
              and Marathi on MySamvidhan.
            </p>
          )}
        </div>
      </header>

      {/* Search + filters */}
      <div className="mt-8 flex flex-col gap-4">
        <div className="flex gap-2">
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              updateParams({ q: e.target.value })
            }}
            placeholder={t('search_placeholder')}
            lang={language}
            className="flex-1 rounded-full border border-navy/15 dark:border-ink-dark/20 bg-white dark:bg-white/5 px-4 py-2.5 text-sm text-ink dark:text-ink-dark placeholder:text-ink/40 dark:placeholder:text-ink-dark/40 focus:outline-none"
          />

          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('')
                updateParams({ q: '' })
              }}
              className="flex items-center gap-1 rounded-full border border-navy/15 dark:border-ink-dark/20 px-3 text-sm text-ink/60 dark:text-ink-dark/60"
            >
              <X size={14} />
              {t('clear_search')}
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">

          {/* All */}
          <button
            type="button"
            onClick={() => {
              setCategory('all')
              updateParams({ category: 'all' })
            }}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
              category === 'all'
                ? 'border-navy bg-navy text-paper dark:border-saffron dark:bg-saffron dark:text-ink'
                : 'border-navy/15 dark:border-ink-dark/20 text-navy/70 dark:text-ink-dark/70'
            }`}
          >
            {t('filter_all')}
          </button>

          {/* Categories */}
          {categories.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => {
                setCategory(c.key)
                updateParams({ category: c.key })
              }}
              lang={language}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                category === c.key
                  ? 'border-navy bg-navy text-paper dark:border-saffron dark:bg-saffron dark:text-ink'
                  : 'border-navy/15 dark:border-ink-dark/20 text-navy/70 dark:text-ink-dark/70'
              }`}
            >
              {pick(c.title)}
            </button>
          ))}

          {/* Sort */}
          <button
            type="button"
            onClick={() =>
              setSort((current) =>
                current === 'asc' ? 'desc' : 'asc'
              )
            }
            className="ml-auto flex items-center gap-1.5 rounded-full border border-navy/15 dark:border-ink-dark/20 px-3.5 py-1.5 text-xs font-medium text-navy/70 dark:text-ink-dark/70"
          >
            <ArrowUpDown size={13} />
            {sort === 'asc'
              ? t('sort_asc')
              : t('sort_desc')}
          </button>
        </div>
      </div>

      {/* Search result count */}
      {query && (
        <p
          lang={language}
          className="mt-6 text-sm text-ink/50 dark:text-ink-dark/50"
        >
          {t('search_results_for')} "{query}" — {results.length}
        </p>
      )}

      {/* Article grid */}
      {results.length > 0 && (
        <section
          aria-label={
            language === 'mr'
              ? 'भारतीय संविधानाची कलमे'
              : 'Articles of the Indian Constitution'
          }
          className="mt-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {results.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
              />
            ))}
          </div>
        </section>
      )}

      {results.length > 3 && (
        <Advertisement placement="article" />
      )}

      {/* Browse all Articles - additional crawlable links */}
      {!isFiltered && results.length > 0 && (
        <section className="mt-12 border-t border-navy/10 dark:border-ink-dark/10 pt-8">
          <div className="flex items-center gap-2">
            <BookOpen
              size={18}
              className="text-saffron"
            />

            <h2
              lang={language}
              className="font-display text-xl font-semibold text-navy dark:text-ink-dark"
            >
              {language === 'mr'
                ? 'संविधानाची कलमे'
                : 'Articles of the Indian Constitution'}
            </h2>
          </div>

          <p
            lang={language}
            className="mt-2 text-sm text-ink/60 dark:text-ink-dark/60"
          >
            {language === 'mr'
              ? 'खालील कलमांवर क्लिक करून त्यांचे सविस्तर स्पष्टीकरण वाचा.'
              : 'Open an Article to read its detailed explanation in English and Marathi.'}
          </p>

          <nav
            aria-label={
              language === 'mr'
                ? 'संविधानातील कलमांचे दुवे'
                : 'Constitution Article links'
            }
            className="mt-5 flex flex-wrap gap-2"
          >
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/article/${article.id}`}
                className="rounded-full border border-navy/10 dark:border-ink-dark/15 px-3 py-1.5 text-xs text-navy/75 dark:text-ink-dark/75 transition-colors hover:border-saffron/50 hover:text-saffron"
              >
                {article.articleNumber}
              </Link>
            ))}
          </nav>
        </section>
      )}

      {/* No results */}
      {results.length === 0 && (
        <p
          lang={language}
          className="mt-16 text-center text-ink/50 dark:text-ink-dark/50"
        >
          {t('no_results')}
        </p>
      )}
    </div>
  )
}