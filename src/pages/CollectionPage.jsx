import React from 'react';
import CollectionItem from "../components/CollectionItem"
import {connect} from "react-redux"
import {selectCollection} from "../redux/shop/Shop.selectors"
import {createStructuredSelector} from "reselect"

const CollectionPage = ({ collection }) => {
  console.log(collection)
  return (
    <div className='collection-page'>
      <h2>CATEGORY PAGE</h2>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collection: selectCollection
})

export default connect(mapStateToProps)(CollectionPage);

