import React from "react";
import Lightbox from 'react-images';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Favorite from "@material-ui/icons/Favorite";

// styles

import illustrationStyle from "assets/jss/material-kit-react/components/illustrationStyle.jsx";

//images

import skills from "assets/img/Skills/IllustrationTrinity.png";


import image3 from "assets/img/Portfolio/Illustration/Traditional/trad1.png";
import image4 from "assets/img/Portfolio/Illustration/Traditional/trad2.png";
import image5 from "assets/img/Portfolio/Illustration/Traditional/trad3.png";
import image6 from "assets/img/Portfolio/Illustration/Traditional/trad4.png";
import image7 from "assets/img/Portfolio/Illustration/Traditional/trad5.png";

import image8 from "assets/img/Portfolio/Illustration/Digital/digital1.jpg";
import image9 from "assets/img/Portfolio/Illustration/Digital/digital2.jpg";
import image10 from "assets/img/Portfolio/Illustration/Digital/digital3.jpg";
import image11 from "assets/img/Portfolio/Illustration/Digital/digital4.png";
import image12 from "assets/img/Portfolio/Illustration/Digital/digital5.png";

import image13 from "assets/img/Portfolio/Illustration/WatercolorArt/art1.png";
import image14 from "assets/img/Portfolio/Illustration/WatercolorArt/art2.png";
import image15 from "assets/img/Portfolio/Illustration/WatercolorArt/art3.png";
import image16 from "assets/img/Portfolio/Illustration/WatercolorArt/art4.png";
import image17 from "assets/img/Portfolio/Illustration/WatercolorArt/art5.png";

import './SkillsIllustration.css';

const photos = [
	{src: image3}, {src: image4}, {src: image5}, {src: image6}, {src: image7}, 
	{src: image8}, {src: image9}, {src: image10}, {src: image11}, {src: image12}, 
	{src: image15}, {src: image14}, {src: image15}, {src: image16}, {src: image17}
]

class SkillsIllustration extends React.Component {
	state = {
			display: false,
			currentImage: 0,
			portfolio: "Click to see Portfolio",
		};

        closeLightbox = this.closeLightbox.bind(this);
	    openLightbox = this.openLightbox.bind(this);
	    gotoNext = this.gotoNext.bind(this);
	    gotoPrevious = this.gotoPrevious.bind(this);

      openLightbox(event, obj) {
	    this.setState({
	      currentImage: Number(event.target.id),
	      lightboxIsOpen: true,
	    });
	    console.log(event.target.id);
	  }

	  closeLightbox() {
	    this.setState({
	      currentImage: 0,
	      lightboxIsOpen: false,
	    });
	  }
	  
	  gotoPrevious() {
	    this.setState({
	      currentImage: this.state.currentImage - 1,
	    });
	  }
	  
	  gotoNext() {
	    this.setState({
	      currentImage: this.state.currentImage + 1,
	    });
	  }

	Show = () => {
		this.setState({display: true, portfolio: "Click to hide Portfolio"});
		if (this.state.display===true) {
	      this.setState({display: false, portfolio: "Click to see Portfolio"});
	    }
		
	};

