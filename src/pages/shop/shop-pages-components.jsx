import React from 'react'
import {Route} from 'react-router-dom'

import CollectionOverview from '../../components/collection-overview/collection-overview.components';
import CollectionPage from '../collection/collection.components';
import { fetchCollection } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import { selectIsFetching } from '../../redux/shop/shop.selector';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    componentDidMount() {
        const {fetchCollection} = this.props;
        fetchCollection();
    }

    render() {
        const {match, isLoading} = this.props
        console.log(isLoading?"Shop page is loading": "Shop page loaded")

        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={() =>(<CollectionOverviewWithSpinner isLoading={isLoading}/>)} />
                <Route path={`${match.path}/:collectionId`} render={()=>(<CollectionPageWithSpinner isLoading={isLoading}/>)} />
            </div>    
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetching
});


const mapDispatchToProps = dispatch => ({
    fetchCollection : () => dispatch(fetchCollection())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);