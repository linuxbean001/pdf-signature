import React, { Component } from 'react';
import { Nav,Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import NavBar from './nav.js';
import Frontpage from './frontpage.js';
import AddUser from './adduser.js';
import UserList from './userlist.js';
import './../css/dashboardcss/style.css';
import './../css/dashboardcss/custom.css';
class dashboard extends Component{
  render(){
    return(
      <div className="dashboard-block">
        <div id="wrapper">
     	  <NavBar />
      <div id="page-wrapper" className="gray-bg dashbard-1">
       <div className="content-main">
         <Switch>
             <Route  exact path='/dashboard' component={Frontpage} />
             <Route  path ='/dashboard/adduser' component={AddUser} />
             <Route  path ='/dashboard/userlist' component={UserList} />
         </Switch>
       </div>
       </div>
        </div>
     </div>

     );
  }
}
export default dashboard;
