import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-items/collection-item.components"
import "./collection.styles.scss"


const CollectionPage = (props) => {
    console.log(props)
    const {collection} = props
    const {title, items} = collection;
    console.log(collection);

    return( 
        <div className="collection-page">
            <h2 className="title">
                {title}
            </h2>
            <div className="item-container">
            {
                items.map(item => (
                    <CollectionItem className="collection-item" key={item.id} item={item}></CollectionItem>
                ))
            }
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage) ;