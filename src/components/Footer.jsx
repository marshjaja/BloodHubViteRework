import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faFacebook,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/Footer.styles.css";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import Logo from "../img/bloodropsvg.svg";

function Footer() {
	return (
		<>
			<div
				className="container-fluid p-3"
				style={{ backgroundColor: "rgb(185, 26, 26)" }}
			></div>
			<div
				className="container-fluid text-center p-5"
				style={{ backgroundColor: " #5e0023", color: "rgb(255, 255, 255) " }}
			>
				<div className="row row-cols-1 row-cols-sm-1 row-cols-md-4">
					{/* <div className="row "> */}
					<div className="col-12 col-lg-3 mt-5">
						<div className="icon-container d-flex justify-content-center align-content-center  my-3 ">
							<Image src={Logo} width={50} />
							<h3>BloodHub</h3>
						</div>
					</div>

					<div className="col-12 col-lg-3 mt-5">
						<p>Donation Process</p>
						<div className="d-flex flex-column text-decoration-none">
							<Link className="footer-link">Hello</Link>
							<Link className="footer-link">Hello</Link>
							<Link className="footer-link">Hello</Link>
							<Link className="footer-link">Hello</Link>
						</div>
					</div>
					<div className="col-12 col-lg-3 mt-5">
						<p>Get Involved</p>
						<div className="d-flex flex-column text-decoration-none">
							<Link className="footer-link">Hello</Link>
							<Link className="footer-link">Hello</Link>
							<Link className="footer-link">Hello</Link>
							<Link className="footer-link">Hello</Link>
						</div>
					</div>
					<div className="col-12 col-lg-3 mt-5">
						<p>Contact & Support</p>
						<div className="d-flex flex-column text-decoration-none">
							<Link className="footer-link">Hello</Link>
							<Link className="footer-link">Hello</Link>
							<Link className="footer-link">Hello</Link>
							<Link className="footer-link">Hello</Link>
						</div>
					</div>
				</div>
				<hr />
				{/* <div className="icon-container d-flex justify-content-center align-content-center   mt-3 ">
					<Image src={Logo} width={50} className="" />
				</div>
				<div className="icon-container d-flex justify-content-center align-content-center ">
					<h3>BloodHub</h3>
				</div> */}
				<div className="icon-container d-flex justify-content-center align-content-center  mt-3 ">
					<FontAwesomeIcon
						className="social-icon m-4"
						icon={faTwitter}
						size="2x"
					/>
					<FontAwesomeIcon
						className="social-icon m-4"
						icon={faFacebook}
						size="2x"
					/>
					<FontAwesomeIcon
						className="social-icon m-4"
						icon={faLinkedin}
						size="2x"
					/>
					<FontAwesomeIcon
						className="social-icon m-4"
						icon={faEnvelope}
						size="2x"
					/>
				</div>

				<p className="date">&copy; {new Date().getFullYear()} | BloodHub</p>
			</div>
		</>
	);
}

export default Footer;
