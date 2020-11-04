import React from 'react';
import './CollectionsOverview.styles.scss'
import CollectionPreview from "./CollectionPreview"
import {createStructuredSelector} from "reselect"
import {selectCollectionsForPreview} from "../redux/shop/Shop.selectors"
import {connect} from "react-redux"


const CollectionsOverview = ({collections}) => (
  <div className='collections-overview'>
    {
      collections.map(({id, ...collectionProps}) => (
        <CollectionPreview key={id} {...collectionProps}/>
      ))
    }

  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);

