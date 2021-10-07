export const addItemToCartWithGrouping = (cartItems, cartItemToAdd) => {
    const isCartItemExist = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(isCartItemExist) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1} :
            cartItem
        );
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

export const reduceCartItemQuantityUtils = (cartItems, cartItemToReduce) => {

    return cartItemToReduce.quantity === 1 ? 
        cartItems.filter(cartItem => cartItem.id !== cartItemToReduce.id) :
        cartItems.map(cartItem => (
            cartItem.id === cartItemToReduce.id ?
            {...cartItem, quantity: cartItem.quantity - 1} :
            cartItem
        ));
}