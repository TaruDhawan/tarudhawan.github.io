const rechargeItems = [
  { icon: '🥾', label: 'Hiking', desc: 'Where my best non-linear thinking happens.' },
  { icon: '🏡', label: 'Interior Design', desc: 'Every room is a product problem. Who uses it, what do they need, what\'s the delight layer.' },
  { icon: '✈️', label: 'Travel', desc: 'New places rewire how I see familiar problems.' },
  { icon: '📚', label: 'Reading', desc: 'Currently: one on AI systems, one on behavioral economics, one novel.' },
]

const s = {
  section: {
    padding: '5rem 1.5rem',
    backgroundColor: 'rgba(245,240,232,0.3)',
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
  card: {
    backgroundColor: '#fffdfb',
    borderRadius: '1rem',
    boxShadow: '0 1px 3px rgba(44,36,32,0.08)',
    border: '1px solid rgba(232,224,213,0.5)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  left: {
    flex: 1,
    minWidth: '280px',
    padding: '2.5rem',
  },
  divider: {
    borderBottom: '1px solid #e8e0d5',
    margin: 0,
  },
  block: {
    padding: '2rem 0',
    borderBottom: '1px solid #e8e0d5',
  },
  blockLast: {
    paddingTop: '2rem',
  },
  blockHeading: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#1c1008',
    marginBottom: '1rem',
  },
  locationLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#6b2737',
    fontSize: '0.875rem',
    marginBottom: '0.75rem',
    fontWeight: 500,
  },
  bodyText: {
    color: '#2c2420',
    lineHeight: 1.75,
    fontSize: '0.9375rem',
  },
  careerBadges: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.375rem 1rem',
    borderRadius: '9999px',
    backgroundColor: '#f5f0e8',
    color: '#2c2420',
    fontSize: '0.875rem',
    fontWeight: 500,
  },
  badgeActive: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.375rem 1rem',
    borderRadius: '9999px',
    backgroundColor: 'rgba(107,39,55,0.1)',
    color: '#6b2737',
    fontSize: '0.875rem',
    fontWeight: 500,
  },
  arrow: {
    color: '#8c7b6b',
    fontSize: '1rem',
  },
  rechargeGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.75rem',
  },
  rechargeItem: {
    padding: '0.75rem 1rem',
    backgroundColor: 'rgba(245,240,232,0.5)',
    borderRadius: '0.5rem',
  },
  rechargeTop: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.25rem',
  },
  rechargeIcon: {
    fontSize: '1.125rem',
  },
  rechargeLabel: {
    fontWeight: 600,
    color: '#1c1008',
    fontSize: '0.875rem',
  },
  rechargeDesc: {
    fontSize: '0.75rem',
    color: '#2c2420',
    lineHeight: 1.5,
  },
  right: {
    flexShrink: 0,
    padding: '2.5rem',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  photo: {
    width: '200px',
    height: '280px',
    objectFit: 'cover',
    objectPosition: 'top',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 16px rgba(44,36,32,0.12)',
  },
}

export default function AboutMe() {
  return (
    <section id="about-me" style={s.section}>
      <div style={s.container}>
        <div style={s.headingRow}>
          <div style={s.bar} />
          <h2 style={s.heading}>About Me</h2>
        </div>

        <div style={s.card}>
          <div style={s.left}>
            {/* Origins */}
            <div style={{ paddingBottom: '2rem', borderBottom: '1px solid #e8e0d5' }}>
              <h3 style={s.blockHeading}>Origins</h3>
              <p style={s.locationLine}>
                <span>📍</span>
                Greater Seattle Area · B.E. Computer Science &amp; Engineering + MBA
              </p>
              <p style={s.bodyText}>
                Started in engineering, pivoted to technical program management, and never looked back. That technical foundation is still my edge — it's what lets me earn credibility in rooms full of engineers and speak plainly in rooms full of executives.
              </p>
            </div>

            {/* Career */}
            <div style={s.block}>
              <h3 style={s.blockHeading}>Career</h3>
              <div style={s.careerBadges}>
                <span style={s.badge}>Adidas</span>
                <span style={s.arrow}>→</span>
                <span style={s.badgeActive}>Microsoft · Principal TPM</span>
              </div>
              <p style={s.bodyText}>
                15+ years in technology and program management, spanning roles at Adidas through to building AI infrastructure, multi-agent systems, and a $400M COGS governance program at Microsoft's Office Product Group. Started in engineering — that technical foundation still shows up in every room.
              </p>
            </div>

            {/* Home Base */}
            <div style={s.block}>
              <h3 style={s.blockHeading}>Home Base</h3>
              <p style={s.bodyText}>
                Based in the Greater Seattle Area. When not in a planning doc or a leadership review, found somewhere on a trail above the treeline.
              </p>
            </div>

            {/* How I Recharge */}
            <div style={s.blockLast}>
              <h3 style={s.blockHeading}>How I Recharge</h3>
              <div style={s.rechargeGrid}>
                {rechargeItems.map((item, i) => (
                  <div key={i} style={s.rechargeItem}>
                    <div style={s.rechargeTop}>
                      <span style={s.rechargeIcon}>{item.icon}</span>
                      <span style={s.rechargeLabel}>{item.label}</span>
                    </div>
                    <p style={s.rechargeDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Photo */}
          <div style={s.right}>
            <img
              src="https://tarudhawan.netlify.app/images/taru-profile.png"
              alt="Taru Dhawan"
              style={s.photo}
              onError={e => {
                e.target.style.backgroundColor = '#e8e0d5'
                e.target.removeAttribute('src')
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
