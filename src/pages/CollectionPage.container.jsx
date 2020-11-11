import { selectIsCollectionsLoaded} from "../redux/shop/Shop.selectors"
import {createStructuredSelector} from "reselect"
import WithSpinner from "../components/WithSpinner"
import {connect} from "react-redux"
import{ compose } from 'redux';
import CollectionPage from "./CollectionPage"

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionPage);

export default CollectionPageContainer;



