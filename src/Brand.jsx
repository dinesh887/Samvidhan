export function Brand({ footer = false }) {
  return <a className={`brand${footer ? ' footer-brand' : ''}`} href="/" aria-label="MySamvidhan home">
    <span className="brand-mark" aria-hidden="true"><img src="/images/mysamvidhan-logo.svg" alt=""/></span>
    <span><b>My<span>Samvidhan</span></b></span>
  </a>
}
