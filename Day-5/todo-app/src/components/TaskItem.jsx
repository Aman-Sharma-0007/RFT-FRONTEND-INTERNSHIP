function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggle(task.id)} className="task-text">
        {task.completed ? '✅' : '⬜'} {task.text}
      </span>
      <button onClick={() => onDelete(task.id)} className="delete-btn">🗑️</button>
    </div>
  )
}

export default TaskItem