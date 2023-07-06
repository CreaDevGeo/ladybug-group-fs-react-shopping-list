import {useEffect, useState} from 'react';
import axios from 'axios'
import Header from '../Header/Header.jsx'
import './App.css';

// Importing Form component to App
import Form from '../Form/Form.jsx';


function App() {

    const [shoppingList, setShoppingList] = useState([])

    const fetchList = () => {
        axios({
            method: 'GET',
            url: '/shopping'
        })
        .then( (response) => {
            console.log('Entire response:', response);
            // The actual array comes from the data attribute on the response
            console.log('Just the data:', response.data);
    
            // Set data into component state
            setShoppingList(response.data);
          })
          .catch(function (error) {
            console.log('Error on get:', error);
          });
    } 

        const deleteItems = () => {
        axios({
          method: 'DELETE',
          url: '/shopping'
        })
          .then((response) => {
            fetchList();
          })
          .catch(function (error) {
            console.log('Error on delete:', error);
          });
      }


    useEffect( () => {
        fetchList();
      }, [])

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



