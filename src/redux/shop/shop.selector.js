import { createSelector } from "reselect";

export const selectShop = state => state.shop;

/**select all collection
 * @return all collection as an array instead of object
 * */
export const selectAllCollection = createSelector(
    [selectShop],
    shop => {
        const keys = Object.keys(shop.collection);
        return keys.map(key => (shop.collection[key]));
    }
);

/**
 * Select specified collection
 * @param key
 * @return collection item corresponds to the given key 
 */
export const selectCollection = collectionUrlParam => createSelector(
    [selectShop],
    shop => shop.collection ? shop.collection[collectionUrlParam] : null
)