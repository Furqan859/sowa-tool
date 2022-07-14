import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faSliders, faHeart, faShoppingBag, faAlignRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Sowa, Flag } from '../../assets/index';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {


  return (<div>

    <div className="first-header">

      <div className='main-div'>
        <div className="logo">
          <Link to='/home'> <img className="img-responsive" src={Sowa} alt="log" /></Link>
          <div><h4 className="color-white-1">TOOLING YOUR WORLD.</h4></div>
        </div>
        <div className="icons-div">
          <div className="inputContainer">
            <span> <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} /></span>
            <input className="Field" type="text" />
          </div>
          <Link className="color-white" to="/login" style={{ display: 'flex' }}>
            <div ><FontAwesomeIcon icon={faArrowRightToBracket} /></div>
            <div style={{ marginLeft: "10px" }}> login</div>
          </Link>
          <Link to="/compareproducts" className="color-white"><FontAwesomeIcon icon={faSliders} /></Link>
          <Link to='/login' className="color-white"><FontAwesomeIcon icon={faHeart} /></Link>


          <div className="color-white"><FontAwesomeIcon icon={faShoppingBag} /> </div>

          <div className="color-white"><FontAwesomeIcon icon={faAlignRight} /></div>
          <div className="color-white-style"><img src={Flag} alt="flag" height="20px" width="25px" /></div>


        </div>


      </div>
      <div className="contact-details">
        <span className="space" style={{ fontWeight: "bold" }}>1-800-265-8221</span>
        <span className="space">sales@sowatool.com</span>
      </div> </div>
    <div className="secound-header">
      <div>
        <ul className='secound-header-div'>
        <li><div className="dropdown">
        <Link to='/shopallproducts'><button className="dropbtn">Shop All Products</button></Link>
        <div className="dropdown-content">
          <a href="#">Asimeto</a>
          <a href="#">Sowa High Performance Cutting Tools</a>
          <a href="#">Sowa Indexable Cutting Tools</a>
          <a href="#">Sowa High Performance Drills</a>
          <a href="#">Sowa High Performance Taps</a>
          <a href="#">STM Premium</a>
          <a href="#">STM</a>
          <a href="#">Skoda</a>
          <a href="#">Narex</a>
          <a href="#">Shop All Brands</a>
        </div>
      </div></li>
          <li><div className="dropdown">
          <button className="dropbtn">Shop By Brand</button>
          <div className="dropdown-content">
            <a href="#">GS Tooling</a>
            <a href="#">Asimeto</a>
            <a href="#">Sowa High Performance Cutting Tools</a>
            <a href="#">Sowa Indexable Cutting Tools</a>
            <a href="#">Sowa High Performance Drills</a>
            <a href="#">Sowa High Performance Taps</a>
            <a href="#">STM Premium</a>
            <a href="#">STM</a>
            <a href="#">Skoda</a>
            <a href="#">Narex</a>
            <a href="#">Shop All Brands</a>
          </div>
        </div></li>

          <NavLink to="/downloadcenter" className='ul-li-style-none'><li>Download Centre</li></NavLink>
          <NavLink to="/contact" className='ul-li-style-none'><li >Contact Us</li></NavLink>
          <li><div className="dropdown">
          <Link to='/support'><button className="dropbtn">Support</button></Link>
          <div className="dropdown-content">
            <a href="#">Contact Us</a>
            <a href="#">About Us</a>
            <a href="#">Return Policy</a>
            <a href="#">Ordering,Shipping, and Payment</a>
            <a href="#">Safety,Security, and Privacy</a>
            <a href="#">Freequently Asked Questions</a>
            <a href="#">Request Information</a>
            
          </div>
        </div></li>
        </ul>
      </div>
      <div><p className="order">Quick Order</p></div>
    </div>
  </div>


  )
}

export default Header;