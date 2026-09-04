import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ScrollText, BookOpen, Sparkles, Lightbulb, Link2, ShieldAlert } from 'lucide-react'
import BookmarkButton from '../components/BookmarkButton'
import { useLanguage } from '../context/LanguageContext'
import { getArticleById, getRelatedArticles } from '../data/articles'
import { getCategoryByKey } from '../data/categories'
import Advertisement from '../components/Advertisement'

export default function ArticleDetails() {
  const { id } = useParams()
  const { t, pick, language } = useLanguage()
  const article = getArticleById(id || '')

  useEffect(() => {
    if (article) {
      document.title = `${article.articleNumber} — ${pick(article.title)} | Samvidhan`
    }
  }, [article, language]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!article) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-display text-2xl font-semibold text-navy dark:text-ink-dark">
          Article not found
        </h1>
        <Link to="/articles" className="mt-4 inline-block text-saffron">
          ← Back to Articles
        </Link>
      </div>
    )
  }

  const category = getCategoryByKey(article.categoryKey)
  const related = getRelatedArticles(article)

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-sm font-medium text-saffron">{article.articleNumber}</span>
          <h1 lang={language} className="font-display mt-1 text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl">
            {pick(article.title)}
          </h1>
          {category && (
            <span lang={language} className="mt-3 inline-block rounded-full bg-leaf/10 px-3 py-1 text-xs font-medium text-leaf dark:text-leaf-light">
              {t('category')}: {pick(category.title)}
            </span>
          )}
        </div>
      </div>

      <div className="mt-6 flex items-start gap-2 rounded-xl border border-gold/30 bg-gold/[0.06] p-4 text-xs leading-relaxed text-ink/70 dark:text-ink-dark/70">
        <ShieldAlert size={16} className="mt-0.5 shrink-0 text-gold" />
        <p lang={language}>{t('verify_notice')}</p>
      </div>
      <Advertisement placement="article" />

      <section className="mt-8">
        <h2 lang={language} className="flex items-center gap-2 font-display text-lg font-semibold text-navy dark:text-ink-dark">
          <ScrollText size={18} className="text-saffron" /> {t('official_text')}
        </h2>
        <p lang={language} className="mt-3 rounded-xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-5 text-sm italic leading-relaxed text-ink/70 dark:text-ink-dark/70">
          {pick(article.officialText)}
        </p>
      </section>

      <section className="mt-8">
        <h2 lang={language} className="flex items-center gap-2 font-display text-lg font-semibold text-navy dark:text-ink-dark">
          <BookOpen size={18} className="text-saffron" />{' '}
          {language === 'mr' ? t('marathi_explanation') : t('simple_explanation')}
        </h2>
        <p lang={language} className="mt-3 text-base leading-relaxed text-ink/80 dark:text-ink-dark/80">
          {pick(article.simpleExplanation)}
        </p>
      </section>

      <section className="mt-8">
        <h2 lang={language} className="flex items-center gap-2 font-display text-lg font-semibold text-navy dark:text-ink-dark">
          <Sparkles size={18} className="text-saffron" /> {t('very_simple')}
        </h2>
        <p lang={language} className="mt-3 rounded-xl bg-navy/[0.04] dark:bg-white/[0.05] p-5 text-base leading-relaxed text-navy dark:text-ink-dark">
          {pick(article.verySimple)}
        </p>
      </section>

      <section className="mt-8">
        <h2 lang={language} className="flex items-center gap-2 font-display text-lg font-semibold text-navy dark:text-ink-dark">
          <Lightbulb size={18} className="text-saffron" /> {t('easy_example')}
        </h2>
        <p lang={language} className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70">
          {pick(article.example)}
        </p>
      </section>

      {related.length > 0 && (
        <section className="mt-10">
          <h2 lang={language} className="flex items-center gap-2 font-display text-lg font-semibold text-navy dark:text-ink-dark">
            <Link2 size={18} className="text-saffron" /> {t('related_articles')}
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {related.map((r) => (
              <Link
                key={r.id}
                to={`/article/${r.id}`}
                className="rounded-full border border-navy/15 dark:border-ink-dark/20 px-4 py-2 text-sm text-navy dark:text-ink-dark hover:border-saffron/50 hover:text-saffron transition-colors"
              >
                {r.articleNumber} · {pick(r.title)}
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-navy/10 dark:border-ink-dark/10 pt-6 text-xs text-ink/45 dark:text-ink-dark/45">
        <span>
          {t('source_label')}: {article.source?.name || '—'}
        </span>
        <BookmarkButton articleId={article.id} />
      </div>
      <Advertisement placement="article" />
    </div>
  )
}
