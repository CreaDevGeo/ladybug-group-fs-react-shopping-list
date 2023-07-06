import React from 'react';
import './ShoppingItem.css'

function ShoppingItem (props) {
    return (
        <>
        <div className="item-box">
            <span className="item">{props.newItem.item}</span><br></br>
            <span className="quantity">{props.newItem.quantity}</span><span className="unit">{props.newItem.unit}</span> 
        </div>
        </>
    )
}

export default ShoppingItem