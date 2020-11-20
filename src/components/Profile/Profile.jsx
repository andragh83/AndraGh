import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import ScrollableAnchor from 'react-scrollable-anchor';

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
              
              <h3>
                 I'm a visual artist and a tech geek.
              </h3> 
              <h4>
              	I create illustrations, graphic designs and I build responsive websites.
              </h4>
              
            </GridItem>
          </GridContainer>
        </div>
      
     </ScrollableAnchor>
    );
  }
}

export default withStyles(completedStyle)(Profile);

