import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './Carosel.css';
import {Image1, Image2 , Image3} from '../../assets/index';

const MyCollection = [
  {url:Image1},
  {url:Image2},
  {url:Image3}
]

const Carosel = () => {
  
    
  return ( <div>
    <SimpleImageSlider
      width={"100%"}
      height={250}
      images={MyCollection}
      showBullets={true}
      showNavs={true}
      
    />
  
  </div>
  )
}

export default Carosel