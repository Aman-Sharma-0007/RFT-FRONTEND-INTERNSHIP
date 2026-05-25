import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="nav-logo">✅ TaskMate</div>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/todos" className={location.pathname === '/todos' ? 'active' : ''}>My Todos</Link>
      </div>
    </nav>
  )
}

export default Navbar