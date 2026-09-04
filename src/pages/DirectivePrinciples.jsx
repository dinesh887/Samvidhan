import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { directiveIntro, directiveExamples } from '../data/directivePrinciples'

export default function DirectivePrinciples() {
  const { t, pick, language } = useLanguage()

  useEffect(() => {
    document.title = 'Directive Principles of State Policy | Samvidhan'
  }, [])

  const blocks = [
    { key: 'what', label: { en: 'What are Directive Principles?', mr: 'मार्गदर्शक तत्त्वे म्हणजे काय?' } },
    { key: 'why', label: { en: 'Why are they important?', mr: 'ती महत्त्वाची का आहेत?' } },
    { key: 'how', label: { en: 'How do they guide the Government?', mr: 'ती शासनाला कशी दिशा देतात?' } },
  ]

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
      <h1 lang={language} className="font-display text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl">
        {t('directive_title')}
      </h1>
      <p lang={language} className="mt-2 max-w-2xl text-ink/60 dark:text-ink-dark/60">
        {t('directive_sub')}
      </p>

      <div className="mt-10 space-y-8">
        {blocks.map((b) => (
          <section key={b.key}>
            <h2 lang={language} className="font-display text-lg font-semibold text-navy dark:text-ink-dark">
              {pick(b.label)}
            </h2>
            <p lang={language} className="mt-2 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70">
              {pick(directiveIntro[b.key])}
            </p>
          </section>
        ))}
      </div>

      <section className="mt-10">
        <h2 lang={language} className="font-display text-lg font-semibold text-navy dark:text-ink-dark">
          {language === 'mr' ? 'उदाहरणे' : 'Examples in practice'}
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {directiveExamples.map((ex, i) => (
            <div
              key={i}
              className="rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-5"
            >
              <h3 lang={language} className="text-sm font-semibold text-navy dark:text-ink-dark">
                {pick(ex.title)}
              </h3>
              <p lang={language} className="mt-2 text-xs leading-relaxed text-ink/60 dark:text-ink-dark/60">
                {pick(ex.example)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
