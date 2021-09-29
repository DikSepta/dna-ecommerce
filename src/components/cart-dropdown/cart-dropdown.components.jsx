import React from "react";
import CustomButton from "../custom-button/custom-button.components";
import CartItem from "../cart-item/cart-item.components";
import {connect} from "react-redux"

import "./cart-dropdown.styles.scss"
import { selectCartItems } from "../../redux/cart/cart.selector";

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className='cart-items'>
        {
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}></CartItem>
            ))
        }
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);