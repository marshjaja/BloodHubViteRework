import React from "react";
import {
	Image,
	Form,
	Button,
	InputGroup,
	FormControl,
	Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Image1 from "../img/image1.png";
import "../styles/Home.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faArrowsSpin,
	faDroplet,
	faHeartPulse,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
	const handleSearch = (e) => {
		e.preventDefault();
		const searchInput = e.target.elements.search.value; // Adjust based on your input field's name or ID
		setSearchTerm(searchInput);
	};
	return (
		<>
			<div className="home-background">
				<div className="content-container">
					<div className="row">
						<div className="col-6 col-lg-3 d-flex justify-content-center">
							{/* <InputGroup size="lg" className="custom-input-group">
						<FormControl
							aria-label="Large"
							aria-describedby="inputGroup-sizing-sm"
							className="custom-form-control"
						/> */}
							<h1>Hello</h1>
						</div>
						{/* <Button type="submit" className="btn custom-btn">
						Search
					</Button> */}
						<div className="col-6 col-lg-3 d-flex justify-content-center"></div>
						<Button as={Link} className="" to="/where-to-donate">
							Where to Donate
						</Button>
						{/* </InputGroup> */}
					</div>
				</div>
			</div>
			<div className="container text-center">
				<div className="row">
					<div className="col-6 col-lg-3 d-flex justify-content-center">
						<div className="circle">
							<FontAwesomeIcon
								icon={faHeartPulse}
								size="5x"
								style={{ color: "rgb(185, 26, 26)" }}
							/>
						</div>
					</div>
					<div className="col-6 col-lg-3 d-flex justify-content-center">
						<div className="d-flex flex-column align-items-center">
							<div className="circle">
								<FontAwesomeIcon
									icon={faLocationDot}
									size="5x"
									style={{ color: "rgb(185, 26, 26)" }}
								/>
							</div>
							<p style={{ marginTop: "10px" }}>
								kbdfbdkasbfksdbkj vkjwfbowbofbouwbfgouwbfbwoubfoweb
							</p>{" "}
						</div>
					</div>
					<div className="col-6 col-lg-3 d-flex justify-content-center">
						<div className="circle">
							<FontAwesomeIcon
								icon={faDroplet}
								size="5x"
								style={{ color: "rgb(185, 26, 26)" }}
							/>
						</div>
					</div>
					<div className="col-6 col-lg-3 d-flex justify-content-center">
						<div className="circle">
							<FontAwesomeIcon
								className="icon"
								icon={faArrowsSpin}
								size="5x"
								style={{ color: "rgb(185, 26, 26)" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
