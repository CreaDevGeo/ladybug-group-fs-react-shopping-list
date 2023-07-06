import React from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx'
import './App.css';

const deleteItems = () => {
    axios({
      method: 'DELETE',
      url: `/`,
    })
      .then((response) => {
        fetchItems();
      })
      .catch(function (error) {
        console.log('Error on delete:', error);
      });
  }


function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                <button onClick={deleteItems}>Clear</button>
            </main>
        </div>
    );
}

export default App;
