import {
  AlertTriangle,
  BookOpen,
  Building2,
  Gavel,
  HeartHandshake,
  Landmark,
  Newspaper,
  PenLine,
  Scale,
  ScrollText,
  ShieldOff,
  Users,
  Wind,
} from 'lucide-react'

const icons = {
  AlertTriangle,
  BookOpen,
  Building2,
  Gavel,
  HeartHandshake,
  Landmark,
  Newspaper,
  PenLine,
  Scale,
  ScrollText,
  ShieldOff,
  Users,
  Wind,
}

// Resolves an icon by its lucide-react component name (stored as a string
// in data files so content stays JSON-friendly). Falls back to a generic
// bookmark-like icon if the name doesn't match.
export default function DynamicIcon({ name, className, size, strokeWidth }) {
  const IconComponent = icons[name] || BookOpen
  return <IconComponent className={className} size={size} strokeWidth={strokeWidth} />
}
