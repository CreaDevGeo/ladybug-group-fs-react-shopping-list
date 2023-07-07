import React, { useState } from 'react';
import "./ShoppingList.css"
import ShoppingItem from '../ShoppingItems/ShoppingItem.jsx';

function ShoppingList({ shoppingList }) {
  const [list, setList] = useState([]);

  const handlePurchased = (itemId) => {
    const updatedList = list.map(item => {
      if (item.id === itemId) {
        return { ...item, purchased: true };
      }
      return item;
    });
    setList(updatedList);
  };

  return (
    <div className="shopping-list-container">
      {shoppingList.map((shoppingItem) => (
        <ShoppingItem
          key={shoppingItem.id}
          newItem={shoppingItem}
          handlePurchased={handlePurchased}
          
        />
        
      ))}
    </div>
  );
}

export default ShoppingList;
