import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import BgVideo from "../videos/bgvideo.mp4";
import "../styles/LandingScreen.styles.css";

function LandingScreen() {
	return (
		<div className="main-landing">
			<div className="container-landing">
				<video src={BgVideo} autoPlay loop muted className="video-landing" />
				<div className="overlay-landing"></div>
				<div className="content-wrapper-landing">
					<div className="left-col-landing">
						<div className="icon-container-landing">
							<h1 className="slide-in">
								Welcome to BLO
								<svg
									className="icon-landing"
									fill="#000000"
									height="800px"
									width="800px"
									version="1.1"
									id="Layer_1"
									viewBox="0 0 226.194 226.194"
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
								DHUB
							</h1>
							<p className="moving-text-landing">Every drop saves lives</p>
						</div>

						<NavLink to="/home">
							<Button className="enter-site">Enter</Button>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LandingScreen;
