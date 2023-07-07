import { useState } from "react";
import axios from "axios";
import '../Form/Form.css';

function Form({ fetchList }) {
  const [newItem, setNewItem] = useState("");
  const [newItemQuantity, setNewItemQuantity] = useState("");
  const [newItemUnit, setNewItemUnit] = useState("");

  function handleSaveButton(event) {
    event.preventDefault();

    const newItemData = {
      name: newItem,
      quantity: newItemQuantity,
      unit: newItemUnit,
      purchased: false
    };
    

    axios
      .post("/shopping", newItemData)
      .then(() => {
        // Call the fetchList function from the App component to fetch the updated shopping list after the form submission
        fetchList();

        // Clear the form fields
        setNewItem("");
        setNewItemQuantity("");
        setNewItemUnit("");
      })
      .catch((error) => {
        console.error("Error in POST request:", error);
      });
  }

  return (
    <>
    <h1 className="add-item-heading">➕ Add an Item</h1>
    <div className="form-container">
      <form>
        <div className="item-container">
        <label>Item:</label>
        <input
          placeholder="Name of the item"
          onChange={(event) => {
            setNewItem(event.target.value);
          }}
          value={newItem}
        />
        </div>

        <div className="quantity-container">
        <label>Quantity:</label>
        <input
          placeholder="Enter item quantity"
          onChange={(event) => {
            setNewItemQuantity(event.target.value);
          }}
          value={newItemQuantity}
        />
        </div>

        <div className="unit-container">
        <label>Unit:</label>
        <input
          placeholder="Item unit: bunch, cup, gallon, lb, liter, loaf..."
          onChange={(event) => {
            setNewItemUnit(event.target.value);
          }}
          value={newItemUnit}
        />
        </div>

        <div className="submit-button-container">
        <button className="submit-button" type="submit" onClick={handleSaveButton}>
          💾 Save
        </button>
        </div>
      </form>
      </div>
    </>
  );
}

export default Form;
