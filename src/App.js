import './App.css';
import HomePage from './pages/homepage/homepage.components'
import ShopPage from './pages/shop/shop-pages-components';
import Header from './components/header/header.components';
import { Route, Switch } from 'react-router-dom';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';
import { auth } from "./firebase/firebase.utils"
import React from 'react';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({currentUser: user});
      console.log(this.state.currentUser);
    })

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' component={SignInAndSignUp}></Route>
        </Switch>
      </div>
    );  
  }
}

export default App;
