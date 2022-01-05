import './App.css';

import HomePage from './pages/homepage/homepage.components'
import ShopPage from './pages/shop/shop-pages-components';
import CheckoutPage from './pages/checkout/checkout.components';

import Header from './components/header/header.components';

import { Route, Switch, Redirect } from 'react-router-dom';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser, checkUserSession } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const { checkUserSession } = this.props;

    checkUserSession();
  }

  componentWillUnmount(){
    //this.unsubscribeFromAuth();
  }

  render(){
    const {currentUser} = this.props;

    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/checkout' component={CheckoutPage}></Route>
          <Route path='/signin' render={() =>(
            currentUser ? (<Redirect to='/'></Redirect>):(<SignInAndSignUp></SignInAndSignUp>)
          )}></Route>
        </Switch>
      </div>
    );  
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
