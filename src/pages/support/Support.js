import React from 'react';
import './Support.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Support = () => {
  return (


    <div className="wrapper">
    <div className='breadcrumb-div'>
    <ul className="breadcrumb">
      <li><Link to="/home" className="breadcrumb">Home</Link></li>
      <li><FontAwesomeIcon icon={faGreaterThan} /></li>
      <li className="breadcrumb-1">Customer Support</li>
    </ul>
  </div>
  <div>
    
    <div className="main-customer-list">
    <div className="main-Support-div">

    <h3>Customer Support</h3>
    <ul>
    <li>Contact Us</li>
    <li>About Us</li>
    <li>Return Policy</li>
    <li>Ordering, Shipping, and Payment</li>
    <li>Safety, Security & Privacy</li>
    <li>Freequently Asked Questions</li>
    </ul>
    </div>


    <div className='support-text-div'>
    <div className='support-col-1'>
    <h3>Questions?</h3>
    <p>In this section you can find information about our products, order management and all other shop related topics. Most of your questions will be answered here.</p>
    </div>
    <div className="support-col-2">
    <h3>Need Help?</h3>
    <p>8:00am to 6:00pm,
    Monday to Friday:
    1-800-265-8221</p>
    </div>
    <div className="support-col-3">
    <h3>Find a Store</h3>
    <p>Find the store nearest you.</p>
    <Link to="">Search Now</Link>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Support