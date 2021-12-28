import React from 'react'
import {Route} from 'react-router-dom'

import CollectionOverview from '../../components/collection-overview/collection-overview.components';
import CollectionPage from '../collection/collection.components';
import { firestore,transformShopCollectionData } from '../../firebase/firebase.utils';
import { setCollectionData } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null

    state = {
        isLoading: true
    }

    componentDidMount() {
        const {setCollection} = this.props
        const collectionRef = firestore.collection("collection");

        console.log("mount shop page")

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const transformedCollection = transformShopCollectionData(snapshot);
            console.log(transformedCollection)

            setCollection(transformedCollection);
            this.setState({isLoading : false});
        })

    }

    render() {
        const {match} = this.props
        const {isLoading} = this.state
        console.log(isLoading)

        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={() =>(<CollectionOverviewWithSpinner isLoading={this.state.isLoading}/>)} />
                <Route path={`${match.path}/:collectionId`} render={()=>(<CollectionPageWithSpinner isLoading={this.state.isLoading}/>)} />
            </div>    
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setCollection : data => dispatch(setCollectionData(data))
})

export default connect(null, mapDispatchToProps)(ShopPage);