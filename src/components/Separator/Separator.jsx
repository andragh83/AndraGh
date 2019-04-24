import React from "react";

// @material-ui/core components

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import separator from "assets/img/SVGs/separator.svg";
import ScrollableAnchor from 'react-scrollable-anchor'

const Separator = ({rotate, id}) => {
	return (
		<ScrollableAnchor id={id}>
			<GridContainer>
				<GridItem lg={12} style={{textAlign: "center", margin: "20px"}}>
					<img src={separator} alt="separator" width="40%" style={{margin: "40px auto", transform: `${rotate}`}}/>
				</GridItem>
			</GridContainer>
		</ScrollableAnchor>
	)
}

export default Separator