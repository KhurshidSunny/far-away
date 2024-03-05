export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const totalItem = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;

  const numPacked = Math.round((packedItems / totalItem) * 100);
  return (
    <footer className="stats">
      {numPacked < 100
        ? `You have ${totalItem} items on your list, and you already packed
      ${packedItems} (${numPacked}%)`
        : `You got everything! Ready to go 🛫`}
    </footer>
  );
}
