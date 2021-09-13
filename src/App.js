import './App.css';
import HomePage from './pages/homepage/homepage.components'
import ShopPage from './pages/shop/shop-pages-components';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop' component={ShopPage}></Route>

      </Switch>
    </div>
  );
}

export default App;
