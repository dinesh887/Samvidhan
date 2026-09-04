import { useLanguage } from '../context/LanguageContext'

export default function QuizCard({ question, index, total, selected, onSelect, showResult }) {
  const { pick, t, language } = useLanguage()

  return (
    <div className="rounded-2xl border border-navy/10 dark:border-ink-dark/10 bg-white/60 dark:bg-white/[0.04] p-6 sm:p-8">
      <div className="flex items-center justify-between">
        <span lang={language} className="text-sm font-medium text-saffron">
          {t('quiz_question')} {index + 1} {t('quiz_of')} {total}
        </span>
      </div>

      <div className="mt-2 h-1.5 w-full rounded-full bg-navy/10 dark:bg-white/10">
        <div
          className="h-1.5 rounded-full bg-saffron transition-all duration-300"
          style={{ width: `${((index + 1) / total) * 100}%` }}
        />
      </div>

      <h2 lang={language} className="font-display mt-6 text-xl font-semibold leading-snug text-navy dark:text-ink-dark sm:text-2xl">
        {pick(question.question)}
      </h2>

      <div className="mt-6 grid gap-3">
        {question.options.map((opt, i) => {
          const isSelected = selected === i
          const isCorrect = i === question.correctIndex
          let stateClass =
            'border-navy/15 dark:border-ink-dark/20 hover:border-saffron/50'
          if (showResult) {
            if (isCorrect) stateClass = 'border-leaf bg-leaf/10 text-leaf-dark dark:text-leaf-light'
            else if (isSelected && !isCorrect) stateClass = 'border-red-400 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-300'
            else stateClass = 'border-navy/10 dark:border-ink-dark/10 opacity-60'
          } else if (isSelected) {
            stateClass = 'border-navy bg-navy/5 dark:border-saffron dark:bg-saffron/10'
          }

          return (
            <button
              key={i}
              type="button"
              disabled={showResult}
              onClick={() => onSelect(i)}
              lang={language}
              className={`rounded-xl border px-4 py-3 text-left text-sm sm:text-base transition-colors ${stateClass}`}
            >
              {pick(opt)}
            </button>
          )
        })}
      </div>
    </div>
  )
}
