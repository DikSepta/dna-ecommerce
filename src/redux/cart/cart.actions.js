import CartActionTypes from "./cart.action.types"

const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

export default toggleCartHidden;

export const addItemToCart = (item) => ({
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: item
});