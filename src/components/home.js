import React, { Component } from 'react';

// Component imports
import MenuB from './menuB';
import About from './about';
import Contact from './contact';
import Footer from './footer';

// <div className="news">
//   <h1>V E R N I S A G E</h1>
//   <p>Vernisage @ Medborgarplatsen hos supercoola <a href="http://layered.se/" target="_blank">Layered Official</a> <br/>Kom drick klappa djuren, säg något kul</p>
// </div>

// Render home page
class Home extends Component {
  render() {
    return(
      <div>
        <div className="background-img"></div>
        <MenuB />
        <div className="container" id="top">
          <div className="hero">

          </div>
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  };
};

export default Home;
