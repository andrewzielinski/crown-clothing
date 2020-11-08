import {ShopActionTypes} from "./Shop.types"

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
}


const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true
      }
    case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false
      }
    case ShopActionTypes.FETCH_COLLECTION_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
}


export default shopReducer;