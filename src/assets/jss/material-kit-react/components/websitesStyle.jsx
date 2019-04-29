
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";

const websitesStyle = theme => ({

  websitesBox: {
    textAlign: 'center', 
    marginTop: '60px'
  },

  skillsCard: {
  	height: "250px", 
  	backgroundSize: 'contain !important',
  },

  hiddenMain: {
  	margin: '10px',
  },

  alternateBox: {
  	paddingTop: '160px', 
    [theme.breakpoints.down("xs")]: {
      paddingTop: "10px",
    },
    color: "white", 
    textAlign: "center",
  },

  artBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  	height: '400px', 
    border: "5px solid white",  
  	backgroundSize: 'contain !important',

  },
  desktop: {
    display: 'block',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
},
  mobile: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
  }
},
  ...typographyStyle,
 })

 export default websitesStyle;