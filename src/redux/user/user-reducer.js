import userActionTypes from "./user.action.types";

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (prevState = INITIAL_STATE, action) => {
    switch(action.type){
        case userActionTypes.setCurrentUser:
            return {
                ...prevState,
                currentUser: action.payload
            };
        case userActionTypes.SIGN_IN_SUCCESS:
                return {
                ...prevState,
                currentUser: action.payload,
                error: null
            }
        case userActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...prevState,
                currentUser: null,
                error: null
            }
        case userActionTypes.SIGN_OUT_FAILURE:
        case userActionTypes.SIGN_IN_FAILURE:
                return {
                ...prevState,
                error: action.payload
            }

        default:
             return prevState;
    }
}

export default userReducer;