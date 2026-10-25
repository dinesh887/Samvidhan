import ChakraMark from '../components/ChakraMark'
import { useLanguage } from '../context/LanguageContext'
import { aboutContent } from '../data/aboutContent'

export default function About() {
  const { language, pick } = useLanguage()

  return (
    <main className="reading-page mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <ChakraMark className="h-10 w-10 text-navy dark:text-saffron" />
      <h1 lang={language} className="font-display mt-6 text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl">
        {pick(aboutContent.title)}
      </h1>

      <div className="mt-5 space-y-4">
        {aboutContent.sections[0].paragraphs.map((paragraph, index) => (
          <p key={index} lang={language} className="text-base leading-relaxed text-ink/70 dark:text-ink-dark/70">
            {pick(paragraph)}
          </p>
        ))}
      </div>

      <div className="mt-10 space-y-10">
        {aboutContent.sections.slice(1).map((section) => (
          <section
            key={section.id}
            aria-labelledby={`about-${section.id}`}
            className="rounded-2xl border border-navy/10 bg-white/60 p-6 dark:border-ink-dark/10 dark:bg-white/[0.04]"
          >
            <h2
              id={`about-${section.id}`}
              lang={language}
              className="font-display text-lg font-semibold text-navy dark:text-ink-dark sm:text-xl"
            >
              {pick(section.title)}
            </h2>

            {section.intro && (
              <p lang={language} className="mt-3 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65 sm:text-base">
                {pick(section.intro)}
              </p>
            )}

            {section.paragraphs?.map((paragraph, index) => (
              <p
                key={index}
                lang={language}
                className="mt-3 break-words text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65 sm:text-base"
              >
                {pick(paragraph)}
              </p>
            ))}

            {section.items && (
              <div className="mt-5 space-y-5">
                {section.items.map((item, index) => (
                  <div key={index}>
                    <h3 lang={language} className="font-display text-base font-semibold text-navy dark:text-ink-dark">
                      {pick(item.title)}
                    </h3>
                    {item.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        lang={language}
                        className="mt-2 break-words text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65 sm:text-base"
                      >
                        {pick(paragraph)}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {section.bullets && (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65 sm:text-base">
                {section.bullets.map((bullet, index) => (
                  <li key={index} lang={language} className="break-words">
                    {pick(bullet)}
                  </li>
                ))}
              </ul>
            )}

            {section.closing && (
              <p lang={language} className="mt-3 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65 sm:text-base">
                {pick(section.closing)}
              </p>
            )}

            {section.contact && (
              <p className="mt-3 text-sm text-ink/65 dark:text-ink-dark/65 sm:text-base">
                <span lang={language}>{language === 'mr' ? 'ईमेल:' : 'Email:'}</span>{' '}
                <a
                  href={`mailto:${aboutContent.email}`}
                  className="break-all text-saffron underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                >
                  {aboutContent.email}
                </a>
              </p>
            )}

            {section.tagline && (
              <p lang={language} className="mt-3 font-display text-base font-semibold text-navy dark:text-ink-dark">
                {pick(section.tagline)}
              </p>
            )}
          </section>
        ))}
      </div>
    </main>
  )
}
