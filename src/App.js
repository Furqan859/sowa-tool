import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Footer from './pages/footer/Footer';
import Header from './pages/header/Header';
import Router from './routes';


function App() {
  return (
  <div>
  <React.Fragment>
  <BrowserRouter>
    <Header/>
  <Router/>
   <Footer/>
   </BrowserRouter>
   </React.Fragment>
  </div>
  );
}

export default App;
