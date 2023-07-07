import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header.jsx";
import Reset from "../Reset/Reset.jsx";
import Clear from "../Clear/Clear.jsx";
import Form from "../Form/Form.jsx";
import ShoppingList from "../ShoppingList/ShoppingList";
import "./App.css";

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  const fetchList = () => {
    axios({
      method: "GET",
      url: "/shopping"
    })
      .then((response) => {
        console.log("Entire response:", response);
        console.log("Just the data:", response.data);

        setShoppingList(response.data);
      })
      .catch((error) => {
        console.log("Error on GET request:", error);
      });
  };

  const clearShoppingList = (ids) => {
    return axios.delete("/shopping", { data: { ids } });
  };

  const handleClear = () => {
    const shoppingIds = shoppingList.map((shoppingItem) => shoppingItem.id);
    clearShoppingList(shoppingIds)
      .then((response) => {
        console.log("Items deleted:", response.data);
        fetchList(); // Fetch the updated shopping list after clearing
      })
      .catch((error) => {
        console.error("Error deleting items:", error);
      });
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <section className="add-item-container">
        <Form fetchList={fetchList} />
        </section>
        <section className="shopping-list-btn-container">
        <h1 className="sl-heading">Shopping List</h1>
        <Reset shoppingList={shoppingList} /> &nbsp;
        <Clear handleClear={handleClear} />
        </section>
        <ShoppingList shoppingList={shoppingList} />
      </main>
    </div>
  );
}

export default App;
