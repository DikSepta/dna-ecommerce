import userActionTypes from "./user.action.types"

export const setCurrentUser = user => {
    return({
        type: userActionTypes.setCurrentUser,
        payload: user
    })
}