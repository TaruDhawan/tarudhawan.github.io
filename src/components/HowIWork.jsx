const principles = [
  {
    title: 'I build the function, not just the program',
    body: "Most PMs manage work. I build the scaffolding that makes work manageable at scale. I've stood up TPM practices from scratch, created governance frameworks where none existed, and handed orgs infrastructure they didn't know they needed until it was gone.",
  },
  {
    title: "AI isn't a strategy — it's my daily toolkit",
    body: "I don't just talk about AI transformation; I've shipped it. From multi-agent live site systems to automated reporting pipelines, I build AI solutions that make teams faster — not just informed.",
  },
  {
    title: 'I translate between engineers and executives',
    body: "I'm fluent in both. I can sit in a deep technical architecture review and walk out with a one-pager that lands in an EVP meeting. That translation layer is rare — and it's where I do some of my best work.",
  },
  {
    title: 'I name the thing in the room',
    body: "If there's a misalignment, a gap in ownership, or a decision no one wants to make — I'll surface it. Constructively, with data, and with a path forward. Friction is information. I'd rather deal with it early than inherit it late.",
  },
  {
    title: 'I treat cost like a product',
    body: "COGS governance isn't a spreadsheet exercise — it's a strategic lever. I approach cost optimization with the same rigor as a product roadmap: baseline the reality, identify the constraint, ship the improvement, measure the outcome.",
  },
  {
    title: 'I create influence without authority',
    body: "My programs span organizations I don't own. I've driven cross-org alignment across engineering, finance, and product teams not through hierarchy, but through clarity of purpose and consistent follow-through.",
  },
  {
    title: 'Ambiguity is my starting line',
    body: "Give me a blank page and a hard problem. The messiest, least-defined challenges are where I'm most energized. I don't wait for a clear brief — I write it.",
  },
  {
    title: 'Strategy needs space to breathe',
    body: "I work with urgency, but I don't confuse motion with progress. I build in reflection, challenge my own assumptions, and create room for the non-obvious solution.",
  },
  {
    title: 'I invest in the humans, not just the work',
    body: 'I remember what matters to people. I show up for the hard conversations and the celebrations. The quality of the relationships determines the quality of the outcomes.',
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
  },
}

export default function HowIWork() {
  return (
    <section style={s.section}>
      <div style={s.container}>
        <div style={s.headingRow}>
          <div style={s.bar} />
          <h2 style={s.heading}>How I Work</h2>
        </div>
        <div style={s.grid}>
          {principles.map((p, i) => (
            <div
              key={i}
              style={s.card}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(44,36,32,0.14)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 3px rgba(44,36,32,0.08)'}
            >
              <h3 style={s.cardTitle}>{p.title}</h3>
              <p style={s.cardBody}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
