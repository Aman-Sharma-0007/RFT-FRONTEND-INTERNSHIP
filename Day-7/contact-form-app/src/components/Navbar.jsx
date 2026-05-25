import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <span className="brand">MyApp</span>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Navbar