import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="hero min-h-screen mt-9" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1658383895221-173f07c6a9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About Us</h1>
            <p className="mb-5">A travel Guide review website is a platform where people can share their travel experiences and provide reviews and recommendations on destinations, accommodations, restaurants, and activities. It allows travelers to share their knowledge and insights with others who are planning their trips, and helps them make informed decisions about where to go and what to do.</p>
            <button className="btn btn-error">Join Us</button>
          </div>
        </div>
      </div>
    );
};

export default About;