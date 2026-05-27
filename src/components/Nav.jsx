import { useState, useEffect } from 'react'

const links = [
  { label: 'How I work', href: '#how-i-work' },
  { label: 'About me', href: '#about-me' },
  { label: 'Career Highlights', href: '#career-highlights' },
  { label: 'By the numbers', href: '#by-the-numbers' },
]

export default function Nav() {
  const [active, setActive] = useState('how-i-work')

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
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: 'rgba(250,247,242,0.95)',
      backdropFilter: 'blur(8px)',
      boxShadow: '0 2px 8px rgba(44,36,32,0.06)',
    }}>
      <div style={{
        maxWidth: '64rem',
        margin: '0 auto',
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
      }}>
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
                backgroundColor: isActive ? '#6b2737' : 'transparent',
                color: isActive ? '#ffffff' : '#8c7b6b',
              }}
              onMouseEnter={e => { if (!isActive) e.target.style.color = '#2c2420' }}
              onMouseLeave={e => { if (!isActive) e.target.style.color = '#8c7b6b' }}
            >
              {link.label}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
