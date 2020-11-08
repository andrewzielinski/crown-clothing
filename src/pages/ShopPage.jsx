import React from 'react';
import CollectionsOverview from "../components/CollectionsOverview"
import {Route} from "react-router-dom"
import CollectionPage from "./CollectionPage"
import {connect} from "react-redux"
import {fetchCollectionStartAsync} from "../redux/shop/Shop.actions"
import WithSpinner from "../components/WithSpinner"
import {createStructuredSelector} from "reselect"
import {selectIsCollectionsFetching, selectIsCollectionsLoaded} from "../redux/shop/Shop.selectors"

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component  {

  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const {match, isCollectionsFetching, isCollectionsLoaded} = this.props

    console.log(isCollectionsLoaded)
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`}
               render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionsFetching} {...props} />}/>
        <Route path={`${match.path}/:collectionId`}
               render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />}/>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionsFetching: selectIsCollectionsFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
