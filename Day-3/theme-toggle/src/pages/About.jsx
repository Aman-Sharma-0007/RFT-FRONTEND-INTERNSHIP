import { useTheme } from '../context/ThemeContext'

function About() {
  const { isDark } = useTheme()

  return (
    <div className="page">
      <h2>ℹ️ About Page</h2>
      <p>
        This project demonstrates React state, conditional styling, Context API,
        and React Router — all in one app.
      </p>
      <p>Current theme: <strong>{isDark ? 'Dark 🌙' : 'Light ☀️'}</strong></p>
    </div>
  )
}

export default About