import React from 'react'
import AuthorizedPages from '../authorizedpages/AuthorizedPages';
import HomePageProducts from '../homepageproducts/HomePageProducts';
import NewSowaTool from '../newsowatool/NewSowaTool';
import Carosel from './../carosel/Carosel';

const Home = () => {
  return (
   <div>
   <Carosel/>
   <HomePageProducts/>
   <NewSowaTool/>
   <AuthorizedPages/>
   </div>
  )
}

export default Home