'use client'

// TODO: Replace CAL_COM_URL with the real Cal.com booking link once configured
// e.g. 'https://cal.com/tarudhawan/30min'
const CAL_COM_URL = 'https://cal.com/'
const EMAIL = 'taru.dhawan@gmail.com'

function CalendarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      backgroundColor: 'var(--bg)',
      transition: 'background-color 0.25s',
    }}>

      {/* ── Contact / Booking CTA ── */}
      <div style={{
        padding: '4rem 1.5rem 3.5rem',
        textAlign: 'center',
        maxWidth: '40rem',
        margin: '0 auto',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 700,
          color: 'var(--heading)',
          lineHeight: 1.15,
          marginBottom: '0.75rem',
        }}>
          Let&rsquo;s talk
        </h2>
        <p style={{
          fontSize: '0.9375rem',
          color: 'var(--muted-fg)',
          lineHeight: 1.7,
          marginBottom: '2rem',
        }}>
          Open to advisory conversations, leadership roles, and ambitious programs that need someone who can bridge engineering and strategy.
        </p>

        {/* Primary CTA */}
        <a
          href={CAL_COM_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.625rem',
            padding: '0.875rem 2.25rem',
            borderRadius: '0.625rem',
            backgroundColor: 'var(--accent)',
            color: '#111827',
            fontSize: '1rem',
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            marginBottom: '1.25rem',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.18)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.12)'
          }}
        >
          <CalendarIcon />
          Book a 30-min intro call
        </a>

        {/* Secondary email link */}
        <div>
          <a
            href={`mailto:${EMAIL}`}
            style={{
              fontSize: '0.875rem',
              color: 'var(--muted-fg)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--fg)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted-fg)' }}
          >
            Or email {EMAIL}
          </a>
        </div>
      </div>

      {/* ── Copyright ── */}
      <div style={{
        borderTop: '1px solid var(--border)',
        padding: '1.25rem 1.5rem',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '0.8125rem', color: 'var(--muted-fg)', margin: 0 }}>
          © 2026 Taru Dhawan. Crafted with intention.
        </p>
      </div>

    </footer>
  )
}
