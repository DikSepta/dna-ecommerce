import React from "react";

import "./checkout-item.styles.scss"

import { connect } from "react-redux";
import { addItemToCart, clearItemFromCart, reduceCartItemQuantity } from "../../redux/cart/cart.actions";

const CheckoutItem = ({cartItem, clearItem, addItem, reduceItemQuantity}) => {
    const {name, price, imageUrl, quantity} = cartItem;    
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={()=>reduceItemQuantity(cartItem)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
        </span>
        <span className="price">${price}</span>
        <span className="remove-button" onClick={()=>clearItem(cartItem)}>&#10005;</span>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item) => dispatch(addItemToCart(item)),
    reduceItemQuantity: (item) => dispatch(reduceCartItemQuantity(item))
});

export default connect(null,mapDispatchToProps)(CheckoutItem);