import React, { useState, useEffect, useRef, useCallback } from "react";
import {
	GoogleMap,
	LoadScript,
	MarkerF,
	useLoadScript,
	InfoWindow,
} from "@react-google-maps/api";
import "../styles/BloodCentres.styles.css";

const center = { lat: 51.5074, lng: -0.1278 };
const libraries = ["places"];

const BloodCentres = () => {
	const [postcode, setPostcode] = useState("");
	const [isValidPostcode, setIsValidPostcode] = useState(true);
	const [places, setPlaces] = useState([]);
	const [userLocation, setUserLocation] = useState(null);

	const mapRef = useRef(null);
	const onLoad = useCallback((map) => (mapRef.current = map), []);

	const { isLoaded } = useLoadScript({
		googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
		libraries,
	});

	const handleSearch = () => {
		const geocoder = new window.google.maps.Geocoder();

		geocoder.geocode({ address: postcode }, (results, status) => {
			if (status === "OK" && results[0]) {
				const location = {
					lat: results[0].geometry.location.lat(),
					lng: results[0].geometry.location.lng(),
				};
				searchNearbyBloodCenters(location);
				setUserLocation(location);
				setIsValidPostcode(true);
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

	useEffect(() => {
		console.log("Updated places state:", places);
	}, [places]);

	return (
		<div className="container">
			<div className="controls">
				<input
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
							/>
						))}
						{userLocation && <MarkerF position={userLocation} />}
					</GoogleMap>
				</div>
			)}
		</div>
	);
};

export default BloodCentres;
