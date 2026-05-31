'use client'

// TODO: Replace with real Cal.com link once configured — matches Footer.jsx
const CAL_COM_URL = 'https://cal.com/'

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function TargetIcon() {
  return (
    <div style={{
      width: '2.25rem',
      height: '2.25rem',
      borderRadius: '0.5rem',
      backgroundColor: 'var(--primary-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}>
      <svg
        aria-hidden="true"
        focusable="false"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    </div>
  )
}

export default function OpenTo() {
  return (
    <section style={{
      backgroundColor: 'var(--primary-subtle)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}
    aria-label="Availability and target roles">
      <div style={{
        maxWidth: '64rem',
        margin: '0 auto',
        padding: '1.375rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1.25rem',
        flexWrap: 'wrap',
      }}>

        {/* Icon */}
        <TargetIcon />

        {/* Copy */}
        <div style={{ flex: 1, minWidth: '260px' }}>
          <p style={{
            fontSize: '0.6875rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--accent-text)',
            marginBottom: '0.3rem',
          }}>
            What I&rsquo;m looking for
          </p>
          <p style={{
            fontSize: '0.9375rem',
            fontWeight: 600,
            color: 'var(--heading)',
            lineHeight: 1.5,
            margin: 0,
          }}>
            Director or VP-level Technical Program Management at companies where AI, infrastructure, or platform work is the core differentiator.{' '}
            <span style={{ fontWeight: 400, color: 'var(--fg)' }}>
              Where engineering depth and executive alignment both matter.
            </span>
          </p>
        </div>

        {/* CTA */}
        <a
          href={CAL_COM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Let's talk — book a call (opens in a new tab)"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.625rem 1.375rem',
            borderRadius: '0.5rem',
            backgroundColor: 'var(--accent)',
            color: '#111827',
            fontSize: '0.9375rem',
            fontWeight: 700,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            transition: 'transform 0.18s, box-shadow 0.18s',
            boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
            flexShrink: 0,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-1px)'
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.15)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 1px 6px rgba(0,0,0,0.1)'
          }}
        >
          Let&rsquo;s talk <ArrowRightIcon />
        </a>

      </div>
    </section>
  )
}
