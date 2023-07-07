import React, { useState } from "react";
import axios from "axios";
import "./ShoppingItem.css";

function ShoppingItem(props) {
  const [purchased, setPurchased] = useState(false);

  const handlePurchased = () => {
    axios
      .put(`/shopping/${props.newItem.id}`, { purchased: true })
      .then((response) => {
        console.log("Update purchased status to true was successful:", response);
        setPurchased(true);
      })
      .catch((error) => {
        console.log("Error updating purchased status to true:", error);
      });
  };


  return (
    <>
      <div
        className={`shopping-item-container ${purchased ? "purchased" : ""}`}
      >
        <div className="item">{props.newItem.name}</div>
        <div className="quantity-unit-container">
          <div className="quantity">{props.newItem.quantity}</div>
          <div className="unit">&nbsp;{props.newItem.unit}</div>
        </div>
        <div className="buy-remove-container">
          {purchased ? (
            <div className="purchased">💲 Purchased</div>
          ) : (
            <div className="buy-button-container">
              <button className="buy-button" onClick={handlePurchased}>💲 Buy</button>
              <div className="remove-button-container">
                <button className="remove-button">❌ Remove</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ShoppingItem;
