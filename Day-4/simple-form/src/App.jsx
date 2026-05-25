import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Home from './pages/Home'
import Form from './pages/Form'

function Layout() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className={isDark ? 'container dark' : 'container light'}>
      <nav className="navbar">
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/form">Form</NavLink>
        </div>
        <button onClick={toggleTheme}>
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App