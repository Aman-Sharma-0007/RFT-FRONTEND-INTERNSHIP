import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <h1>🧠 React Quiz</h1>
      <p>Test your React knowledge with 5 questions!</p>
      <button onClick={() => navigate('/quiz')}>Start Quiz</button>
    </div>
  )
}

export default Home