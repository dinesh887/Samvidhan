const platforms = [
  { key: 'instagram', name: 'Instagram', path: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></> },
  { key: 'facebook', name: 'Facebook', path: <path d="M14.2 21v-8h2.7l.4-3.2h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.2H8V13h2.8v8h3.4Z" fill="currentColor" stroke="none"/> },
  { key: 'youtube', name: 'YouTube', path: <><path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8Z"/><path d="m10 15.3 5.2-3.3L10 8.7v6.6Z" fill="currentColor" stroke="none"/></> },
  { key: 'linkedin', name: 'LinkedIn', path: <><path d="M5 8.5H2.4V21H5V8.5ZM3.7 6.8a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2ZM21.6 13.8c0-3.8-2-5.6-4.7-5.6a4.1 4.1 0 0 0-3.7 2V8.5h-2.6V21h2.6v-6.2c0-1.6.3-3.2 2.4-3.2s2.1 1.9 2.1 3.3V21h2.7l1.2-7.2Z" fill="currentColor" stroke="none"/></> },
  { key: 'x', name: 'X', path: <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.8 5.7 22H2.5l7.3-8.4L1.8 2h6.5l4.5 6.7L18.9 2Zm-1.1 17.8h1.7L7.2 4.1H5.4l12.4 15.7Z" fill="currentColor" stroke="none"/> },
]

export default function SocialLinks({ links = {} }) {
  const configured = platforms.map((platform) => ({ ...platform, url: links[platform.key] }))
    .filter(({ url }) => typeof url === 'string' && /^https?:\/\//i.test(url))

  if (!configured.length) return null

  return <nav className="footer-social" aria-label="MySamvidhan social media">
    {configured.map(({ key, name, url, path }) => <a key={key} href={url} target="_blank" rel="noopener noreferrer" aria-label={`MySamvidhan on ${name}`} title={name}>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">{path}</svg>
    </a>)}
  </nav>
}
