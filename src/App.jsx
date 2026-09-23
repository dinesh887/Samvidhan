import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Articles from './pages/Articles'
import ArticleDetails from './pages/ArticleDetails'
import FundamentalRights from './pages/FundamentalRights'
import FundamentalDuties from './pages/FundamentalDuties'
import DirectivePrinciples from './pages/DirectivePrinciples'
import Amendments from './pages/Amendments'
import Quiz from './pages/Quiz'
import Bookmarks from './pages/Bookmarks'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Premium from './pages/Premium'
import ExamPreparation from './pages/ExamPreparation'
import PremiumQuiz from './pages/PremiumQuiz'
import Notes from './pages/Notes'
import Dashboard from './pages/Dashboard'
import Progress from './pages/Progress'
import Learn from './pages/Learn'
import PageMeta from './components/PageMeta'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Disclaimer from './pages/Disclaimer'
import FAQ from './pages/FAQ'
import SchemaJsonLd from './components/SchemaJsonLd'
import CurrentAffairs, { CurrentAffairDetails } from './pages/CurrentAffairs'

export default function App() {
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
      <main id="main-content" className="flex-1">
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
      </main>
      <Footer />
    </div>
  )
}
