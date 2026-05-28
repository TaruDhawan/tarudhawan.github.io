'use client'

const s = {
  section: { paddingTop: '7rem', paddingBottom: '2rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' },
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
      <div style={s.container}>
        <div style={s.content}>
          <h1 style={s.name}>Taru Dhawan</h1>
          <p style={s.title}>Principal Technical Program Manager · Microsoft AI &amp; Office Product Group</p>
          <div style={s.body}>
            <p style={s.line}><span style={s.bold}>☀️ By day:</span> I govern a $400M COGS portfolio, ship AI agent systems, and turn org-wide complexity into clarity for EVP-level decisions.</p>
            <p style={s.line}><span style={s.bold}>🥾 By night:</span> Trail chaser. Finds clarity at elevation. Perpetual home redesigner who treats every room like a product launch.</p>
          </div>
          <div style={s.missionCard}>
            <p style={s.missionLabel}>Personal Mission Statement</p>
            <p style={s.missionText}>Build systems that outlast you. Bring clarity to hard problems and humanity to hard conversations. Leave every org — and every team — sharper than you found it. Raise the bar, always.</p>
          </div>
        </div>
        <div style={s.photoWrap}>
          <img
            src="https://tarudhawan.netlify.app/images/taru-profile.png"
            alt="Taru Dhawan"
            style={s.photo}
            onError={e => { e.target.style.backgroundColor = 'var(--border)'; e.target.removeAttribute('src') }}
          />
        </div>
      </div>
    </section>
  )
}
