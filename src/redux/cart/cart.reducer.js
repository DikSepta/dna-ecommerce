import CartActionTypes from "./cart.action.types";
import { addItemToCartWithGrouping, reduceCartItemQuantityUtils } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const CartReducer = (prevState = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...prevState,
                hidden: !prevState.hidden
            }
        case CartActionTypes.ADD_ITEM_TO_CART:
            return{
                ...prevState,
                cartItems: addItemToCartWithGrouping(prevState.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...prevState,
                cartItems: prevState.cartItems.filter(
                    cartItem => (cartItem.id !== action.payload.id)
                )
            }
        case CartActionTypes.REDUCE_CART_ITEM_QUANTITY:
            return{
                ...prevState,
                cartItems: reduceCartItemQuantityUtils(prevState.cartItems, action.payload)
            }
        default:
            return prevState;
    }
}

export default CartReducer;