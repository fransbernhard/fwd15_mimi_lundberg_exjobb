import React from 'react';
import MenuB from './menuB';
import About from './about';
import Contact from './contact';
import Footer from './footer';

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
