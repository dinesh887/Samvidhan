import { useState } from 'react'
import './FAQPage.css'

export default function FAQAccordion({ items, language, groupName = 'faq-accordion' }) {
  const [openId, setOpenId] = useState(null)
  return <div className="faq-accordion">
    {items.map((item, index) => {
      const isOpen = openId === item.id
      const answerId = `${groupName}-${item.id}-answer`
      return <section className={`faq-accordion-item${isOpen ? ' is-open' : ''}`} key={item.id}>
        <h3><button type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenId(isOpen ? null : item.id)}><span className="faq-question-number" aria-hidden="true">{index + 1}</span><span className="faq-question-text">{item.q[language]}</span><span className="faq-toggle" aria-hidden="true"/></button></h3>
        {isOpen && <div className="faq-answer" id={answerId}><p>{item.a[language]}</p>{item.links?.length > 0 && <nav aria-label={language === 'mr' ? 'संबंधित दुवे' : 'Related links'}>{item.links.map((link) => <a key={link.href} href={link.href}>{link[language]} <span aria-hidden="true">→</span></a>)}</nav>}</div>}
      </section>
    })}
  </div>
}
