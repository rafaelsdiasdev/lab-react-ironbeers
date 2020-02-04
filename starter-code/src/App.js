import React, { Component } from 'react';
import './App.css';
import Beers from './components/beers'
import BeerDetails from './components/beerDetails'
import RandomBeer from './components/random-beer'
import NewBeer from './components/new-beer'
import Home from './components/home'
import { Switch, Route, NavLink } from 'react-router-dom';

class App extends Component {



  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        {/* <div className="nav"> */}
        <div className="row">
          <NavLink className="nav" activeStyle={{ display: "none" }} exact to="/" style={{ textDecoration: 'none', color: "#fff" }}>
            <i className="material-icons md-36">
              home
            </i>
          </NavLink>
        </div>
        {/* </div> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/beers/:id" component={BeerDetails} />
          <Route exact path="/randombeer" component={RandomBeer} />
          <Route exact path="/newbeer" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
