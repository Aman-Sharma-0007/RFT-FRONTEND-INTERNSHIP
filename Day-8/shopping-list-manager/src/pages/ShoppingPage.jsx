import { useState } from 'react'
import AddItemForm from '../components/AddItemForm'
import ShoppingList from '../components/ShoppingList'

export default function ShoppingPage() {
  const [items, setItems] = useState([])

  function addItem(name, quantity) {
    const newItem = {
      id: Date.now(),
      name,
      quantity: Number(quantity) || 1,
      bought: false,
    }
    setItems(prev => [...prev, newItem])
  }

  function removeItem(id) {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  function toggleBought(id) {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    )
  }

  return (
    <div className="page">
      <h1>🛒 Shopping List</h1>
      <AddItemForm onAdd={addItem} />
      <ShoppingList items={items} onRemove={removeItem} onToggle={toggleBought} />
    </div>
  )
}