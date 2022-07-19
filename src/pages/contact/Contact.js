import React from 'react';
import './Contact.css';
import { captcha } from '../../assets/index';

import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Support = () => {
  return (


    <div className="wrapper">
    <div className='breadcrumb-div-contact'>
    <ul className="breadcrumb">
      <li><Link to="/home" className="breadcrumb">Home</Link></li>
      <li><FontAwesomeIcon icon={faGreaterThan}  /></li>
      <NavLink to="/support"><li className="breadcrumb-1-2">Customer Support</li></NavLink>
      <li><FontAwesomeIcon icon={faGreaterThan} /></li>
      <li className="breadcrumb-1-1">Contact Us</li>
    </ul>
  </div>
  <div className='contact-div-list'>
    
    <div className="main-customer-list">
    <div className="main-Support-div">

    <h3>Customer Support</h3>
    <ul>
    <li style={{fontWeight:"bold"}}>Contact Us</li>
    <li>About Us</li>
    <li>Return Policy</li>
    <li>Ordering, Shipping, and Payment</li>
    <li>Safety, Security & Privacy</li>
    <li>Freequently Asked Questions</li>
    </ul>
    </div>


   <div className='main-contact-div'>
   <h2>Contact Us</h2>

   <p>You can expect a response to your message within two business days.</p>

   <span>* Required Field</span>

   <div>
   <h4>Name (First & Last)*</h4>
   <input type="text" />
   </div>

   <div>
   <h4>E-mail Address*</h4>
   <input type="email" />
   </div>

   <div>
   <h4>Phone Number*</h4>
   <input type="number" />
   </div>

   <div>
   <h4>Order Number</h4>
   <input/>
   </div>


   <div>
   <h4>Subject*</h4>
   multiple options
   </div>

   <div>
   <h4>Question & Comments*</h4>
   <iframe></iframe>
   Your message: 30000 characters remaining.
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


    <div>
    <button>Submit</button>
    </div>

    <p>To contact our Customer Service Department by phone, please call 1-800-265-8221.</p>


   </div>



    </div>
    </div>
    </div>
  )
}

export default Support