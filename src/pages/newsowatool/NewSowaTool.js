import React from 'react';
import { LuchPost , GsPosted } from '../../assets/index';
import './NewSowaTool.css'; 


const NewSowaTool = () => {
  return (
    <div className='new-sowa-tool'>
    <div className="tool-img-one">
    <img className="img-reso" src={LuchPost} alt="Lunch-Posted" />
    <br/>
    <span><a className='color-div'>Welcome to the New SowaTool.com!</a></span>
    <p>Before you can get online there are a couple of steps you need to take.

    Click on the link below to setup your account now.</p>
    <button className="button-style-newsowa">Setup Account</button>
    </div>
    <div className="tool-img-two">
    <img className="img-reso" src={GsPosted} alt="GS-Post" />
<br/>
    <span><a className='color-div'>Sowa To GS Tooling Endmill Rebrand</a></span>
    <p>Our premium carbide end mills will now be sold under the GS Tooling brand. But rest assured, these are still the same product you know and love.

    For more information you can read more at the link below.
    
    </p>
    <button className="button-style-newsowa">Learn More</button>
    </div>
    </div>
  )
}

export default NewSowaTool