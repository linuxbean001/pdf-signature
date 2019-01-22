import React, { Component } from 'react';
import { Nav,Button } from 'react-bootstrap';
import classnames from 'classnames';

class NavBar extends Component{
constructor(props){
  super(props);
  this.state = {
    addClass:false,
    sideClass:false
  }
   this.ProfileMenu = this.ProfileMenu.bind(this);
   this.SidebarMenu = this.SidebarMenu.bind(this);
}
ProfileMenu(){
  this.setState({addClass: !this.state.addClass});
}
SidebarMenu(menuIndex){
  if(menuIndex === '1'){
    this.setState({  sideUserClass: !this.state.sideUserClass });
  }else{
    this.setState({  sideDocClass: !this.state.sideDocClass });
  }
}

  render(){
    let boxClass = ["dropdown"];
    let boxSidebarUserClass = ["nav nav-second-level collapse"];
    let boxSidebarDocClass = ["nav nav-second-level collapse"];
    let boxActiveClass =[];
    if(this.state.addClass) {    boxClass.push('open');  }
    if(this.state.sideUserClass) {
       boxSidebarUserClass.push('in');
       boxActiveClass.push('active');
   }
    if(this.state.sideDocClass) {
      boxSidebarDocClass.push('in');
      boxActiveClass.push('active');
     }
    return(
               <div className="navmenu">
               <Nav  className="navbar-default navbar-static-top" role="navigation">
                  <div className="navbar-header">
                   <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                     <span className="sr-only">Toggle navigation</span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                   </button>
                  <h1> <a className="navbar-brand" href="#">DASHBOARD</a></h1>
                </div>
                <div className=" border-bottom">
                <div className="full-left">
                 <section className="full-top">
                <button id="toggle"><i className="fa fa-arrows-alt"></i></button>
                </section>
                <form className=" navbar-left-right">
                   <input type="text"  placeholder="Search..."  />
                   <input type="submit" value="" className="fa fa-search"/>
                 </form>
                 <div className="clearfix"> </div>
                </div>
                <div className="drop-men" >
                 <ul className=" nav_1">

                <li className={boxClass.join(' ')} >
                     <a href="#" onClick={this.ProfileMenu.bind(this)} className="dropdown-toggle dropdown-at" data-toggle="dropdown"><span className=" name-caret">Admin<i className="caret"></i></span></a>
                     <ul className="dropdown-menu " role="menu">
                     <li><a href="#"><i className="fa fa-user"></i>Edit Profile</a></li>
                     <li><a href="#"><i className="fa fa-envelope"></i>Inbox</a></li>
                     <li><a href="#"><i className="fa fa-calendar"></i>Calender</a></li>
                     <li><a href="#"><i className="fa fa-clipboard"></i>Tasks</a></li>
                     </ul>
                   </li>

                 </ul>
                </div>
                <div className="clearfix">

                </div>

                <div className="navbar-default sidebar" role="navigation">
                   <div className="sidebar-nav navbar-collapse">
                   <ul className="nav" id="side-menu">

                     <li>
                       <a href="/dashboard" className=" hvr-bounce-to-right"><i className="fa fa-dashboard nav_icon "></i><span className="nav-label">Dashboards</span> </a>
                     </li>

                     <li className={boxActiveClass.join(' ')}>
                       <a href="#" onClick={this.SidebarMenu.bind(this,'1')} className=" hvr-bounce-to-right"><i className="fa fa-users nav_icon"></i> <span className="nav-label">Users</span><span className="fa arrow"></span></a>
                       <ul className={boxSidebarUserClass.join(' ')}>
                           <li><a href="/dashboard/adduser" className=" hvr-bounce-to-right"> <i className="fa fa-user-plus nav_icon"></i>Add User</a></li>
                           <li><a href="/dashboard/userlist" className=" hvr-bounce-to-right"><i className="fa fa-th-list nav_icon"></i>List Users</a></li>
                        </ul>
                    </li>
                <li>
                       <a href="#" className=" hvr-bounce-to-right"><i className="fa fa-inbox nav_icon"></i> <span className="nav-label">Documents</span> </a>
                     </li>

                     <li>
                       <a href="#l" className=" hvr-bounce-to-right"><i className="fa fa-picture-o nav_icon"></i> <span className="nav-label">Customers</span> </a>
                     </li>
                      <li className={boxActiveClass.join(' ')}>
                       <a href="#" onClick={this.SidebarMenu.bind(this,'2')}><i className="fa fa-desktop nav_icon"></i> <span className="nav-label">Department</span><span className="fa arrow"></span></a>
                       <ul className={boxSidebarDocClass.join(' ')}>
                           <li><a href="#" className=" hvr-bounce-to-right"> <i className="fa fa-user-plus nav_icon"></i>Add User</a></li>
                           <li><a href="#" className=" hvr-bounce-to-right"><i className="fa fa-th-list nav_icon"></i>List Users</a></li>
                        </ul>
                     </li>
                      <li>
                       <a href="#" className=" hvr-bounce-to-right"><i className="fa fa-th nav_icon"></i> <span className="nav-label">Users</span> </a>
                     </li>

                     <li>
                       <a href="#" className=" hvr-bounce-to-right"><i className="fa fa-cog nav_icon"></i> <span className="nav-label">Settings</span><span className="fa arrow"></span></a>
                     </li>
                   </ul>
                 </div>
                </div>
                </div>
                </Nav>
               </div>
    )
  }
}
export default NavBar;
