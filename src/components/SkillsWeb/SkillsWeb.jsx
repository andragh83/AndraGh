/* eslint-disable react/prop-types */
import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Favorite from "@material-ui/icons/Favorite";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

// styles
import websitesStyle from "assets/jss/material-kit-react/components/websitesStyle.jsx";

//images
import skills from "assets/img/Skills/Webtrinity.png";

import image1 from "assets/img/Portfolio/Websites/Websites1.jpeg";
import image2 from "assets/img/Portfolio/Websites/Websites2.jpeg";
import image3 from "assets/img/Portfolio/Websites/Websites3.jpeg";
import image4 from "assets/img/Portfolio/Websites/Websites4.jpeg";

import "./SkillsWeb.css";

class Skills extends React.Component {
  state = {
    display: false,
    portfolio: "Click to see Portfolio"
  };

  Show = () => {
    this.setState({ display: true, portfolio: "Click to hide Portfolio" });
    if (this.state.display === true) {
      this.setState({ display: false, portfolio: "Click to see Portfolio" });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sections}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6} className={classes.websitesBox}>
              <h1 className={classes.title}>Websites & Webapps</h1>

              <Button color="info" round size="lg" onClick={this.Show}>
                <Favorite className={classes.icons} /> {this.state.portfolio}
              </Button>
            </GridItem>

            <GridItem className={classes.desktop} xs={12} sm={12} md={6}>
              <Card>
                <CardBody>
                  <div
                    className={classes.skillsCard}
                    style={{
                      background: `url(${skills}) no-repeat center center`
                    }}
                  />
                </CardBody>
              </Card>
            </GridItem>

            {this.state.display ? (
              <GridItem className="animate fadeInDown" xs={12} sm={12} md={12}>
                <GridContainer className={classes.hiddenMain}>
                  
                <GridItem 
                    className={"animate fadeInRight one"}
                    sm={12}
                    md={6}
                    style={{
                      display: "flex", 
                      flexDirection: "column", 
                      justifyContent: "center"
                      }}>
                    
                    <div
                      className={classes.artBox}
                      style={{
                        width: '100%',
                        background: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${image1}) no-repeat center center`
                      }}
                    >
                      <div style = {{
                        backgroundColor: "rgba(255,255,255,0.9)", 
                        padding: "20px",
                        display: 'flexbox', 
                        flexDirection: 'column', 
                        width: '50%'}}>
                          <div style={{fontSize: '18px', fontWeight: "bold"}}>
                          Web app using face-rec Clarifai API. I built everything from front-end to back-end and everything in between.
                          </div>
                          <Button
                            color="info"
                            href="https://smart-brain-ag.herokuapp.com/"
                            target="_blank"                            
                          >
                            Click to register
                          </Button>
                      </div>
                    </div>
                  </GridItem>
                  
                  <GridItem 
                    className={"animate fadeInRight one"}
                    sm={12}
                    md={6}
                    style={{
                      display: "flex", 
                      flexDirection: "column", 
                      justifyContent: "center"
                      }}>
                    
                    <div
                      className={classes.artBox}
                      style={{
                        width: '100%',
                        background: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${image2}) no-repeat center center`
                      }}
                    >
                      <div style = {{
                        backgroundColor: "rgba(255,255,255,0.9)", 
                        padding: "20px",
                        display: 'flexbox', 
                        flexDirection: 'column', 
                        width: '50%'}}>
                          <div style={{fontSize: '18px', fontWeight: "bold"}}>
                          Web app built with React, using data fetched from an external API.
                          </div>
                          <Button
                            color="info"
                            href="https://andragh83.github.io/CountriesGuessingGame/"
                            target="_blank"                            
                          >
                            Click to play
                          </Button>
                      </div>
                    </div>
                  </GridItem>


                  <GridItem 
                    className={"animate fadeInRight one"}
                    sm={12}
                    md={6}
                    style={{
                      display: "flex", 
                      flexDirection: "column", 
                      justifyContent: "center"
                      }}>
                    
                    <div
                      className={classes.artBox}
                      style={{
                        width: '100%',
                        background: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${image3}) no-repeat center center`
                      }}
                    >
                      <div style = {{
                        backgroundColor: "rgba(255,255,255,0.9)", 
                        padding: "20px",
                        display: 'flexbox', 
                        flexDirection: 'column', 
                        width: '50%'}}>
                          <div style={{fontSize: '18px', fontWeight: "bold"}}>
                          Personal website for a person teaching public speaking, build with react on top of a Wordpress CMS.
                          </div>
                          <Button
                            color="info"
                            href="https://andragh83.github.io/DianaParvu/"
                            target="_blank"                            
                          >
                            Click to see
                          </Button>
                      </div>
                    </div>
                  </GridItem>

                  {/* <GridItem
                    className={"animate fadeInRight three " + classes.artBox}
                    sm={12}
                    md={6}
                    style={{
                      background: `url(${image3}) no-repeat center center`
                    }}
                  >
                    <Button
                      color="info"
                      href="https://andragh83.github.io/Tictactoe/"
                      target="_blank"
                    >
                      Click to play!
                    </Button>
                  </GridItem> */}
                  <GridItem 
                    className={"animate fadeInRight one"}
                    sm={12}
                    md={6}
                    style={{
                      display: "flex", 
                      flexDirection: "column", 
                      justifyContent: "center"
                      }}>
                    
                    <div
                      className={classes.artBox}
                      style={{
                        width: '100%',
                        background: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${image4}) no-repeat center center`
                      }}
                    >
                      <div style = {{
                        backgroundColor: "rgba(255,255,255,0.9)", 
                        padding: "20px",
                        display: 'flexbox', 
                        flexDirection: 'column', 
                        width: '50%'}}>
                          <div style={{fontSize: '18px', fontWeight: "bold"}}>
                          Funny color guessing game.
                          </div>
                          <Button
                            color="info"
                            href="https://andragh83.github.io/color-game-practice-webdevbootcamp/"
                            target="_blank"                            
                          >
                            Click to play
                          </Button>
                      </div>
                    </div>
                  </GridItem>
                </GridContainer>
              </GridItem>
            ) : null}
            <GridItem className={classes.mobile} xs={12} sm={12} md={6}>
              <Card>
                <CardBody>
                  <div
                    className={classes.skillsCard}
                    style={{
                      background: `url(${skills}) no-repeat center center`
                    }}
                  />
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(websitesStyle)(Skills);
