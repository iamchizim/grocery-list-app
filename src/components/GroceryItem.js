import React from "react";

const GroceryItem = ({
  editItem,
  deleteItem,
  newItem,
  toggleComplete,
}) => {
  return (
    <section>
      <p
        style={{
          textDecoration: newItem.toggleComplete ? "line-through" : "none",
        }}
      >
        {newItem.name}
      </p>
      <button onClick={editItem}>Edit</button>
      <button onClick={deleteItem}>Delete</button>
      <button onClick={toggleComplete}>
        {toggleComplete ? "Bought" : "Unmark"}
      </button>
    </section>
  );
};

export default GroceryItem;
