import React from "react";
import { Image, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import Image1 from "../img/image1.png";
import "../styles/Home.styles.css";

function Home() {
	return (
		<>
			<div className="home-background">
				<div className="content-container">
					<InputGroup size="lg" className="custom-input-group">
						{" "}
						{/* Custom class for max-width */}
						<FormControl
							aria-label="Large"
							aria-describedby="inputGroup-sizing-sm"
							className="custom-form-control"
						/>
						<Button type="submit" className="btn btn-primary">
							Search
						</Button>
					</InputGroup>
				</div>
			</div>
		</>
	);
}

export default Home;
