import {ShopActionTypes} from './Shop.types'
import {takeEvery, call, put} from "redux-saga/effects"
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.util"
import {fetchCollectionFailure, fetchCollectionSuccess} from "./Shop.actions"

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(fetchCollectionSuccess(collectionsMap))
  } catch (err) {
    yield put(fetchCollectionFailure(err.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionAsync
  )
}

