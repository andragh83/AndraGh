import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import ScrollableAnchor from 'react-scrollable-anchor'

import completedStyle from "assets/jss/material-kit-react/views/componentsSections/completedStyle.jsx";
import avatar from "assets/img/avatar.jpg";

class Profile extends React.Component {
  render() {
    const { classes } = this.props;
    return (
     <ScrollableAnchor id="about">
      
        <div className={classes.container} style={{paddingTop: "50px"}}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h1 className={classes.title}>Hi! I'm Andra!</h1>
              <img
                  src={avatar}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                  }
                />
              
              <h2>
                 I'm a vizual artist and a tech geek.
              </h2> 
              <h4>
              	I create illustrations, graphic designs and I build websites.
              	I believe good design is
              	intuitive, communicates the right messaje and 
              	triggers the intended emotions.
              	This is what I try to achieve through my work.
              </h4>
              <h5>Also I'm a mom of two boys, I love bright colors and I'm crazy about spring!</h5>
              
            </GridItem>
          </GridContainer>
        </div>
      
     </ScrollableAnchor>
    );
  }
}

export default withStyles(completedStyle)(Profile);

