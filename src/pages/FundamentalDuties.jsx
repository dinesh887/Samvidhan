import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { fundamentalDuties } from '../data/duties'

export default function FundamentalDuties() {
  const { t, pick, language } = useLanguage()

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
      <h1 lang={language} className="font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl">
        {t('duties_title')}
      </h1>
      <p lang={language} className="mt-2 max-w-2xl text-ink/60 dark:text-ink-dark/60">
        {t('duties_sub')}
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {fundamentalDuties.map((duty) => (
          <div
            key={duty.number}
            className="flex gap-4 rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-5"
          >
            <span className="font-display shrink-0 text-2xl font-semibold text-saffron/70">
              {String(duty.number).padStart(2, '0')}
            </span>
            <div>
              <p lang={language} className="text-sm font-medium leading-snug text-navy dark:text-ink-dark">
                {pick({ en: duty.en, mr: duty.mr })}
              </p>
              <p lang={language} className="mt-1.5 text-xs leading-relaxed text-ink/55 dark:text-ink-dark/55">
                {pick(duty.explanation)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
