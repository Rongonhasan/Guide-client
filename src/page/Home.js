import React from 'react';
// import About from '../Component/About';
// import Banner from '../Component/Banner';
import Contact from '../Component/Contact';

import Service from './Service';
import useTitle from '../hook/useTitle';
import Offer from './Offer';
import Destinations from '../Component/Destinations';
import Search from '../Component/Search';
import Hero from '../Component/Hero';
import Selects from '../Component/Selects';

const Home = () => {
    useTitle("Home")
    return (
        <div>
        <Hero></Hero>
         {/* <Banner></Banner> */}
         <Destinations></Destinations>
         <Service></Service>
         <Search></Search>
         <Selects></Selects>
         <Offer></Offer>
         {/* <About></About> */}
         <Contact></Contact>
        </div>
    );
};

export default Home;