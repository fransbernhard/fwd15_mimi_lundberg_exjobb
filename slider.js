import React, { Component } from 'react';

import magdaImg from '../images/magden.jpg';
// import magdaImg2 from '../images/hihi.png';

class Slider extends Component {

  constructor(){
    super();
    this.state = {
      imgUrl: [
        magdaImg,
        magdaImg1,
        // magdaImg2
      ]
    }
    this.sliderHandler = this.sliderHandler.bind(this);
  }

  sliderHandler(){
    console.log("hihihiihihihihiihiih");
  }

  componentDidMount() {
    window.addEventListener('load', this.slideHandler);
 }

  render(){
    return (
      <div className="slideshow">
           {
             this.state.imgUrl.map((url, index) =>
               <div key={index}>
                <img
                  className="about-img"
                  src={url}
                />
              </div>
             )
           }
      </div>
    )
  }
}

export default Slider;
