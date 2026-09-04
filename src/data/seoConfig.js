export const siteConfig = {
  name: 'Samvidhan',
  defaultTitle: 'Samvidhan | Understand the Constitution of India',
  defaultDescription: 'Understand the Constitution of India with simple explanations in English and Marathi.',
}

export const seoRoutes = {
  '/': { title: { en: siteConfig.defaultTitle, mr: 'संविधान | भारताचे संविधान समजून घ्या' }, description: { en: siteConfig.defaultDescription, mr: 'भारतीय संविधान, कलमे, मूलभूत अधिकार, कर्तव्ये आणि दुरुस्त्या सोप्या भाषेत समजून घ्या.' }, priority: '1.0', changefreq: 'weekly' },
  '/articles': { title: { en: 'Constitutional Articles | Samvidhan', mr: 'संवैधानिक कलमे | संविधान' }, description: { en: 'Search and understand the Constitutional Articles of India with clear explanations.', mr: 'भारतीय संविधानातील कलमे शोधा आणि स्पष्ट स्पष्टीकरणांसह समजून घ्या.' }, priority: '0.9', changefreq: 'weekly' },
  '/fundamental-rights': { title: { en: 'Fundamental Rights | Samvidhan', mr: 'मूलभूत अधिकार | संविधान' }, description: { en: 'Understand the Fundamental Rights guaranteed by the Constitution of India.', mr: 'भारतीय संविधानाने दिलेले मूलभूत अधिकार समजून घ्या.' }, priority: '0.8', changefreq: 'monthly' },
  '/fundamental-duties': { title: { en: 'Fundamental Duties | Samvidhan', mr: 'मूलभूत कर्तव्ये | संविधान' }, description: { en: 'Learn the Fundamental Duties of citizens of India.', mr: 'भारताच्या नागरिकांची मूलभूत कर्तव्ये जाणून घ्या.' }, priority: '0.8', changefreq: 'monthly' },
  '/directive-principles': { title: { en: 'Directive Principles of State Policy | Samvidhan', mr: 'राज्याच्या धोरणाची मार्गदर्शक तत्त्वे | संविधान' }, description: { en: 'Explore the Directive Principles that guide governance and public policy.', mr: 'शासन आणि सार्वजनिक धोरणाला दिशा देणारी मार्गदर्शक तत्त्वे जाणून घ्या.' }, priority: '0.8', changefreq: 'monthly' },
  '/amendments': { title: { en: 'Constitutional Amendments | Samvidhan', mr: 'संविधान दुरुस्त्या | संविधान' }, description: { en: "Study important Constitutional Amendments and how India's Constitution has evolved.", mr: 'महत्त्वाच्या संविधान दुरुस्त्या आणि संविधानातील बदलांचा अभ्यास करा.' }, priority: '0.8', changefreq: 'monthly' },
  '/quiz': { title: { en: 'Constitution Quiz | Samvidhan', mr: 'संविधान प्रश्नमंजुषा | संविधान' }, description: { en: 'Test your knowledge of the Constitution of India with a free quiz.', mr: 'मोफत प्रश्नमंजुषेद्वारे भारतीय संविधानाचे तुमचे ज्ञान तपासा.' }, priority: '0.7', changefreq: 'monthly' },
  '/faq': { title: { en: 'Indian Constitution FAQs | Frequently Asked Questions – Samvidhan', mr: 'भारतीय संविधान FAQ | वारंवार विचारले जाणारे प्रश्न – Samvidhan' }, description: { en: 'Find answers to frequently asked questions about the Constitution of India, Fundamental Rights, Duties, Articles, Amendments, Preamble and more.', mr: 'भारतीय संविधान, मूलभूत अधिकार, कर्तव्ये, कलमे, उद्देशिका, घटनादुरुस्ती आणि इतर महत्त्वाच्या विषयांवरील वारंवार विचारले जाणारे प्रश्न व उत्तरे जाणून घ्या.' }, priority: '0.8', changefreq: 'monthly' },
  '/about': { title: { en: 'About Samvidhan', mr: 'संविधान विषयी' }, description: { en: 'Learn about Samvidhan, an independent educational platform for constitutional knowledge.', mr: 'संविधान या स्वतंत्र शैक्षणिक व्यासपीठाविषयी जाणून घ्या.' }, priority: '0.5', changefreq: 'yearly' },
  '/contact': { title: { en: 'Contact Samvidhan', mr: 'संविधानशी संपर्क साधा' }, description: { en: 'Contact Samvidhan with questions, suggestions, feedback or corrections.', mr: 'प्रश्न, सूचना, अभिप्राय किंवा दुरुस्त्यांसाठी संविधानशी संपर्क साधा.' }, priority: '0.4', changefreq: 'yearly' },
  '/privacy': { title: { en: 'Privacy Policy | Samvidhan', mr: 'गोपनीयता धोरण | संविधान' }, description: { en: 'Read the Samvidhan Privacy Policy covering information, cookies, analytics and advertising.', mr: 'माहिती, कुकीज, विश्लेषण आणि जाहिरातींसंबंधी संविधानचे गोपनीयता धोरण वाचा.' }, priority: '0.3', changefreq: 'yearly' },
  '/terms': { title: { en: 'Terms & Conditions | Samvidhan', mr: 'नियम आणि अटी | संविधान' }, description: { en: 'Read the Samvidhan Terms and Conditions for using this educational website.', mr: 'या शैक्षणिक वेबसाइटच्या वापरासाठी संविधानचे नियम आणि अटी वाचा.' }, priority: '0.3', changefreq: 'yearly' },
  '/learn': { title: { en: 'Learn Indian Constitution | Samvidhan', mr: 'भारतीय संविधान शिका | संविधान' }, description: { en: 'Learn the Indian Constitution through guided Articles, Rights and exam preparation paths.', mr: 'मार्गदर्शित कलमे, अधिकार आणि परीक्षा तयारीच्या माध्यमातून भारतीय संविधान शिका.' }, priority: '0.8', changefreq: 'monthly' },
  '/exam-preparation': { title: { en: 'Exam Preparation | Samvidhan', mr: 'परीक्षा तयारी | संविधान' }, description: { en: 'Prepare for MPSC and UPSC Constitution and polity examinations.', mr: 'MPSC आणि UPSC संविधान व राज्यशास्त्र परीक्षांची तयारी करा.' }, priority: '0.7', changefreq: 'monthly' },
  '/premium': { title: { en: 'Samvidhan Premium | Learn Better', mr: 'संविधान प्रीमियम | अधिक चांगले शिका' }, description: { en: 'Explore structured constitutional revision, advanced practice and exam preparation.', mr: 'संरचित संविधान उजळणी, प्रगत सराव आणि परीक्षा तयारीचा अनुभव घ्या.' }, priority: '0.5', changefreq: 'monthly' },
  '/article/:id': { indexable: true, changefreq: 'monthly', priority: '0.7' },
  '/dashboard': { indexable: false }, '/progress': { indexable: false }, '/premium-quiz': { indexable: false }, '/notes': { indexable: false }, '/bookmarks': { indexable: false },
}

export function getSeoRoute(pathname) {
  if (seoRoutes[pathname]) return seoRoutes[pathname]
  if (pathname.startsWith('/article/')) return seoRoutes['/article/:id']
  return { title: { en: siteConfig.defaultTitle, mr: 'संविधान | भारताचे संविधान समजून घ्या' }, description: { en: siteConfig.defaultDescription, mr: 'भारतीय संविधानाबद्दल सोप्या भाषेत जाणून घ्या.' }, indexable: false }
}