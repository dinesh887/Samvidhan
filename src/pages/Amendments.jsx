import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { amendments } from '../data/amendments'
import OfficialSourceLink from '../components/OfficialSourceLink'

export default function Amendments() {
  const { t, pick, language } = useLanguage()

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
      <h1 lang={language} className="font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl">
        {t('amendments_title')}
      </h1>
      <p lang={language} className="mt-2 max-w-2xl text-ink/60 dark:text-ink-dark/60">
        {t('amendments_sub')}
      </p>
      <p lang={language} className="mt-5 max-w-3xl text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70">
        {language === 'mr'
          ? 'खाली काही निवडक घटनादुरुस्त्यांचा परिचय दिला आहे; ही संपूर्ण यादी नाही. येथे दिलेली संक्षिप्त माहिती प्राथमिक अभ्यासासाठी असून, अचूक कायदेशीर मजकूर आणि परिणामांसाठी अधिकृत दुरुस्ती अधिनियम तपासा.'
          : 'This page introduces a selection of constitutional amendments; it is not a complete list. These brief summaries are for initial study. Consult the official Amendment Acts for authoritative text and legal effect.'}
      </p>

      <div className="mt-10 space-y-4">
        {amendments.map((a) => (
          <div
            key={a.id}
            className="flex flex-col gap-3 rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-6 sm:flex-row sm:items-start sm:gap-6"
          >
            <div className="flex shrink-0 items-baseline gap-2 sm:w-32 sm:flex-col sm:items-start sm:gap-0">
              <span className="font-display text-2xl font-semibold text-navy dark:text-saffron-light">
                {a.year}
              </span>
              <span className="text-xs text-ink/50 dark:text-ink-dark/50">{a.number}</span>
            </div>
            <div>
              <h2 lang={language} className="text-base font-semibold text-navy dark:text-ink-dark">
                {pick(a.title)}
              </h2>
              <p lang={language} className="mt-1.5 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65">
                {pick(a.explanation)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <OfficialSourceLink />
    </div>
  )
}
