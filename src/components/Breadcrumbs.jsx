import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { getBreadcrumbItems } from '../utils/breadcrumbItems'

export default function Breadcrumbs() {
  const { pathname, search } = useLocation()
  const { language, pick, t } = useLanguage()

  if (pathname === '/') return null

  const items = getBreadcrumbItems(pathname, search, { language, pick, t })

  return (
    <nav aria-label="Breadcrumb" className="page-breadcrumbs">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-2 gap-y-1 px-4 sm:px-6">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1

          return (
            <li
              key={`${item.to || item.label}-${index}`}
              className="flex min-w-0 max-w-full items-center gap-2"
            >
              {index > 0 && <span aria-hidden="true" className="shrink-0 text-navy/35">›</span>}
              {item.to && !isCurrent ? (
                <Link lang={language} to={item.to} className="breadcrumb-link truncate">
                  {item.label}
                </Link>
              ) : (
                <span
                  lang={language}
                  aria-current={isCurrent ? 'page' : undefined}
                  className={`breadcrumb-current truncate${isCurrent ? ' font-medium' : ''}`}
                  title={item.label}
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
