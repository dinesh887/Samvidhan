import { useLanguage } from '../context/LanguageContext'
import { disclaimerContent } from '../data/disclaimerContent'

export default function Disclaimer() {
  const { language, pick } = useLanguage()

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 lang={language} className="font-display text-3xl font-semibold text-navy sm:text-4xl">
        {pick(disclaimerContent.title)}
      </h1>
      <div className="mt-6 space-y-4">
        {disclaimerContent.introduction.map((paragraph, index) => (
          <p
            key={index}
            lang={language}
            className="text-base leading-relaxed text-ink/70 dark:text-ink-dark/70"
          >
            {pick(paragraph)}
          </p>
        ))}
      </div>
      <div className="mt-10 space-y-8">
        {disclaimerContent.sections.map((section, index) => (
          <section key={section.title.en} aria-labelledby={`disclaimer-section-${index + 1}`}>
            <h2
              id={`disclaimer-section-${index + 1}`}
              lang={language}
              className="font-display text-xl font-semibold text-navy dark:text-ink-dark"
            >
              {pick(section.title)}
            </h2>
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p
                key={paragraphIndex}
                lang={language}
                className="mt-3 break-words text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70 sm:text-base"
              >
                {pick(paragraph)}
              </p>
            ))}
            {section.contact && (
              <p className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70 sm:text-base">
                <span lang={language}>{language === 'mr' ? 'ईमेल:' : 'Email:'}</span>{' '}
                <a
                  href={`mailto:${disclaimerContent.email}`}
                  className="break-all text-saffron underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                >
                  {disclaimerContent.email}
                </a>
              </p>
            )}
          </section>
        ))}
      </div>
    </main>
  )
}