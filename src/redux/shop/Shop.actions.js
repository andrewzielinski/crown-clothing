import {ShopActionTypes} from "./Shop.types";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.util"

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START,
})

export const fetchCollectionSuccess = (collectionMap) => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionMap
})

export const fetchCollectionFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAIL,
  payload: errorMessage
})

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    dispatch(fetchCollectionStart())
    const collectionRef = firestore.collection('collections');
    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      dispatch(fetchCollectionSuccess(collectionsMap))
    }).catch(error => dispatch(fetchCollectionFailure(error)))
  }
}