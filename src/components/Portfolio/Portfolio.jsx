import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
// core components
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image1 from "assets/img/Portfolio/Websites/Websites1.png";
import image2 from "assets/img/Portfolio/Websites/Websites2.png";
import image3 from "assets/img/Portfolio/Websites/Websites3.png";

class SectionCarousel extends React.Component {

  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
     
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel> 
          
                <Carousel {...settings}>
                  
                  <div>
                    <img
                      src={image1}
                      alt="First slide"
                      className="slick-image2"
                    />
                    <div className="slick-caption2">
                    </div>
                  </div>

                  <div>
                    <img
                      src={image2}
                      alt="Second slide"
                      className="slick-image2"
                    />
                    <div className="slick-caption2">
                    </div>
                  </div>
                  <div>
                    <a href='https://andragh83.github.io/Tictactoe/' target="blank">
                      <img
                        src={image3}
                        alt="Third slide"
                        className="slick-image2"
                      />
                      <div className="slick-caption2">
                      </div>
                    </a>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      
        
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
