import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { getCategoryByKey } from '../data/categories'
import BookmarkButton from './BookmarkButton'

export default function ArticleCard({ article }) {
  const { pick, t, language } = useLanguage()
  const category = getCategoryByKey(article.categoryKey)

  const numeral = article.id.replace(/[a-z]/gi, (match) =>
    match.toUpperCase()
  )

  const articleTitle = pick(article.title)
  const articleNumber = article.articleNumber || `Article ${numeral}`

  return (
    <article
      className="group flex rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] overflow-hidden transition-colors hover:border-saffron/40"
    >
      {/* Article number */}
      <div className="flex w-16 sm:w-20 shrink-0 flex-col items-center justify-center border-r border-navy/10 dark:border-ink-dark/10 bg-navy/[0.03] dark:bg-white/[0.02] px-2 py-4">
        <span className="text-[10px] tracking-wide text-ink/40 dark:text-ink-dark/40">
          Art.
        </span>

        <span className="font-display text-xl font-semibold text-navy dark:text-saffron-light">
          {numeral}
        </span>
      </div>

      {/* Article content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">

            {/* Crawlable Article title link */}
            <h3
              lang={language}
              className="font-display text-base font-semibold text-navy dark:text-ink-dark sm:text-lg"
            >
              <Link
                to={`/article/${article.id}`}
                aria-label={`${articleNumber}: ${articleTitle}`}
                className="transition-colors hover:text-saffron focus:outline-none focus:text-saffron"
              >
                {articleTitle}
              </Link>
            </h3>

            {/* Article number */}
            <Link
              to={`/article/${article.id}`}
              lang={language}
              className="mt-1 inline-block text-xs text-saffron hover:underline"
            >
              {articleNumber}
            </Link>

            {/* Category */}
            {category && (
              <span
                lang={language}
                className="ml-2 mt-1 inline-block text-xs text-leaf dark:text-leaf-light"
              >
                {pick(category.title)}
              </span>
            )}
          </div>

          <BookmarkButton
            articleId={article.id}
            size="small"
          />
        </div>

        {/* Short description */}
        <p
          lang={language}
          className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/60 dark:text-ink-dark/60"
        >
          {pick(article.simpleExplanation)}
        </p>

        {/* Primary internal link */}
        <Link
          to={`/article/${article.id}`}
          aria-label={`${t('view_details')}: ${articleTitle}`}
          className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium text-saffron transition-colors hover:text-saffron/80 hover:underline focus:outline-none focus:underline"
        >
          {t('view_details')}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}