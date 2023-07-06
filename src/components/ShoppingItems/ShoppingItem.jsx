import React from 'react';
import './ShoppingItem.css'

function ShoppingItem () {
    return (
        <>
        <div className="item-box">
            <span className="item">bananas</span><br></br>
            <span className="quantity">3 </span><span className="unit"> bunches</span> 
        </div>
        </>
    )
}

export default ShoppingItem