import { Star } from 'lucide-react'
import { useBookmarks } from '../context/BookmarkContext'
import { useLanguage } from '../context/LanguageContext'

export default function BookmarkButton({ articleId, size = 'default' }) {
  const { isBookmarked, toggleBookmark } = useBookmarks()
  const { t } = useLanguage()
  const saved = isBookmarked(articleId)

  const base =
    size === 'small'
      ? 'h-8 w-8'
      : 'gap-2 px-4 py-2 rounded-full'

  if (size === 'small') {
    return (
      <button
        type="button"
        onClick={() => toggleBookmark(articleId)}
        aria-pressed={saved}
        aria-label={saved ? t('saved') : t('save_article')}
        className={`flex items-center justify-center ${base} rounded-full border transition-colors ${
          saved
            ? 'border-saffron bg-saffron/10 text-saffron'
            : 'border-navy/15 dark:border-ink-dark/20 text-navy/60 dark:text-ink-dark/60 hover:text-saffron hover:border-saffron/40'
        }`}
      >
        <Star size={16} fill={saved ? 'currentColor' : 'none'} />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={() => toggleBookmark(articleId)}
      aria-pressed={saved}
      className={`inline-flex items-center ${base} font-medium text-sm border transition-colors ${
        saved
          ? 'border-saffron bg-saffron/10 text-saffron'
          : 'border-navy/20 dark:border-ink-dark/25 text-navy dark:text-ink-dark hover:border-saffron/50 hover:text-saffron'
      }`}
    >
      <Star size={16} fill={saved ? 'currentColor' : 'none'} />
      {saved ? t('saved') : t('save_article')}
    </button>
  )
}
