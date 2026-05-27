const highlights = [
  {
    title: 'Built an AI-Powered Live Site System from Scratch',
    body: 'Designed and shipped a multi-agent AI system that transformed how engineering teams detect, respond to, and resolve live site incidents across Office Product Group. Built not as a pilot but as org-wide infrastructure adopted across multiple engineering teams.',
    badge: 'Org-wide adoption',
  },
  {
    title: 'Turned Cost Governance into a Strategic Program',
    body: 'Stood up a first-of-its-kind COGS governance framework across OPG, governing a $400M portfolio and delivering $40M in confirmed savings. Unified engineering and finance reporting where no common language previously existed.',
    badge: '$40M saved',
  },
  {
    title: 'Led Security Modernization at Scale',
    body: "Drove identity and secrets modernization across OPG as part of Microsoft's highest-priority security initiative. Coordinated across engineering orgs to automate certificate management and close critical compliance gaps at scale.",
    badge: 'Enterprise-wide impact',
  },
  {
    title: 'Built TPM Functions Where None Existed',
    body: 'Repeatedly parachuted into ambiguous, high-stakes programs without existing frameworks and built the operating model from scratch — intake processes, governance cadences, escalation paths, and executive reporting that outlasted the initiative.',
    badge: 'First of its kind',
  },
  {
    title: 'Turned Technical Complexity into Executive Decisions',
    body: 'Designed and owned leadership-facing reporting and program reviews consumed at EVP and CVP level across OPG. Translated deeply technical program status into strategic narratives that drove resourcing and investment decisions.',
    badge: 'EVP visibility',
  },
  {
    title: 'Accelerated Engineering Velocity Through AI Automation',
    body: "Built an automated reporting and newsletter agent using Microsoft's AI and automation stack — eliminating hours of manual work across the org. One of several AI automation tools deployed to make engineering teams measurably faster.",
    badge: '240K+ hours saved',
  },
]

const s = {
  section: {
    padding: '4rem 1.5rem',
  },
  container: {
    maxWidth: '64rem',
    margin: '0 auto',
  },
  headingRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '3rem',
  },
  bar: {
    width: '4px',
    height: '3rem',
    backgroundColor: '#c9973a',
    borderRadius: '9999px',
    flexShrink: 0,
  },
  heading: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 700,
    color: '#1c1008',
    lineHeight: 1.1,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    backgroundColor: '#fffdfb',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    boxShadow: '0 1px 3px rgba(44,36,32,0.08)',
    border: '1px solid rgba(232,224,213,0.5)',
    display: 'flex',
    flexDirection: 'column',
    transition: 'box-shadow 0.3s',
  },
  cardTitle: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#1c1008',
    marginBottom: '0.75rem',
    lineHeight: 1.3,
  },
  cardBody: {
    fontSize: '0.875rem',
    color: '#2c2420',
    lineHeight: 1.75,
    flex: 1,
    marginBottom: '1.25rem',
  },
  badge: {
    display: 'inline-flex',
    alignSelf: 'flex-start',
    padding: '0.375rem 1rem',
    borderRadius: '9999px',
    backgroundColor: 'rgba(107,39,55,0.08)',
    color: '#6b2737',
    fontSize: '0.8125rem',
    fontWeight: 500,
  },
}

export default function CareerHighlights() {
  return (
    <section id="career-highlights" style={s.section}>
      <div style={s.container}>
        <div style={s.headingRow}>
          <div style={s.bar} />
          <h2 style={s.heading}>Career Highlights</h2>
        </div>
        <div style={s.grid}>
          {highlights.map((h, i) => (
            <div
              key={i}
              style={s.card}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(44,36,32,0.14)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 3px rgba(44,36,32,0.08)'}
            >
              <h3 style={s.cardTitle}>{h.title}</h3>
              <p style={s.cardBody}>{h.body}</p>
              <span style={s.badge}>{h.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
