import { useEffect, useRef } from 'react'
import { useAuth } from '../context/AuthContext'
import { monetizationConfig } from '../data/monetizationConfig'

export default function Advertisement({ placement = 'banner', className = '' }) {
  const { isPremium } = useAuth()
  const adRef = useRef(null)
  const clientId = import.meta.env.VITE_ADSENSE_CLIENT_ID
  const slots = { article: import.meta.env.VITE_ADSENSE_ARTICLE_SLOT, sidebar: import.meta.env.VITE_ADSENSE_SIDEBAR_SLOT, banner: import.meta.env.VITE_ADSENSE_BANNER_SLOT }
  const slot = slots[placement] || slots.banner
  const configured = monetizationConfig.ads.enabled && clientId && slot && !isPremium

  useEffect(() => {
    if (configured && adRef.current && !adRef.current.dataset.initialized) {
      if (!document.querySelector('script[data-samvidhan-adsense]')) {
        const script = document.createElement('script')
        script.async = true
        script.crossOrigin = 'anonymous'
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`
        script.dataset.samvidhanAdsense = 'true'
        document.head.appendChild(script)
      }
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); adRef.current.dataset.initialized = 'true' } catch { /* AdSense may be blocked locally. */ }
    }
  }, [configured])

  if (isPremium || !monetizationConfig.ads.enabled) return null
  if (!configured) return import.meta.env.DEV ? <div className={`py-3 text-center text-[10px] uppercase tracking-[0.2em] text-ink/35 dark:text-ink-dark/35 ${className}`}>Advertisement</div> : null
  return <div className={`my-8 min-h-[90px] overflow-hidden ${className}`} aria-label="Advertisement"><ins ref={adRef} className="adsbygoogle block h-[90px] w-full" data-ad-client={clientId} data-ad-slot={slot} data-ad-format="auto" data-full-width-responsive="true" /></div>
}