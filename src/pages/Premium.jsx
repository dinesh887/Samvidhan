import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PremiumBadge from '../components/PremiumBadge'
import PricingCard from '../components/PricingCard'
import PremiumContent from '../components/PremiumContent'
import { plans } from '../data/plans'
import { premiumContent } from '../data/premiumContent'
import { useLanguage } from '../context/LanguageContext'

export default function Premium() {
  const { language, t, pick } = useLanguage()
  return <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20"><div className="max-w-3xl"><PremiumBadge /><h1 lang={language} className="font-display mt-4 text-4xl font-semibold text-navy dark:text-ink-dark sm:text-5xl">{t('premium_title')}</h1><p lang={language} className="mt-4 text-xl text-ink/65 dark:text-ink-dark/65">{t('premium_hero')}</p><p lang={language} className="mt-3 max-w-xl leading-relaxed text-ink/60 dark:text-ink-dark/60">{t('common_challenge')}</p></div><h2 lang={language} className="sr-only">{t('premium_features')}</h2><section className="mt-12 grid gap-5 md:grid-cols-3">{plans.map((plan) => <PricingCard key={plan.id} plan={plan} />)}</section><section className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.2fr]"><div><h2 lang={language} className="font-display text-2xl font-semibold text-navy dark:text-ink-dark">{t('common_what_adds')}</h2><p lang={language} className="mt-3 text-sm leading-relaxed text-ink/60 dark:text-ink-dark/60">{t('common_choose_path')}</p><Link to="/exam-preparation" className="mt-5 inline-block text-sm font-medium text-saffron">{t('common_explore_exam')} →</Link></div><div className="space-y-4">{premiumContent.map((item) => <PremiumContent key={item.id} title={pick(item.title)}><div className="rounded-2xl border border-leaf/20 bg-leaf/[0.05] p-5"><h3 lang={language} className="font-display font-semibold text-navy dark:text-ink-dark">{pick(item.title)}</h3><p lang={language} className="mt-2 text-sm text-ink/60 dark:text-ink-dark/60">{pick(item.description)}</p></div></PremiumContent>)}</div></section></div>
}