import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const questions = [
  {
    question: "What hook is used to manage state in React?",
    options: ["useEffect", "useState", "useRef", "useContext"],
    answer: "useState"
  },
  {
    question: "What does JSX stand for?",
    options: ["JavaScript XML", "Java Syntax Extension", "JS Extra", "None"],
    answer: "JavaScript XML"
  },
  {
    question: "Which method renders a React component to the DOM?",
    options: ["React.render()", "ReactDOM.render()", "render()", "ReactDOM.createRoot()"],
    answer: "ReactDOM.createRoot()"
  },
  {
    question: "What is a prop in React?",
    options: ["A CSS property", "Data passed to a component", "A state variable", "A lifecycle method"],
    answer: "Data passed to a component"
  },
  {
    question: "Which hook runs code after every render?",
    options: ["useState", "useCallback", "useEffect", "useMemo"],
    answer: "useEffect"
  }
]

const TIME_PER_QUESTION = 15

function Quiz() {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION)
  const [answers, setAnswers] = useState([])

  const q = questions[current]

  useEffect(() => {
    if (timeLeft === 0) {
      handleNext(null)
      return
    }
    const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000)
    return () => clearTimeout(timer)
  }, [timeLeft])

  function handleSelect(option) {
    if (selected !== null) return
    setSelected(option)
  }

  function handleNext() {
    const isCorrect = selected === q.answer
    const newScore = isCorrect ? score + 1 : score
    const newAnswers = [...answers, { question: q.question, selected, correct: q.answer, isCorrect }]

    if (current + 1 < questions.length) {
      setScore(newScore)
      setAnswers(newAnswers)
      setCurrent(c => c + 1)
      setSelected(null)
      setTimeLeft(TIME_PER_QUESTION)
    } else {
      navigate('/result', { state: { score: newScore, answers: newAnswers, total: questions.length } })
    }
  }

  const progress = ((current) / questions.length) * 100

  return (
    <div className="container">
      <div className="top-bar">
        <span>Question {current + 1} / {questions.length}</span>
        <span className={`timer ${timeLeft <= 5 ? 'danger' : ''}`}>⏱ {timeLeft}s</span>
        <span>Score: {score}</span>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <h2>{q.question}</h2>

      <div className="options">
        {q.options.map(option => {
          let className = 'option'
          if (selected !== null) {
            if (option === q.answer) className += ' correct'
            else if (option === selected) className += ' wrong'
          } else if (option === selected) {
            className += ' selected'
          }

          return (
            <button key={option} className={className} onClick={() => handleSelect(option)}>
              {option}
            </button>
          )
        })}
      </div>

      {selected !== null && (
        <button className="next-btn" onClick={handleNext}>
          {current + 1 < questions.length ? 'Next →' : 'See Results'}
        </button>
      )}
    </div>
  )
}

export default Quiz