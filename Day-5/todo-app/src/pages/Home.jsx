import { useState } from 'react'
import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList'

function Home() {
  const [tasks, setTasks] = useState([])

  // ADD TASK
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // TOGGLE COMPLETE
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const completedCount = tasks.filter(t => t.completed).length

  return (
    <div className="home">
      <h2>My Tasks</h2>

      {/* BONUS: Task Count */}
      <div className="task-count">
        <span>Total: {tasks.length}</span>
        <span>Done: {completedCount}</span>
        <span>Pending: {tasks.length - completedCount}</span>
      </div>

      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
    </div>
  )
}

export default Home