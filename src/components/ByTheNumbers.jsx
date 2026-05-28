const stats = [
  { label: 'COGS Portfolio', value: '$400M', desc: 'Governed across Office Product Group' },
  { label: 'Direct Savings Delivered', value: '$40M', desc: 'Cost reinvested toward user-facing innovation' },
  { label: 'Manual Hours Saved', value: '240K+', desc: 'Engineering hours freed for higher-impact work' },
  { label: 'Certificates Automated', value: '20K+', desc: 'Eliminated manual rotation at scale' },
  { label: 'Azure Resources Secured', value: '13K+', desc: 'Protecting services used by millions' },
  { label: 'AI Agents in Production', value: '4', desc: 'From concept to org-wide adoption' },
  { label: 'Innovation Award Winner', value: '2x', desc: 'Ideas selected from thousands of submissions' },
  { label: 'Orgs Aligned', value: '10+', desc: 'Across Office and Copilot product groups' },
  { label: 'Years in Technology & TPM', value: '15+', desc: 'Across infrastructure, AI, and cloud' },
]

const s = {
  section: { padding: '4rem 1.5rem 5rem', backgroundColor: 'var(--muted-light)' },
  container: { maxWidth: '64rem', margin: '0 auto' },
  headingRow: { display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' },
  bar: { width: '4px', height: '3rem', backgroundColor: 'var(--accent)', borderRadius: '9999px', flexShrink: 0 },
  heading: { fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--heading)', lineHeight: 1.1 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.25rem', marginBottom: '2rem' },
  card: { backgroundColor: 'var(--card)', borderRadius: '0.75rem', padding: '1.25rem 1.5rem', boxShadow: 'var(--shadow)', border: '1px solid var(--border-alpha)' },
  statLabel: { fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted-fg)', marginBottom: '0.5rem' },
  statValue: { fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary)', lineHeight: 1, marginBottom: '0.5rem' },
  statDesc: { fontSize: '0.8125rem', color: 'var(--fg)', lineHeight: 1.5 },
  quoteCard: { backgroundColor: 'var(--card)', borderRadius: '0.75rem', padding: '2rem', boxShadow: 'var(--shadow)', border: '1px solid var(--border-alpha)', textAlign: 'center' },
  quote: { fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--primary)', lineHeight: 1.6 },
}

export default function ByTheNumbers() {
  return (
    <section id="by-the-numbers" style={s.section}>
      <div style={s.container}>
        <div style={s.headingRow}>
          <div style={s.bar} />
          <h2 style={s.heading}>By the Numbers</h2>
        </div>
        <div style={s.grid}>
          {stats.map((stat, i) => (
            <div key={i} style={s.card}>
              <p style={s.statLabel}>{stat.label}</p>
              <p style={s.statValue}>{stat.value}</p>
              <p style={s.statDesc}>{stat.desc}</p>
            </div>
          ))}
        </div>
        <div style={s.quoteCard}>
          <p style={s.quote}>"The best programs don't just deliver outcomes — they raise the bar for what's possible."</p>
        </div>
      </div>
    </section>
  )
}
