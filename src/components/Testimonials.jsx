'use client'

const LINKEDIN_URL =
  'https://www.linkedin.com/in/tarudhawan/details/recommendations/?detailScreenTabIndex=0'

const featured = [
  {
    name: 'Clinton Pereira',
    initials: 'CP',
    title: 'Manufacturing Embedded Systems Chief',
    relationship: 'Managed Taru Directly',
    date: 'August 2020',
    quote:
      'Taru does an excellent job managing and supporting technical teams through change. She supported and coached my teams\' transition from waterfall to Agile, while ensuring that the reporting was aligned to keep all processes at peak efficiency. Taru is a valuable resource and coach for teams.',
    accent: '#2563eb',
  },
  {
    name: 'Amogh Kulkarni',
    initials: 'AK',
    title: 'Head of Data, marcopolo.dev',
    relationship: 'Senior Colleague at Nike / Infosys',
    date: 'July 2020',
    quote:
      'Taru is a talented and enthusiastic leader. Her product management skills were truly exceptional. She had an extra-ordinary ability to understand the business requirements and break those into features, epics and stories. I strongly recommend Taru and I would be thrilled to work with her again.',
    accent: '#16a34a',
  },
  {
    name: 'Uma Nimmagadda',
    initials: 'UN',
    title: 'Strategic Product Leader | Digital Transformation | Ex-Nike',
    relationship: 'Worked Together at Nike',
    date: 'July 2020',
    quote:
      'Taru was focused, detail oriented and proposed innovative solution options for our complex problems. She was a good leader and raised the bar for the team. I thoroughly enjoyed working with her on the program and to see her impact on the project first hand.',
    accent: '#db2777',
  },
]

const earlier = [
  {
    name: 'Amber S.',
    initials: 'AS',
    title: 'Head of IT | Digital Transformation',
    relationship: 'Managed Taru Directly',
    date: 'July 2011',
    quote:
      'Her talent lies in being able to communicate and translate implicit needs into actionable system designs. Her mentoring ability and her commitment are also noteworthy.',
    accent: '#7c3aed',
  },
  {
    name: 'Taha Hasan',
    initials: 'TH',
    title: 'Senior Project Manager | Banking & Analytics',
    relationship: 'Managed Taru Directly',
    date: 'November 2016',
    quote:
      'I find her result oriented, go getter and ready to accept and accomplish with flying colours any new challenges thrown. She is an asset to any organization she works with.',
    accent: '#c9973a',
  },
]

/* ── LinkedIn SVG icon ────────────────────────────────────── */
function LinkedInIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ flexShrink: 0 }}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

/* ── Initials avatar ──────────────────────────────────────── */
function Avatar({ initials, accent }) {
  return (
    <div
      style={{
        width: '2.75rem',
        height: '2.75rem',
        borderRadius: '9999px',
        backgroundColor: `${accent}22`,
        border: `2px solid ${accent}55`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        fontWeight: 700,
        fontSize: '0.875rem',
        color: accent,
        letterSpacing: '0.03em',
        fontFamily: 'inherit',
      }}
    >
      {initials}
    </div>
  )
}

/* ── Featured card (large) ────────────────────────────────── */
function FeaturedCard({ t }) {
  return (
    <a
      href={LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--card)',
        borderRadius: '0.875rem',
        padding: '1.75rem',
        boxShadow: 'var(--shadow)',
        border: '1px solid var(--border-alpha)',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'box-shadow 0.25s, transform 0.25s',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'var(--shadow)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1rem' }}>
        <Avatar initials={t.initials} accent={t.accent} />
        <div>
          <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--heading)', margin: 0, lineHeight: 1.3 }}>
            {t.name}
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'var(--muted-fg)', margin: 0, marginTop: '0.125rem', lineHeight: 1.4 }}>
            {t.title}
          </p>
        </div>
      </div>

      {/* Relationship badge */}
      <p style={{
        fontSize: '0.6875rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: t.accent,
        marginBottom: '0.875rem',
        margin: '0 0 0.875rem',
      }}>
        {t.relationship}
      </p>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: 'var(--border)', marginBottom: '1rem' }} />

      {/* Pull quote */}
      <blockquote style={{
        margin: '0 0 auto',
        paddingLeft: '1rem',
        borderLeft: `3px solid ${t.accent}`,
        fontStyle: 'italic',
        fontSize: '0.9375rem',
        color: 'var(--fg)',
        lineHeight: 1.75,
      }}>
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      {/* Footer */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '1.25rem',
        paddingTop: '1rem',
        borderTop: '1px solid var(--border)',
      }}>
        <span style={{ fontSize: '0.8125rem', color: 'var(--muted-fg)', fontWeight: 500 }}>
          {t.date}
        </span>
        <span style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.375rem',
          fontSize: '0.8125rem',
          fontWeight: 600,
          color: t.accent,
        }}>
          <LinkedInIcon size={14} />
          View on LinkedIn
        </span>
      </div>
    </a>
  )
}