	render() {
    const { classes } = this.props;
    return (
	   
	    <div  className={classes.sections}>
		  <div className={classes.container}>
			
			
	            <GridContainer >
	              <GridItem xs={12} sm={12} md={6} className={classes.illustrationBox}>
	                
		               <h1 className={classes.title}>Illustration</h1>
		              
		               <Button color="primary" round size="lg" onClick={this.Show}>
		                  <Favorite className={classes.icons} /> {this.state.portfolio}
		               </Button>
		            
	              </GridItem>
	              
	              <GridItem className={classes.desktop} xs={12} sm={12} md={6} >
		              <Card>
			              <CardBody>
				              <div className={classes.skillsCard} style={{background: `url(${skills}) no-repeat center center`}}>
				              </div>
			              </CardBody>
		              </Card>
	              </GridItem>
	              
	              {this.state.display
			      	?<GridItem onClick={this.openLightbox} xs={12} sm={12} md={12} >
			      		<Lightbox images={photos}
				          onClose={this.closeLightbox}
				          onClickPrev={this.gotoPrevious}
				          onClickNext={this.gotoNext}
				          currentImage={this.state.currentImage}
				          isOpen={this.state.lightboxIsOpen}
				        />
	                	<GridContainer className={classes.hiddenMain}>
	                		<GridItem className={'animate fadeInDown ' + classes.alternateBox} xs={4} md={2} style={{background: "#fc6961"}}>
	                		Traditional
			               </GridItem>
	                		<GridItem id="0" className={'animate fadeInRight ' + classes.artBox} xs={4} md={2} style={{background: `url(${image3}) no-repeat center center`}}>
		                		
			               </GridItem>
			               <GridItem id="1" className={'animate fadeInRight one ' + classes.artBox} xs={4} md={2} style={{background: `url(${image4}) no-repeat center center`}}>
			               		
			               </GridItem>
			               <GridItem id="2" className={'animate fadeInRight two ' + classes.artBox} xs={4} md={2} style={{background: `url(${image5}) no-repeat center center`}}>
			               		
			               </GridItem>
			               <GridItem id="3" className={'animate fadeInRight three ' + classes.artBox} xs={4} md={2} style={{background: `url(${image6}) no-repeat center center`}}>
	                			
			               </GridItem>
			               <GridItem id="4" className={'animate fadeInRight four  ' + classes.artBoxContain} xs={4} md={2} style={{background: `url(${image7}) no-repeat center center`}}>
			               		
			               </GridItem>
			               <GridItem className={'animate fadeInDown ' + classes.alternateBox} xs={4} md={2} style={{background: "#fc8780"}}>
	                		Digital
			               </GridItem>
			               <GridItem id="5" className={'animate fadeInRight five ' + classes.artBox} xs={4} md={2} style={{background: `url(${image8}) no-repeat center center`}}>

			               </GridItem>
			               <GridItem id="6" className={'animate fadeInRight six ' + classes.artBox} xs={4} md={2} style={{background: `url(${image9}) no-repeat center center`}}>
	                
			               </GridItem>
			               <GridItem id="7" className={'animate fadeInRight seven ' + classes.artBox} xs={4} md={2} style={{background: `url(${image10}) no-repeat center center`}}>

			               </GridItem>
			               <GridItem id="8" className={'animate fadeInRight eight ' + classes.artBox} xs={4} md={2} style={{background: `url(${image11}) no-repeat center center`}}>
	               
			               </GridItem>
			               <GridItem id="9" className={'animate fadeInRight nine ' + classes.artBox} xs={4} md={2} style={{background: `url(${image12}) no-repeat center center`}}>
	                
			               </GridItem>
			               <GridItem className={'animate fadeInDown ' + classes.alternateBox} xs={4} md={2} style={{background: "#fc6961"}}>
	                		Art Prints
			               </GridItem>
			               <GridItem id="10" xs={4} md={2} className={'animate fadeInRight ten ' + classes.artBox} style={{background: `url(${image13}) no-repeat center center`}}>

			               </GridItem>
			               <GridItem id="11" xs={4} md={2} className={'animate fadeInRight eleven ' + classes.artBox} style={{background: `url(${image14}) no-repeat center center`}}>
			               
			               </GridItem>
			               <GridItem id="12" xs={4} md={2} className={'animate fadeInRight twelve ' + classes.artBox} style={{background: `url(${image15}) no-repeat center center`}}>

			               </GridItem>
			               <GridItem id="13" xs={4} md={2} className={'animate fadeInRight thirtin ' + classes.artBox} style={{background: `url(${image16}) no-repeat center center`}}>
			               
			               </GridItem>
			               <GridItem id="14" xs={4} md={2} className={'animate fadeInRight fourtin ' + classes.artBox} style={{background: `url(${image17}) no-repeat center center`}}>

			               </GridItem> 

		               
		            	</GridContainer>
	              	</GridItem> 
			      	:null
			  		}
	            <GridItem className={classes.mobile} xs={12} sm={12} md={6} >
		              <Card>
			              <CardBody>
				              <div className={classes.skillsCard} style={{background: `url(${skills}) no-repeat center center`}}>
				              </div>
			              </CardBody>
		              </Card>
	              </GridItem>
	            </GridContainer>
	          
	      </div>
	    </div>
	   
	  
	)}
}

export default withStyles(illustrationStyle)(SkillsIllustration);
          