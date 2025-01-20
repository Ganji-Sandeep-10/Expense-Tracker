import React from "react";

function Display({ items, deleteExpense, startEditing }) {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => startEditing(index)}>Edit</button>
            <button onClick={() => deleteExpense(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Display;