/* ── Earlier card (smaller, dashed) ──────────────────────── */
function EarlierCard({ t }) {
  return (
    <a
      href={LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--card)',
        borderRadius: '0.75rem',
        padding: '1.25rem',
        boxShadow: 'var(--shadow)',
        border: '1px dashed var(--border)',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'box-shadow 0.25s',
        cursor: 'pointer',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-hover)' }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow)' }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
        <Avatar initials={t.initials} accent={t.accent} />
        <div>
          <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--heading)', margin: 0, lineHeight: 1.3 }}>
            {t.name}
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted-fg)', margin: 0, marginTop: '0.125rem' }}>
            {t.title}
          </p>
        </div>
        {/* LinkedIn icon top-right */}
        <span style={{ marginLeft: 'auto', color: 'var(--muted-fg)' }}>
          <LinkedInIcon size={15} />
        </span>
      </div>

      {/* Pull quote */}
      <blockquote style={{
        margin: '0 0 auto',
        fontStyle: 'italic',
        fontSize: '0.875rem',
        color: 'var(--fg)',
        lineHeight: 1.7,
      }}>
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      {/* Footer */}
      <p style={{
        marginTop: '0.875rem',
        fontSize: '0.75rem',
        color: 'var(--muted-fg)',
        fontWeight: 500,
      }}>
        {t.relationship} &middot; {t.date}
      </p>
    </a>
  )
}

/* ── Section ──────────────────────────────────────────────── */
export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '4rem 1.5rem 5rem', backgroundColor: 'var(--bg)' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>

        {/* Section heading */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
          <div style={{ width: '4px', height: '3rem', backgroundColor: 'var(--accent)', borderRadius: '9999px', flexShrink: 0 }} />
          <h2 style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--heading)',
            lineHeight: 1.1,
            margin: 0,
          }}>
            Endorsements
          </h2>
        </div>
        <p style={{ fontSize: '0.9375rem', color: 'var(--muted-fg)', marginBottom: '2.5rem', marginLeft: 'calc(4px + 1rem)' }}>
          What colleagues and managers say, in their own words.
        </p>

        {/* Featured grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2.5rem',
        }}>
          {featured.map((t) => <FeaturedCard key={t.name} t={t} />)}
        </div>

        {/* Earlier endorsements label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border)' }} />
          <span style={{
            fontSize: '0.6875rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--muted-fg)',
            whiteSpace: 'nowrap',
          }}>
            Earlier Endorsements
          </span>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border)' }} />
        </div>

        {/* Earlier grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginBottom: '2.5rem',
        }}>
          {earlier.map((t) => <EarlierCard key={t.name} t={t} />)}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '0.75rem 2rem',
              borderRadius: '0.625rem',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--card)',
              color: 'var(--fg)',
              fontSize: '0.9375rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s',
              boxShadow: 'var(--shadow)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--primary)'
              e.currentTarget.style.color = 'var(--primary)'
              e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--fg)'
              e.currentTarget.style.boxShadow = 'var(--shadow)'
            }}
          >
            <LinkedInIcon size={18} />
            See all recommendations on LinkedIn
          </a>
        </div>

      </div>
    </section>
  )
}
