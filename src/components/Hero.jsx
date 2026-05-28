'use client'

import Image from 'next/image'

function FileIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  )
}

const s = {
  section: { paddingTop: '6rem', paddingBottom: '1.5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' },
  container: { maxWidth: '64rem', margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' },
  content: { flex: 1, minWidth: '280px' },
  name: { fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 700, color: 'var(--heading)', lineHeight: 1.1, letterSpacing: '-0.02em' },
  title: { marginTop: '1rem', fontSize: '1.125rem', color: 'var(--primary)', fontWeight: 500 },
  body: { marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--fg)', lineHeight: 1.7 },
  line: { fontSize: '1rem' },
  bold: { fontWeight: 600 },
  missionCard: { marginTop: '2.5rem', backgroundColor: 'var(--card)', borderRadius: '0.75rem', padding: '1.5rem', borderLeft: '4px solid var(--accent)', boxShadow: 'var(--shadow)' },
  missionLabel: { fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '0.75rem' },
  missionText: { fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: '1.125rem', fontStyle: 'italic', color: 'var(--fg)', lineHeight: 1.7 },
  photoWrap: { flexShrink: 0 },
  photo: { width: '240px', height: '240px', borderRadius: '9999px', objectFit: 'cover', objectPosition: 'top', border: '4px solid var(--card)', boxShadow: 'var(--shadow-photo)' },
}

export default function Hero() {
  return (
    <section id="how-i-work" style={s.section}>
      <div style={s.container} className="hero-container">
        <div style={s.content}>
          <h1 style={s.name}>Taru Dhawan</h1>
          <p style={s.title}>Principal Technical Program Manager · Microsoft AI &amp; Office Product Group</p>

          {/* View Resume CTA — opens the resume drawer */}
          <div style={{ marginTop: '1.25rem' }}>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-resume-drawer'))}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.25rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                fontFamily: 'inherit',
                borderRadius: '9999px',
                border: '1px solid var(--border)',
                backgroundColor: 'var(--card)',
                color: 'var(--muted-fg)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: 'var(--shadow)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--primary)'
                e.currentTarget.style.borderColor = 'var(--primary)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--muted-fg)'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              <FileIcon />
              View Resume
            </button>
          </div>

          <div style={s.body}>
            <p style={s.line}><span style={s.bold}>☀️ By day:</span> I govern a $400M COGS portfolio, ship AI agent systems, and turn org-wide complexity into clarity for EVP-level decisions.</p>
            <p style={s.line}><span style={s.bold}>🥾 By night:</span> Trail chaser. Finds clarity at elevation. Perpetual home redesigner who treats every room like a product launch.</p>
          </div>
          <div style={s.missionCard}>
            <p style={s.missionLabel}>Personal Mission Statement</p>
            <p style={s.missionText}>Build systems that outlast you. Bring clarity to hard problems and humanity to hard conversations. Leave every org — and every team — sharper than you found it. Raise the bar, always.</p>
          </div>
        </div>
        <div style={s.photoWrap} className="hero-photo-wrap">
          <Image
            src="/taru-profile.png"
            alt="Taru Dhawan — Principal Technical Program Manager at Microsoft"
            width={240}
            height={240}
            priority
            style={s.photo}
          />
        </div>
      </div>
    </section>
  )
}
