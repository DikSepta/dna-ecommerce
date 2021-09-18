import './App.css';
import HomePage from './pages/homepage/homepage.components'
import ShopPage from './pages/shop/shop-pages-components';
import Header from './components/header/header.components';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop' component={ShopPage}></Route>

      </Switch>
    </div>
  );
}

export default App;
