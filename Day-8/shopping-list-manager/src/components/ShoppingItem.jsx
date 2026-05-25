export default function ShoppingItem({ item, onRemove, onToggle }) {
  return (
    <li className={`list-item ${item.bought ? 'bought' : ''}`}>
      <input
        type="checkbox"
        checked={item.bought}
        onChange={() => onToggle(item.id)}
      />
      <span className="item-name">{item.name}</span>
      <span className="item-qty">x{item.quantity}</span>
      <button className="remove-btn" onClick={() => onRemove(item.id)}>✕</button>
    </li>
  )
}