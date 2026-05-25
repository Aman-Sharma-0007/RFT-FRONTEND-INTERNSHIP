import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ padding: '60px 32px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Welcome 👋</h1>
      <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '32px' }}>
        This is Day 7 — Contact Form with Validation
      </p>
      <Link
        to="/contact"
        style={{
          background: '#1a1a2e',
          color: '#fff',
          padding: '12px 28px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '16px',
        }}
      >
        Go to Contact Form →
      </Link>
    </div>
  )
}

export default Home