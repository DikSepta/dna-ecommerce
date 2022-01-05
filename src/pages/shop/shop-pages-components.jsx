import React from 'react'
import {Route} from 'react-router-dom'

import CollectionOverview from '../../components/collection-overview/collection-overview.components';
import CollectionPage from '../collection/collection.components';
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import { selectIsFetching } from '../../redux/shop/shop.selector';
import { fetchCollectionStart } from '../../redux/shop/shop.actions';

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
                <Route exact path={`${match.path}`} render={(routeProps) =>(<CollectionOverviewWithSpinner isLoading={isLoading} {...routeProps}/>)} />
                <Route path={`${match.path}/:collectionId`} render={(routeProps)=>(<CollectionPageWithSpinner isLoading={isLoading} {...routeProps}/>)} />
            </div>    
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetching
});


const mapDispatchToProps = dispatch => ({
    fetchCollection : () => dispatch(fetchCollectionStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);