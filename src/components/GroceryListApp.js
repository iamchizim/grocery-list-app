import React from "react";
import { useState } from "react";

const GroceryListApp = () => {
  const [groceryItems, setGroceryItems] = useState([]);
  const [newItem, setNewItem] = useState(''); 

  const addItem = () => {
    if (newItem.trim()) { 
      setGroceryItems((prevItems) => [...prevItems, newItem]); 
      setNewItem('');
    }
  };
  const deleteItem = (itemToDelete) => {
    setGroceryItems((prevItems) =>
      prevItems.filter((item) => item !== itemToDelete)
    );
  };

  const editItem = () =>{
    
  }
};
setItemId ((prevId) => prevId + 1)