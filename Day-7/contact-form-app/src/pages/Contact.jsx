import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  // Validate a single field
  const validate = (name, value) => {
    if (name === 'name') {
      if (!value.trim()) return 'Name is required'
    }
    if (name === 'email') {
      if (!value.trim()) return 'Email is required'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email'
    }
    if (name === 'password') {
      if (!value) return 'Password is required'
      if (value.length < 6) return 'Password must be at least 6 characters'
    }
    return ''
  }

  // On each keystroke — controlled component
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    setErrors({ ...errors, [name]: validate(name, value) })
  }

  // Check if form is fully valid
  const isFormValid = () => {
    return (
      !validate('name', form.name) &&
      !validate('email', form.email) &&
      !validate('password', form.password)
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{ padding: '60px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem' }}>✅</div>
        <h2 style={{ marginTop: '16px', fontSize: '1.8rem' }}>Form Submitted!</h2>
        <p style={{ color: '#555', marginTop: '8px' }}>
          Hello <strong>{form.name}</strong>, we received your details.
        </p>
        <button
          onClick={() => { setForm({ name: '', email: '', password: '' }); setSubmitted(false); setErrors({}) }}
          style={btnStyle('#1a1a2e')}
        >
          Submit Again
        </button>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '480px', margin: '60px auto', padding: '0 20px' }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Contact Us</h2>
      <p style={{ color: '#666', marginBottom: '32px' }}>Fill in the form below</p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div style={fieldWrap}>
          <label style={labelStyle}>Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            style={inputStyle(errors.name)}
          />
          {errors.name && <span style={errorStyle}>{errors.name}</span>}
        </div>

        {/* Email */}
        <div style={fieldWrap}>
          <label style={labelStyle}>Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            style={inputStyle(errors.email)}
          />
          {errors.email && <span style={errorStyle}>{errors.email}</span>}
        </div>

        {/* Password */}
        <div style={fieldWrap}>
          <label style={labelStyle}>Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Min. 6 characters"
            style={inputStyle(errors.password)}
          />
          {errors.password && <span style={errorStyle}>{errors.password}</span>}
        </div>

        {/* Submit — disabled until valid */}
        <button
          type="submit"
          disabled={!isFormValid()}
          style={btnStyle(isFormValid() ? '#1a1a2e' : '#aaa')}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

// Inline style helpers
const fieldWrap = { marginBottom: '20px' }

const labelStyle = {
  display: 'block',
  marginBottom: '6px',
  fontWeight: '600',
  fontSize: '14px',
}

const inputStyle = (hasError) => ({
  width: '100%',
  padding: '10px 14px',
  borderRadius: '8px',
  border: `2px solid ${hasError ? '#e74c3c' : '#ccc'}`,
  fontSize: '15px',
  outline: 'none',
  transition: 'border 0.2s',
})

const errorStyle = {
  color: '#e74c3c',
  fontSize: '13px',
  marginTop: '4px',
  display: 'block',
}

const btnStyle = (bg) => ({
  marginTop: '8px',
  width: '100%',
  padding: '12px',
  background: bg,
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: '600',
  cursor: bg === '#aaa' ? 'not-allowed' : 'pointer',
  transition: 'background 0.2s',
})

export default Contact