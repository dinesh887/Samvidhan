import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { fundamentalDuties } from '../data/duties'
import OfficialSourceLink from '../components/OfficialSourceLink'

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
      <p lang={language} className="mt-5 max-w-3xl text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70">
        {language === 'mr'
          ? 'मूलभूत कर्तव्ये संविधानाच्या भाग IV-अ मधील कलम ५१अ मध्ये नमूद आहेत. खालील मांडणी अभ्यासासाठी सोप्या शब्दांत आहे; ती अधिकृत मजकुराची शब्दशः प्रत नाही. भाग IV-अ ४२व्या घटनादुरुस्तीने समाविष्ट झाला; शिक्षणाच्या संधीशी संबंधित खंड (k) ८६व्या घटनादुरुस्तीने जोडला.'
          : 'Fundamental Duties are set out in Article 51A in Part IV-A of the Constitution. The wording below is a simplified study aid, not a verbatim reproduction. Part IV-A was added by the 42nd Amendment; clause (k), concerning educational opportunities, was added by the 86th Amendment.'}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
      <OfficialSourceLink />
    </div>
  )
}
