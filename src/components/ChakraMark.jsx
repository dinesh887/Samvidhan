// A restrained, line-art wheel motif inspired by the Ashoka Chakra's 24
// spokes — used as a small brand mark and as a single hero background
// element, never as literal flag imagery.
export default function ChakraMark({ className = '', spokes = 24 }) {
  const lines = Array.from({ length: spokes }, (_, i) => {
    const angle = (360 / spokes) * i
    return (
      <line
        key={i}
        x1="50"
        y1="50"
        x2="50"
        y2="8"
        stroke="currentColor"
        strokeWidth="1.4"
        transform={`rotate(${angle} 50 50)`}
      />
    )
  })
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="50" r="4" fill="currentColor" />
      {lines}
    </svg>
  )
}
