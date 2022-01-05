import {takeLatest, call, put} from 'redux-saga/effects'
import shopActionTypes from './shop.action.types'
import { firestore } from '../../firebase/firebase.utils';
import { transformShopCollectionData } from '../../firebase/firebase.utils';
import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.actions';

function* fetchCollectionStartSaga () {
    try {
        const collectionRef = firestore.collection("collection")
        console.log(collectionRef);
        const snapshot = yield collectionRef.get()    
        yield console.log('transorm  snapshot')
        const transformedCollection = yield call(transformShopCollectionData, snapshot)
        yield put(fetchCollectionSuccess(transformedCollection))
    } catch (error) {
        yield put(fetchCollectionFailure(error))        
    }
}

export function* fetchCollectionStart() {
    yield takeLatest(shopActionTypes.FETCH_COLLECTION_START, fetchCollectionStartSaga)
}