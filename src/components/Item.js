export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={(e) => onToggleItem(item.id)}
      />
      <div
        className="desc"
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >
        <span>{item.quantity}</span>
        <p>{item.description}</p>
      </div>
      <span
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => onDeleteItem(item.id)}
      >
        X
      </span>
    </li>
  );
}
