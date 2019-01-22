import React, { Component } from 'react';
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Login from './login';
import Dashboard from './dashboard';
class RouterLayout extends Component{
  render() {
    return (
      <div className="router-block">
      <Router>
        <Switch>
            <Route  path ='/signin' component={Login} />
            <Route path='/' component={Dashboard} />
        </Switch>
       </Router>
      </div>
    );
  }
}
export default RouterLayout;
