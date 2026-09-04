import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowUpDown, X } from 'lucide-react'
import ArticleCard from '../components/ArticleCard'
import { useLanguage } from '../context/LanguageContext'
import { articles } from '../data/articles'
import { categories } from '../data/categories'
import { searchArticles, filterByCategory, sortArticles } from '../utils/searchArticles'
import Advertisement from '../components/Advertisement'

export default function Articles() {
  const { t, pick, language } = useLanguage()
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [category, setCategory] = useState(searchParams.get('category') || 'all')
  const [sort, setSort] = useState('asc')

  useEffect(() => {
    document.title = 'Constitutional Articles | Samvidhan'
  }, [])

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
    Object.entries(next).forEach(([k, v]) => {
      if (v && v !== 'all') params.set(k, v)
      else params.delete(k)
    })
    setSearchParams(params)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
      <h1 lang={language} className="font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl">
        {t('articles_page_title')}
      </h1>
      <p lang={language} className="mt-2 max-w-2xl text-ink/60 dark:text-ink-dark/60">
        {t('articles_page_sub')}
      </p>

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
              <X size={14} /> {t('clear_search')}
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
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

          <button
            type="button"
            onClick={() => setSort((s) => (s === 'asc' ? 'desc' : 'asc'))}
            className="ml-auto flex items-center gap-1.5 rounded-full border border-navy/15 dark:border-ink-dark/20 px-3.5 py-1.5 text-xs font-medium text-navy/70 dark:text-ink-dark/70"
          >
            <ArrowUpDown size={13} />
            {sort === 'asc' ? t('sort_asc') : t('sort_desc')}
          </button>
        </div>
      </div>

      {query && (
        <p lang={language} className="mt-6 text-sm text-ink/50 dark:text-ink-dark/50">
          {t('search_results_for')} "{query}" — {results.length}
        </p>
      )}

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {results.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      {results.length > 3 && <Advertisement placement="article" />}

      {results.length === 0 && (
        <p lang={language} className="mt-16 text-center text-ink/50 dark:text-ink-dark/50">
          {t('no_results')}
        </p>
      )}
    </div>
  )
}
