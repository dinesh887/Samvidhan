import { useEffect } from 'react'
import ChakraMark from '../components/ChakraMark'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { t, language } = useLanguage()

  useEffect(() => {
    document.title = `${t('contact_title')} | Samvidhan`
  }, [t, language])

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <ChakraMark className="h-10 w-10 text-navy dark:text-saffron" />
      <h1 lang={language} className="font-display mt-6 text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl">
        {t('contact_title')}
      </h1>
      <p lang={language} className="mt-5 text-base leading-relaxed text-ink/70 dark:text-ink-dark/70">
        {t('contact_intro')}
      </p>
      <p lang={language} className="mt-4 text-base leading-relaxed text-ink/70 dark:text-ink-dark/70">
        {t('contact_intro_detail')}
      </p>

      <section className="mt-10 rounded-2xl border border-navy/10 bg-white/60 p-6 dark:border-ink-dark/10 dark:bg-white/[0.04]">
        <h2 lang={language} className="font-display text-lg font-semibold text-navy dark:text-ink-dark">
          {t('contact_get_in_touch')}
        </h2>
        <p className="mt-3 text-sm text-ink/65 dark:text-ink-dark/65">
          <span lang={language}>{t('about_email')}</span>{' '}
          <a href="mailto:contact@yourdomain.com" className="text-saffron hover:underline">
            contact@yourdomain.com
          </a>
        </p>
        <p lang={language} className="mt-5 text-sm text-ink/65 dark:text-ink-dark/65">
          {t('contact_can_contact')}
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65">
          {Array.from({ length: 6 }, (_, index) => <li key={index} lang={language}>{t(`contact_item_${index + 1}`)}</li>)}
        </ul>
        <p lang={language} className="mt-5 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65">
          {t('contact_response')}
        </p>
      </section>

      <section className="mt-10 rounded-2xl border border-gold/30 bg-gold/[0.06] p-6">
        <h2 lang={language} className="font-display text-lg font-semibold text-navy dark:text-ink-dark">
          {t('contact_corrections')}
        </h2>
        <p lang={language} className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70">
          {t('contact_corrections_detail')}
        </p>
        <p lang={language} className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70">
          {t('contact_corrections_request')}
        </p>
        <p lang={language} className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70">
          {t('contact_corrections_thanks')}
        </p>
      </section>

      <p lang={language} className="mt-8 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65">
        {t('contact_thanks')}
      </p>
    </div>
  )
}