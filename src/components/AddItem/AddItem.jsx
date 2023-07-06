import React from 'react';
import './AddItem.css'

function AddItem () {
    return (
        <>
        <h2>Add an Item</h2>
        Item:<input/> <br></br>
        Quantity:<input/> Unit:<input/><br></br>
        <button type="submit">Save</button>
        </>
    )
}

export default AddItem