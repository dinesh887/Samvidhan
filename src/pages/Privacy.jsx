import { useEffect } from 'react'
import ChakraMark from '../components/ChakraMark'
import { useLanguage } from '../context/LanguageContext'
import { privacyPolicy } from '../data/privacyPolicy'

export default function Privacy() {
  const { language, pick } = useLanguage()

  useEffect(() => {
    document.title = `${pick(privacyPolicy.title)} | Samvidhan`
  }, [language, pick])

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <ChakraMark className="h-10 w-10 text-navy dark:text-saffron" />
      <h1 lang={language} className="font-display mt-6 text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl">{pick(privacyPolicy.title)}</h1>
      <p className="mt-4 text-sm text-ink/55 dark:text-ink-dark/55"><span lang={language}>{pick(privacyPolicy.lastUpdated)}</span> {pick(privacyPolicy.date)}</p>
      <p lang={language} className="mt-6 text-base leading-relaxed text-ink/70 dark:text-ink-dark/70">{pick(privacyPolicy.intro)}</p>

      <div className="mt-10 space-y-8">
        {privacyPolicy.sections.map((section) => (
          <section key={section.title.en}>
            <h2 lang={language} className="font-display text-xl font-semibold text-navy dark:text-ink-dark">{pick(section.title)}</h2>
            {section.paragraphs?.map((paragraph, index) => <p key={index} lang={language} className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70">{pick(paragraph)}</p>)}
            {section.list && <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70">{section.list.map((item) => <li key={item.en} lang={language}>{pick(item)}</li>)}</ul>}
          </section>
        ))}
      </div>

      <section className="mt-10 rounded-2xl border border-gold/30 bg-gold/[0.06] p-6">
        <h2 lang={language} className="font-display text-xl font-semibold text-navy dark:text-ink-dark">{pick(privacyPolicy.contact.title)}</h2>
        <p lang={language} className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70">{pick(privacyPolicy.contact.body)}</p>
        <p className="mt-3 text-sm text-ink/70 dark:text-ink-dark/70"><span lang={language}>{pick(privacyPolicy.contact.email)}</span>{' '}<a href="mailto:contact@yourdomain.com" className="text-saffron hover:underline">contact@yourdomain.com</a></p>
      </section>
    </div>
  )
}