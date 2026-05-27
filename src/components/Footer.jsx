export default function Footer() {
  return (
    <footer style={{
      padding: '2rem 1.5rem',
      textAlign: 'center',
      borderTop: '1px solid var(--border)',
      backgroundColor: 'var(--bg)',
      transition: 'background-color 0.25s',
    }}>
      <p style={{ fontSize: '0.875rem', color: 'var(--muted-fg)' }}>
        © 2026 Taru Dhawan. Crafted with intention.
      </p>
    </footer>
  )
}
