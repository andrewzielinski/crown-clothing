
import {fetchCollectionsStart} from "./shop/Shop.sagas"
import {all, call} from "redux-saga/effects"


export default function* rootSaga() {
  yield all([
    call(fetchCollectionsStart)
  ])
 }