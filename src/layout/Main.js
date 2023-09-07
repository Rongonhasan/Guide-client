import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../common/Footer';
import Header from '../common/Header';

const Main = () => {
  const location =useLocation();
  const noHeaderFooter = location.pathname.includes('blogs') || location.pathname.includes('addservices') || location.pathname.includes('login') || location.pathname.includes('register') 
    return (
        <div>
                     { noHeaderFooter ||   <Header></Header>}
        
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Main;