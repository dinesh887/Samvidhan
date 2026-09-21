import { Link, useParams } from 'react-router-dom'
import {
  ScrollText,
  BookOpen,
  Sparkles,
  Lightbulb,
  Link2,
  ShieldAlert,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
} from 'lucide-react'

import BookmarkButton from '../components/BookmarkButton'
import { useLanguage } from '../context/LanguageContext'
import {
  getArticleById,
  getRelatedArticles,
} from '../data/articles'
import { getCategoryByKey } from '../data/categories'
import Advertisement from '../components/Advertisement'
import PageMeta from '../components/PageMeta'
import { generateArticleSEO } from '../utils/seoUtils'

export default function ArticleDetails() {
  const { id } = useParams()
  const { t, pick, language } = useLanguage()

  const article = getArticleById(id || '')

  if (!article) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <PageMeta
          title="Article Not Found | MySamvidhan"
          description="The requested article could not be found on MySamvidhan."
          robots="noindex, follow"
        />

        <h1 className="font-display text-2xl font-semibold text-navy dark:text-ink-dark">
          Article not found
        </h1>

        <Link
          to="/articles"
          className="mt-4 inline-block text-saffron"
        >
          ← Back to Articles
        </Link>
      </div>
    )
  }

  const category = getCategoryByKey(article.categoryKey)
  const related = getRelatedArticles(article)

  // -----------------------------------------
  // GLOBAL SEO
  // -----------------------------------------

  const seo = generateArticleSEO(article)

  // -----------------------------------------
  // ARTICLE NUMBER
  // -----------------------------------------

  const rawNumber = String(article.articleNumber || '')

  const articleNumber = rawNumber
    .replace(/^article\s*/i, '')
    .replace(/^कलम\s*/i, '')
    .trim()

  const englishArticle = `Article ${articleNumber}`
  const marathiArticle = `कलम ${articleNumber}`

  // -----------------------------------------
  // SEO FRIENDLY FAQ
  // -----------------------------------------

  const englishFAQs = [
    {
      question: `What is ${englishArticle} of the Indian Constitution?`,
      answer:
        article.simpleExplanation?.en ||
        article.verySimple?.en ||
        '',
    },
    {
      question: `What does ${englishArticle} mean?`,
      answer:
        article.verySimple?.en ||
        article.simpleExplanation?.en ||
        '',
    },
    {
      question: `Why is ${englishArticle} important?`,
      answer:
        article.simpleExplanation?.en ||
        article.example?.en ||
        '',
    },
  ]

  const marathiFAQs = [
    {
      question: `${marathiArticle} म्हणजे काय?`,
      answer:
        article.simpleExplanation?.mr ||
        article.verySimple?.mr ||
        '',
    },
    {
      question: `${marathiArticle} चा अर्थ काय आहे?`,
      answer:
        article.verySimple?.mr ||
        article.simpleExplanation?.mr ||
        '',
    },
    {
      question: `${marathiArticle} चे महत्त्व काय आहे?`,
      answer:
        article.simpleExplanation?.mr ||
        article.example?.mr ||
        '',
    },
  ]

  const faqs =
    language === 'mr'
      ? marathiFAQs
      : englishFAQs

  // -----------------------------------------
  // ARTICLE LIST FOR PREVIOUS / NEXT
  // -----------------------------------------

  const articleNumberValue = Number(
    articleNumber.replace(/\D/g, '')
  )

  const allArticles = Array.isArray(
    article.allArticles
  )
    ? article.allArticles
    : []

  let previousArticle = null
  let nextArticle = null

  if (allArticles.length > 0) {
    const sortedArticles = [...allArticles]
      .filter(Boolean)
      .sort((a, b) => {
        const aNum = Number(
          String(a.articleNumber || '')
            .replace(/\D/g, '')
        )

        const bNum = Number(
          String(b.articleNumber || '')
            .replace(/\D/g, '')
        )

        return aNum - bNum
      })

    const currentIndex = sortedArticles.findIndex(
      (item) => item.id === article.id
    )

    if (currentIndex > 0) {
      previousArticle =
        sortedArticles[currentIndex - 1]
    }

    if (
      currentIndex >= 0 &&
      currentIndex < sortedArticles.length - 1
    ) {
      nextArticle =
        sortedArticles[currentIndex + 1]
    }
  }

  return (
    <>
      {/* =========================================
          GLOBAL SEO
      ========================================= */}

      <PageMeta
        title={
          language === 'mr'
            ? seo.titleMr
            : seo.titleEn
        }
        description={
          language === 'mr'
            ? seo.descriptionMr
            : seo.descriptionEn
        }
        canonical={seo.canonicalPath}
        robots={seo.robots}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">

        {/* =========================================
            ARTICLE HEADER
        ========================================= */}

        <header>
          <span className="text-sm font-medium text-saffron">
            {language === 'mr'
              ? marathiArticle
              : englishArticle}
          </span>

          <h1
            lang={language}
            className="font-display mt-1 text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl"
          >
            {pick(article.title)}
          </h1>

          {category && (
            <span
              lang={language}
              className="mt-3 inline-block rounded-full bg-leaf/10 px-3 py-1 text-xs font-medium text-leaf dark:text-leaf-light"
            >
              {t('category')}: {pick(category.title)}
            </span>
          )}
        </header>

        {/* =========================================
            INTRODUCTION
        ========================================= */}

        <section className="mt-8">
          <h2
            lang={language}
            className="font-display text-xl font-semibold text-navy dark:text-ink-dark"
          >
            {language === 'mr'
              ? `${marathiArticle} म्हणजे काय?`
              : `What is ${englishArticle}?`}
          </h2>

          <p
            lang={language}
            className="mt-3 text-base leading-relaxed text-ink/80 dark:text-ink-dark/80"
          >
            {pick(article.simpleExplanation)}
          </p>
        </section>

        {/* =========================================
            VERIFICATION NOTICE
        ========================================= */}

        <div className="mt-6 flex items-start gap-2 rounded-xl border border-gold/30 bg-gold/[0.06] p-4 text-xs leading-relaxed text-ink/70 dark:text-ink-dark/70">

          <ShieldAlert
            size={16}
            className="mt-0.5 shrink-0 text-gold"
          />

          <p lang={language}>
            {t('verify_notice')}
          </p>

        </div>

        <Advertisement placement="article" />

        {/* =========================================
            OFFICIAL TEXT
        ========================================= */}

        <section className="mt-8">

          <h2
            lang={language}
            className="flex items-center gap-2 font-display text-lg font-semibold text-navy dark:text-ink-dark"
          >
            <ScrollText
              size={18}
              className="text-saffron"
            />

            {t('official_text')}
          </h2>

          <p
            lang={language}
            className="mt-3 rounded-xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-5 text-sm italic leading-relaxed text-ink/70 dark:text-ink-dark/70"
          >
            {pick(article.officialText)}
          </p>

        </section>

        {/* =========================================
            SIMPLE EXPLANATION
        ========================================= */}

        <section className="mt-8">

          <h2
            lang={language}
            className="flex items-center gap-2 font-display text-lg font-semibold text-navy dark:text-ink-dark"
          >
            <BookOpen
              size={18}
              className="text-saffron"
            />

            {language === 'mr'
              ? 'सोप्या भाषेत स्पष्टीकरण'
              : `${englishArticle} Explained in Simple Words`}
          </h2>

          <p
            lang={language}
            className="mt-3 text-base leading-relaxed text-ink/80 dark:text-ink-dark/80"
          >
            {pick(article.simpleExplanation)}
          </p>

        </section>

        {/* =========================================
            VERY SIMPLE
        ========================================= */}

        <section className="mt-8">

          <h2
            lang={language}
            className="flex items-center gap-2 font-display text-lg font-semibold text-navy dark:text-ink-dark"
          >
            <Sparkles
              size={18}
              className="text-saffron"
            />

            {language === 'mr'
              ? `${marathiArticle} सोप्या भाषेत`
              : `${englishArticle} in Simple Words`}
          </h2>

          <p
            lang={language}
            className="mt-3 rounded-xl bg-navy/[0.04] dark:bg-white/[0.05] p-5 text-base leading-relaxed text-navy dark:text-ink-dark"
          >
            {pick(article.verySimple)}
          </p>

        </section>

        {/* =========================================
            EXAMPLE
        ========================================= */}

        <section className="mt-8">

          <h2
            lang={language}
            className="flex items-center gap-2 font-display text-lg font-semibold text-navy dark:text-ink-dark"
          >
            <Lightbulb
              size={18}
              className="text-saffron"
            />

            {language === 'mr'
              ? `${marathiArticle} चे उदाहरण`
              : `${englishArticle} Example`}
          </h2>

          <p
            lang={language}
            className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70"
          >
            {pick(article.example)}
          </p>

        </section>

        {/* =========================================
            FAQ
        ========================================= */}

        <section className="mt-10">

          <h2
            lang={language}
            className="flex items-center gap-2 font-display text-xl font-semibold text-navy dark:text-ink-dark"
          >
            <HelpCircle
              size={20}
              className="text-saffron"
            />

            {language === 'mr'
              ? 'वारंवार विचारले जाणारे प्रश्न'
              : 'Frequently Asked Questions'}
          </h2>

          <div className="mt-4 space-y-4">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-5"
              >

                <h3
                  lang={language}
                  className="font-semibold text-navy dark:text-ink-dark"
                >
                  {faq.question}
                </h3>

                {faq.answer && (
                  <p
                    lang={language}
                    className="mt-2 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70"
                  >
                    {faq.answer}
                  </p>
                )}

              </div>
            ))}

          </div>

        </section>

        {/* =========================================
            RELATED ARTICLES
        ========================================= */}

        {related.length > 0 && (
          <section className="mt-10">

            <h2
              lang={language}
              className="flex items-center gap-2 font-display text-lg font-semibold text-navy dark:text-ink-dark"
            >
              <Link2
                size={18}
                className="text-saffron"
              />

              {t('related_articles')}
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

        {/* =========================================
            PREVIOUS / NEXT
        ========================================= */}

        {(previousArticle || nextArticle) && (
          <nav
            aria-label="Article navigation"
            className="mt-10 grid gap-4 sm:grid-cols-2"
          >

            {previousArticle ? (
              <Link
                to={`/article/${previousArticle.id}`}
                className="rounded-xl border border-navy/10 dark:border-ink-dark/10 p-4 transition hover:border-saffron/50"
              >
                <div className="flex items-center gap-2 text-xs text-ink/50 dark:text-ink-dark/50">
                  <ChevronLeft size={16} />

                  {language === 'mr'
                    ? 'मागील कलम'
                    : 'Previous Article'}
                </div>

                <div className="mt-1 font-medium text-navy dark:text-ink-dark">
                  {previousArticle.articleNumber}
                  {' – '}
                  {pick(previousArticle.title)}
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextArticle && (
              <Link
                to={`/article/${nextArticle.id}`}
                className="rounded-xl border border-navy/10 dark:border-ink-dark/10 p-4 text-right transition hover:border-saffron/50"
              >
                <div className="flex items-center justify-end gap-2 text-xs text-ink/50 dark:text-ink-dark/50">

                  {language === 'mr'
                    ? 'पुढील कलम'
                    : 'Next Article'}

                  <ChevronRight size={16} />

                </div>

                <div className="mt-1 font-medium text-navy dark:text-ink-dark">
                  {nextArticle.articleNumber}
                  {' – '}
                  {pick(nextArticle.title)}
                </div>

              </Link>
            )}

          </nav>
        )}

        {/* =========================================
            SOURCE + BOOKMARK
        ========================================= */}

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-navy/10 dark:border-ink-dark/10 pt-6 text-xs text-ink/45 dark:text-ink-dark/45">

          <span>
            {t('source_label')}:{' '}
            {article.source?.name || '—'}
          </span>

          <BookmarkButton
            articleId={article.id}
          />

        </div>

        <Advertisement placement="article" />

      </div>
    </>
  )
}