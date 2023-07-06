// Importing Use State for input field hooks
import { useState } from "react";

// Form component functionality
function Form() {
  /* Hooks for form input field elements:
    Item (Grocery item), Quantity, and Unit
*/
  const [newItem, setNewItem] = useState("");
  const [newItemQuantity, setNewItemQuantity] = useState("");
  const [newItemUnit, setNewItemUnit] = useState("");

  // Function for handling save button
  function handleSaveButton() {
    console.log("Save button clicked!");
  }

  return (
    <>
      {/* Form element */}
      <form>
        <label>Item:</label>
        <input 
        placeholder="Enter shopping item" 
        onChange={(event) => {setNewItem(event.target.value)}}
        value={newItem} />

        <label>Quantity:</label>
        <input 
        placeholder="Enter quantity" 
        onChange={(event) => {setNewItemQuantity(event.target.value)}}
        value={newItemQuantity} />
        
        <label>Unit:</label>
        <input
          placeholder="Enter item unit; 5lbs, 1 loaf..."
          onChange={(event) => {setNewItemUnit(event.target.value)}}
          value={newItemUnit}
        />

        <button onClick={handleSaveButton}>Save</button>
      </form>
    </>
  );
}

// Exporting Form component
export default Form;
