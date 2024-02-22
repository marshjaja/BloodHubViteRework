import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function LandingScreen() {
	return (
		<>
			<div>Welcome Screen</div>
			<NavLink to="/home">
				<Button>Enter</Button>
			</NavLink>
		</>
	);
}

export default LandingScreen;
