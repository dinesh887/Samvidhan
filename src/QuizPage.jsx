import { useEffect, useMemo, useState } from 'react'
import { SiteFooter, SiteHeader, Seo } from './ArticlePages.jsx'
import { quizTopics } from './data/quizQuestions.js'
import { useLanguage } from './LanguageContext.jsx'
import './QuizPage.css'

const iconPaths = {
  book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/><path d="M8 7h8M8 11h8"/></>,
  scroll: <><path d="M8 21h12a2 2 0 0 0 2-2V7H8a4 4 0 0 0 0 8h14"/><path d="M8 7V5a3 3 0 0 1 3-3h9v5M8 15v6"/><path d="M12 11h7"/></>,
  shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
  landmark: <><path d="M3 21h18M5 18h14M6 18V9h12v9M4 9h16L12 3 4 9Z"/><path d="M9 11v5m3-5v5m3-5v5"/></>,
  branch: <><path d="M6 3v12a3 3 0 0 0 3 3h9"/><path d="M18 21V9a3 3 0 0 0-3-3H6"/><circle cx="6" cy="3" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="21" r="2"/><circle cx="18" cy="6" r="2"/></>,
  globe: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/></>,
  atom: <><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.2-2.2.9-8.2-3-12.1S7.3 2.9 5.1 5.1s-.9 8.2 3 12.1 9.9 5.2 12.1 3Z"/><path d="M3.8 20.2c-2.2-2.2-.9-8.2 3-12.1s9.9-5.2 12.1-3 .9 8.2-3 12.1-9.9 5.2-12.1 3Z"/></>,
  monitor: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/></>,
  check: <path d="m5 12 4 4L19 6"/>, arrow: <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>, close: <><path d="m18 6-12 12M6 6l12 12"/></>,
}
function Icon({ name, size = 20, ...props }) { return <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>{iconPaths[name]}</svg> }
const iconByTopic = { general: 'globe', 'current-affairs': 'scroll', constitution: 'book', history: 'landmark', geography: 'globe', science: 'atom', computer: 'monitor', english: 'book' }
const labels = {
  en: { eyebrow: 'KNOWLEDGE · LEARNING · DISCOVERY', title: 'How Well Do You Know India?', intro: 'Explore your knowledge, challenge your understanding and discover how much you know about India, its Constitution, history and the world around you.', start: 'Start your quiz', explore: 'Explore topics', arena: 'Choose Your Knowledge Arena', arenaSub: 'Eight ways to explore what you know. Choose one to begin.', personalize: 'Personalise Your Challenge', level: 'Difficulty level', language: 'Choose language', questions: 'Number of questions', easy: 'Easy', medium: 'Medium', hard: 'Hard', scoreNote: 'Difficulty changes the score multiplier. Every level uses the same verified question pool.', begin: 'Begin this challenge', quizOf: 'Question', previous: 'Previous', next: 'Next question', overview: 'Question overview', submit: 'Submit quiz', unanswered: 'unanswered', modalTitle: 'Ready to submit?', modalBody: 'You still have unanswered questions. You can review them or submit now.', review: 'Review answers', submitNow: 'Submit now', result: 'Your Knowledge, Your Progress', correct: 'Correct', incorrect: 'Incorrect', unansweredCount: 'Unanswered', score: 'Score', percent: 'Percentage', reviewTitle: 'Review your answers', selected: 'Your answer', rightAnswer: 'Correct answer', explanation: 'Explanation', retry: 'Retry quiz', another: 'Explore another subject', home: 'Back to quiz home', source: 'Reference', answered: 'answered', close: 'Close', question: 'Questions', loading: 'Select a subject and start when you are ready.' },
  mr: { eyebrow: 'ज्ञान · शिकणे · शोध', title: 'भारताबद्दल तुम्हाला किती माहिती आहे?', intro: 'तुमचे ज्ञान तपासा आणि भारत, संविधान, इतिहास तसेच आपल्या सभोवतालच्या जगाबद्दल अधिक जाणून घ्या.', start: 'क्विझ सुरू करा', explore: 'विषय पाहा', arena: 'तुमचा ज्ञानविषय निवडा', arenaSub: 'तुमच्या आवडीचा विषय निवडा आणि सुरुवात करा.', personalize: 'तुमचे आव्हान ठरवा', level: 'अडचणीची पातळी', language: 'भाषा निवडा', questions: 'प्रश्नांची संख्या', easy: 'सोपी', medium: 'मध्यम', hard: 'कठीण', scoreNote: 'अडचणीच्या पातळीनुसार गुणांचे गुणक बदलते. सर्व पातळ्यांसाठी तोच प्रश्नसंच वापरला जातो.', begin: 'क्विझ सुरू करा', quizOf: 'प्रश्न', previous: 'मागील', next: 'पुढील प्रश्न', overview: 'प्रश्न सूची', submit: 'क्विझ सबमिट करा', unanswered: 'अनुत्तरित', modalTitle: 'सबमिट करायचे?', modalBody: 'काही प्रश्नांची उत्तरे दिलेली नाहीत. त्यांचा आढावा घ्या किंवा आत्ताच सबमिट करा.', review: 'उत्तरे तपासा', submitNow: 'आत्ताच सबमिट करा', result: 'तुमचे ज्ञान, तुमची प्रगती', correct: 'बरोबर', incorrect: 'चूक', unansweredCount: 'अनुत्तरित', score: 'गुण', percent: 'टक्केवारी', reviewTitle: 'उत्तरांचा आढावा', selected: 'तुमचे उत्तर', rightAnswer: 'योग्य उत्तर', explanation: 'स्पष्टीकरण', retry: 'पुन्हा प्रयत्न करा', another: 'दुसरा विषय निवडा', home: 'क्विझ मुख्यपृष्ठ', source: 'संदर्भ', answered: 'उत्तरे दिली', close: 'बंद करा', question: 'प्रश्न', loading: 'विषय निवडा आणि तयार झाल्यावर सुरुवात करा.' },
}
const shuffle = (items) => { const out = [...items]; for (let i = out.length - 1; i > 0; i -= 1) { const j = Math.floor(Math.random() * (i + 1)); [out[i], out[j]] = [out[j], out[i]] } return out }
const optionsFor = (topic, entry, index) => {
  const unique = new Map()
  for (const option of entry.options) if (!unique.has(option.en)) unique.set(option.en, option)
  for (const other of topic.facts) if (!unique.has(other.answer)) unique.set(other.answer, { en: other.answer, mr: other.answerMr, correct: false })
  const opts = [...unique.values()].slice(0, 4)
  if (!opts.some((o) => o.correct)) opts[0] = entry.options.find((o) => o.correct)
  return shuffle(opts).map((option, i) => ({ ...option, key: `${entry.id}-${index}-${i}` }))
}
const difficultyMultiplier = { easy: 1, medium: 2, hard: 3 }

