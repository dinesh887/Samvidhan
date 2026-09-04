import { useEffect } from 'react'
import ChakraMark from '../components/ChakraMark'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t, language } = useLanguage()

  useEffect(() => {
    document.title = 'About Samvidhan'
  }, [])

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20">
      <ChakraMark className="h-10 w-10 text-navy dark:text-saffron" />
      <h1 lang={language} className="font-display mt-6 text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl">
        {t('about_title')}
      </h1>
      <p lang={language} className="mt-5 text-base leading-relaxed text-ink/70 dark:text-ink-dark/70">
        {t('about_body')}
      </p>

      <div className="mt-10 rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-6">
        <h2 lang={language} className="font-display text-lg font-semibold text-navy dark:text-ink-dark">
          {t('about_mission_title')}
        </h2>
        <p lang={language} className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65">
          {t('about_mission_body')}
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-gold/30 bg-gold/[0.06] p-6">
        <h2 lang={language} className="text-sm font-semibold text-navy dark:text-ink-dark">
          {t('footer_disclaimer_title')}
        </h2>
        <p lang={language} className="mt-2 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70">
          {t('footer_disclaimer')}
        </p>
      </div>
    </div>
  )
}
