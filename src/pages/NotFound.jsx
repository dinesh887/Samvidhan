import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-semibold text-navy dark:text-ink-dark">
        Page not found
      </h1>
      <p className="mt-3 text-ink/60 dark:text-ink-dark/60">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="mt-6 inline-block text-saffron">
        ← Back to Home
      </Link>
    </div>
  )
}
