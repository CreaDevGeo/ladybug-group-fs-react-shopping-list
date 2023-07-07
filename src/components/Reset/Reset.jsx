import React from "react";
import axios from "axios";
import '../Reset/Reset.css';

// TODO: RESET BUTTON //
//  The `Reset` button should clear the purchased status from all items, allowing the list to be re-used. 
/* 

#### Hint for Marking as purchased/removing item
>> If you've set up your components as we have shown, you should have an `Item` Component. 
That item should have access to every property of the item *object* -- 
-- this will be critical to successfully calling a PUT or DELETE route with the id (`/:id`). 

*/

function Reset({ shoppingList }) {

  const handleReset = () => {
    console.log("in handleReset");
    shoppingList.forEach((item) => {
      axios
        .put(`/shopping/${item.id}`, { purchased: false })
        .then((response) => {
          console.log("Update purchased status to false was successful:", response);
        })
        .catch((error) => {
          console.log("Error updating purchased status:", error);
        });
    });
  };

  return (
    <>
      <button className="reset-button" onClick={handleReset}>↩  Reset</button>
    </>
  );
}

export default Reset;

  