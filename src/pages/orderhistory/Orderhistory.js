import React from 'react';
import './Orderhistory.css';

const Orderhistory = () => {
  return (
    <div className="login-main-div">
    <h1 className='customer-login'>Customer Login</h1>
    
    <div className="login-table">
    <h5>Registered Customers</h5>
    <p className="alert">Please login to your account to see orders.</p>
    <p>If you have an account, sign in with your email address.</p>
    <div className="input-login">
    <input className="input-styling-login-input" type="text" placeholder="UserName"/>
    <input className="input-styling-login" type="password" placeholder="Password" />
    </div>
    <div>
    </div>
   <div className="button-password-div">
   <button className="sign-in-button">Sign In</button>
   <div className="forgot-password-link">Forgot your password?</div>
   </div>
    </div>
    </div>
    
  )
}

export default Orderhistory