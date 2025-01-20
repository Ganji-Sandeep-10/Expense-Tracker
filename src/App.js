import "./styles.css";
import Heading from "./components/Heading";
import { useState } from "react";
import Display from "./components/Display";

function App() {
  const [entry, setEntry] = useState("");
  const [expense, setExpense] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // Track the index of the item being edited
  const [editedValue, setEditedValue] = useState(""); // Track the new value for editing

  // Add a new expense
  const addEntry = () => {
    if (entry.trim() === "") return;
    setExpense([...expense, entry]);
    setEntry("");
  };

  // Delete an expense
  const deleteExpense = (index) => {
    const newExpense = [...expense];
    newExpense.splice(index, 1);
    setExpense(newExpense);
  };

  // Start editing an expense
  const startEditing = (index) => {
    setEditingIndex(index);
    setEditedValue(expense[index]); // Set the current value of the expense to be edited
  };

  // Save the edited expense
  const saveEditedExpense = () => {
    const newExpense = [...expense];
    newExpense[editingIndex] = editedValue; // Replace the expense at the edited index with the new value
    setExpense(newExpense);
    setEditingIndex(null); // Reset the editing state
    setEditedValue(""); // Clear the edited value
  };

  return (
    <div className="App">
      <Heading />
      <input
        type="text"
        placeholder="Enter new expense"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <button onClick={addEntry}>Add</button>

      {editingIndex !== null && (
        <div>
          <input
            type="text"
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
          />
          <button onClick={saveEditedExpense}>Save</button>
        </div>
      )}

      <Display
        items={expense}
        deleteExpense={deleteExpense}
        startEditing={startEditing}
      />
    </div>
  );
}

export default App;
