import React, { Component } from 'react';
import './../css/loginStyle.css';
class SignIn extends Component{
  render(){
    return(
         <div className="Signup-block">
         <div className="back-image bg bg1">

<div className="main ">
<div className="its-sign-in">
  <img src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Edit-512.png" className="img-responsive login-img"/>
  <h2 className="">Sign in to your account</h2>
</div>
<form action="#" method="post">
  <div className="form-left-w3l ">
    <input type="email" placeholder="Email" required="" />
  </div>
  <div className="form-left-w3l ">
    <input type="password" placeholder="password" required="" />
  </div>
  <div className="rem-pass-agile">
    <div className="left-side ">
      <a href="#" className="for ">Forgot password...?</a>
    </div>
    <div className="right-side">
      <button type="submit" className="btn signin">Sign in</button><br/>
    </div>
    <div className="clear"></div>
  </div>
  <div className="btnn">
    <button type="submit" className="btn signup">Create an account</button><br/>
    <div className="clear"></div>
  </div>
</form>
<div className="left-side copyright">
  <a href="#" className="for ">2019 © Pdf-Sign Inc | All Rights Reserved. </a>
</div>
</div>
</div>
</div>
    );
  }
}
export default SignIn;
