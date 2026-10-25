import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { directiveIntro, directiveExamples } from '../data/directivePrinciples'
import OfficialSourceLink from '../components/OfficialSourceLink'

export default function DirectivePrinciples() {
  const { t, pick, language } = useLanguage()

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
      <section className="mt-10 rounded-2xl border border-navy/10 bg-white/60 p-6 dark:border-ink-dark/10 dark:bg-white/[0.04]">
        <h2 lang={language} className="font-display text-lg font-semibold text-navy dark:text-ink-dark">
          {language === 'mr' ? 'निवडक कलमांशी परिचय' : 'A guide to selected Articles'}
        </h2>
        <p lang={language} className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-ink-dark/65">
          {language === 'mr'
            ? 'ही उदाहरणे भाग IV मधील काही विषय दाखवतात; ती संपूर्ण यादी नाही.'
            : 'These examples point to a few themes in Part IV; they are not an exhaustive list.'}
        </p>
        <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70 sm:grid-cols-2">
          {(language === 'mr'
            ? [
                'कलम ३८ — लोककल्याणासाठी सामाजिक व्यवस्था प्रस्थापित करण्याचा राज्याचा प्रयत्न.',
                'कलम ३९अ — समान न्याय आणि मोफत कायदेशीर मदतीची तरतूद करण्याचे राज्याचे उद्दिष्ट.',
                'कलम ४० — ग्रामपंचायतींचे संघटन आणि त्यांना स्वशासनाची आवश्यक सत्ता देण्याचा प्रयत्न.',
                'कलम ४८अ — पर्यावरण, वने आणि वन्यजीवांचे संरक्षण व सुधारणा.',
              ]
            : [
                'Article 38 — the State’s endeavour to promote a social order informed by the welfare of the people.',
                'Article 39A — the State’s aim to provide equal justice and free legal aid.',
                'Article 40 — the State’s endeavour to organise village panchayats and endow them with necessary powers.',
                'Article 48A — protection and improvement of the environment, forests and wildlife.',
              ]).map((item) => <li key={item} lang={language}>{item}</li>)}
        </ul>
      </section>
      <OfficialSourceLink />
    </div>
  )
}
