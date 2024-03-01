import React, { useState, useEffect, useRef, useCallback } from "react";
import {
	GoogleMap,
	LoadScript,
	MarkerF,
	useLoadScript,
	InfoWindow,
	InfoWindowF,
	InfoWindowF,
} from "@react-google-maps/api";
import "../styles/BloodCentres.styles.css";
import Icon from "../img/bloodicon.png";
import Icon from "../img/bloodicon.png";
import Icon1 from "../img/you-are-here.png";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const center = { lat: 51.5074, lng: -0.1278 };
const libraries = ["places"];

const BloodCentres = () => {
	const [postcode, setPostcode] = useState("");
	const [isValidPostcode, setIsValidPostcode] = useState(true);
	const [places, setPlaces] = useState([]);
	const [selectedPlace, setSelectedPlace] = useState(null);
	const [userLocation, setUserLocation] = useState("");
	const [showUserLocationInfo, setShowUserLocationInfo] = useState(false);

	const mapRef = useRef(null);
	const onLoad = useCallback((map) => (mapRef.current = map), []);

	const panToLocation = (location) => {
		if (mapRef.current) {
			mapRef.current.panTo(location);
			mapRef.current.setZoom(13);
		}
	};

	console.log("API Key:", import.meta.env.VITE_MAP_API_KEY);

	const { isLoaded } = useLoadScript({
		googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
		libraries,
	});
	useEffect(() => {
		console.log("Google Maps API loaded:", isLoaded);
	}, [isLoaded]);

	const handleSearch = () => {
		const geocoder = new window.google.maps.Geocoder();

		geocoder.geocode({ address: postcode }, (results, status) => {
			if (status === "OK" && results[0]) {
				const location = {
					lat: results[0].geometry.location.lat(),
					lng: results[0].geometry.location.lng(),
				};
				searchNearbyBloodCenters(location);
				setIsValidPostcode(true);
				panToLocation(location);
				setUserLocation(location);
				panToLocation(location);
				setUserLocation(location);
			} else {
				setIsValidPostcode(false);
				console.error(
					"Geocode was not successful for the following reason: " + status
				);
			}
		});
	};

	const searchNearbyBloodCenters = (location) => {
		const map = new window.google.maps.Map(document.createElement("div"));
		const service = new window.google.maps.places.PlacesService(map);

		service.nearbySearch(
			{
				location: location,
				radius: 5000,
				type: ["blood donation"],
				keyword: "blood center",
			},
			(results, status) => {
				if (status === window.google.maps.places.PlacesServiceStatus.OK) {
					setPlaces(results);
				}
			}
		);
	};

	const [activeMarker, setActiveMarker] = useState(null);
	const handleActiveMarker = (places) => {
		if (places === activeMarker) {
			return;
		}
		setActiveMarker(places);
	};

	const [activeMarker, setActiveMarker] = useState(null);
	const handleActiveMarker = (places) => {
		if (places === activeMarker) {
			return;
		}
		setActiveMarker(places);
	};

	useEffect(() => {
		console.log("Updated places state:", places);
	}, [places]);

	return (
		<>
			<div className=" container-fluid ">
				<div className="text-wrap text-center mt-5">
					<h1 className="underline">
						Search for Blood Donation Sites Near You
					</h1>

					<p className="paragraph-wrap text-center text-muted">
						Contribute to saving lives by finding the closest blood donation
						centers. Simply provide your postcode, and our map will highlight
						nearby locations, ensuring you can easily plan your visit.
					</p>
				</div>

				<div className="row">
					<div className="col-md-3 controls ">
						<p className="d-flex justify-content-center mt-5 text-white">
							Search for Blood Donation Locations near you
						</p>

						<InputGroup className="mb-3  custom-input-group">
							<FormControl
								placeholder="Please enter a postcode"
								aria-label="Enter postcode"
								aria-describedby="basic-addon2"
								value={postcode}
								onChange={(e) => setPostcode(e.target.value)}
								className="form-control"
							/>
							<Button
								variant="outline-secondary"
								id="button-addon2"
								onClick={handleSearch}
								className="custom-btn"
							>
								Search
							</Button>
						</InputGroup>
					</div>

					<div className="col-md-1 d-none d-md-block line-container">
						<div className="vertical-line"></div>
					</div>

					<div className="col-md-8">
						{isLoaded && (
							<div className="map">
								<GoogleMap
									center={center}
									zoom={13}
									onLoad={onLoad}
									mapContainerClassName="map-container"
								>
									{places.map((place) => (
										<MarkerF
											key={place.place_id}
											position={{
												lat: place.geometry.location.lat(),
												lng: place.geometry.location.lng(),
											}}
											onClick={() => handleActiveMarker(place)}
											icon={{
												url: Icon,
												scaledSize: { width: 32, height: 32 },
											}}
										>
											{activeMarker === place ? (
												<InfoWindow onCloseClick={() => setActiveMarker(null)}>
													<div>
														<h1>{place.name}</h1>
														<p>{place.vicinity}</p>
														<p>{place.rating}</p>
													</div>
												</InfoWindow>
											) : null}
										</MarkerF>
									))}
									{userLocation && (
										<MarkerF
											position={userLocation}
											onClick={() => setShowUserLocationInfo(true)}
											icon={{
												url: Icon1,
												scaledSize: { width: 34, height: 34 },
											}}
										/>
									)}

									{showUserLocationInfo && userLocation && (
										<InfoWindow
											position={userLocation}
											onCloseClick={() => setShowUserLocationInfo(false)}
										>
											<div>
												<p>You are here!</p>
											</div>
										</InfoWindow>
									)}

									{selectedPlace && (
										<InfoWindow
											position={{
												lat: selectedPlace.geometry.location.lat(),
												lng: selectedPlace.geometry.location.lng(),
											}}
										>
											<div>
												<h2>{selectedPlace.name}</h2>
												<p>{selectedPlace.vicinity}</p>
												<p>{selectedPlace.rating}</p>

												<button onClick={() => setSelectedPlace("")}>
													close
												</button>
											</div>
										</InfoWindow>
									)}
								</GoogleMap>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default BloodCentres;
