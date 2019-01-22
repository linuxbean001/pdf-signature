import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
class addUser extends Component{
render() {
  return (
<div className="newuser-block">

    <div className="banner">
     <h2>
     <a href="#">Home</a>
     <i className="fa fa-angle-right"></i>
     <span>Add User</span>
     </h2>
    </div>
<div className="validation-system">
 <div className="validation-form">
     <form>
       <div className="vali-form">
         <div className="col-md-6 form-group1">
           <label className="control-label">Firstname</label>
           <input type="text" placeholder="Firstname" required=""/>
         </div>
         <div className="col-md-6 form-group1 form-last">
           <label className="control-label">Lastname</label>
           <input type="text" placeholder="Lastname" required=""/>
         </div>
         <div className="clearfix"> </div>
         </div>

         <div className="vali-form">
           <div className="col-md-6 form-group1">
             <label className="control-label">Email</label>
             <input type="text" placeholder="Email" required=""/>
           </div>
           <div className="col-md-6 form-group1 form-last">
             <label className="control-label">Company email</label>
             <input type="text" placeholder="Company email" required=""/>
           </div>
           <div className="clearfix"> </div>
        </div>

        <div className="vali-form">
          <div className="col-md-6 form-group1">
            <label className="control-label">Phone</label>
            <input type="text" placeholder="Phone" required=""/>
          </div>
          <div className="col-md-6 form-group1 form-last">
            <label className="control-label">Company phone</label>
            <input type="text" placeholder="Company phone" required=""/>
          </div>
          <div className="clearfix"> </div>
       </div>

       <div className="vali-form">
         <div className="col-md-6 form-group1">
           <label className="control-label">Street</label>
           <input type="text" placeholder="Street" required=""/>
         </div>
         <div className="col-md-6 form-group1 form-last">
           <label className="control-label">City</label>
           <input type="text" placeholder="City" required=""/>
         </div>
         <div className="clearfix"> </div>
      </div>

      <div className="vali-form">
        <div className="col-md-6 form-group1">
          <label className="control-label">State</label>
          <input type="text" placeholder="State" required=""/>
        </div>
        <div className="col-md-6 form-group1 form-last">
          <label className="control-label">Zip Code</label>
          <input type="text" placeholder="Zip Code" required=""/>
        </div>
        <div className="clearfix"> </div>
     </div>
    <div className="col-md-12 form-group">
           <button type="submit" className="btn btn-primary">Submit</button>
           <button type="reset" className="btn btn-default">Reset</button>
         </div>
       <div className="clearfix"> </div>
     </form>
</div>
</div>
</div>

  );
}
}
export default addUser;
