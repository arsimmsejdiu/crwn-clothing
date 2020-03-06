import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsOverView from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import { fetchCollectionStartAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching , selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverView);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match, isCollectionFetching , isCollectionLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionid`}
          render={props => (
            <CollectionsPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
