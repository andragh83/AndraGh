import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image1 from "assets/img/SVGs/Illustration.svg";
import image2 from "assets/img/SVGs/GD.svg";
import image3 from "assets/img/SVGs/Websites.svg";

import "./CarouselHome.css"

class SectionCarousel extends React.Component {

  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      
          
                <Carousel {...settings}>
                  <div>
                    <div className="bgHeight"></div>
                    <div className="slick-caption">
                      <a href="#illustration">
                        <img
                        src={image1}
                        alt="Illustration"
                        className="carousel_img1"
                      />
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="bgHeight"></div>
                    <div className="slick-caption">
                      <a href="#graphic">
                        <img
                        src={image2}
                        alt="Graphic design"
                        className="carousel_img2"
                      />
                    </a>
                    </div>
                  </div>
                  <div>
                    <div className="bgHeight"></div>
                    <div className="slick-caption">
                      <a href="#websites">
                        <img
                        src={image3}
                        alt="Websites"
                        className="carousel_img3"
                      />
                      </a>
                    </div>
                  </div>
                </Carousel>
        
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
