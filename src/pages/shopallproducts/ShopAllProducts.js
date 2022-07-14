import React from 'react';
import './ShopAllProducts.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Search from '../../components/Search';

const ShopAllBrands = () => {
  return (
    <div className="shop-all-brands">
      <div className="shop-all-brands-div">
        <div className='breadcrumb-div'>
          <ul className="breadcrumb">
            <li><Link to="/home" className="breadcrumb">Home</Link></li>
            <li><FontAwesomeIcon icon={faGreaterThan} /></li>
            <li className="breadcrumb-1">Shop All Products</li>
          </ul>
        </div>


        <div>
          <h1>Shop All Products</h1>

          <h4>Now Shopping by</h4>

          <p>By Category</p>

          <p>Show All Products</p>
        </div>


        <div>

          <div className="category-div">

            <h5>By Category</h5>

            <h5><FontAwesomeIcon icon={faChevronDown} /></h5>
          </div>
          <ul>
            <li><Search/></li>

          </ul>

        </div>




      </div>
      <div>products</div>
    </div>
  )
}

export default ShopAllBrands;