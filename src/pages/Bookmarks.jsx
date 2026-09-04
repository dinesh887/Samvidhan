import { useEffect } from 'react'
import { Star } from 'lucide-react'
import ArticleCard from '../components/ArticleCard'
import { useLanguage } from '../context/LanguageContext'
import { useBookmarks } from '../context/BookmarkContext'
import { articles } from '../data/articles'

export default function Bookmarks() {
  const { t, language } = useLanguage()
  const { bookmarks } = useBookmarks()

  useEffect(() => {
    document.title = 'My Saved Articles | Samvidhan'
  }, [])

  const saved = articles.filter((a) => bookmarks.includes(a.id))

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
      <h1 lang={language} className="font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl">
        {t('bookmarks_title')}
      </h1>

      {saved.length === 0 ? (
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy/5 dark:bg-white/10 text-navy/30 dark:text-ink-dark/30">
            <Star size={24} />
          </div>
          <p lang={language} className="mt-4 text-ink/50 dark:text-ink-dark/50">
            {t('bookmarks_empty')}
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {saved.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  )
}
