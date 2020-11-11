import {selectIsCollectionsFetching} from "../redux/shop/Shop.selectors"
import {createStructuredSelector} from "reselect"
import WithSpinner from "./WithSpinner"
import CollectionsOverview from "./CollectionsOverview"
import {connect} from "react-redux"
import{ compose } from 'redux';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionsOverview);

export default CollectionsOverviewContainer;



