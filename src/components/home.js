import React from 'react';

import MenuB from './MenuB';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => (
    <div className="home" id="home">
        <div className="background-img"></div>
        <MenuB />
        <div className="container">
            <div className="hero"></div>
            <About />
            <Contact />
        </div>
    </div>
)

export default Home;
