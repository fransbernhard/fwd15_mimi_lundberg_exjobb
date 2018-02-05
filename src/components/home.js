import React, { Component } from 'react';
import MenuB from './menuB';
import About from './about';
import Contact from './contact';
import Footer from './footer';
// import ScrollableAnchor, { configureAnchors, removeHash } from 'react-scrollable-anchor';

class Home extends Component {
  // componentWillMount(){
  //   configureAnchors({offset: 0, scrollDuration: 2000});
  //   removeHash();
  // }

  render() {
    return(
      <div className="home" id="home">
        <div className="background-img"></div>
        <MenuB />
        <div className="container">
          <div className="hero"></div>
            <About />
            <Contact />
        </div>
      </div>
    );
  };
};

// <ScrollableAnchor id={'about'}>
//   <About />
// </ScrollableAnchor>
// <ScrollableAnchor id={'contact'}>
//   <Contact />
// </ScrollableAnchor>


// <div className="news">
//   <h1>V E R N I S A G E</h1>
//   <p>Vernisage @ Medborgarplatsen hos supercoola <a href="http://layered.se/" target="_blank">Layered Official</a> <br/>Kom drick klappa djuren, säg något kul</p>
// </div>

export default Home;
