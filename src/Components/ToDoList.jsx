import React, { useState } from "react";

function ToDoList() {
  const [items, setItems] = useState([]);
  const [newItems, setNewItems] = useState("");
  const [editItemsId, setEditItemId] = useState(null);

  function handleInputChange(e) {
    setNewItems(e.target.value);
  }

  function handleCreate() {
    const newItem = [...items, { id: Date.now(), name: newItems }];
    setItems(newItem);
    setNewItems("");
  }

  const handleEdit = (id) => {
    setEditItemId(id);
    const itemToEdit = items.find((item) => item.id === id);
    setNewItems(itemToEdit.name);
  };

  const handleUpdate = () => {
    const updateItems = items.map((item) =>
      item.id === editItemsId ? { ...item, name: newItems } : item
    );
    setItems(updateItems);
    setNewItems("");
    setEditItemId(null);
  };

  const handleDelete = (id) => {
    const updateItems = items.filter((item) => item.id !== id);
    setItems(updateItems);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter an item"
        value={newItems}
        onChange={handleInputChange}
      />
      {editItemsId ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleCreate}>Create</button>
      )}
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.name}
              <button onClick={() => handleEdit(item.id)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
