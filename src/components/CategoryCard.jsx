import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import DynamicIcon from './DynamicIcon'
import { useLanguage } from '../context/LanguageContext'

export default function CategoryCard({ icon, title, description, path }) {
  const { pick, language } = useLanguage()

  return (
    <Link
      to={path}
      className="group relative flex flex-col rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-6 transition-colors hover:border-saffron/40"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 dark:bg-white/10 text-navy dark:text-saffron-light">
        <DynamicIcon name={icon} size={20} />
      </div>
      <h3 lang={language} className="font-display mt-4 text-lg font-semibold text-navy dark:text-ink-dark">
        {pick(title)}
      </h3>
      <p lang={language} className="mt-2 text-sm leading-relaxed text-ink/60 dark:text-ink-dark/60">
        {pick(description)}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-saffron">
        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
      </span>
      <div className="absolute inset-x-6 bottom-0 h-px scale-x-0 bg-saffron transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  )
}
