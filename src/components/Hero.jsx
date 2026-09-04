import ChakraMark from './ChakraMark'
import SearchBar from './SearchBar'
import { useLanguage } from '../context/LanguageContext'
import { heroStats } from '../data/categories'

export default function Hero() {
  const { t, language } = useLanguage()

  return (
    <section className="relative overflow-hidden border-b border-navy/10 dark:border-ink-dark/10">
      <ChakraMark
        className="pointer-events-none absolute -right-24 -top-24 h-[30rem] w-[30rem] text-navy/[0.05] dark:text-saffron/[0.06] sm:-right-16 sm:-top-16"
        spokes={24}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-14 pb-16 sm:pt-20 sm:pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-saffron/10 px-3.5 py-1.5 text-xs font-medium text-saffron-dark dark:text-saffron-light">
            🇮🇳 {t('hero_badge')}
          </span>

          <h1
            lang={language}
            className="font-display mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-navy dark:text-ink-dark sm:text-5xl lg:text-6xl"
          >
            {t('hero_heading_1')}
            <br />
            <span className="text-saffron">{t('hero_heading_2')}</span>
          </h1>

          <p
            lang={language}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 dark:text-ink-dark/70 sm:text-lg"
          >
            {t('hero_desc')}
          </p>

          <div className="mt-8 max-w-2xl">
            <SearchBar large />
          </div>
        </div>

        <dl className="relative mt-16 grid grid-cols-2 gap-4 sm:mt-20 sm:grid-cols-4 sm:gap-6">
          {heroStats.map((stat) => (
            <div
              key={stat.key}
              className="rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] px-5 py-6 text-center"
            >
              <dt lang={language} className="text-sm font-medium text-ink/55 dark:text-ink-dark/55">
                {t(stat.key)}
              </dt>
              <dd className="font-display mt-2 text-3xl font-semibold text-navy dark:text-saffron sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
