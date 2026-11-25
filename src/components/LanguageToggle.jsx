import { useLanguage } from '../context/LanguageContext'

export default function LanguageToggle({ compact = false }) {
  const { language, setLanguage } = useLanguage()

  return (
    <div
      className="flex items-center rounded-full border border-navy/15 dark:border-ink-dark/20 bg-white/60 dark:bg-white/5 p-0.5 text-sm"
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`px-3 py-1 rounded-full transition-colors ${
          language === 'en'
            ? 'bg-navy text-paper dark:bg-saffron dark:text-ink'
            : 'text-navy/70 dark:text-ink-dark/70 hover:text-navy dark:hover:text-ink-dark'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('mr')}
        aria-pressed={language === 'mr'}
        lang="mr"
        className={`px-3 py-1 rounded-full transition-colors font-devSans ${
          language === 'mr'
            ? 'bg-navy text-paper dark:bg-saffron dark:text-ink'
            : 'text-navy/70 dark:text-ink-dark/70 hover:text-navy dark:hover:text-ink-dark'
        }`}
      >
        मराठी
      </button>
    </div>
  )
}
