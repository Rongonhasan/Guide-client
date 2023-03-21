import React from 'react';
import About from '../Component/About';
import Banner from '../Component/Banner';
import Contact from '../Component/Contact';

import Service from './Service';
import useTitle from '../hook/useTitle';
import Offer from './Offer';

const Home = () => {
    useTitle("Home")
    return (
        <div>
     
         <Banner></Banner>
         <Service></Service>
         <Offer></Offer>
         <About></About>
         <Contact></Contact>
        </div>
    );
};

export default Home;