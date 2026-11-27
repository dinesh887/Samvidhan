import './ReadableText.css'

const listItemPattern = /^\s*(?:(\d+)[.)]|([-*•‣▪]))\s+(.+)$/u

export default function ReadableText({ text, className = '', renderInline }) {
  const value = String(text || '').trim()
  if (!value) return null

  const lines = value.split(/\r?\n/).map((line) => line.trim()).filter(Boolean)
  const entries = lines.map((line) => line.match(listItemPattern))
  const isExplicitList = entries.length > 0 && entries.every(Boolean)

  if (isExplicitList) {
    const isNumbered = entries.every((entry) => entry[1])
    const List = isNumbered ? 'ol' : 'ul'
    const listClass = `readable-list ${isNumbered ? 'readable-list-ordered' : 'readable-list-bulleted'}`
    return (
      <List className={`${listClass} ${className}`.trim()}>
        {entries.map((entry, index) => (
          <li key={`${entry[3]}-${index}`}>{renderInline ? renderInline(entry[3]) : entry[3]}</li>
        ))}
      </List>
    )
  }

  return <p className={className}>{renderInline ? renderInline(value) : value}</p>
}
