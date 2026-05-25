import { useTheme } from '../context/ThemeContext'

function Home() {
  const { isDark } = useTheme()

  return (
    <div className="page">
      <h2>🏠 Home Page</h2>
      <p>
        Welcome! The current theme is{' '}
        <strong>{isDark ? 'Dark 🌙' : 'Light ☀️'}</strong>.
      </p>
    </div>
  )
}

export default Home