import { Link } from 'react-router-dom'
import ChakraMark from './ChakraMark'
import { useLanguage } from '../context/LanguageContext'
import Advertisement from './Advertisement'

export default function Footer() {
  const { t, language } = useLanguage()

  const links = [
    { to: '/', label: t('nav_home') },
    { to: '/articles', label: t('nav_articles') },
    { to: '/fundamental-rights', label: t('nav_rights') },
    { to: '/fundamental-duties', label: t('nav_duties') },
    { to: '/amendments', label: t('nav_amendments') },
    { to: '/learn', label: t('nav_preamble') },
    { to: '/faq', label: t('nav_faq') },
    { to: '/about', label: t('nav_about') },
    { to: '/contact', label: t('contact_title') },
    { to: '/privacy', label: t('footer_privacy') },
    { to: '/terms', label: t('footer_terms') },
  ]

  return (
    <footer className="mt-16 border-t border-navy/10 dark:border-ink-dark/10 bg-white/40 dark:bg-white/[0.03]">
      <Advertisement placement="banner" />
      <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <div className="flex items-center gap-2">
              <ChakraMark className="h-6 w-6 text-navy dark:text-saffron" />
              <span className="font-display text-2xl font-semibold text-navy dark:text-ink-dark">
                SAMVIDHAN
              </span>
            </div>
            <p lang={language} className="mt-3 max-w-sm text-base leading-7 text-ink/70 dark:text-ink-dark/70">
              {t('footer_tagline')}
            </p>
            <p lang={language} className="mt-3 max-w-sm text-sm leading-6 text-ink/60 dark:text-ink-dark/60">{language === 'mr' ? 'संविधान हे स्वतंत्र शैक्षणिक व्यासपीठ आहे.' : 'Samvidhan is an independent educational platform.'}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-navy dark:text-ink-dark">
              {t('footer_navigation')}
            </h3>
            <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    lang={language}
                    className="py-1 text-base leading-6 text-ink/70 dark:text-ink-dark/70 hover:text-saffron transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <section className="mt-8 border-t border-navy/10 pt-6 dark:border-ink-dark/10">
          <h3 lang={language} className="text-base font-semibold text-navy dark:text-ink-dark">
            {t('footer_disclaimer_title')}
          </h3>
          <p lang={language} className="mt-2 max-w-4xl text-sm leading-6 text-ink/70 dark:text-ink-dark/70">
            {t('footer_disclaimer')}
          </p>
        </section>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-navy/10 pt-5 sm:flex-row dark:border-ink-dark/10">
          <p lang={language} className="text-xs text-ink/45 dark:text-ink-dark/45">
            {t('footer_copyright')}
          </p>
          <ChakraMark className="h-5 w-5 text-navy/30 dark:text-ink-dark/25" spokes={24} />
        </div>
      </div>
    </footer>
  )
}
