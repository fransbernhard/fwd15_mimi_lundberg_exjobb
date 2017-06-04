import React, { Component } from 'react';

// Component imports
import MenuB from './menuB';
import About from './about';
import Contact from './contact';
import Footer from './footer';

// Render home page
class Home extends Component {
  render() {
    return(
      <div>
        <div className="background-img"></div>
        <MenuB />
        <div className="container" id="top">
          <div className="hero"></div>
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  };
};

export default Home;
