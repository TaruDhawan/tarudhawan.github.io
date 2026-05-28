'use client'

import { useState, useEffect, useRef } from 'react'

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
  section: { padding: '2.5rem 1.5rem 3rem', backgroundColor: 'var(--muted-light)' },
  container: { maxWidth: '64rem', margin: '0 auto' },
  headingRow: { display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem' },
  bar: { width: '4px', height: '3rem', backgroundColor: 'var(--accent)', borderRadius: '9999px', flexShrink: 0 },
  heading: { fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--heading)', lineHeight: 1.1 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' },
  card: { backgroundColor: 'var(--card)', borderRadius: '0.75rem', padding: '1.25rem 1.5rem', boxShadow: 'var(--shadow)', border: '1px solid var(--border-alpha)' },
  statLabel: { fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted-fg)', marginBottom: '0.5rem' },
  statValue: { fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary)', lineHeight: 1, marginBottom: '0.5rem' },
  statDesc: { fontSize: '0.8125rem', color: 'var(--fg)', lineHeight: 1.5 },
  quoteCard: { backgroundColor: 'var(--card)', borderRadius: '0.75rem', padding: '2rem', boxShadow: 'var(--shadow)', border: '1px solid var(--border-alpha)', textAlign: 'center' },
  quote: { fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--primary)', lineHeight: 1.6 },
}

/* ── Ease-out cubic ────────────────────────────────────────── */
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

/* ── Parse "$400M" → { prefix: "$", num: 400, suffix: "M" } ── */
function parseValue(str) {
  const m = str.match(/^(\$?)(\d+)(.*)$/)
  if (!m) return { prefix: '', num: 0, suffix: str }
  return { prefix: m[1], num: parseInt(m[2], 10), suffix: m[3] }
}

/* ── Animated number ───────────────────────────────────────── */
function CountUp({ value, style, started, delay = 0 }) {
  const { prefix, num, suffix } = parseValue(value)
  const [count, setCount] = useState(0)
  const rafRef = useRef(null)
  const DURATION = 1800

  useEffect(() => {
    if (!started) return

    // Respect prefers-reduced-motion — snap straight to final value
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(num)
      return
    }

    const timer = setTimeout(() => {
      const startTime = performance.now()

      const tick = (now) => {
        const progress = Math.min((now - startTime) / DURATION, 1)
        setCount(Math.round(easeOutCubic(progress) * num))
        if (progress < 1) rafRef.current = requestAnimationFrame(tick)
      }

      rafRef.current = requestAnimationFrame(tick)
    }, delay)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(rafRef.current)
    }
  }, [started, num, delay])

  return (
    <p style={style} aria-label={value}>
      {prefix}{count}{suffix}
    </p>
  )
}

/* ── Section ───────────────────────────────────────────────── */
export default function ByTheNumbers() {
  const [started, setStarted] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect() // fire once only
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="by-the-numbers" ref={sectionRef} style={s.section}>
      <div style={s.container}>
        <div style={s.headingRow}>
          <div style={s.bar} />
          <h2 style={s.heading}>By the Numbers</h2>
        </div>
        <div style={s.grid}>
          {stats.map((stat, i) => (
            <div key={i} style={s.card}>
              <p style={s.statLabel}>{stat.label}</p>
              <CountUp
                value={stat.value}
                style={s.statValue}
                started={started}
                delay={i * 60} // 60ms stagger per card
              />
              <p style={s.statDesc}>{stat.desc}</p>
            </div>
          ))}
        </div>
        <div style={s.quoteCard}>
          <blockquote style={{ ...s.quote, margin: 0 }}>
            &ldquo;The best programs don&rsquo;t just deliver outcomes — they raise the bar for what&rsquo;s possible.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  )
}
