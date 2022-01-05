import CartActionTypes from "./cart.action.types"

const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

export default toggleCartHidden;

export const addItemToCart = (item) => ({
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: item
});

export const clearItemFromCart = (item) => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const reduceCartItemQuantity = (item) => ({
    type: CartActionTypes.REDUCE_CART_ITEM_QUANTITY,
    payload: item
})

export const clearCartItem = () => ({
    type: CartActionTypes.CLEAR_CART_ITEM,
})
