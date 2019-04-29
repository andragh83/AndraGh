
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";

const gdStyle = theme => ({

  gdBox: {
    textAlign: 'center', 
    marginTop: '60px'
  },

  skillsCard: {
  	height: "250px", 
  	backgroundSize: 'contain !important',
  },

  hiddenMain: {
  	margin: '10px',
    [theme.breakpoints.down("sm")]: {
      paddingTop: "40px",
    },
  },

  alternateBox1: {
  	paddingTop: '55px', 
    [theme.breakpoints.down("xs")]: {
      paddingTop: "10px",
    },
  	color: "white", 
  	textAlign: "center"
  },

  alternateBox2: {
    paddingTop: '45px', 
    [theme.breakpoints.down("xs")]: {
      paddingTop: "10px",
    },
    color: "white", 
    textAlign: "center"
  },
  alternateBox3: {
    paddingTop: '25px', 
    [theme.breakpoints.down("xs")]: {
      paddingTop: "10px",
    },
    color: "white", 
    textAlign: "center"
  },

  artBox: {
  	height: '200px', 
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
 });

 export default gdStyle;