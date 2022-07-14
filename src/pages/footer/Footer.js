import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { Facebook, Instagram, Linkdin, Youtube } from '../../assets/index';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>

      <div className="main-div-footer">
        <div className='time-div'>
          <h4 className='h4-style'>1-800-265-8221</h4>
          <h4 className='h5-style'>Monday - Friday, 8:00 am - 6:00 pm EST</h4>
        </div>
        <div className="icons-div-style" >
          <FontAwesomeIcon icon={faAngleDoubleUp} />
        </div>
      </div>

      <div className="footer-links-main-div">
        <div className="main-content-details-link-li">
          <div>

            <ul>
              <h3>Account</h3>
              <Link to='/login' className="li">Customer Login</Link>
              <Link to='/orderhistory' className="li">Order History</Link>
              <li className="li">Returns</li>
              <li className="li">Ordering, Shipping & Payment</li>
              <li className="li">Help & Support</li>
            </ul>
          </div>



          <div>

            <ul>
              <h4>Downloads</h4>
              <li className="li">Catalogues & Brochures</li>
              <li className="li">GS Tooling Package</li>
              <li className="li">Forms</li>
              <li className="li">RGA</li>
              <li className="li">Quote Request Forms</li>
            </ul>
          </div>




          <div>

            <ul>
              <h4 className="li">COMPANY</h4>
              <li className="li">About Us</li>
              <li className="li">Careers</li>
              <li className="li">Customer Support</li>
              <li className="li">Privacy Policy</li>
              <li className="li">Request Information</li>
            </ul>
          </div>
        </div>


        <div className="find-distributer">FIND A DISTRIBUTOR</div>

        <div>
          <h5 className="social-footer">WE'RE SOCIAL</h5>
          <ul className="social-flex">
            <li><img className="social-images" src={Facebook} alt="facebok" /></li>
            <li><img className="social-images" src={Instagram} alt="instagram" /></li>
            <li><img className="social-images" src={Youtube} alt="youtube" /></li>
            <li><img className="social-images" src={Linkdin} alt="linkdin" /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer