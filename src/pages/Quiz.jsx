import { useEffect, useState } from 'react'
import { RotateCcw, Trophy } from 'lucide-react'
import QuizCard from '../components/QuizCard'
import { useLanguage } from '../context/LanguageContext'
import { quizData } from '../data/quizData'
import Advertisement from '../components/Advertisement'

export default function Quiz() {
  const { t, language } = useLanguage()
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [answers, setAnswers] = useState([])
  const [finished, setFinished] = useState(false)

  const question = quizData[index]
  const isLast = index === quizData.length - 1

  const handleSelect = (i) => {
    if (showResult) return
    setSelected(i)
    setShowResult(true)
    setAnswers((prev) => [...prev, i === question.correctIndex])
  }

  const handleNext = () => {
    if (isLast) {
      setFinished(true)
      return
    }
    setIndex((i) => i + 1)
    setSelected(null)
    setShowResult(false)
  }

  const restart = () => {
    setIndex(0)
    setSelected(null)
    setShowResult(false)
    setAnswers([])
    setFinished(false)
  }

  if (finished) {
    const correct = answers.filter(Boolean).length
    const wrong = answers.length - correct
    const percentage = Math.round((correct / answers.length) * 100)
    const excellent = percentage >= 70

    return (
      <div className="mx-auto max-w-lg px-4 sm:px-6 py-16 sm:py-24 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-saffron/10 text-saffron">
          <Trophy size={28} />
        </div>
        <h1 lang={language} className="font-display mt-6 text-2xl font-semibold text-navy dark:text-ink-dark">
          {excellent ? t('quiz_excellent') : t('quiz_keep_learning')}
        </h1>

        <div className="mt-8 rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-8">
          <span lang={language} className="text-sm text-ink/50 dark:text-ink-dark/50">
            {t('quiz_score')}
          </span>
          <p className="font-display mt-1 text-5xl font-semibold text-navy dark:text-saffron">
            {percentage}%
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-display text-2xl font-semibold text-leaf">{correct}</p>
              <p lang={language} className="mt-1 text-ink/50 dark:text-ink-dark/50">
                {t('quiz_correct')}
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-red-400">{wrong}</p>
              <p lang={language} className="mt-1 text-ink/50 dark:text-ink-dark/50">
                {t('quiz_wrong')}
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={restart}
          lang={language}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy dark:bg-saffron px-6 py-3 text-sm font-medium text-paper dark:text-ink"
        >
          <RotateCcw size={16} /> {t('quiz_try_again')}
        </button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16">
      <h1 lang={language} className="font-display text-2xl font-semibold text-navy dark:text-ink-dark sm:text-3xl">
        {t('quiz_title')}
      </h1>

      <div className="mt-8">
        <QuizCard
          question={question}
          index={index}
          total={quizData.length}
          selected={selected}
          onSelect={handleSelect}
          showResult={showResult}
        />
      </div>
      <Advertisement placement="article" />

      {showResult && (
        <button
          type="button"
          onClick={handleNext}
          lang={language}
          className="mt-6 w-full rounded-full bg-navy dark:bg-saffron py-3 text-sm font-medium text-paper dark:text-ink sm:w-auto sm:px-8"
        >
          {isLast ? t('quiz_finish') : t('quiz_next')}
        </button>
      )}
    </div>
  )
}
