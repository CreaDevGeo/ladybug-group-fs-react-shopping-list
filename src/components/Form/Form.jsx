// Importing Use State for input field states
import { useState } from "react";

// Form component functionality
function Form() {
  /* State hooks for form input field elements:
    Item (Grocery item), Quantity, and Unit
*/
  const [newItem, setNewItem] = useState("");
  const [newItemQuantity, setNewItemQuantity] = useState("");
  const [newItemUnit, setNewItemUnit] = useState("");

  // Function for handling save button
  function handleSaveButton(event) {
    
    // Preventing default submit behavior
    event.preventDefault();
    
    // Logging
    console.log("\nSave button clicked!");
    console.log("newItem is:", newItem);
    console.log("newItemQuantity is:", newItemQuantity);
    console.log("newItemUnit is:", newItemUnit);
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

        <button type="submit" onClick={handleSaveButton}>Save</button>
      </form>
    </>
  );
}

// Exporting Form component
export default Form;
