import shopActionTypes from "./shop.action.types";

export const setCollectionData = (collectionData) => {
    return ({
        type: shopActionTypes.setCollection,
        payload: collectionData
    })
}