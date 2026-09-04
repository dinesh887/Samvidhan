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
    { to: '/quiz', label: t('nav_quiz') },
    { to: '/about', label: t('nav_about') },
    { to: '/contact', label: t('contact_title') },
    { to: '/privacy', label: language === 'mr' ? 'गोपनीयता धोरण' : 'Privacy Policy' },
    { to: '/terms', label: language === 'mr' ? 'नियम आणि अटी' : 'Terms & Conditions' },
  ]

  return (
    <footer className="mt-24 border-t border-navy/10 dark:border-ink-dark/10 bg-white/40 dark:bg-white/[0.03]">
      <Advertisement placement="banner" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <ChakraMark className="h-6 w-6 text-navy dark:text-saffron" />
              <span className="font-display text-lg font-semibold text-navy dark:text-ink-dark">
                SAMVIDHAN
              </span>
            </div>
            <p lang={language} className="mt-3 max-w-xs text-sm text-ink/60 dark:text-ink-dark/60">
              {t('footer_tagline')}
            </p>
            <p lang={language} className="mt-3 max-w-xs text-xs text-ink/50 dark:text-ink-dark/50">{language === 'mr' ? 'संविधान हे स्वतंत्र शैक्षणिक व्यासपीठ आहे.' : 'Samvidhan is an independent educational platform.'}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-navy dark:text-ink-dark">
              {t('nav_articles')}
            </h3>
            <ul className="mt-3 space-y-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    lang={language}
                    className="text-sm text-ink/60 dark:text-ink-dark/60 hover:text-saffron transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 lang={language} className="text-sm font-semibold text-navy dark:text-ink-dark">
              {t('footer_disclaimer_title')}
            </h3>
            <p lang={language} className="mt-3 text-sm leading-relaxed text-ink/60 dark:text-ink-dark/60">
              {t('footer_disclaimer')}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-navy/10 dark:border-ink-dark/10 pt-6">
          <p lang={language} className="text-xs text-ink/45 dark:text-ink-dark/45">
            {t('footer_copyright')}
          </p>
          <ChakraMark className="h-5 w-5 text-navy/30 dark:text-ink-dark/25" spokes={24} />
        </div>
      </div>
    </footer>
  )
}
