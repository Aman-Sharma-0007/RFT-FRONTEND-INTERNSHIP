import { useState } from 'react'

function TaskInput({ onAdd }) {
  const [text, setText] = useState('')

  const handleAdd = () => {
    if (text.trim() === '') return
    onAdd(text)
    setText('')
  }

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  )
}

export default TaskInput