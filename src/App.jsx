import { lazy } from 'react'
import AppRoutes from './AppRoutes'

const Home = lazy(() => import('./pages/Home'))
const Articles = lazy(() => import('./pages/Articles'))
const ArticleDetails = lazy(() => import('./pages/ArticleDetails'))
const FundamentalRights = lazy(() => import('./pages/FundamentalRights'))
const FundamentalDuties = lazy(() => import('./pages/FundamentalDuties'))
const DirectivePrinciples = lazy(() => import('./pages/DirectivePrinciples'))
const Amendments = lazy(() => import('./pages/Amendments'))
const Quiz = lazy(() => import('./pages/Quiz'))
const Bookmarks = lazy(() => import('./pages/Bookmarks'))
const About = lazy(() => import('./pages/About'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Premium = lazy(() => import('./pages/Premium'))
const ExamPreparation = lazy(() => import('./pages/ExamPreparation'))
const PremiumQuiz = lazy(() => import('./pages/PremiumQuiz'))
const Notes = lazy(() => import('./pages/Notes'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Progress = lazy(() => import('./pages/Progress'))
const Learn = lazy(() => import('./pages/Learn'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const Disclaimer = lazy(() => import('./pages/Disclaimer'))
const FAQ = lazy(() => import('./pages/FAQ'))
const CurrentAffairs = lazy(() => import('./pages/CurrentAffairs'))
const CurrentAffairDetails = lazy(() =>
  import('./pages/CurrentAffairs').then((module) => ({ default: module.CurrentAffairDetails }))
)

export default function App() {
  return (
    <AppRoutes
      pages={{
        Home,
        Articles,
        ArticleDetails,
        FundamentalRights,
        FundamentalDuties,
        DirectivePrinciples,
        Amendments,
        Quiz,
        Bookmarks,
        About,
        NotFound,
        Premium,
        ExamPreparation,
        PremiumQuiz,
        Notes,
        Dashboard,
        Progress,
        Learn,
        Contact,
        Privacy,
        Terms,
        Disclaimer,
        FAQ,
        CurrentAffairs,
        CurrentAffairDetails,
      }}
    />
  )
}
