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

import gdStyle from "assets/jss/material-kit-react/components/gdStyle.jsx";

//images

import skills from "assets/img/Skills/GDtrinity.png";

import image4 from "assets/img/Portfolio/GD/Logo/logo1.png";
import image5 from "assets/img/Portfolio/GD/Logo/logo2.png";
import image6 from "assets/img/Portfolio/GD/Logo/logo3.png";

import image7 from "assets/img/Portfolio/GD/Promo/promo1.png";
import image8 from "assets/img/Portfolio/GD/Promo/promo2.png";
import image9 from "assets/img/Portfolio/GD/Promo/promo3.jpg";

import image10 from "assets/img/Portfolio/GD/Planning/planning1.jpg";
import image11 from "assets/img/Portfolio/GD/Planning/planning2.jpg";
import image12 from "assets/img/Portfolio/GD/Planning/planning3.jpg";

import './SkillsGd.css';

class SkillsGd extends React.Component {
	state = {
			display: false,
		};

	Show = () => {
		this.setState({display: true, fade: 'fadeInDown'});
		if (this.state.display===true) {
	      this.setState({display: false});
	    }
		
	};

	render() {
    const { classes } = this.props;
    return (
		  <div className={classes.container}>
		  	
			
	            <GridContainer >

	              <GridItem xs={12} sm={12} md={6} className={classes.gdBox}>
	                
		               <h1 className={classes.title}>Graphic Design</h1>
		              
		               <Button color="success" round size="lg" onClick={this.Show}>
		                  <Favorite className={classes.icons} /> Click to see Portfolio
		               </Button>
		            
	              </GridItem>

	              <GridItem xs={12} sm={12} md={6} >
		              <Card>
			              <CardBody>
				              <div className={classes.skillsCard} style={{background: `url(${skills}) no-repeat center center`}}>
				              </div>
			              </CardBody>
		              </Card>
	              </GridItem>

	              {this.state.display
			      	?<GridItem className='animate fadeInDown' xs={12} sm={12} md={12} >
	                	<GridContainer className={classes.hiddenMain}>
	                	   <GridItem sm={12} md={3} className={classes.alternateBox1} style={{background: "#a4ab3d"}}>
	                		<h3>Logo</h3>
	                		<h4>design</h4>
			               </GridItem>
			               <GridItem className={'animate fadeIn one ' + classes.artBox} sm={12} md={3} style={{background: `url(${image4}) no-repeat center center`}}>
	                		
			               </GridItem>
			               <GridItem className={'animate fadeIn two ' + classes.artBox} sm={12} md={3} style={{background: `url(${image5}) no-repeat center center`}}>
	                		   
			               </GridItem>
			               <GridItem className={'animate fadeIn three ' + classes.artBox} sm={12} md={3} style={{background: `url(${image6}) no-repeat center center`}}>
	                
			               </GridItem>
			               <GridItem className={'animate fadeInDown ' + classes.alternateBox2} sm={12} md={3} style={{background: "#b6bb63"}}>
	                		<h3>Banners, flyers</h3>
	                		<h4>Design and DTP</h4>
			               </GridItem>
			               <GridItem className={'animate fadeIn four ' + classes.artBox} sm={12} md={3} style={{background: `url(${image7}) no-repeat center center`}}>
	                
			               </GridItem>
			               <GridItem className={'animate fadeIn five ' + classes.artBox} sm={12} md={3} style={{background: `url(${image8}) no-repeat center center`}}>
	                		   
			               </GridItem>
			               <GridItem className={'animate fadeIn six ' + classes.artBox} sm={12} md={3} style={{background: `url(${image9}) no-repeat center center`}}>
	                
			               </GridItem>
			                <GridItem className={'animate fadeInDown ' + classes.alternateBox3} sm={12} md={3} style={{background: "#a4ab3d"}}>
	                		<h3>Planner and calendar</h3>
	                		<h4>Concept creation, graphic design, DTP and production</h4>
			               </GridItem>
			               <GridItem className={'animate fadeIn seven ' + classes.artBox} sm={12} md={3} style={{background: `url(${image10}) no-repeat center center`}}>
	                
			               </GridItem>
			               <GridItem className={'animate fadeIn eight ' + classes.artBox} sm={12} md={3} style={{background: `url(${image11}) no-repeat center center`}}>
	                		   
			               </GridItem>
			               <GridItem className={'animate fadeIn nine ' + classes.artBox} sm={12} md={3} style={{background: `url(${image12}) no-repeat center center`}}>
	                
			               </GridItem>
			            </GridContainer>
	              	</GridItem> 
			      	:null
			  		}
	            </GridContainer>
	         
	      </div>
	    
	)}
}

export default withStyles(gdStyle)(SkillsGd);
          