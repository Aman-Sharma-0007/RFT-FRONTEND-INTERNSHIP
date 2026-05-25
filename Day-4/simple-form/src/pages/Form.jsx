import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

function Form() {
  const { isDark } = useTheme()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })

  const [submitted, setSubmitted] = useState(null)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email'
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const foundErrors = validate()
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors)
      return
    }
    setSubmitted(formData)
    setFormData({ name: '', email: '' })
    setErrors({})
  }

  const isDisabled = !formData.name.trim() || !formData.email.trim()

  return (
    <div className="page">
      <h2>📋 Simple Form</h2>
      <p>Fill in your details below.</p>

      <form
        className={`form-card ${isDark ? 'form-dark' : 'form-light'}`}
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>

        <button type="submit" disabled={isDisabled} className="submit-btn">
          Submit
        </button>
      </form>

      {submitted && (
        <div className={`result-card ${isDark ? 'result-dark' : 'result-light'}`}>
          <h3>✅ Submitted Successfully!</h3>
          <p><strong>Name:</strong> {submitted.name}</p>
          <p><strong>Email:</strong> {submitted.email}</p>
        </div>
      )}
    </div>
  )
}

export default Form