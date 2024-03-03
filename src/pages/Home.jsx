import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Home.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faArrowsSpin,
	faDroplet,
	faHeartPulse,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
	return (
		<>
			<div className="home-background">
				<div className="content-container">
					{/* <Button type="submit" className="btn custom-btn">
						Search
					</Button> */}
					<div className="row home-text">
						<div className="col-12 d-flex justify-content-center">
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
								sequi ducimus consequatur, voluptate tenetur aliquid quasi,
								reprehenderit blanditiis dolor atque doloremque praesentium
								incidunt ut fuga veniam? Quo expedita deserunt facere nam omnis
								quisquam neque incidunt asperiores voluptas, non dolore magni,
								unde odio cum, voluptatibus harum numquam quibusdam provident!
								Consectetur, explicabo.
							</p>
						</div>
						<div className="col-12 d-flex justify-content-center">
							<Button as={Link} className="home-btn " to="/where-to-donate">
								Where to Donate
							</Button>
						</div>
					</div>
				</div>
			</div>

			{/* </div> */}
			<div className="container text-center">
				<div className="row">
					<div className="col-6 col-lg-3 d-flex justify-content-center">
						<div className="d-flex flex-column align-items-center">
							<div className="circle">
								<FontAwesomeIcon
									icon={faHeartPulse}
									size="5x"
									style={{ color: "rgb(185, 26, 26)" }}
								/>
							</div>
							<h4 style={{ marginTop: "10px" }}>Give blood</h4>{" "}
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Doloremque, voluptas?
							</p>{" "}
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
							<h4 style={{ marginTop: "10px" }}>Where to donate</h4>{" "}
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Doloremque, voluptas?
							</p>{" "}
						</div>
					</div>
					<div className="col-6 col-lg-3 d-flex justify-content-center">
						<div className="d-flex flex-column align-items-center">
							<div className="circle">
								<FontAwesomeIcon
									icon={faDroplet}
									size="5x"
									style={{ color: "rgb(185, 26, 26)" }}
								/>
							</div>
							<h4 style={{ marginTop: "10px" }}>Get to know the blood types</h4>{" "}
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Doloremque, voluptas?
							</p>{" "}
						</div>
					</div>
					<div className="col-6 col-lg-3 d-flex justify-content-center">
						<div className="d-flex flex-column align-items-center">
							<div className="circle">
								<FontAwesomeIcon
									className="icon"
									icon={faArrowsSpin}
									size="5x"
									style={{ color: "rgb(185, 26, 26)" }}
								/>
							</div>
							<h4 style={{ marginTop: "10px" }}>Blood donation process</h4>{" "}
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Doloremque, voluptas?
							</p>{" "}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
