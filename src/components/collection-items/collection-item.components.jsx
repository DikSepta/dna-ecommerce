import React from "react";
import './collection-item.style.scss'

const CollectionItem = ({id, name, price, imageUrl}) => {

    return(
        <div className='collection-item'>
            <div 
                className='image'
                style={{
                    backgroundImage:`url(${imageUrl})`
                }}
            >
            </div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <button>Add to Cart</button>
        </div>
    )
}

export default CollectionItem;