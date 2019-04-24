import { container, title } from "assets/jss/material-kit-react";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx";

const completedStyle = {
  section: {
    padding: "70px 0"
  },
  container: {
    ...container,
    textAlign: "center !important"
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
...imagesStyles
};

export default completedStyle;
