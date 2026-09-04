import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 dark:border-ink-dark/20 text-navy dark:text-ink-dark hover:bg-navy/5 dark:hover:bg-white/10 transition-colors"
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
}
