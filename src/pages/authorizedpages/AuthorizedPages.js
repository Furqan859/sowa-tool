import React from 'react';
import './AuthorizedPages.css';
import {Mitutoyo,Starrett,SecoWeb,GuehringDL,GrayTools} from '../../assets/index';

const AuthorizedPages = () => {
  return (<div>
    <h1 className="nameauthorized">Authorized Distributors</h1>
    <div className="authorized">
    
    <ul className='authorized-distributer'>
    <li className="authorized-li"><img className='img-deco-authorized' src={Mitutoyo} alt="mituto" /></li>
    <li className="authorized-li"><img className='img-deco-authorized' src={Starrett} alt="starrett" /></li>
    <li className="authorized-li"><img className='img-deco-authorized' src={SecoWeb} alt="secoweb" /></li>
    <li className="authorized-li"><img className='img-deco-authorized' src={GuehringDL} alt="gheringi" /></li>
    <li className="authorized-li"><img className='img-deco-authorized' src={GrayTools} alt="graytools" /></li>
    </ul>
   
    
    </div>
    </div>
  )
}

export default AuthorizedPages