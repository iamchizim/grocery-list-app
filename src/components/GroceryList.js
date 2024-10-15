import React from "react";
import GroceryItem from "./GroceryItem";

const GroceryList = ({
  groceryItems,
  editItem,
  deleteItem,
  toggleComplete,
}) => {
  return (
    <section>
      {groceryItems.map((newItem) => (
        <GroceryItem
          key={newItem.id}
          newItem={newItem}
          editItem={() => editItem(newItem.id)}
          deleteItem={() => deleteItem(newItem.id)}
          toggleComplete={() => toggleComplete(newItem.id)}
        />
      ))}
    </section>
  );
};
export default GroceryList;
