import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Breadcrumbs from './components/Breadcrumbs'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import PageMeta from './components/PageMeta'
import SchemaJsonLd from './components/SchemaJsonLd'
import { useLanguage } from './context/LanguageContext'

export default function AppRoutes({ pages }) {
  const { language } = useLanguage()
  const {
    Home, Articles, ArticleDetails, FundamentalRights, FundamentalDuties,
    DirectivePrinciples, Amendments, Quiz, Bookmarks, About, NotFound,
    Premium, ExamPreparation, PremiumQuiz, Notes, Dashboard, Progress,
    Learn, Contact, Privacy, Terms, Disclaimer, FAQ, CurrentAffairs,
    CurrentAffairDetails,
  } = pages

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <PageMeta />
      <SchemaJsonLd />
      <Navbar />
      <main id="main-content" className="app-main flex-1">
        <Breadcrumbs />
        <Suspense
          fallback={
            <div className="mx-auto max-w-7xl px-4 py-16 text-sm text-ink/60" role="status" aria-live="polite">
              {language === 'mr' ? 'पृष्ठ लोड होत आहे…' : 'Loading page…'}
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/current-affairs" element={<CurrentAffairs />} />
            <Route path="/current-affairs/:slug" element={<CurrentAffairDetails />} />
            <Route path="/article/:id" element={<ArticleDetails />} />
            <Route path="/fundamental-rights" element={<FundamentalRights />} />
            <Route path="/fundamental-duties" element={<FundamentalDuties />} />
            <Route path="/directive-principles" element={<DirectivePrinciples />} />
            <Route path="/amendments" element={<Amendments />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/exam-preparation" element={<ExamPreparation />} />
            <Route path="/premium-quiz" element={<PremiumQuiz />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
