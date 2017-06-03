import React, { Component } from 'react';

// Component imports
import MenuB from './components/menuB';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

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
