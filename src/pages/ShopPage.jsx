import React from 'react';
import CollectionsOverview from "../components/CollectionsOverview"
import {Route} from "react-router-dom"
import CollectionPage from "./CollectionPage"
import {convertCollectionsSnapshotToMap, firestore} from "../firebase/firebase.util"
import {connect} from "react-redux"
import {updateShopCollection} from "../redux/shop/Shop.actions"
import WithSpinner from "../components/WithSpinner"

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  unsubscribeFromSnapShot = null;
  state = {
    loading: true
  }

  componentDidMount() {
    const {updateShopCollection} = this.props;
    const collectionRef = firestore.collection('collections')
    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateShopCollection(collectionsMap)
      this.setState({ loading: false })
    })
  }



  render() {
    const {match} = this.props
    const {loading} = this.state
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} /> }/>
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} /> }/>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  updateShopCollection: (collection) => dispatch(updateShopCollection(collection))
})

export default connect(null, mapDispatchToProps)(ShopPage);
