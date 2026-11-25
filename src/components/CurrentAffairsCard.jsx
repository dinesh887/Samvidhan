import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function CurrentAffairsCard({ article }) {
  const { language, pick, t } = useLanguage()
  const title = pick(article.title)
  const category = language === 'mr' ? article.categoryMr : article.category

  return (
    <article className="group flex flex-col rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-5 transition-colors hover:border-saffron/40">
      <div className="flex items-center justify-between gap-3 text-xs text-ink/50 dark:text-ink-dark/50">
        <span className="text-leaf dark:text-leaf-light">{category}</span>
        <time dateTime={article.date}>
          {new Date(`${article.date}T00:00:00`).toLocaleDateString(
            language === 'mr' ? 'mr-IN' : 'en-IN',
            { day: 'numeric', month: 'short', year: 'numeric' }
          )}
        </time>
      </div>

      <h2
        lang={language}
        className="mt-3 font-display text-lg font-semibold text-navy dark:text-ink-dark"
      >
        <Link
          to={`/current-affairs/${article.slug}`}
          className="transition-colors hover:text-saffron focus:outline-none focus:text-saffron"
        >
          {title}
        </Link>
      </h2>

      <p
        lang={language}
        className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/60 dark:text-ink-dark/60"
      >
        {pick(article.shortDescription)}
      </p>

      <Link
        to={`/current-affairs/${article.slug}`}
        aria-label={`${t('current_affairs_read_more')}: ${title}`}
        className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium text-saffron transition-colors hover:text-saffron/80 hover:underline focus:outline-none focus:underline"
      >
        {t('current_affairs_read_more')}
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  )
}
