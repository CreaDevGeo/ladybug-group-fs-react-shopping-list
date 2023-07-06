import { useState } from 'react;'

function Item(props) {

    const [ purchased, setPurchased ] = useState(false);

    const handlePurchase = () => {
        console.log('props.item.name', purchased);
    }

    return (


    )
}

export default Item;