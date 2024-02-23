import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AboutBlood.styles.css";
import Image1 from "/src/img/image1.png";

const CustomCarousel = () => {
	return (
		<div>
			<div className="outer-carousel-container">
				<Carousel className="slider-container">
					<Carousel.Item interval={2000} className="slider">
						<div className="row d-flex align-items-center mx-auto slider-three  img-container">
							<div className="col-md-6 ps-lg-5 pt-4  pt-lg-5 text-container">
								<h1>Are You Ready to Give?</h1>
								<p>
									Discover if you're eligible to become a life-saver today. Our
									quick check ensures your donation is safe for you and
									recipients
								</p>
								<button className="btn btn-primary custom-about">
									Learn More
								</button>
							</div>
							<div className="col-md-6  pt-sm-4 img-container">
								<img
									src={Image1}
									className="d-block w-100 img-fluid pt-sm-1 "
									alt=""
								/>
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item interval={2000} className="slider">
						<div className="row d-flex align-items-center mx-auto slider-three  img-container">
							<div className="col-md-6 ps-lg-5 pt-4  pt-lg-5 text-container">
								<h1>Are You Ready to Give?</h1>
								<p>
									Discover if you're eligible to become a life-saver today. Our
									quick check ensures your donation is safe for you and
									recipients
								</p>
								<button className="btn btn-primary custom-about">
									Learn More
								</button>
							</div>
							<div className="col-md-6  pt-sm-4 img-container">
								<img
									src={Image1}
									className="d-block w-100 img-fluid pt-sm-1 "
									alt=""
								/>
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item interval={2000} className="slider">
						<div className="row d-flex align-items-center mx-auto slider-three  img-container">
							<div className="col-md-6 ps-lg-5 pt-4 pt-lg-5 text-container">
								<h1>Are You Ready to Give?</h1>
								<p>
									Discover if you're eligible to become a life-saver today. Our
									quick check ensures your donation is safe for you and
									recipients
								</p>
								<button className="btn btn-primary custom-about">
									Learn More
								</button>
							</div>
							<div className="col-md-6  pt-sm-4 img-container">
								<img
									src={Image1}
									className="d-block w-100 img-fluid pt-sm-1 "
									alt=""
								/>
							</div>
						</div>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
};

export default CustomCarousel;
