import userActionTypes from "./user.action.types";

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (prevState = INITIAL_STATE, action) => {
    switch(action.type){
        case userActionTypes.setCurrentUser:
            return {
                ...prevState,
                currentUser: action.payload
            };
        default:
             return prevState;
    }
}

export default userReducer;