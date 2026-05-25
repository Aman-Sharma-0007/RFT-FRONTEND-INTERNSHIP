import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <div className="home-content">
        <h1>Stay Organized,<br /><span>Stay Productive</span></h1>
        <p>Manage your daily tasks easily. Add, edit, delete, and filter your todos all in one place.</p>
        <button onClick={() => navigate('/todos')}>Get Started →</button>
      </div>
    </div>
  )
}

export default Home