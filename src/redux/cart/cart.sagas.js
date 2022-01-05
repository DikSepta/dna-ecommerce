import { takeLatest, put, all, call } from "redux-saga/effects";

import userActionTypes from "../user/user.action.types";
import { clearCartItem } from "./cart.actions";

export function* clearCartItemOnSignOut() {
    yield put(clearCartItem());
}

export function* onUserSignOutSuccess () {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartItemOnSignOut)
}

export function* cartSagas () {
    yield all([
        call(onUserSignOutSuccess)
    ])
}