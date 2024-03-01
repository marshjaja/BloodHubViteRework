import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/react.svg";
import "../styles/NavBar.styles.css";
function NavBar() {
	const [expanded, setExpanded] = useState(false);

	return (
		<Navbar
			bg="light"
			expand="lg"
			className="fixed-bottom navbar-light bg-light custom-navbar"
			expanded={expanded}
		>
			{/* <Container> */}
			<Container fluid className="mx-5 my-2">
				<Navbar.Brand
					as={Link}
					to="/"
					className="d-flex align-items-center justify-content-center"
				>
					<svg
						className="bloodhub-logo"
						fill="#d50d0d"
						height="30px"
						width="30px"
						version="1.1"
						id="Layer_1"
						viewBox="0 0 226.194 226.194"
						style={{ marginRight: "10px", maxWidth: "15%", height: "auto" }}
					>
						<g>
							<g>
								<g>
									<path
										d="M116.157,1.334c-1.535-1.779-4.585-1.779-6.12,0c-3.34,3.875-81.789,95.425-81.789,140.67
                c0,46.423,38.062,84.19,84.849,84.19s84.849-37.766,84.849-84.189C197.946,96.759,119.497,5.208,116.157,1.334z M113.097,218.113
                c-42.33,0-76.768-34.142-76.768-76.109c0-37.469,62.121-114.197,76.768-131.763c14.646,17.566,76.768,94.295,76.768,131.763
                C189.865,183.971,155.427,218.113,113.097,218.113z"
									/>
									<path
										d="M125.218,100.941h-24.241v24.242H76.734v24.242h24.242v24.242h24.242v-24.242h24.242v-24.242h-24.242V100.941z
                 M141.38,133.264v8.081h-24.242v24.242h-8.081v-24.242H84.815v-8.081h24.242v-24.242h8.081v24.242H141.38z"
									/>
									<path
										d="M134.641,52.235c-1.239-1.859-3.746-2.362-5.603-1.12c-1.857,1.237-2.358,3.746-1.12,5.603l24.242,36.364
                c0.779,1.168,2.06,1.799,3.366,1.799c0.769,0,1.549-0.219,2.237-0.679c1.857-1.237,2.358-3.746,1.12-5.603L134.641,52.235z"
									/>
								</g>
							</g>
						</g>
					</svg>
					<h1 style={{ margin: 0 }}>BloodHub</h1>{" "}
				</Navbar.Brand>
				<button
					className="navbar-toggler mb-2 custom-toggle"
					type="button"
					aria-controls="responsive-navbar-nav"
					aria-expanded={expanded}
					aria-label="Toggle navigation"
					onClick={() => setExpanded(!expanded)}
				>
					<span className="navbar-toggler-icon custom-span"></span>{" "}
				</button>

				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={Link} to="/home" className="me-5 nav-link-hover">
							Home
						</Nav.Link>
						<Nav.Link
							as={Link}
							className="me-5 nav-link-hover"
							to="/about-blood"
						>
							About Blood
						</Nav.Link>
						<Nav.Link
							as={Link}
							className="me-5 nav-link-hover"
							to="/can-i-give-blood"
						>
							Eligibility Quiz
						</Nav.Link>
						<Nav.Link
							as={Link}
							className="me-5 nav-link-hover"
							to="/where-to-donate"
						>
							Where to Donate
						</Nav.Link>
					</Nav>
					<Nav.Link as={Link} className="me-3 nav-link-hover" to="/contact-us">
						Contact Us
					</Nav.Link>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
