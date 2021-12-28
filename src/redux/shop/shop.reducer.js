import shopActionTypes from "./shop.action.types";

const INITIAL_STATE = {
    collection: null,
    isFetching: true,
    errorMessage: undefined
};

const shopReducer = (prevState = INITIAL_STATE, action) => {

    switch (action.type) {
        case shopActionTypes.FETCH_COLLECTION_START:
            return {
                ...prevState,
                isFetching: true,
            }
        case shopActionTypes.FETCH_COLLECTION_SUCCES:
            return {
                ...prevState,
                collection: action.payload,
                isFetching: false,
            }
        case shopActionTypes.FETCH_COLLECTION_FAILURE:
            return {
                ...prevState,
                isFetching: false,
                errorMessage: action.payload,
            }    
        default:
            return prevState
    }
}

export default shopReducer;