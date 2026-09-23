import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Search, Menu, X } from 'lucide-react'
import ChakraMark from './ChakraMark'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const { t, language } = useLanguage()
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const links = [
    { to: '/', label: t('nav_home') },
    { to: '/articles', label: t('nav_articles') },
    { to: '/current-affairs', label: t('nav_current_affairs') },
    { to: '/fundamental-rights', label: t('nav_rights') },
    { to: '/amendments', label: t('nav_amendments') },
    { to: '/quiz', label: t('nav_quiz') },
    { to: '/about', label: t('nav_about') },
    // { to: '/premium', label: t('nav_premium') },
    // { to: '/dashboard', label: t('nav_dashboard') },
  ]

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-saffron ${
      isActive ? 'text-saffron' : 'text-navy/80 dark:text-ink-dark/80'
    }`

  const submitSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/articles?q=${encodeURIComponent(query.trim())}`)
      setSearchOpen(false)
      setOpen(false)
      setQuery('')
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 dark:border-ink-dark/10 bg-paper/90 dark:bg-paper-dark/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Samvidhan home">
          <ChakraMark className="h-7 w-7 text-navy dark:text-saffron" />
          <span className="font-display text-xl font-semibold tracking-tight text-navy dark:text-ink-dark">
            SAMVIDHAN
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} lang={language}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label={t('search_button')}
            aria-expanded={searchOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 dark:border-ink-dark/20 text-navy dark:text-ink-dark hover:bg-navy/5 dark:hover:bg-white/10 transition-colors"
          >
            <Search size={16} />
          </button>
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <button
          type="button"
          className="lg:hidden flex h-9 w-9 items-center justify-center rounded-full text-navy dark:text-ink-dark"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t('nav_close_menu') : t('nav_open_menu')}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {searchOpen && (
        <div className="border-t border-navy/10 dark:border-ink-dark/10 bg-paper dark:bg-paper-dark">
          <form onSubmit={submitSearch} className="mx-auto max-w-3xl px-4 py-3 flex gap-2">
            <input
              autoFocus
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('search_placeholder')}
              lang={language}
              className="flex-1 rounded-full border border-navy/15 dark:border-ink-dark/20 bg-white dark:bg-white/5 px-4 py-2 text-sm text-ink dark:text-ink-dark placeholder:text-ink/40 dark:placeholder:text-ink-dark/40 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-navy dark:bg-saffron px-4 py-2 text-sm font-medium text-paper dark:text-ink"
            >
              {t('search_button')}
            </button>
          </form>
        </div>
      )}

      {open && (
        <div className="lg:hidden border-t border-navy/10 dark:border-ink-dark/10 bg-paper dark:bg-paper-dark px-4 py-4">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                lang={language}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-base font-medium ${
                    isActive
                      ? 'bg-navy/5 dark:bg-white/10 text-saffron'
                      : 'text-navy dark:text-ink-dark'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink
              to="/fundamental-duties"
              onClick={() => setOpen(false)}
              lang={language}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-navy dark:text-ink-dark"
            >
              {t('nav_duties')}
            </NavLink>
            <NavLink
              to="/bookmarks"
              onClick={() => setOpen(false)}
              lang={language}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-navy dark:text-ink-dark"
            >
              {t('nav_bookmarks')}
            </NavLink>
          </nav>
          <form onSubmit={submitSearch} className="mt-3 flex gap-2">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('search_placeholder')}
              lang={language}
              className="flex-1 rounded-full border border-navy/15 dark:border-ink-dark/20 bg-white dark:bg-white/5 px-4 py-2 text-sm"
            />
            <button
              type="submit"
              className="rounded-full bg-navy dark:bg-saffron px-4 py-2 text-sm font-medium text-paper dark:text-ink"
            >
              {t('search_button')}
            </button>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  )
}
