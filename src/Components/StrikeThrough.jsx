import React, { useState } from "react";
import "../Styles/Strike.css";

function StrikeThrough() {
  const [newText, setNewText] = useState("");
  const [items, setItems] = useState([]);

  function handleAddItems() {
    if (newText) {
      setItems([...items, { text: newText, isStrikeThrough: false }]);
      setNewText("");
    }
  }
  function handleClearItems() {
    setItems([]);
  }

  function handleStrikeThrough(index) {
    const updatedItems = [...items];
    updatedItems[index].isStrikeThrough = !updatedItems[index].isStrikeThrough;
    setItems(updatedItems);
  }
  return (
    <div style={{}}>
      <h1>Dynamic list</h1>
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <button onClick={handleAddItems}>Add Items</button>
      <button onClick={handleClearItems}>Clear All</button>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className={item.isStrikeThrough ? "striked-through" : ""}
            onClick={() => handleStrikeThrough(index)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StrikeThrough;
