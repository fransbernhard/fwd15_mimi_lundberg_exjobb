import React, { Component } from 'react';
import magdaImg from '../images/maggan.jpg';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

// Create Component
class About extends Component {

  render() {
    return (

        <div className="about" id="about">
        <ScrollableAnchor id={'about'}>
          <div className="wrapper-about" >
            <div className="wrapper-a" >
              <img className="mySlides about-img" src={magdaImg}/>
              <p>Magda har massa csn lån och nästan en kandidat i företagsekonomi. För daglig uppdatering --><br/> <a target="_blank" href="https://www.instagram.com/magdenmagden/?hl=sv">@magdenmagden</a>
              </p><br/>
            </div>
            <div className="wrapper-cv">
              <h5>2017</h5>
              <p>Live Art @ Ringen | Stockholm <br/>
              Vernisage @ Layered Official | Stockholm <br/>
              Försäljning genom Young Art | Stockholm <br/>
              Utställning Nividas/Adornment | Stockholm</p><br/>

              <h5>2016</h5>
              <p>Vernissage DÅLIG SIKT | Stockholm <br/>
              Utställning | L´homme rouge, Stockholm<br/>
              Artwork "Dying for you" | Otto Knows</p><br/>

              <h5>2015</h5>
              <p>Vernissage STRÖSSEL | Stockholm<br/>
              Utställning | Kaffebaren, Malmö<br/>
              Utställning | Scandic hotel, Malmö<br/>
              Artwork "Next to me" | Otto Knows</p><br/>

              <h5>2014</h5>
              <p>Vernissage BOKSLUT | Stockholm<br/>
              Utställning | Brillo, Stockholm<br/>
              Utställning | Mood gallerian, Stockholm<br/>
              Utställning | Höganäs konsthall, Höganäs</p><br/>

              <h5>2013</h5>
              <p>Vernissage TORSK | Stockholm<br/>
              Utställning | East, Stockholm</p><br/>

              <p>2011-2012 Lunds Konst och Designskola | Lund<br/>
              2012-2013 Beckmans kvällsskola | Stockholm</p>
            </div>
          </div>

      </ScrollableAnchor>
      </div>
    )
  }
}

export default About;
