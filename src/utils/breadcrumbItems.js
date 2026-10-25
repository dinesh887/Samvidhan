import { getArticleById } from '../data/articles.js'
import { getCurrentAffairBySlug } from '../data/currentAffairs.js'

const BREADCRUMB_TRANSLATIONS = {
  en: {
    nav_home: 'Home',
    nav_articles: 'Articles',
    nav_current_affairs: 'Current Affairs',
    nav_rights: 'Fundamental Rights',
    nav_duties: 'Fundamental Duties',
    nav_directive: 'Directive Principles',
    nav_amendments: 'Amendments',
    nav_quiz: 'Quiz',
    nav_bookmarks: 'Saved Articles',
    about_title: 'About Samvidhan',
    contact_title: 'Contact Us',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms & Conditions',
    footer_disclaimer_title: 'Disclaimer',
    nav_faq: 'FAQ',
    nav_premium: 'Premium',
    exam_title: 'Exam Preparation',
    advanced_title: 'Advanced Quiz',
    notes_title: 'Premium Notes',
    dashboard_title: 'Dashboard',
    progress_title: 'My Progress',
    learn_title: 'Learn Indian Constitution',
    search_button: 'Search',
  },
  mr: {
    nav_home: 'मुख्यपृष्ठ',
    nav_articles: 'कलमे',
    nav_current_affairs: 'चालू घडामोडी',
    nav_rights: 'मूलभूत अधिकार',
    nav_duties: 'मूलभूत कर्तव्ये',
    nav_directive: 'मार्गदर्शक तत्त्वे',
    nav_amendments: 'दुरुस्त्या',
    nav_quiz: 'प्रश्नमंजुषा',
    nav_bookmarks: 'जतन केलेली कलमे',
    about_title: 'संविधान विषयी',
    contact_title: 'आमच्याशी संपर्क साधा',
    footer_privacy: 'गोपनीयता धोरण',
    footer_terms: 'नियम आणि अटी',
    footer_disclaimer_title: 'अस्वीकरण',
    nav_faq: 'प्रश्नोत्तरे',
    nav_premium: 'प्रीमियम',
    exam_title: 'परीक्षा तयारी',
    advanced_title: 'प्रगत प्रश्नमंजुषा',
    notes_title: 'प्रीमियम नोंदी',
    dashboard_title: 'डॅशबोर्ड',
    progress_title: 'माझी प्रगती',
    learn_title: 'भारतीय संविधान शिका',
    search_button: 'शोधा',
  },
}

export function translateBreadcrumb(key, language) {
  return BREADCRUMB_TRANSLATIONS[language]?.[key] || BREADCRUMB_TRANSLATIONS.en[key] || key
}

const ROUTE_LABEL_KEYS = {
  '/articles': 'nav_articles',
  '/current-affairs': 'nav_current_affairs',
  '/fundamental-rights': 'nav_rights',
  '/fundamental-duties': 'nav_duties',
  '/directive-principles': 'nav_directive',
  '/amendments': 'nav_amendments',
  '/quiz': 'nav_quiz',
  '/bookmarks': 'nav_bookmarks',
  '/about': 'about_title',
  '/contact': 'contact_title',
  '/privacy': 'footer_privacy',
  '/privacy-policy': 'footer_privacy',
  '/terms': 'footer_terms',
  '/disclaimer': 'footer_disclaimer_title',
  '/faq': 'nav_faq',
  '/premium': 'nav_premium',
  '/exam-preparation': 'exam_title',
  '/premium-quiz': 'advanced_title',
  '/notes': 'notes_title',
  '/dashboard': 'dashboard_title',
  '/progress': 'progress_title',
  '/learn': 'learn_title',
}

const ROUTE_PARENT_KEYS = {
  '/exam-preparation': [['learn_title', '/learn']],
  '/premium-quiz': [['nav_quiz', '/quiz']],
  '/progress': [['dashboard_title', '/dashboard']],
}

export function getBreadcrumbItems(pathname, search, { language, t, pick }) {
  const translate = t || ((key) => translateBreadcrumb(key, language))
  if (pathname === '/') return []

  const home = { label: translate('nav_home'), to: '/' }
  const articleMatch = pathname.match(/^\/article\/([^/]+)\/?$/)
  const affairMatch = pathname.match(/^\/current-affairs\/([^/]+)\/?$/)
  const article = articleMatch ? getArticleById(articleMatch[1]) : null
  const currentAffair = affairMatch ? getCurrentAffairBySlug(affairMatch[1]) : null
  const searchParams = new URLSearchParams(search)

  if (articleMatch) {
    return [
      home,
      { label: translate('nav_articles'), to: '/articles' },
      { label: article ? pick(article.title) : language === 'mr' ? 'कलम सापडले नाही' : 'Article not found' },
    ]
  }

  if (affairMatch) {
    return [
      home,
      { label: translate('nav_current_affairs'), to: '/current-affairs' },
      { label: currentAffair ? pick(currentAffair.title) : language === 'mr' ? 'लेख सापडला नाही' : 'Article not found' },
    ]
  }

  if (pathname === '/articles' && searchParams.has('q')) {
    return [home, { label: translate('search_button') }]
  }

  const labelKey = ROUTE_LABEL_KEYS[pathname]
  const parentItems = (ROUTE_PARENT_KEYS[pathname] || []).map(([key, to]) => ({
    label: translate(key),
    to,
  }))

  return labelKey
    ? [home, ...parentItems, { label: translate(labelKey) }]
    : [home, { label: language === 'mr' ? 'पृष्ठ सापडले नाही' : 'Page not found' }]
}
