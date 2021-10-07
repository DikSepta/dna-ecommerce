import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAllCollection } from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview.components";

import "./collection-overview.styles.scss";

const CollectionOverview = ({collections}) => {
    console.log(collections);
    return (
    <div>
        {collections.map(collection => (
            <CollectionPreview key={collection.id} {...collection}></CollectionPreview>
        ))}        
    </div>
)}

const mapStateToProps = createStructuredSelector({
    collections: selectAllCollection
});

export default connect(mapStateToProps)(CollectionOverview);