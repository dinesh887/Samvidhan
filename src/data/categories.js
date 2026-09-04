// Category definitions used by the Explore section, the Articles filter bar,
// and the ArticleCard category badge. Keys map to the `categoryKey` field
// on each article in articles.js.

export const categories = [
  {
    key: 'fundamental-rights',
    icon: 'Scale',
    title: { en: 'Fundamental Rights', mr: 'मूलभूत अधिकार' },
    description: {
      en: 'Understand your fundamental rights.',
      mr: 'तुमचे मूलभूत अधिकार समजून घ्या.',
    },
    path: '/fundamental-rights',
  },
  {
    key: 'citizenship',
    icon: 'Users',
    title: { en: 'Citizenship', mr: 'नागरिकत्व' },
    description: {
      en: 'Who is a citizen of India, and how citizenship works.',
      mr: 'भारताचा नागरिक कोण आहे आणि नागरिकत्व कसे कार्य करते.',
    },
    path: '/articles?category=citizenship',
  },
  {
    key: 'union-government',
    icon: 'Landmark',
    title: { en: 'Union Government', mr: 'केंद्र सरकार' },
    description: {
      en: 'Explore Articles Constitutional Articles and understand their meaning.',
      mr: 'केंद्र सरकारशी संबंधित कलमे आणि त्यांचा अर्थ जाणून घ्या.',
    },
    path: '/articles?category=union-government',
  },
  {
    key: 'state-government',
    icon: 'Building2',
    title: { en: 'State Government', mr: 'राज्य सरकार' },
    description: {
      en: 'How state governments are structured and empowered.',
      mr: 'राज्य सरकारांची रचना आणि अधिकार कसे ठरतात.',
    },
    path: '/articles?category=state-government',
  },
  {
    key: 'judiciary',
    icon: 'Gavel',
    title: { en: 'Judiciary', mr: 'न्यायव्यवस्था' },
    description: {
      en: 'Learn about landmark Supreme Court judgments.',
      mr: 'सर्वोच्च न्यायालयाच्या महत्त्वाच्या निकालांबद्दल जाणून घ्या.',
    },
    path: '/articles?category=judiciary',
  },
  {
    key: 'emergency-provisions',
    icon: 'AlertTriangle',
    title: { en: 'Emergency Provisions', mr: 'आणीबाणी तरतुदी' },
    description: {
      en: 'What happens to governance during a declared emergency.',
      mr: 'आणीबाणी जाहीर झाल्यावर शासनव्यवस्थेत काय बदल होतात.',
    },
    path: '/articles?category=emergency-provisions',
  },
]

// Cards shown in the homepage "Explore the Constitution" section — a mix of
// article categories and the standalone content pages (duties, DPSP, amendments).
export const exploreCards = [
  {
    icon: 'ScrollText',
    title: { en: 'Articles', mr: 'कलमे' },
    description: {
      en: 'Explore Constitutional Articles and understand their meaning.',
      mr: 'संवैधानिक कलमे जाणून घ्या आणि त्यांचा अर्थ समजून घ्या.',
    },
    path: '/articles',
  },
  {
    icon: 'Scale',
    title: { en: 'Fundamental Rights', mr: 'मूलभूत अधिकार' },
    description: { en: 'Understand your fundamental rights.', mr: 'तुमचे मूलभूत अधिकार समजून घ्या.' },
    path: '/fundamental-rights',
  },
  {
    icon: 'HeartHandshake',
    title: { en: 'Fundamental Duties', mr: 'मूलभूत कर्तव्ये' },
    description: { en: 'Know your duties as a citizen.', mr: 'नागरिक म्हणून तुमची कर्तव्ये जाणून घ्या.' },
    path: '/fundamental-duties',
  },
  {
    icon: 'Landmark',
    title: { en: 'Directive Principles', mr: 'मार्गदर्शक तत्त्वे' },
    description: {
      en: 'Learn about the principles guiding the government.',
      mr: 'शासनाला दिशा देणाऱ्या तत्त्वांबद्दल जाणून घ्या.',
    },
    path: '/directive-principles',
  },
  {
    icon: 'PenLine',
    title: { en: 'Amendments', mr: 'दुरुस्त्या' },
    description: {
      en: 'Explore important Constitutional Amendments.',
      mr: 'महत्त्वाच्या संविधान दुरुस्त्यांबद्दल जाणून घ्या.',
    },
    path: '/amendments',
  },
  {
    icon: 'Gavel',
    title: { en: 'Important Cases', mr: 'महत्त्वाचे खटले' },
    description: {
      en: 'Learn about landmark Supreme Court judgments.',
      mr: 'सर्वोच्च न्यायालयाच्या महत्त्वाच्या निकालांबद्दल जाणून घ्या.',
    },
    path: '/articles?category=judiciary',
  },
]

// Homepage statistic cards. These figures are structural placeholders —
// wire them to a verified source before publishing, per the content rules
// in README.md.
export const heroStats = [
  { key: 'stat_articles', value: '470+', verified: false },
  { key: 'stat_parts', value: '25', verified: false },
  { key: 'stat_schedules', value: '12', verified: false },
  { key: 'stat_amendments', value: '106+', verified: false },
]

export function getCategoryByKey(key) {
  return categories.find((c) => c.key === key)
}
