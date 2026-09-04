import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import DynamicIcon from '../components/DynamicIcon'
import { useLanguage } from '../context/LanguageContext'
import { fundamentalRights } from '../data/rights'
import { getArticleById } from '../data/articles'

export default function FundamentalRights() {
  const { t, pick, language } = useLanguage()

  useEffect(() => {
    document.title = 'Fundamental Rights | Samvidhan'
  }, [])

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
      <h1 lang={language} className="font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl">
        {t('rights_title')}
      </h1>
      <p lang={language} className="mt-2 max-w-2xl text-ink/60 dark:text-ink-dark/60">
        {t('rights_sub')}
      </p>

      <div className="mt-10 space-y-4">
        {fundamentalRights.map((right) => {
          const relatedArticles = right.articleIds.map((id) => getArticleById(id)).filter(Boolean)
          return (
            <div
              key={right.id}
              className="flex flex-col gap-4 rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-6 sm:flex-row sm:items-start"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-leaf/10 text-leaf">
                <DynamicIcon name={right.icon} size={20} />
              </div>
              <div>
                <h2 lang={language} className="font-display text-lg font-semibold text-navy dark:text-ink-dark">
                  {pick(right.title)}
                </h2>
                <p lang={language} className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65">
                  {pick(right.explanation)}
                </p>
                {relatedArticles.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {relatedArticles.map((a) => (
                      <Link
                        key={a.id}
                        to={`/article/${a.id}`}
                        className="rounded-full border border-navy/15 dark:border-ink-dark/20 px-3 py-1 text-xs text-navy/70 dark:text-ink-dark/70 hover:border-saffron/50 hover:text-saffron transition-colors"
                      >
                        {a.articleNumber}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
