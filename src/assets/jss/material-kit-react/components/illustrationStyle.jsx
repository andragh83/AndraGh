
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";

const illustrationStyle = theme => ({

  illustrationBox: {
    textAlign: 'center', 
    marginTop: '60px'
  },

  skillsCard: {
  	height: "270px", 
  	backgroundSize: 'contain !important',
  },

  hiddenMain: {
  	margin: '10px',
    [theme.breakpoints.down("sm")]: {
      paddingTop: "40px",
    },
  },

  alternateBox: {
  	paddingTop: '85px', 
    fontSize: "1.5rem",
    [theme.breakpoints.down("xs")]: {
      padding: "40px 0",
      fontSize: "1rem !important",
    },
  	color: "white", 
  	textAlign: "center"
  },
  artBox: {
  	height: '200px',
    [theme.breakpoints.down("xs")]: {
      height: "100px",
    },
  	backgroundSize: 'cover !important',
    cursor: "pointer",
  },
  artBoxContain: {
    height: '200px',
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      height: "100px",
    },
    backgroundSize: 'contain !important'
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

 export default illustrationStyle;