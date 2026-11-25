import { ExternalLink } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { constitutionSource } from '../data/officialSources'

export default function OfficialSourceLink() {
  const { language, pick } = useLanguage()

  return (
    <aside className="mt-10 rounded-2xl border border-gold/30 bg-gold/[0.06] p-5">
      <p lang={language} className="text-sm leading-relaxed text-ink/70 dark:text-ink-dark/70">
        {pick(constitutionSource.note)}
      </p>
      <a
        href={constitutionSource.url}
        target="_blank"
        rel="noopener noreferrer"
        lang={language}
        className="mt-3 inline-flex items-start gap-2 text-sm font-medium text-navy underline decoration-gold/70 underline-offset-4 hover:text-saffron focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-saffron dark:text-ink-dark"
      >
        <span>{pick(constitutionSource.title)}</span>
        <ExternalLink size={15} aria-hidden="true" className="mt-0.5 shrink-0" />
      </a>
    </aside>
  )
}
