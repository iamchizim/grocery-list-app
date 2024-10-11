import React from "react";
import { useState } from "react";
import GroceryList from "./GroceryList";
import GroceryItem from "./GroceryItem";

const GroceryListApp = () => {
  const [groceryItems, setGroceryItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editItemId, setEditItemId] = useState(null);

  let idCounter = 0;

  const generateId = () => {
    return ++idCounter;
  };

  const addItem = () => {
    const newGroceryItem = {
      id: generateId(),
      name: newItem,
    };
    setGroceryItems((prevItems) => [...prevItems, newGroceryItem]);
    setNewItem("");
  };

  const editItem = (id) => {
    const itemToEdit = groceryItems.find((item) => item.id === id);
    if (itemToEdit) {
      setNewItem(itemToEdit.name);
      setEditItemId(id);
    }
  };

  const updateItem = () => {
    if (editItemId && newItem.trim()) {
      setGroceryItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editItemId ? { ...item, name: newItem } : item
        )
      );
      setNewItem("");
      setEditItemId(null);
    }
  };

  const deleteItem = (idToDelete) => {
    setGroceryItems((prevItems) =>
      prevItems.filter((item) => item.id !== idToDelete)
    );
  };

  return (
    <section>
      <h1>GROCERY LIST APP</h1>
      <input type="text" onChange={(e) => setNewItem(e.target.value)} />
      <button onClick={addItem}>Add Item or Update Edited Item</button>
  
    </section>
  );
};