export default function QuizPage() {
  const [topicId, setTopicId] = useState('general')
  const [difficulty, setDifficulty] = useState('medium')
  const { language } = useLanguage()
  const [count, setCount] = useState(20)
  const [stage, setStage] = useState('setup')
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState({})
  const [index, setIndex] = useState(0)
  const [confirm, setConfirm] = useState(false)
  const t = labels[language]
  const topic = quizTopics.find((item) => item.id === topicId) || quizTopics[0]
  const current = questions[index]
  useEffect(() => {
    if (!confirm) return undefined
    const onKeyDown = (event) => { if (event.key === 'Escape') setConfirm(false) }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [confirm])
  const stats = useMemo(() => {
    let correct = 0
    questions.forEach((q) => { if (q.options.find((o) => o.key === answers[q.id])?.correct) correct += 1 })
    const answered = Object.keys(answers).length
    return { correct, answered, incorrect: answered - correct, unanswered: questions.length - answered }
  }, [questions, answers])
  function start() {
    const items = shuffle(topic.facts).slice(0, Math.min(count, topic.facts.length)).map((fact, i) => ({ ...fact, options: optionsFor(topic, { ...fact, options: topic.facts.map((f) => ({ en: f.answer, mr: f.answerMr, correct: f.id === fact.id })) }, i), explanation: { en: `The answer is ${fact.answer}.`, mr: `योग्य उत्तर: ${fact.answerMr}.` }, topic }))
    setQuestions(items); setAnswers({}); setIndex(0); setConfirm(false); setStage('playing'); window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  function finish() { setConfirm(false); setStage('results'); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  function resetHome() { setStage('setup'); setQuestions([]); setAnswers({}); setConfirm(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const progress = questions.length ? Math.round(((index + 1) / questions.length) * 100) : 0

  return <>
    <Seo title="India Knowledge Quiz | MySamvidhan" description="Explore India, the Constitution, history, geography, science and more with the MySamvidhan quiz." path="/quiz" />
    <SiteHeader />
    <main className={`quiz-page quiz-${stage}`}>
      {stage === 'setup' && <>
        <section className="quiz-hero">
          <div className="quiz-hero-copy"><p className="quiz-eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p>{t.intro}</p><div className="quiz-hero-actions"><button className="quiz-primary" onClick={() => document.getElementById('quiz-config')?.scrollIntoView({ behavior: 'smooth' })}>{t.start}<Icon name="arrow" size={18} /></button><a className="quiz-secondary" href="#quiz-topics">{t.explore}</a></div></div>
          <div className="quiz-hero-art" aria-hidden="true"><div className="quiz-art-ring"/><div className="quiz-art-number">01 <span>/ 08</span></div><div className="quiz-art-book"><Icon name="book" size={52}/><span>INDIA<br/>KNOWLEDGE</span></div><div className="quiz-art-caption">A curious mind<br/>is a powerful thing.</div><i className="quiz-art-dot"/></div>
        </section>
        <section id="quiz-topics" className="quiz-topics"><div className="quiz-section-heading"><div><p className="quiz-eyebrow">FIND YOUR SUBJECT</p><h2>{t.arena}</h2></div><p>{t.arenaSub}</p></div>
          <div className="quiz-topic-list">{quizTopics.map((item, i) => <button type="button" key={item.id} className={`quiz-topic ${item.id === topicId ? 'is-active' : ''}`} onClick={() => setTopicId(item.id)} aria-pressed={item.id === topicId}><span className="quiz-topic-index">0{i + 1}</span><Icon name={iconByTopic[item.id] || 'book'} size={21}/><span className="quiz-topic-copy"><strong>{item.name[language]}</strong><small>{item.description[language]}</small></span><Icon name="arrow" className="quiz-topic-arrow" size={18}/></button>)}</div>
        </section>
        <section className="quiz-config" id="quiz-config"><div className="quiz-config-title"><p className="quiz-eyebrow">MAKE IT YOURS</p><h2>{t.personalize}</h2><p>{t.scoreNote}</p></div><div className="quiz-config-options">
          <fieldset><legend>{t.level}</legend><div className="quiz-segments">{['easy','medium','hard'].map((level) => <button type="button" className={difficulty === level ? 'selected' : ''} aria-pressed={difficulty === level} key={level} onClick={() => setDifficulty(level)}>{t[level]}</button>)}</div></fieldset>
          <fieldset><legend>{t.questions}</legend><div className="quiz-segments">{[5,10,20].map((n) => <button type="button" className={count === n ? 'selected' : ''} aria-pressed={count === n} key={n} onClick={() => setCount(n)}>{n}</button>)}</div></fieldset>
        </div><div className="quiz-config-summary"><span><b>{topic.name[language]}</b><small>{t.questions} · {count} &nbsp; / &nbsp; {t[difficulty]} &nbsp; / &nbsp; {language === 'en' ? 'English' : 'मराठी'} &nbsp; / &nbsp; ×{difficultyMultiplier[difficulty]}</small></span><button className="quiz-primary" onClick={start}>{t.begin}<Icon name="arrow" size={18}/></button></div></section>
      </>}
      {stage === 'playing' && current && <section className="quiz-play"><div className="quiz-play-top"><button className="quiz-back" onClick={() => setConfirm(true)}><Icon name="close" size={16}/> {t.home}</button><span>{topic.name[language]} <i>/</i> {difficulty}</span><button className="quiz-submit" onClick={() => setConfirm(true)}>{t.submit}</button></div>
        <div className="quiz-progress-line"><span style={{ width: `${progress}%` }}/></div><div className="quiz-play-meta"><span>{t.quizOf} <b>{index + 1}</b> / {questions.length}</span><span>{stats.answered} {t.answered}</span></div>
        <div className="quiz-question-layout"><div className="quiz-question-main"><p className="quiz-eyebrow">{topic.name[language]} · {String(index + 1).padStart(2,'0')}</p><h1>{language === 'en' ? current.question : current.questionMr}</h1><div className="quiz-options">{current.options.map((option, i) => <button key={option.key} type="button" className={`quiz-option ${answers[current.id] === option.key ? 'chosen' : ''}`} onClick={() => setAnswers((prev) => ({ ...prev, [current.id]: option.key }))} aria-pressed={answers[current.id] === option.key}><span className="quiz-option-letter">{String.fromCharCode(65 + i)}</span><span>{language === 'en' ? option.en : option.mr}</span>{answers[current.id] === option.key && <Icon name="check" size={18}/>}</button>)}</div>
          <div className="quiz-question-nav"><button onClick={() => setIndex(Math.max(0, index - 1))} disabled={index === 0}><Icon name="arrow" className="quiz-arrow-reverse" size={17}/>{t.previous}</button><button className="quiz-next" onClick={() => index < questions.length - 1 ? setIndex(index + 1) : setConfirm(true)}>{index === questions.length - 1 ? t.submit : t.next}<Icon name="arrow" size={17}/></button></div>
        </div><aside className="quiz-overview"><h2>{t.overview}</h2><div className="quiz-overview-grid">{questions.map((q, i) => <button key={q.id} onClick={() => setIndex(i)} className={`${i === index ? 'current' : ''} ${answers[q.id] ? 'answered' : ''}`} aria-label={`${t.question} ${i + 1}${answers[q.id] ? ', '+t.answered : ''}`}>{i + 1}</button>)}</div><p>{stats.answered} {t.answered} · {stats.unanswered} {t.unanswered}</p></aside></div>
      </section>}
      {stage === 'results' && <section className="quiz-results"><p className="quiz-eyebrow">{topic.name[language]} · {difficulty}</p><h1>{t.result}</h1><p className="quiz-result-deck">{stats.correct} / {questions.length} · {Math.round(stats.correct / questions.length * 100)}%</p><div className="quiz-result-grid"><div className="quiz-score-ring" style={{'--score': `${Math.round(stats.correct / questions.length * 100)}%`}}><strong>{Math.round(stats.correct / questions.length * 100)}<small>%</small></strong></div><div className="quiz-result-stats"><div><b>{questions.length}</b><span>{t.questions}</span></div><div><b>{stats.correct}</b><span>{t.correct}</span></div><div><b>{stats.incorrect}</b><span>{t.incorrect}</span></div><div><b>{stats.unanswered}</b><span>{t.unansweredCount}</span></div><div><b>{stats.correct * difficultyMultiplier[difficulty]}</b><span>{t.score} · ×{difficultyMultiplier[difficulty]}</span></div></div></div>
        <div className="quiz-result-actions"><button className="quiz-primary" onClick={start}>{t.retry}<Icon name="arrow" size={18}/></button><button className="quiz-outline" onClick={resetHome}>{t.another}</button><button className="quiz-text-button" onClick={resetHome}>{t.home}</button></div>
        <div className="quiz-review"><h2>{t.reviewTitle}</h2>{questions.map((q, i) => { const picked = q.options.find((o) => o.key === answers[q.id]); const correct = q.options.find((o) => o.correct); return <article key={q.id} className={`quiz-review-item ${picked?.correct ? 'review-correct' : 'review-wrong'}`}><span className="quiz-review-number">{String(i + 1).padStart(2,'0')}</span><div><h3>{language === 'en' ? q.question : q.questionMr}</h3><p><b>{t.selected}:</b> {picked ? (language === 'en' ? picked.en : picked.mr) : '—'}</p><p><b>{t.rightAnswer}:</b> {language === 'en' ? correct.en : correct.mr}</p><p><b>{t.explanation}:</b> {language === 'en' ? q.explanation.en : q.explanation.mr}</p><a href={q.topic.source.href}>{t.source}: {q.topic.source.label} <Icon name="arrow" size={14}/></a></div></article> })}</div>
      </section>}
    </main>
    <SiteFooter />
    {confirm && <div className="quiz-modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setConfirm(false) }}><section className="quiz-modal" role="dialog" aria-modal="true" aria-labelledby="quiz-modal-title"><button className="quiz-modal-close" onClick={() => setConfirm(false)} aria-label={t.close}><Icon name="close"/></button><p className="quiz-eyebrow">{stats.unanswered} {t.unanswered}</p><h2 id="quiz-modal-title">{t.modalTitle}</h2><p>{t.modalBody}</p><div><button className="quiz-outline" onClick={() => { setConfirm(false); const next = questions.findIndex((q) => !answers[q.id]); if (next >= 0) setIndex(next) }}>{t.review}</button><button className="quiz-primary" onClick={finish}>{t.submitNow}<Icon name="arrow" size={17}/></button></div></section></div>}
  </>
}
