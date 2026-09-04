import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const popularKeys = ['Article 14', 'Article 19', 'Article 21', 'Article 32']

export default function SearchBar({ large = false }) {
  const { t, language } = useLanguage()
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    const q = query.trim()
    if (q) navigate(`/articles?q=${encodeURIComponent(q)}`)
  }

  const runPopular = (term) => {
    navigate(`/articles?q=${encodeURIComponent(term)}`)
  }

  return (
    <div className="w-full">
      <form
        onSubmit={submit}
        className={`flex items-stretch gap-2 rounded-2xl border border-navy/15 dark:border-ink-dark/20 bg-white dark:bg-white/5 p-1.5 shadow-sm ${
          large ? 'shadow-navy/5' : ''
        }`}
      >
        <div className="flex flex-1 items-center gap-2 pl-3">
          <Search size={18} className="shrink-0 text-navy/40 dark:text-ink-dark/40" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('search_placeholder')}
            lang={language}
            className="w-full bg-transparent py-3 text-sm sm:text-base text-ink dark:text-ink-dark placeholder:text-ink/40 dark:placeholder:text-ink-dark/40 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="shrink-0 rounded-xl bg-navy dark:bg-saffron px-5 sm:px-7 text-sm sm:text-base font-medium text-paper dark:text-ink transition-colors hover:bg-navy-light dark:hover:bg-saffron-light"
        >
          {t('search_button')}
        </button>
      </form>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span lang={language} className="text-xs text-ink/50 dark:text-ink-dark/50">
          {t('popular_searches')}:
        </span>
        {popularKeys.map((term) => (
          <button
            key={term}
            type="button"
            onClick={() => runPopular(term)}
            className="rounded-full border border-navy/15 dark:border-ink-dark/20 px-3 py-1 text-xs text-navy/70 dark:text-ink-dark/70 hover:border-saffron/50 hover:text-saffron transition-colors"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  )
}
