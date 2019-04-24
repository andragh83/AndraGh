import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";

import loginStyle from "assets/jss/material-kit-react/views/componentsSections/loginStyle.jsx";

import fb from "assets/img/fb.png"; 
import insta from "assets/img/insta.png"; 
import twitter from "assets/img/twitter.png"; 

class SectionLogin extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} style={{background: "linear-gradient(hsla(0, 0%, 100%, 1), hsla(0, 100%, 50%, 0.6))"}}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <form className={classes.form} action="mailto:andra.ghitulescu@gmail.com" method="post" encType="text/plain">
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Contact me</h4>
                  </CardHeader>
                  <p className={classes.divider}>andra[dot]ghitulescu[at]gmail[dot]com</p>
                   <CardBody>
                     <GridContainer>
                        <GridItem lg={4} style={{textAlign: "center"}}>
                          <a href="https://www.facebook.com/andraghstudio/" target="_blank" rel="noopener noreferrer"><img height="50px" src={fb} alt="facebook" style={{margin: "10px auto"}}/></a>
                        </GridItem>
                        <GridItem lg={4} style={{textAlign: "center"}}>
                          <a href="https://twitter.com/andraghitulescu" target="_blank" rel="noopener noreferrer"><img height="50px" src={twitter} alt="facebook" style={{margin: "10px auto"}}/></a>
                        </GridItem>
                        <GridItem lg={4} style={{textAlign: "center"}}>
                          <a href="https://www.instagram.com/andraghstudio/" target="_blank" rel="noopener noreferrer"><img height="50px" src={insta} alt="instagram" style={{margin: "10px auto"}}/></a>
                        </GridItem>
                      </GridContainer>
                    </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg">
                      Let's keep in touch!
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(loginStyle)(SectionLogin);
