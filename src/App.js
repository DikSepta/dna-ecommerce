import './App.css';
import HomePage from './pages/homepage/homepage.components'
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => {
  return (
    <div>
      HATS PAGE
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/hats' component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
