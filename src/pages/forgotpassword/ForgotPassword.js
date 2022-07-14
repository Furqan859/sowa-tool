import React from 'react';
import './ForgotPassword.css';
import { captcha } from '../../assets/index';
import { NavLink } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="login-main-div">
    <h1 className='customer-login'>Forgot Your Password?</h1>
    
    <div className="login-table">
    <p>Please enter your email address below to receive a password reset link.</p>
    <div className="input-login">
    <p>E-mail Address*</p>
    <input className="input-styling-login" type="email" />
    
    </div>
    <div className="captcha-div">
    <div className="captcha-secound-div">
    <input type="checkbox"  className="captcha-checkbox"/>
    <h8>I'm not a robot</h8>
    </div>
   <div className="captcha-img-div" >
   <img src={captcha} alt="captcha" />
   <span>reCaptcha</span>
   <p>Privacy - Terms</p>
   </div>
    </div>
   <div className="button-password-div">
   <button className="sign-in-button">RESER MY PASSWORD?</button>
   
   </div>
  
   <div className='goback-div'>
   <NavLink to="/login" className="go-back">GoBack</NavLink>
   </div>
    </div>
   
    </div>
    
  )
}

export default ForgotPassword