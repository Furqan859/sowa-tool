import React from 'react';
import './HomePageProducts.css';
import { one, two, three, four, five, six, seven } from '../../assets/index';


const ImageData = [{ image:one,name:"Drilling & Holemaking" }, { image:two,name:"Indexable Cutting Tools" }, { image:three,name:"Measuring & Inspecting" }, { image:four,name:"Milling"} , { image:five,name:"Threading & Tapping" }, { image:six,name:"Tool Holding" }, { image:seven,name:"Workholding, Clamping & Fixturing" }];

const HomePageProducts = () => {
  return (
    <div>

      <p className="top-products">Top Product Categories</p>
      <div className='products-main-class-div'>
     
     <img src={one} alt="one" /> 
     <p>drilling</p>
     
    
    
      </div>
    </div>
  )
}

export default HomePageProducts