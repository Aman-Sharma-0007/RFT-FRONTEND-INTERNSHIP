import ShoppingItem from './ShoppingItem'

export default function ShoppingList({ items, onRemove, onToggle }) {
  if (items.length === 0) {
    return <p className="empty">No items yet. Add something!</p>
  }

  return (
    <ul className="list">
      {items.map(item => (
        <ShoppingItem
          key={item.id}
          item={item}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ul>
  )
}