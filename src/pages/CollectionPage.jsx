import React from 'react';
import CollectionItem from "../components/CollectionItem"
import {connect} from "react-redux"
import {selectCollection} from "../redux/shop/Shop.selectors"
import {createStructuredSelector} from "reselect"
import './CollectionPage.styles.scss'

const CollectionPage = ({ collection }) => {
  const { title , items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{ title }</h2>
      <div className="items">
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collection: selectCollection
})

export default connect(mapStateToProps)(CollectionPage);

