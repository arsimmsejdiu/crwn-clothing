import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {
  CollectionPageContainer,
  CollectionItems,
  CollectionTittle,
} from "./collection.style";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CRWN Clothing - Our Collection's</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <CollectionTittle>{title}</CollectionTittle>
      <CollectionItems>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItems>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionid)(state),
});

export default connect(mapStateToProps)(CollectionPage);
