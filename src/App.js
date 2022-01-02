import './App.css';

import HomePage from './pages/homepage/homepage.components'
import ShopPage from './pages/shop/shop-pages-components';
import CheckoutPage from './pages/checkout/checkout.components';

import Header from './components/header/header.components';

import { Route, Switch, Redirect } from 'react-router-dom';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';

const App = ({setCurrentUser, currentUser}) => {
  useEffect(
  // Callback function  to update current user
  () => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        })
      }

      setCurrentUser(userAuth);
    })

    return unsubscribeFromAuth;
  }
  ,[setCurrentUser]);

  return(
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
  )  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
