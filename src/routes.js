import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import Carosel from './pages/carosel/Carosel';
import HomePageProducts from './pages/homepageproducts/HomePageProducts';
import NewSowaTool from './pages/newsowatool/NewSowaTool';
import AuthorizedPages from './pages/authorizedpages/AuthorizedPages';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import CompareProducts from './pages/compareproducts/CompareProducts';
import Orderhistory from './pages/orderhistory/Orderhistory';
import ShopAllProducts from './pages/shopallproducts/ShopAllProducts';
import ForgotPassword from './pages/forgotpassword/ForgotPassword';
import Support from './pages/support/Support';
import Contact from './pages/contact/Contact';



export const paths = {

    carosel: '/carosel',
    homepageproducts: '/homepageproducts',
    newsowatool: '/newsowatool',
    authorizedpages: '/authorizedpages',
    home: '/home',
    login: '/login',
    compareproducts: '/compareproducts',
    orderhistory: '/orderhistory',
    shopallproducts: '/shopallproducts',
    forgotpassword: '/forgotpassword',
    support: '/support',
    contact: '/contact',


}
export default function Router() {
    return useRoutes([
        { path: '/', element: <Navigate to="/home" replace /> },
        { path: paths.home, element: <Home /> },
        { path: paths.carosel, element: <Carosel /> },
        { path: paths.homepageproducts, element: <HomePageProducts /> },
        { path: paths.newsowatool, element: <NewSowaTool /> },
        { path: paths.authorizedpages, element: <AuthorizedPages /> },
        { path: paths.login, element: <Login /> },
        { path: paths.compareproducts, element: <CompareProducts /> },
        { path: paths.orderhistory, element: <Orderhistory /> },
        {path:paths.shopallproducts, element: <ShopAllProducts /> },
        {path: paths.forgotpassword, element: <ForgotPassword />},
        {path: paths.support, element: <Support />},
        { path: paths.contact, element: <Contact />},
        

    ])
}
