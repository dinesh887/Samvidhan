import { Seo, SiteHeader, SiteFooter } from './ArticlePages.jsx'
import { useLanguage } from './LanguageContext.jsx'
import './FooterPages.css'

const pages = {
  about: {
    en: ['About MySamvidhan', 'About MySamvidhan | Understand the Constitution', 'An independent educational site that helps people explore the Constitution of India.', 'MySamvidhan helps readers understand the Constitution of India through accessible educational guides.'],
    mr: ['MySamvidhan बद्दल', 'MySamvidhan बद्दल | संविधान समजून घ्या', 'भारतीय संविधानाचा अभ्यास करण्यासाठी शैक्षणिक मार्गदर्शक.', 'भारतीय संविधान सोप्या व सुलभ भाषेत समजून घेण्यासाठी MySamvidhan मदत करते.'],
  },
  contact: {
    en: ['Contact Us', 'Contact MySamvidhan', 'Send questions, suggestions and corrections to MySamvidhan.', 'For questions, suggestions or corrections, email info@mysamvidhan.in.'],
    mr: ['संपर्क साधा', 'MySamvidhan शी संपर्क', 'प्रश्न, सूचना आणि दुरुस्त्यांसाठी MySamvidhan शी संपर्क साधा.', 'प्रश्न, सूचना किंवा दुरुस्त्यांसाठी info@mysamvidhan.in येथे ईमेल करा.'],
  },
  privacy: {
    en: ['Privacy Policy', 'Privacy Policy | MySamvidhan', 'Information about language preferences, enquiries, cookies and third-party services.', 'The site stores your language selection in browser local storage. Contact enquiries are opened in your email application; they are not submitted to a site server. Hosting and advertising providers may process technical data under their own policies.'],
    mr: ['गोपनीयता धोरण', 'गोपनीयता धोरण | MySamvidhan', 'भाषा निवड, चौकशी, कुकीज आणि तृतीय पक्ष सेवांविषयी माहिती.', 'संकेतस्थळ तुमची भाषा निवड ब्राउझरच्या स्थानिक संचयनात जतन करते. संपर्क चौकशी ईमेल अनुप्रयोगात उघडते; ती संकेतस्थळाच्या सर्व्हरवर पाठवली जात नाही. होस्टिंग व जाहिरात सेवा पुरवठादार त्यांच्या धोरणांनुसार तांत्रिक माहिती वापरू शकतात.'],
  },
  terms: {
    en: ['Terms & Conditions', 'Terms & Conditions | MySamvidhan', 'Terms for using this educational website.', 'MySamvidhan content is provided for general educational purposes. Do not treat simplified explanations as legal advice or as a replacement for the Constitution, legislation or court decisions.'],
    mr: ['अटी व शर्ती', 'अटी व शर्ती | MySamvidhan', 'या शैक्षणिक संकेतस्थळाच्या वापराच्या अटी.', 'MySamvidhan वरील मजकूर सर्वसाधारण शैक्षणिक उद्देशासाठी आहे. सोप्या स्पष्टीकरणांना कायदेशीर सल्ला किंवा संविधान, कायदे व न्यायालयीन निर्णयांचा पर्याय समजू नका.'],
  },
  disclaimer: {
    en: ['Disclaimer', 'Educational Disclaimer | MySamvidhan', 'Educational purpose and limitations of constitutional information.', 'MySamvidhan is an independent educational website. Its simplified information is not legal advice. For authoritative information, consult official publications and qualified professionals.'],
    mr: ['अस्वीकरण', 'शैक्षणिक अस्वीकरण | MySamvidhan', 'घटनात्मक माहितीचा शैक्षणिक उद्देश आणि मर्यादा.', 'MySamvidhan हे स्वतंत्र शैक्षणिक संकेतस्थळ आहे. येथील सोपी माहिती कायदेशीर सल्ला नाही. अधिकृत माहितीसाठी शासकीय प्रकाशने आणि पात्र तज्ज्ञांचा सल्ला घ्या.'],
  },
}

function StaticPage({ type }) {
  const { language } = useLanguage()
  const mr = language === 'mr'
  const [heading, title, description, body] = pages[type][language]
  const path = type === 'privacy' ? '/privacy-policy' : type === 'terms' ? '/terms-and-conditions' : `/${type}`
  return <><Seo title={title} description={description} path={path} /><SiteHeader /><main className="footer-page"><nav className="footer-breadcrumb" aria-label={mr ? 'मार्गक्रमण' : 'Breadcrumb'}><a href="/">{mr ? 'मुख्यपृष्ठ' : 'Home'}</a><span aria-hidden="true">›</span><span aria-current="page">{heading}</span></nav><header className="footer-page-hero"><h1>{heading}</h1></header><article className="footer-document"><section className="footer-content-section"><h2>{mr ? 'MySamvidhan' : 'MySamvidhan'}</h2><p>{body}</p>{type === 'contact' && <a href="mailto:info@mysamvidhan.in">info@mysamvidhan.in</a>}</section></article></main><SiteFooter /></>
}

export function AboutPage() { return <StaticPage type="about" /> }
export function ContactPage() { return <StaticPage type="contact" /> }
export function PrivacyPage() { return <StaticPage type="privacy" /> }
export function TermsPage() { return <StaticPage type="terms" /> }
export function DisclaimerPage() { return <StaticPage type="disclaimer" /> }
