'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const EMAIL = 'taru.dhawan@gmail.com'

const highlights = [
  'Governing a $400M COGS portfolio at Microsoft AI & Office Product Group — delivered $40M in confirmed FY26 savings through autoscale, SKU migrations, and feature deprecations.',
  'Built OASIS AI, a multi-agent live-site system that reduced on-call remediation effort by up to 90% across a 3,000-item backlog, adopted org-wide across Office Product Group.',
  'Automated rotation of 20,000+ certificates saving ~240,000 manual hours; drove 79% of Azure resources to a secure-by-default posture across 100+ services.',
]

/* ── Icons (all aria-hidden — decorative only) ─────────────── */
function FileIcon() {
  return (
    <svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" focusable="false" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg aria-hidden="true" focusable="false" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )
}

function SparkleIcon() {
  return (
    <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}

/* ── Shared action button style ─────────────────────────── */
function ActionBtn({ href, download, target, onClick, children }) {
  const base = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.4rem',
    flex: 1,
    padding: '0.625rem 0.5rem',
    fontSize: '0.8125rem',
    fontWeight: 500,
    fontFamily: 'inherit',
    borderRadius: '0.5rem',
    border: '1px solid var(--border)',
    backgroundColor: 'transparent',
    color: 'var(--fg)',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.18s',
    whiteSpace: 'nowrap',
  }

  const hover = (e) => {
    e.currentTarget.style.borderColor = 'var(--primary)'
    e.currentTarget.style.color = 'var(--primary)'
    e.currentTarget.style.backgroundColor = 'var(--primary-subtle)'
  }
  const leave = (e) => {
    e.currentTarget.style.borderColor = 'var(--border)'
    e.currentTarget.style.color = 'var(--fg)'
    e.currentTarget.style.backgroundColor = 'transparent'
  }

  if (href) {
    return (
      <a href={href} download={download} target={target} rel={target ? 'noopener noreferrer' : undefined}
        style={base} onMouseEnter={hover} onMouseLeave={leave}>
        {children}
      </a>
    )
  }
  return (
    <button style={base} onClick={onClick} onMouseEnter={hover} onMouseLeave={leave}>
      {children}
    </button>
  )
}

/* ── Focusable elements selector ────────────────────────── */
const FOCUSABLE = 'button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'

/* ── Main component ─────────────────────────────────────── */
export default function ResumeDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)

  const drawerRef   = useRef(null)
  const lastFocusRef = useRef(null)  // element focused before drawer opened
  const isOpenRef   = useRef(false)  // ref to avoid stale closure in keydown

  useEffect(() => { setMounted(true) }, [])

  /* ── Keep isOpenRef in sync ── */
  useEffect(() => {
    isOpenRef.current = isOpen
  }, [isOpen])

  /* ── Listen for open event dispatched by Hero / mobile nav ── */
  useEffect(() => {
    const onOpen = () => {
      lastFocusRef.current = document.activeElement  // save focus origin
      setIsOpen(true)
    }
    window.addEventListener('open-resume-drawer', onOpen)
    return () => window.removeEventListener('open-resume-drawer', onOpen)
  }, [])

  /* ── Keyboard: Escape to close + Tab focus trap ── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
        return
      }

      if (!isOpenRef.current || e.key !== 'Tab' || !drawerRef.current) return

      const focusable = Array.from(drawerRef.current.querySelectorAll(FOCUSABLE))
      if (!focusable.length) return

      const first = focusable[0]
      const last  = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  /* ── Focus management + inert when closed ── */
  useEffect(() => {
    const el = drawerRef.current
    if (!el) return

    if (isOpen) {
      el.removeAttribute('inert')
      // Move focus to first focusable element in drawer
      const focusable = el.querySelectorAll(FOCUSABLE)
      if (focusable.length) focusable[0].focus()
    } else {
      el.setAttribute('inert', '')
      // Return focus to the element that opened the drawer
      if (lastFocusRef.current && typeof lastFocusRef.current.focus === 'function') {
        lastFocusRef.current.focus()
        lastFocusRef.current = null
      }
    }
  }, [isOpen])

  /* ── Body scroll lock ── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  const divider = (
    <div style={{ height: '1px', backgroundColor: 'var(--border)', margin: '0' }} />
  )

  return (
    <>
      {mounted && createPortal(
        <>
          {/* ── Backdrop ─────────────────────────────── */}
          <div
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 9998,
              opacity: isOpen ? 1 : 0,
              pointerEvents: isOpen ? 'auto' : 'none',
              transition: 'opacity 0.3s ease',
            }}
          />

          {/* ── Drawer panel ─────────────────────────── */}
          <div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Resume"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: 'min(620px, 100vw)',
              backgroundColor: 'var(--card)',
              borderLeft: '1px solid var(--border)',
              boxShadow: '-8px 0 40px rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 9999,
              transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              overflowY: 'auto',
            }}
          >
        {/* ── Section 1: Identity header ──────────────── */}
        <div style={{ padding: '1.5rem 1.5rem 1.25rem', flexShrink: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--muted-fg)',
                marginBottom: '0.5rem',
              }}>
                Latest Resume
              </p>
              <h2 style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: '1.75rem',
                fontWeight: 700,
                color: 'var(--heading)',
                lineHeight: 1.1,
                marginBottom: '0.375rem',
              }}>
                Taru Dhawan
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted-fg)', marginBottom: '0.625rem' }}>
                Principal Technical Program Manager · Microsoft
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--muted-fg)' }}>
                <CalendarIcon />
                <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                  Updated April 2026
                </span>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close resume"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2rem',
                height: '2rem',
                borderRadius: '9999px',
                border: '1px solid var(--border)',
                backgroundColor: 'transparent',
                color: 'var(--muted-fg)',
                cursor: 'pointer',
                flexShrink: 0,
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
              <CloseIcon />
            </button>
          </div>
        </div>

        {divider}

        {/* ── Section 2: Action buttons ───────────────── */}
        <div style={{ padding: '1rem 1.5rem', display: 'flex', gap: '0.625rem', flexShrink: 0 }}>
          <ActionBtn href="/taru-resume.pdf" download="TaruDhawan_Resume.pdf">
            <DownloadIcon /> Download
          </ActionBtn>
          <ActionBtn href="/taru-resume.pdf" target="_blank">
            <ExternalIcon /> Open PDF
          </ActionBtn>
          <ActionBtn onClick={copyEmail}>
            {copied ? <CheckIcon /> : <CopyIcon />}
            {copied ? 'Copied!' : 'Copy Email'}
          </ActionBtn>
        </div>

        {divider}

        {/* ── Section 3: Highlights ───────────────────── */}
        <div style={{ padding: '1.25rem 1.5rem', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '1.75rem',
              height: '1.75rem',
              borderRadius: '9999px',
              backgroundColor: 'var(--primary-subtle)',
              color: 'var(--accent)',
            }}>
              <SparkleIcon />
            </div>
            <span style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: '1.0625rem',
              fontWeight: 600,
              color: 'var(--heading)',
            }}>
              Highlights
            </span>
          </div>

          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {highlights.map((h, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                <span aria-hidden="true" style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.3rem', fontSize: '0.5rem' }}>●</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--fg)', lineHeight: 1.65 }}>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {divider}

        {/* ── Section 4: Resume preview image ────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
          <div style={{ padding: '1.25rem 1.5rem 0.75rem', borderBottom: '1px solid var(--border)' }}>
            <p style={{
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--accent-text)',
              marginBottom: '0.375rem',
            }}>
              Resume Preview
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: '1.0625rem',
                fontWeight: 600,
                color: 'var(--heading)',
              }}>
                PDF Preview
              </span>
              <span style={{
                fontSize: '0.6875rem',
                padding: '0.2rem 0.625rem',
                borderRadius: '9999px',
                backgroundColor: 'var(--muted)',
                color: 'var(--muted-fg)',
                fontWeight: 500,
              }}>
                Updated April 2026
              </span>
            </div>
          </div>

          <div style={{ backgroundColor: '#f8f8f8', padding: '1rem', overflowY: 'auto' }}>
            <img
              src="/taru-resume-preview.png"
              alt="Taru Dhawan resume preview — first page of PDF"
              style={{
                display: 'block',
                margin: '0 auto',
                width: '100%',
                maxWidth: '560px',
                borderRadius: '0.25rem',
                border: '1px solid #e2e2e2',
                boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
              }}
            />
          </div>

          <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid var(--border)' }}>
            <ActionBtn href="/taru-resume.pdf" target="_blank">
              <ExternalIcon /> Open Full PDF
            </ActionBtn>
          </div>
        </div>
          </div>
        </>,
        document.body
      )}
    </>
  )
}
