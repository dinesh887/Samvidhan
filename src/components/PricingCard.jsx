import { Check } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useLanguage } from '../context/LanguageContext'

export default function PricingCard({ plan }) {
  const { isPremium, upgradeToPremium } = useAuth()
  const { t } = useLanguage()
  const labels = {
    'Basic access': 'common_free_access', Articles: 'nav_articles', 'Basic quiz': 'quiz_title', Bookmarks: 'nav_bookmarks',
    'Premium content': 'premium_content', 'Advanced quiz': 'premium_quiz', 'Exam preparation': 'premium_exam', Notes: 'common_premium_notes',
    'Progress tracking': 'premium_tracking', 'Ad-free experience': 'premium_ad_free', 'Everything in Monthly': 'common_everything_monthly',
    'Full-year access': 'common_full_year', 'Advanced revision tools': 'common_advanced_revision',
  }
  const planName = plan.id === 'monthly' ? t('premium_monthly') : plan.id === 'yearly' ? t('premium_yearly') : t('common_free')

  return (
    <article className={`relative rounded-2xl border p-6 ${plan.id === 'yearly' ? 'border-saffron bg-saffron/[0.06]' : 'border-navy/10 bg-white/60 dark:border-ink-dark/10 dark:bg-white/[0.04]'}`}>
      {plan.badge && <span className="absolute right-5 top-5 text-xs font-semibold text-saffron">{t('premium_best')}</span>}
      <h2 className="text-sm font-semibold tracking-wider text-navy dark:text-ink-dark">{planName}</h2>
      <p className="font-display mt-5 text-4xl font-semibold text-navy dark:text-saffron-light">{plan.price}<small className="text-sm font-normal text-ink/50">{plan.cadence}</small></p>
      <ul className="mt-6 space-y-3 text-sm text-ink/70 dark:text-ink-dark/70">{plan.features.map((feature) => <li key={feature} className="flex gap-2"><Check size={16} className="shrink-0 text-leaf" />{t(labels[feature] || feature)}</li>)}</ul>
      {plan.id !== 'free' && <button type="button" onClick={upgradeToPremium} disabled={isPremium} className="mt-7 w-full rounded-full bg-navy px-4 py-2.5 text-sm font-medium text-paper disabled:opacity-50 dark:bg-saffron dark:text-ink">{isPremium ? t('premium_current') : t('premium_choose')}</button>}
    </article>
  )
}
