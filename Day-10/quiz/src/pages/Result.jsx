import { useLocation, useNavigate } from 'react-router-dom'

function Result() {
  const { state } = useLocation()
  const navigate = useNavigate()

  if (!state) {
    navigate('/')
    return null
  }

  const { score, total, answers } = state
  const percent = Math.round((score / total) * 100)

  return (
    <div className="container">
      <h1>Quiz Complete! 🎉</h1>
      <div className="score-card">
        <h2>{score} / {total}</h2>
        <p>{percent}% correct</p>
        <p>{percent >= 80 ? '🌟 Excellent!' : percent >= 50 ? '👍 Good job!' : '📚 Keep practicing!'}</p>
      </div>

      <h3>Summary</h3>
      <div className="summary">
        {answers.map((a, i) => (
          <div key={i} className={`summary-item ${a.isCorrect ? 'correct' : 'wrong'}`}>
            <p><strong>Q{i + 1}:</strong> {a.question}</p>
            <p>Your answer: <span>{a.selected ?? 'Skipped (time ran out)'}</span></p>
            {!a.isCorrect && <p>Correct: <span className="correct-text">{a.correct}</span></p>}
          </div>
        ))}
      </div>

      <button onClick={() => navigate('/')}>Play Again</button>
    </div>
  )
}

export default Result