import {ShopActionTypes} from "./Shop.types";

export const updateShopCollection = collectionsMap => ({
  type: ShopActionTypes.UPDATE_COLLECTION,
  payload: collectionsMap
})