import {createSelector} from "reselect";


const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  selectShop,
  shop => shop.collections
);

const selectCategory = (state, props) => props.match.params.collectionId

export const selectCollection = createSelector(
  [selectShopCollections, selectCategory],
  (collections, category) => collections ? collections[category] : null
);

export const selectCollectionsForPreview = createSelector(
  selectShopCollections,
  collections => collections ? Object.keys(collections).map(key => collections[key]) : null
)




