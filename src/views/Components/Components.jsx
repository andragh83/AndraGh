import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import CarouselHome from "components/CarouselHome/CarouselHome.jsx";


import SkillsIllustration from "components/SkillsIllustration/SkillsIllustration.jsx";
import SkillsWeb from "components/SkillsWeb/SkillsWeb.jsx";
import SkillsGd from "components/SkillsGd/SkillsGd.jsx";
import Contact from "components/Contact/Contact.jsx";
import Separator from "components/Separator/Separator.jsx"
import Profile from "components/Profile/Profile.jsx"
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import ScrollableAnchor from 'react-scrollable-anchor'

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="AndraGH"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        <ScrollableAnchor id="home">
        <CarouselHome />
        </ScrollableAnchor>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <Profile />
          <Separator id="illustration" />
          <SkillsIllustration />
          <Separator rotate="rotate(180deg)" id="graphic"/>
          <SkillsGd />
          <Separator id="websites"/>
          <SkillsWeb />
          <Separator rotate="rotate(180deg)" id="contact"/>
          <Contact />
          
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
