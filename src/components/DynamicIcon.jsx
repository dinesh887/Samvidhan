import * as Icons from 'lucide-react'

// Resolves an icon by its lucide-react component name (stored as a string
// in data files so content stays JSON-friendly). Falls back to a generic
// bookmark-like icon if the name doesn't match.
export default function DynamicIcon({ name, className, size, strokeWidth }) {
  const IconComponent = Icons[name] || Icons.BookOpen
  return <IconComponent className={className} size={size} strokeWidth={strokeWidth} />
}
