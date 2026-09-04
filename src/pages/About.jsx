import { useEffect } from 'react'
import ChakraMark from '../components/ChakraMark'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t, language } = useLanguage()

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20">
      <ChakraMark className="h-10 w-10 text-navy dark:text-saffron" />
      <h1 lang={language} className="font-display mt-6 text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl">
        {t('about_title')}
      </h1>
      <p lang={language} className="mt-5 text-base leading-relaxed text-ink/70 dark:text-ink-dark/70">
        {t('about_intro')}
      </p>
      <p lang={language} className="mt-4 text-base leading-relaxed text-ink/70 dark:text-ink-dark/70">
        {t('about_goal')}
      </p>

      <div className="mt-10 rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-6">
        <h2 lang={language} className="font-display text-lg font-semibold text-navy dark:text-ink-dark">
          {t('about_mission_title')}
        </h2>
        <p lang={language} className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65">{t('about_mission_detail')}</p>
        <p lang={language} className="mt-3 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65">{t('about_mission_detail_2')}</p>
      </div>

      <div className="mt-10 rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-6">
        <h2 lang={language} className="font-display text-lg font-semibold text-navy dark:text-ink-dark">{t('about_find_title')}</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65">
          {Array.from({ length: 9 }, (_, index) => <li key={index} lang={language}>{t(`about_find_${index + 1}`)}</li>)}
        </ul>
      </div>

      <div className="mt-10 rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-6">
        <h2 lang={language} className="font-display text-lg font-semibold text-navy dark:text-ink-dark">{t('about_commitment_title')}</h2>
        <p lang={language} className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65">{t('about_commitment')}</p>
        <p lang={language} className="mt-3 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65">{t('about_independent')}</p>
        <p lang={language} className="mt-3 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65">{t('about_contact')}</p>
        <p className="mt-3 text-sm text-ink/65 dark:text-ink-dark/65"><span lang={language}>{t('about_email')}</span> <a href="mailto:info@mysamvidhan.in" className="text-saffron hover:underline">info@mysamvidhan.in</a></p>
        <p lang={language} className="mt-5 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65">{t('about_thanks')}</p>
        <p lang={language} className="mt-2 font-display text-base font-semibold text-navy dark:text-ink-dark">{t('about_tagline')}</p>
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
