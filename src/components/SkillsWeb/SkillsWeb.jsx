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
import image2 from "assets/img/Portfolio/Websites/Websites2.jpg";
import image3 from "assets/img/Portfolio/Websites/Websites3.png";
import image4 from "assets/img/Portfolio/Websites/Websites4.png";

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
                  {/* <GridItem
                    sm={12}
                    md={4}
                    className={classes.alternateBox}
                    style={{ background: "#3da4ab" }}
                  >
                    <h3>Websites</h3>
                    <h4>for presentation</h4>
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
                    <div style={{textAlign: "center"}}>Test</div>
                    <div
                      className={classes.artBox}
                      style={{
                        width: '100%',
                        background: `url(${image1}) no-repeat center center`
                      }}
                    >
                      <Button
                        color="info"
                        href="https://andragh83.github.io/CountriesGuessingGame/"
                        target="_blank"
                      >
                        Click to play
                      </Button>
                    </div>
                  </GridItem>
                  <GridItem
                    className={"animate fadeInRight two " + classes.artBox}
                    sm={12}
                    md={6}
                    style={{
                      background: `url(${image2}) no-repeat center center`
                    }}
                  >
                    <Button
                      color="info"
                      href="https://andragh83.github.io/DianaParvu/"
                      target="_blank"
                    >
                      Click to see!
                    </Button>
                  </GridItem>

                  {/* <GridItem
                    sm={12}
                    md={4}
                    className={classes.alternateBox}
                    style={{ background: "#63b6bb" }}
                  >
                    <h3>Apps</h3>
                    <h4>simple</h4>
                  </GridItem> */}
                  <GridItem
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
                  </GridItem>
                  <GridItem
                    className={"animate fadeInRight four " + classes.artBox}
                    sm={12}
                    md={6}
                    style={{
                      background: `url(${image4}) no-repeat center center`
                    }}
                  >
                    <Button
                      color="info"
                      href="https://andragh83.github.io/color-game-practice-webdevbootcamp/"
                      target="_blank"
                    >
                      Click to play!
                    </Button>
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
