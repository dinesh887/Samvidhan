import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { getCategoryByKey } from '../data/categories'
import BookmarkButton from './BookmarkButton'

export default function ArticleCard({ article }) {
  const { pick, t, language } = useLanguage()
  const category = getCategoryByKey(article.categoryKey)
  const numeral = article.id.replace(/[a-z]/gi, (m) => m.toUpperCase())

  return (
    <div className="group flex rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] overflow-hidden transition-colors hover:border-saffron/40">
      <div className="flex w-16 sm:w-20 shrink-0 flex-col items-center justify-center border-r border-navy/10 dark:border-ink-dark/10 bg-navy/[0.03] dark:bg-white/[0.02] px-2 py-4">
        <span className="text-[10px] tracking-wide text-ink/40 dark:text-ink-dark/40">Art.</span>
        <span className="font-display text-xl font-semibold text-navy dark:text-saffron-light">
          {numeral}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 lang={language} className="font-display text-base font-semibold text-navy dark:text-ink-dark sm:text-lg">
              {pick(article.title)}
            </h3>
            {category && (
              <span lang={language} className="mt-1 inline-block text-xs text-leaf dark:text-leaf-light">
                {pick(category.title)}
              </span>
            )}
          </div>
          <BookmarkButton articleId={article.id} size="small" />
        </div>

        <p lang={language} className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/60 dark:text-ink-dark/60">
          {pick(article.simpleExplanation)}
        </p>

        <Link
          to={`/article/${article.id}`}
          className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium text-saffron"
        >
          {t('view_details')} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  )
}
