import AppRoutes from './AppRoutes'
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
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Disclaimer from './pages/Disclaimer'
import FAQ from './pages/FAQ'
import CurrentAffairs, { CurrentAffairDetails } from './pages/CurrentAffairs'

export default function AppServer() {
  return (
    <AppRoutes
      pages={{
        Home, Articles, ArticleDetails, FundamentalRights, FundamentalDuties,
        DirectivePrinciples, Amendments, Quiz, Bookmarks, About, NotFound,
        Premium, ExamPreparation, PremiumQuiz, Notes, Dashboard, Progress,
        Learn, Contact, Privacy, Terms, Disclaimer, FAQ, CurrentAffairs,
        CurrentAffairDetails,
      }}
    />
  )
}
