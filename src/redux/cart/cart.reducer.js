import CartActionTypes from "./cart.action.types";

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
                cartItems: [...prevState.cartItems, action.payload]
            }
        default:
            return prevState;
    }
}

export default CartReducer;