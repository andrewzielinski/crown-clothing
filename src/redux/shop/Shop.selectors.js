import {createSelector} from "reselect";


const selectShop = state => state.shop;
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}

export const selectShopCollections = createSelector(
  selectShop,
  shop => shop.collections
);

const selectCategory = (state, props) => props.match.params.collectionId

export const selectCollection = createSelector(
  [selectShopCollections, selectCategory],
  (collections, category) => collections.find(
    collection => collection.id === COLLECTION_ID_MAP[category]
  )
);




