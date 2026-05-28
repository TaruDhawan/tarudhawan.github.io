'use client'

/**
 * RevealGrid — wraps a grid and animates children with class "reveal-card"
 * into view when the grid enters the viewport. Fires once; stagger is handled
 * by each child's inline transitionDelay style.
 */
import { useEffect, useRef } from 'react'

export default function RevealGrid({ style, children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Activate hidden state only after JS is ready (avoids SSR flash)
    el.classList.add('js-reveal')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal-card').forEach(card => {
            card.classList.add('visible')
          })
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} style={style}>{children}</div>
}
