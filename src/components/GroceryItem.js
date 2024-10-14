import React from "react";

const GroceryItem = ({ props }) => {
  const { editItem, deleteItem, newItem } = props;
  return (
    <section>
      <p>{newItem}</p> <button onClick={editItem}>Edit</button>{" "}
      <button onClick={deleteItem}>Delete</button>{" "}
      <button
        onClick={handleToggleComplete}
        style={{
          textDecoration: toggleComplete ? "line-through" : "none",
          cursor: "pointer",
          padding: "8px",
        }}
      >
        Bought
      </button>
    </section>
  );
};

export default GroceryItem;