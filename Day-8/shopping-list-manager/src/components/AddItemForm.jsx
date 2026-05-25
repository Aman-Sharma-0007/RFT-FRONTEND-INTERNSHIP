import { useState } from 'react'

export default function AddItemForm({ onAdd }) {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim()) return
    onAdd(name.trim(), quantity)
    setName('')
    setQuantity(1)
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item name..."
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}