import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AboutBlood.styles.css";
import Image1 from "/src/img/image1.png";
import Image2 from "/src/img/image2.png";
import Image3 from "/src/img/image3.png";
import Image4 from "/src/img/image4.png";
import Image5 from "/src/img/image5.png";
import Image6 from "/src/img/image6.png";

const CustomCarousel = () => {
	return (
		<div>
			<div className="outer-carousel-container">
				<Carousel className="slider-container">
					<Carousel.Item interval={2000} className="slider">
						<div className="row d-flex align-items-center mx-auto slider-three  img-container">
							<div className="col-md-6 ps-lg-5 pt-4  pt-lg-5 text-container">
								<h1>Every Drop Saves Lives</h1>
								<p>
									Your blood type holds the key to saving lives. Whether O, A,
									B, or AB, your donation can make a world of difference in
									emergencies and surgeries
								</p>
								<button className="btn btn-primary custom-about">
									Learn More
								</button>
							</div>
							<div className="col-md-6  pt-sm-4 img-container">
								<img
									src={Image2}
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
									src={Image4}
									className="d-block w-100 img-fluid pt-sm-1 "
									alt=""
								/>
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item interval={2000} className="slider">
						<div className="row d-flex align-items-center mx-auto slider-three  img-container">
							<div className="col-md-6 ps-lg-5 pt-4  pt-lg-5 text-container">
								<h1>The Journey of Donation</h1>
								<p>
									Experience the gift of giving in just an hour, with the actual
									donation taking mere minutes. Your comfort and safety are our
									top priority throughout
								</p>
								<button className="btn btn-primary custom-about">
									Learn More
								</button>
							</div>
							<div className="col-md-6  pt-sm-4 img-container">
								<img
									src={Image3}
									className="d-block w-100 img-fluid pt-sm-1 "
									alt=""
								/>
							</div>
						</div>
					</Carousel.Item>

					<Carousel.Item interval={2000} className="slider">
						<div className="row d-flex align-items-center mx-auto slider-three  img-container">
							<div className="col-md-6 ps-lg-5 pt-4 pt-lg-5 text-container">
								<h1>Beyond a Donation</h1>
								<p>
									Your contribution extends beyond the donation chair, aiding
									medical research and healthcare training. Together, we're
									innovating for healthier futures
								</p>
								<button className="btn btn-primary custom-about">
									Learn More
								</button>
							</div>
							<div className="col-md-6  pt-sm-4 img-container">
								<img
									src={Image5}
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
