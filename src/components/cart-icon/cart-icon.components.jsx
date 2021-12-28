import React from "react"
import toggleCartHidden from "../../redux/cart/cart.actions"
import { connect } from "react-redux"
import { selectCartItemsCount } from "../../redux/cart/cart.selector"
import { CartIconContainer, ShoppingIconContainer, ItemCount } from "./cart-icon.styles"

import "./cart-icon.styles.scss"

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIconContainer></ShoppingIconContainer>
        <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);