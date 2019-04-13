import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
// import ContactEdit from './pages/ContactEditPage'
import ContactDetails from './pages/ContactDetailsPage'
import StatsPage from './pages/statsPage'

class App extends Component {
  render() {
    return (
      <div className="App">
            <BrowserRouter>
        <navbar>
          <ul>
            <NavLink className="Nav_link" activeClassName="activeRoute" to="/">Home</NavLink> | 
            <NavLink className="Nav_link" activeClassName="activeRoute" to="/contacts/">Contacts</NavLink> | 
            <NavLink className="Nav_link" activeClassName="activeRoute" to="/stats/">Statistics</NavLink>
          </ul>
        </navbar>


        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contacts/" component={ContactPage} />
            <Route path="/contacts/:id" component={ContactDetails} />
            <Route path="/stats/" component={StatsPage} />
            </Switch>
            </BrowserRouter>
      </div>
    );
  }
}

export default App;
