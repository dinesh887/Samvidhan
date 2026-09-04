import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const descriptions = {
  '/': 'Explore the Constitution of India, its Articles, Rights, Duties and Amendments in simple language.',
  '/articles': 'Search and understand the Constitutional Articles of India with clear explanations.',
  '/fundamental-rights': 'Understand the Fundamental Rights guaranteed by the Constitution of India.',
  '/fundamental-duties': 'Learn the Fundamental Duties of citizens of India in accessible language.',
  '/directive-principles': 'Explore the Directive Principles that guide governance and public policy.',
  '/amendments': 'Study important Constitutional Amendments and how India\'s Constitution has evolved.',
  '/quiz': 'Test your knowledge of the Constitution of India with a free quiz.',
  '/premium': 'Unlock structured constitutional revision, advanced practice and exam preparation.',
  '/exam-preparation': 'Prepare for MPSC and UPSC Constitution and polity examinations.',
  '/premium-quiz': 'Practise advanced Constitution questions by topic and difficulty.',
  '/notes': 'Review structured premium notes for constitutional and competitive exam preparation.',
  '/dashboard': 'Track saved Articles, quizzes and your Samvidhan learning plan.',
  '/progress': 'Review your quiz practice, accuracy and constitutional learning progress.',
  '/learn': 'Learn the Indian Constitution through guided Articles, Rights and exam preparation paths.',
  '/contact': 'Contact Samvidhan with questions, suggestions, feedback, corrections or website-related enquiries.',
  '/privacy': 'Read the Samvidhan Privacy Policy covering information, cookies, analytics, advertising and contact enquiries.',
  '/terms': 'Read the Samvidhan Terms and Conditions covering website use, educational content, intellectual property and liability.',
}

export default function PageMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const description = descriptions[pathname] || 'Samvidhan is an independent educational platform for learning the Constitution of India.'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }
    tag.content = description
  }, [pathname])
  return null
}