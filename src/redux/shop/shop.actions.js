import shopActionTypes from "./shop.action.types";
import { firestore, transformShopCollectionData } from '../../firebase/firebase.utils';

export const fetchCollection = () => {
    return dispatch => {
        const collectionRef = firestore.collection("collection");
    
        dispatch(fetchCollectionStart());
        collectionRef.get().then(
            //success callback
            snapshot => {
                const transformedCollection = transformShopCollectionData(snapshot);
        
                dispatch(fetchCollectionSuccess(transformedCollection));
            },
            //failure callback
            message => {
                dispatch(fetchCollectionFailure(message));
            }
        )
    }
}

export const fetchCollectionStart = () => {
    return({
        type: shopActionTypes.FETCH_COLLECTION_START
    })
}

export const fetchCollectionSuccess = (collectionData) => {
    return({
        type: shopActionTypes.FETCH_COLLECTION_SUCCES,
        payload: collectionData
    })
}

export const fetchCollectionFailure = (errorMessage) => {
    return({
        type: shopActionTypes.FETCH_COLLECTION_FAILURE,
        payload: errorMessage
    })
}