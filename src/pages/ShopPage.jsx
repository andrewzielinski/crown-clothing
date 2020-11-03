import React from 'react';
import CollectionPreview from "../components/CollectionPreview"
import {createStructuredSelector} from "reselect"
import {connect} from "react-redux"
import {selectShopCollections} from "../redux/shop/Shop.selectors"

const ShopPage = ({collections}) => (
  <div className='shop-page'>
    {
      collections.map(({id, ...collectionProps}) => (
        <CollectionPreview key={id} {...collectionProps}/>
      ))
    }
  </div>
)


const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
})

export default connect(mapStateToProps)(ShopPage);