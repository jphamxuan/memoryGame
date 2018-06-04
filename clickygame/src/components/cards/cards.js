import React from "react";
import "./cards.css";

const cards = props => (
	<div onClick={() => props.setClicked(props.character)} className="card">
		<div className="img-container">
      		<img alt={props.character} src={props.image} />
    	</div>
  </div>
);

export default cards;