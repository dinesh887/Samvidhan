import { Lock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { monetizationConfig } from '../data/monetizationConfig'
import { useLanguage } from '../context/LanguageContext'
export default function PremiumContent({ children, title }) { const { isPremium } = useAuth(); const { t } = useLanguage(); if (!monetizationConfig.premium.enabled || isPremium) return children; return <div className="rounded-2xl border border-saffron/30 bg-saffron/[0.06] p-8 text-center"><Lock className="mx-auto text-saffron" size={24} /><h2 className="font-display mt-3 text-xl font-semibold text-navy dark:text-ink-dark">{title || t('premium_content')}</h2><p className="mt-2 text-sm text-ink/60 dark:text-ink-dark/60">{t('premium_unlock')}</p><Link to="/premium" className="mt-5 inline-flex rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-paper dark:bg-saffron dark:text-ink">{t('premium_view_plans')}</Link></div> }