import React from "react";
import CustomButton from "../custom-button/custom-button.components";
import CartItem from "../cart-item/cart-item.components";
import {connect} from "react-redux"
import { withRouter } from "react-router";
import toggleCartHidden from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss"
import { selectCartItems } from "../../redux/cart/cart.selector";

const CartDropdown = ({cartItems, match, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className='cart-items'>
        {
            cartItems.length ?
            (cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}></CartItem>
            ))) :
            (<span className="empty-cart">Your cart is empty</span>)
        }
        </div>
        <CustomButton onClick={() => {
            dispatch(toggleCartHidden());
            history.push("/checkout")
            }}>CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));