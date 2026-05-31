'use client'

import { useState, useEffect, useRef } from 'react'
import ResumeDrawer from './ResumeDrawer'

const links = [
  { label: 'How I work', href: '#how-i-work' },
  { label: 'About me', href: '#about-me' },
  { label: 'Career Highlights', href: '#career-highlights' },
  { label: 'By the numbers', href: '#by-the-numbers' },
  { label: 'Endorsements', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

/* ── Icons ──────────────────────────────────────────────── */
function SunIcon() {
  return (
    <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

function FileIcon() {
  return (
    <svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
    </svg>
  )
}

function HamburgerIcon({ open }) {
  return (
    <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  )
}

/* ── Nav ────────────────────────────────────────────────── */
export default function Nav() {
  const [active, setActive]     = useState('how-i-work')
  const [dark, setDark]         = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  /* ── Mobile breakpoint detection ── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  /* ── Close menu when resizing to desktop ── */
  useEffect(() => {
    if (!isMobile) setMenuOpen(false)
  }, [isMobile])

  /* ── Body scroll lock when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* ── inert on mobile menu (keyboard / AT inaccessible when closed) ── */
  useEffect(() => {
    if (!menuRef.current) return
    if (menuOpen) {
      menuRef.current.removeAttribute('inert')
    } else {
      menuRef.current.setAttribute('inert', '')
    }
  }, [menuOpen])

  /* ── Persist theme, avoid SSR hydration mismatch ── */
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = stored ? stored === 'dark' : prefersDark
    setDark(isDark)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  /* ── Scroll-spy ── */
  useEffect(() => {
    const sections = links.map(l => document.getElementById(l.href.slice(1)))
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  /* ── Escape closes mobile menu ── */
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  /* ── Shared icon-button style helpers ── */
  const iconBtn = {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: '2.25rem', height: '2.25rem',
    borderRadius: '9999px',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--card)',
    color: 'var(--muted-fg)',
    cursor: 'pointer',
    transition: 'all 0.2s',
    flexShrink: 0,
  }
  const iconEnter = e => { e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.borderColor = 'var(--primary)' }
  const iconLeave = e => { e.currentTarget.style.color = 'var(--muted-fg)'; e.currentTarget.style.borderColor = 'var(--border)' }

  return (
    <>
      <nav
        aria-label="Main navigation"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 50,
          backgroundColor: 'var(--nav-bg)',
          backdropFilter: 'blur(8px)',
          boxShadow: 'var(--shadow-nav)',
          transition: 'background-color 0.25s',
        }}
      >
        {/* ── Nav bar ── */}
        <div style={{
          maxWidth: '64rem',
          margin: '0 auto',
          padding: '0.875rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: isMobile ? 'space-between' : 'center',
          gap: '0.375rem',
          position: 'relative',
        }}>

          {/* ResumeDrawer portal — no trigger here, opened via Hero button */}
          <ResumeDrawer />

          {/* Mobile: Brand wordmark */}
          {isMobile && (
            <a
              href="#how-i-work"
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--heading)',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
              }}
            >
              Taru Dhawan
            </a>
          )}

          {/* Desktop: Nav links */}
          {!isMobile && links.map(link => {
            const id = link.href.slice(1)
            const isActive = active === id
            return (
              <a
                key={id}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  backgroundColor: isActive ? 'var(--primary)' : 'transparent',
                  color: isActive ? 'var(--primary-fg)' : 'var(--muted-fg)',
                }}
                onMouseEnter={e => { if (!isActive) e.target.style.color = 'var(--fg)' }}
                onMouseLeave={e => { if (!isActive) e.target.style.color = 'var(--muted-fg)' }}
              >
                {link.label}
              </a>
            )
          })}

          {/* Right-side controls: dark mode + (mobile) hamburger */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            ...(isMobile ? {} : { position: 'absolute', right: '1.5rem' }),
          }}>
            <button
              suppressHydrationWarning
              onClick={() => setDark(d => !d)}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              style={iconBtn}
              onMouseEnter={iconEnter}
              onMouseLeave={iconLeave}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>

            {isMobile && (
              <button
                onClick={() => setMenuOpen(o => !o)}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav-menu"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                style={iconBtn}
                onMouseEnter={iconEnter}
                onMouseLeave={iconLeave}
              >
                <HamburgerIcon open={menuOpen} />
              </button>
            )}
          </div>
        </div>

        {/* ── Mobile dropdown panel ── */}
        <div
          id="mobile-nav-menu"
          ref={menuRef}
          aria-hidden={!menuOpen}
          style={{
            display: isMobile ? 'block' : 'none',
            overflow: 'hidden',
            maxHeight: menuOpen ? '480px' : '0',
            opacity: menuOpen ? 1 : 0,
            transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.2s ease',
            backgroundColor: 'var(--card)',
            borderTop: '1px solid var(--border)',
          }}
        >
          <div style={{ padding: '0.75rem 1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
            {links.map(link => {
              const id = link.href.slice(1)
              const isActive = active === id
              return (
                <a
                  key={id}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '0.75rem 1rem',
                    fontSize: '1rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--primary)' : 'var(--fg)',
                    textDecoration: 'none',
                    borderRadius: '0.5rem',
                    backgroundColor: isActive ? 'var(--primary-subtle)' : 'transparent',
                  }}
                >
                  {link.label}
                </a>
              )
            })}

            {/* View Resume in mobile menu — opens the drawer */}
            <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
              <button
                onClick={() => {
                  setMenuOpen(false)
                  window.dispatchEvent(new CustomEvent('open-resume-drawer'))
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.625rem 1rem',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: 'var(--primary)',
                  background: 'none',
                  borderRadius: '0.5rem',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                <FileIcon />
                View Resume
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Tap-outside backdrop to close mobile menu */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 49,
          }}
        />
      )}
    </>
  )
}
