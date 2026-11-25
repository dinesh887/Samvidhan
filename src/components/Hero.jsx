import { useEffect, useRef } from 'react'
import ChakraMark from './ChakraMark'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t, language } = useLanguage()
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const artwork = section?.querySelector('.hero-art')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')

    if (!section || !artwork || reducedMotion.matches || !finePointer.matches) return

    let frame = 0
    const layers = [
      ...artwork.querySelectorAll('.parliament-building, .hero-flag, .hero-book-stack, .constitution-book, .hero-ribbon'),
    ]

    const reset = () => {
      layers.forEach((layer) => {
        layer.style.removeProperty('--parallax-x')
        layer.style.removeProperty('--parallax-y')
      })
    }

    const handlePointerMove = (event) => {
      if (frame) return

      frame = window.requestAnimationFrame(() => {
        frame = 0
        const bounds = section.getBoundingClientRect()
        const x = (event.clientX - bounds.left) / bounds.width - 0.5
        const y = (event.clientY - bounds.top) / bounds.height - 0.5

        layers.forEach((layer, index) => {
          const depth = index === 3 ? 14 : index < 3 ? 5 : 2
          layer.style.setProperty('--parallax-x', `${x * depth}px`)
          layer.style.setProperty('--parallax-y', `${y * depth}px`)
        })
      })
    }

    section.addEventListener('pointermove', handlePointerMove, { passive: true })
    section.addEventListener('pointerleave', reset)

    return () => {
      section.removeEventListener('pointermove', handlePointerMove)
      section.removeEventListener('pointerleave', reset)
      if (frame) window.cancelAnimationFrame(frame)
      reset()
    }
  }, [])

  return (
    <section ref={sectionRef} className="hero-section relative overflow-hidden border-b border-navy/10 dark:border-ink-dark/10">
      <ChakraMark
        className="hero-chakra pointer-events-none absolute -right-24 -top-24 h-[30rem] w-[30rem] text-navy/[0.05] dark:text-saffron/[0.06] sm:-right-16 sm:-top-16"
        spokes={24}
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 sm:pb-16 sm:pt-20">
        <div className="hero-layout">
          <div className="hero-copy">
            <span className="hero-badge inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-saffron/10 px-3.5 py-1.5 text-xs font-medium text-saffron-dark dark:text-saffron-light">
              🇮🇳 {t('hero_badge')}
            </span>

            <h1
              lang={language}
              className="hero-heading font-display mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-navy dark:text-ink-dark sm:text-5xl lg:text-6xl"
            >
              {t('hero_heading_1')}
              <br />
              <span className="text-saffron">{t('hero_heading_2')}</span>
            </h1>

            <p
              lang={language}
              className="hero-description mt-6 max-w-xl text-base leading-relaxed text-ink/70 dark:text-ink-dark/70 sm:text-lg"
            >
              {t('hero_desc')}
            </p>

            <Link
              to="/learn"
              lang={language}
              className="hero-cta mt-5 inline-flex items-center gap-2 rounded-full bg-saffron px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-saffron-dark"
            >
              {t('learn_more')} <span aria-hidden="true">→</span>
            </Link>

            <div className="hero-search mt-8 max-w-2xl">
              <SearchBar large />
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="hero-art-glow" />
            <div className="hero-ribbon hero-ribbon-saffron" />
            <div className="hero-ribbon hero-ribbon-white" />
            <div className="hero-ribbon hero-ribbon-green" />
            <div className="hero-hill hero-hill-back" />
            <div className="hero-hill hero-hill-front" />
            <div className="parliament-building">
              <div className="parliament-dome" />
              <div className="parliament-roof" />
              <div className="parliament-columns">
                {Array.from({ length: 9 }, (_, index) => <span key={index} />)}
              </div>
              <div className="parliament-base" />
            </div>
            <div className="hero-flag">
              <span />
              <i />
              <b />
            </div>
            <div className="hero-book-stack">
              <span />
              <span />
              <span />
            </div>
            <div className="constitution-book">
              <div className="book-pages" />
              <div className="book-cover">
                <div className="book-emblem">
                  <span />
                </div>
                <div className="book-title-lines">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="book-rule" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
