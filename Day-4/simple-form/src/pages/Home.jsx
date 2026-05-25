import { useTheme } from '../context/ThemeContext'
import { Link } from 'react-router-dom'

function Home() {
  const { isDark } = useTheme()

  return (
    <div className="page">
      <h2>🏠 Welcome!</h2>
      <p>
        This is Day 4 of the GOW AI Academy Internship. <br />
        Current theme: <strong>{isDark ? 'Dark 🌙' : 'Light ☀️'}</strong>
      </p>
      <Link to="/form" className="go-btn">
        Go to Form →
      </Link>
    </div>
  )
}

export default Home