import { all, call, takeLatest, put } from "redux-saga/effects";
import userActionTypes from "./user.action.types";
import { googleProvider, auth, getCurrentUser } from "../../firebase/firebase.utils";
import { signInFailure, signInSuccess, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure } from "./user.actions";
import { createUserProfileDocument } from "../../firebase/firebase.utils";

export function* onCreateUserProfile(user) {
    try {
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }))
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield onCreateUserProfile(user);
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onGoogleSignIn () {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, onGoogleSignInStart)
}

export function* onEmailSignInStart ({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield onCreateUserProfile(user);
    } catch(error) {
        yield put(signInFailure(error))
    }
}

export function* onEmailSignIn () {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, onEmailSignInStart)
}


export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth)
            return; 
        yield onCreateUserProfile(userAuth); 
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onCheckUserSession () {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSignOut () {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch(error) {
        yield put(signOutFailure(error));
    }
}

export function* onSignOutStart () {
    yield takeLatest(userActionTypes.SIGN_OUT_START, userSignOut)
}

export function* creatUser({payload: {displayName, email, password, confirmPassword}}) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        console.log(user);
        yield onCreateUserProfile({...user, displayName});     
    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* onSignUpStart () {
    yield takeLatest(userActionTypes.SIGN_UP_START,creatUser)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignIn),
        call(onEmailSignIn),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart)
    ])
}