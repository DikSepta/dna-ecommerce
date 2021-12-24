import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.components";
import { selectCartItems, selectCartItemTotalPrice } from "../../redux/cart/cart.selector";
import StripeCheckoutButton from "../../components/stripe-checkout/stripe-checkout.components";
import "./checkout.styles.scss"


const CheckoutPage = ({cartItems, totalPrice}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
            ))
        }
        <div className="total">
            TOTAL ${totalPrice}
        </div>
        <div className="test-warning">
            *Please use following credit card for payment test
            <br />
            4242 4242 4242 4242, Exp date:12/22, CVC:123
        </div>
        <StripeCheckoutButton price={totalPrice}></StripeCheckoutButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartItemTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage);