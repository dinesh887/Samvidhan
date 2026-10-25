// Category definitions used by the Explore section, the Articles filter bar,
// and the ArticleCard category badge. Keys map to the `categoryKey` field
// on each article in articles.js.

export const categories = [
  {
    key: 'fundamental-rights',
    icon: 'Scale',
    title: { en: 'Fundamental Rights', mr: 'मूलभूत अधिकार' },
    description: {
      en: 'Explore the selected Fundamental Rights provisions available on this site.',
      mr: 'तुमचे मूलभूत अधिकार समजून घ्या.',
    },
    path: '/articles?category=fundamental-rights',
  },
  {
    key: 'citizenship',
    icon: 'Users',
    title: { en: 'Citizenship', mr: 'नागरिकत्व' },
    description: {
      en: 'Read the selected constitutional provision on citizenship.',
      mr: 'भारताचा नागरिक कोण आहे आणि नागरिकत्व कसे कार्य करते.',
    },
    path: '/articles?category=citizenship',
  },
  {
    key: 'parliament',
    icon: 'Landmark',
    title: { en: 'Union Executive', mr: 'केंद्राची कार्यपालिका' },
    description: {
      en: 'Explore the selected Articles about the Union executive.',
      mr: 'केंद्राच्या कार्यपालिकेशी संबंधित निवडक कलमे वाचा.',
    },
    path: '/articles?category=parliament',
  },
  {
    key: 'state-executive',
    icon: 'Building2',
    title: { en: 'State Executive', mr: 'राज्याची कार्यपालिका' },
    description: {
      en: 'Read selected constitutional provisions about State executive offices.',
      mr: 'राज्याच्या कार्यकारी पदांशी संबंधित निवडक घटनात्मक तरतुदी वाचा.',
    },
    path: '/articles?category=state-executive',
  },
  {
    key: 'union-judiciary',
    icon: 'Gavel',
    title: { en: 'Union Judiciary', mr: 'केंद्राची न्यायव्यवस्था' },
    description: {
      en: 'Explore selected constitutional provisions about the Union judiciary.',
      mr: 'केंद्राच्या न्यायव्यवस्थेशी संबंधित निवडक घटनात्मक तरतुदी वाचा.',
    },
    path: '/articles?category=union-judiciary',
  },
  {
    key: 'union-legislature',
    icon: 'Landmark',
    title: { en: 'Union Legislature', mr: 'केंद्राची विधिमंडळ व्यवस्था' },
    description: {
      en: 'Read selected Articles about Parliament and the Union Legislature.',
      mr: 'संसद आणि केंद्राच्या विधिमंडळाशी संबंधित निवडक कलमे वाचा.',
    },
    path: '/articles?category=union-legislature',
  },
  {
    key: 'state-legislature',
    icon: 'Building2',
    title: { en: 'State Legislature', mr: 'राज्य विधिमंडळ' },
    description: {
      en: 'Explore the selected constitutional provisions about State Legislatures.',
      mr: 'राज्य विधिमंडळाशी संबंधित निवडक घटनात्मक तरतुदी वाचा.',
    },
    path: '/articles?category=state-legislature',
  },
  {
    key: 'right-against-exploitation',
    icon: 'ShieldOff',
    title: { en: 'Right against Exploitation', mr: 'शोषणाविरुद्धचा अधिकार' },
    description: {
      en: 'Read the selected provisions concerning exploitation.',
      mr: 'शोषणासंबंधी निवडक घटनात्मक तरतुदी वाचा.',
    },
    path: '/articles?category=right-against-exploitation',
  },
  {
    key: 'emergency-provisions',
    icon: 'AlertTriangle',
    title: { en: 'Emergency Provisions', mr: 'आणीबाणी तरतुदी' },
    description: {
      en: 'Explore the selected constitutional provisions on emergencies.',
      mr: 'आणीबाणीविषयक निवडक घटनात्मक तरतुदी वाचा.',
    },
    path: '/articles?category=emergency-provisions',
  },
  {
    key: 'fundamental-duties',
    icon: 'HeartHandshake',
    title: { en: 'Fundamental Duties', mr: 'मूलभूत कर्तव्ये' },
    description: {
      en: 'Read the selected constitutional provision on Fundamental Duties.',
      mr: 'मूलभूत कर्तव्यांवरील निवडक घटनात्मक तरतूद वाचा.',
    },
    path: '/articles?category=fundamental-duties',
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
    icon: 'Newspaper',
    title: { en: 'Current Affairs', mr: 'चालू घडामोडी' },
    description: {
      en: 'Browse the updates published in the Current Affairs section.',
      mr: 'चालू घडामोडी विभागात प्रकाशित केलेल्या बातम्या वाचा.',
    },
    path: '/current-affairs',
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
