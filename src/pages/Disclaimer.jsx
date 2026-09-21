import ChakraMark from '../components/ChakraMark'
import { useLanguage } from '../context/LanguageContext'

export default function Disclaimer() {
  const { t, language } = useLanguage()

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <ChakraMark className="h-10 w-10 text-navy dark:text-saffron" />
      <h1 lang={language} className="font-display mt-6 text-3xl font-semibold text-navy dark:text-ink-dark sm:text-4xl">
        {t('footer_disclaimer_title')}
      </h1>
      <p lang={language} className="mt-6 text-base leading-relaxed text-ink/70 dark:text-ink-dark/70">
        {t('footer_disclaimer')}
      </p>
      <p lang={language} className="mt-4 text-base leading-relaxed text-ink/70 dark:text-ink-dark/70">
        Samvidhan is an independent educational and informational website. Constitutional information can change and should be checked against current authoritative sources for legal or official use.
      </p>
    </div>
  )
}