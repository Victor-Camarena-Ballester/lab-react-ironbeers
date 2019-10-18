import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Beer from '../components/Beer';
import GetData from '../components/GetData';
import Home from '../components/Home';
import BeerCardList from '../components/BeerCardList';
import New from '../components/New';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/beers">
          <BeerCardList />
        </Route>
        <Route exact path="/beers/new">
          <New />
        </Route>
        <Route
          path="/beers/:id"
          component={(props) => (
            <GetData {...props}>{(beer) => <Beer beer={beer}></Beer>}</GetData>
          )}
        />
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
