import SHOP_DATA from "../../pages/shop/shop.data"
import shopActionTypes from "./shop.action.types";

const INITIAL_STATE = {
    collection: SHOP_DATA,
};

const shopReducer = (prevState = INITIAL_STATE, action) => {
    console.log('shopreducer called')
    console.log(action)

    switch (action.type) {
        case shopActionTypes.setCollection:
            console.log('setCollection')
            console.log(action)
            return {
                ...prevState,
                collection: action.payload
            }
        default:
            return prevState
    }
}

export default shopReducer;