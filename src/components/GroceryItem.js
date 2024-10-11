import React from "react";

const GroceryItem = ({ props }) => {
  const { editItem, deleteItem, newItem } = props;
  return (
    <section>
      <p>{newItem}</p> <button onClick={editItem}>Edit</button> <button onClick={deleteItem}>Delete </button> <button>Bought</button>
    </section>
  );
};
export default GroceryItem;
