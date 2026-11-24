import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try { return localStorage.getItem('mysamvidhan-language') === 'mr' ? 'mr' : 'en' }
    catch { return 'en' }
  })

  useEffect(() => {
    document.documentElement.lang = language === 'mr' ? 'mr' : 'en'
    try { localStorage.setItem('mysamvidhan-language', language) } catch { /* Storage can be unavailable in private browsing. */ }
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useLanguage must be used inside LanguageProvider')
  return value
}

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()
  return <div className="language-switch" role="group" aria-label="Choose website language">
    <button type="button" onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button>
    <span aria-hidden="true">|</span>
    <button type="button" onClick={() => setLanguage('mr')} aria-pressed={language === 'mr'}>मराठी</button>
  </div>
}

