import { useLanguage } from '../context/LanguageContext'
import { termsConditions } from '../data/termsConditions'

export default function Terms() {
  const { language, pick } = useLanguage()

  return (
    <main className="reading-page mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 lang={language} className="font-display text-3xl font-semibold text-navy sm:text-4xl">
        {pick(termsConditions.title)}
      </h1>
      <p className="mt-4 text-sm text-ink/60">
        <span lang={language}>{pick(termsConditions.lastUpdated)}</span>{' '}
        <time dateTime="2026-10-25" lang={language}>{pick(termsConditions.date)}</time>
      </p>
      <p lang={language} className="mt-6 text-base leading-relaxed text-ink/75">
        {pick(termsConditions.intro)}
      </p>
      <div className="mt-10 divide-y divide-navy/10">
        {termsConditions.sections.map((section, index) => (
          <section
            key={section.title.en}
            aria-labelledby={`terms-section-${index + 1}`}
            className="py-7 first:pt-0 last:pb-0"
          >
            <h2
              id={`terms-section-${index + 1}`}
              lang={language}
              className="font-display text-xl font-semibold leading-snug text-navy sm:text-2xl"
            >
              {pick(section.title)}
            </h2>
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p
                key={paragraphIndex}
                lang={language}
                className="mt-3 break-words text-sm leading-7 text-ink/75 sm:text-base"
              >
                {pick(paragraph)}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-7 text-ink/75 sm:text-base">
                {section.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} lang={language} className="break-words">
                    {pick(bullet)}
                  </li>
                ))}
              </ul>
            )}
            {section.closing?.map((paragraph, paragraphIndex) => (
              <p
                key={paragraphIndex}
                lang={language}
                className="mt-3 break-words text-sm leading-7 text-ink/75 sm:text-base"
              >
                {pick(paragraph)}
              </p>
            ))}
            {section.contact && (
              <p className="mt-3 text-sm leading-7 text-ink/75 sm:text-base">
                <span lang={language}>{language === 'mr' ? 'ईमेल:' : 'Email:'}</span>{' '}
                <a
                  href={`mailto:${termsConditions.email}`}
                  className="break-all font-medium text-saffron underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                >
                  {termsConditions.email}
                </a>
              </p>
            )}
          </section>
        ))}
      </div>
    </main>
  )
}