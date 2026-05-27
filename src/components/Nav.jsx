import { useState, useEffect } from 'react'
import ResumeDrawer from './ResumeDrawer'

const links = [
  { label: 'How I work', href: '#how-i-work' },
  { label: 'About me', href: '#about-me' },
  { label: 'Career Highlights', href: '#career-highlights' },
  { label: 'By the numbers', href: '#by-the-numbers' },
]

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

export default function Nav() {
  const [active, setActive] = useState('how-i-work')
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const sections = links.map(l => document.getElementById(l.href.slice(1)))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 50,
      backgroundColor: 'var(--nav-bg)',
      backdropFilter: 'blur(8px)',
      boxShadow: 'var(--shadow-nav)',
      transition: 'background-color 0.25s',
    }}>
      <div style={{
        maxWidth: '64rem',
        margin: '0 auto',
        padding: '0.875rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.375rem',
        position: 'relative',
      }}>
        <ResumeDrawer />

        {links.map(link => {
          const id = link.href.slice(1)
          const isActive = active === id
          return (
            <a
              key={id}
              href={link.href}
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

        <button
          onClick={() => setDark(d => !d)}
          title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          style={{
            position: 'absolute',
            right: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '2.25rem',
            height: '2.25rem',
            borderRadius: '9999px',
            border: '1px solid var(--border)',
            backgroundColor: 'var(--card)',
            color: 'var(--muted-fg)',
            cursor: 'pointer',
            transition: 'all 0.2s',
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
          {dark ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  )
}
