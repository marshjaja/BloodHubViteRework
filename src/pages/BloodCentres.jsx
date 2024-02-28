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
		<div className="container">
			<div className="controls">
				<input
					className="input-box"
					type="text"
					placeholder="Enter postcode"
					value={postcode}
					onChange={(e) => setPostcode(e.target.value)}
				/>
				<button onClick={handleSearch}>Search</button>
				{!isValidPostcode && (
					<p className="error-message">Invalid postcode. Please try again.</p>
				)}
			</div>

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

									<button onClick={() => setSelectedPlace("")}>close</button>
								</div>
							</InfoWindow>
						)}
					</GoogleMap>
				</div>
			)}
		</div>
	);
};

export default BloodCentres;
