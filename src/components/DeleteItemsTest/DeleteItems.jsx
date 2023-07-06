
// TODO: Shopping List //
    // - [ ] 1. The `Reset` button should clear the purchased status from all items, allowing the list to be re-used. 
    // - [ ] 2. **** The `Clear` button should remove all items from the list, deleting them from the database.
// TODO: Item Component //
    // Hint for Marking as purchased/removing item
    // If you've set up your components as we have shown, you should have an `Item` Component. 
        // That item should have access to every property of the item *object* -- 
        // -- this will be critical to successfully calling a PUT or DELETE route with the id (`/:id`). 

// *** FRONTEND ***
    // ** a. App.jsx - DELETE REQUEST - axios **

    // Function to delete all Items - rows from list table
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

      return (
        <div className="App">
        <button onClick={deleteItems}>Clear</button>
        </div>
        );



    // ** b. ShoppingList.jsx - COMPONENT ?? **
      /*
      return (
      <div className="App">
      <ShoppingList shoppingList={shoppingList} deleteItem={deleteItem} />
      </div>
      );
      */



// *** BACKEND ***
    // ** a. list.router.jsx - DELETE REQUEST - router.delete **
    //  delete all Items - rows from list table
    router.delete('/', (req, res) => {
        const sqlText = 'DELETE FROM list;';
        pool.query(sqlText)
            .then( (result) => {
            console.log('Deleted items from database', result);
            res.sendStatus(200);
            })
            .catch( (error) => {
            console.log(`Error making database DELETE query ${sqlText}`, error);
            res.sendStatus(500); 
            })
        })