import { useState } from 'react'
import './TodoApp.css'

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React State Arrays', completed: false },
    { id: 2, text: 'Build Advanced To-Do App', completed: false },
  ])
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('all')
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')

  // Add Task
  const addTodo = () => {
    if (!input.trim()) return
    setTodos([...todos, { id: Date.now(), text: input.trim(), completed: false }])
    setInput('')
  }

  // Delete Task
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Toggle Complete
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Start Edit
  const startEdit = (todo) => {
    setEditId(todo.id)
    setEditText(todo.text)
  }

  // Save Edit
  const saveEdit = (id) => {
    if (!editText.trim()) return
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: editText.trim() } : todo
    ))
    setEditId(null)
    setEditText('')
  }

  // Filter Logic
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed
    if (filter === 'pending') return !todo.completed
    return true
  })

  const completedCount = todos.filter(t => t.completed).length

  return (
    <div className="todo-page">
      <div className="todo-container">
        <h2>My Tasks</h2>
        <p className="stats">{completedCount} / {todos.length} completed</p>

        {/* Add Task */}
        <div className="add-row">
          <input
            type="text"
            placeholder="Add a new task..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addTodo()}
          />
          <button onClick={addTodo}>Add</button>
        </div>

        {/* Filter Buttons */}
        <div className="filters">
          {['all', 'pending', 'completed'].map(f => (
            <button
              key={f}
              className={filter === f ? 'active' : ''}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Todo List */}
        <ul className="todo-list">
          {filteredTodos.length === 0 && (
            <p className="empty">No tasks here!</p>
          )}
          {filteredTodos.map(todo => (
            <li key={todo.id} className={`todo-item ${todo.completed ? 'done' : ''}`}>
              {editId === todo.id ? (
                <div className="edit-row">
                  <input
                    value={editText}
                    onChange={e => setEditText(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && saveEdit(todo.id)}
                    autoFocus
                  />
                  <button className="save-btn" onClick={() => saveEdit(todo.id)}>Save</button>
                </div>
              ) : (
                <>
                  <div className="todo-left">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                    />
                    <span>{todo.text}</span>
                  </div>
                  <div className="todo-actions">
                    <button className="edit-btn" onClick={() => startEdit(todo)}>✏️</button>
                    <button className="del-btn" onClick={() => deleteTodo(todo.id)}>🗑️</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoApp