import React from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-main-div">
    <h1 className='customer-login'>Customer Login</h1>
    
    <div className="login-table-one">
    <h5>Registered Customers</h5>
    <p>If you have an account, sign in with your email address.</p>
    <div className="input-login">
    <input className="input-styling-login-input" type="text" placeholder="UserName"/>
    <input className="input-styling-login" type="password" placeholder="Password" />
    </div>
    <div>
    </div>
   <div className="button-password-div">
   <div> <button className="sign-in-button">Sign In</button></div>
   <NavLink to="/forgotpassword" className="forgot-password-link">Forgot your password?</NavLink>
   </div>
    </div>
    </div>
    
  )
}

export default Login