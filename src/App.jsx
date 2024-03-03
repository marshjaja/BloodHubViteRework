import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import CanIGiveBlood from "./pages/CanIGiveBlood";
import LandingScreen from "./pages/LandingScreen";
import NavBar from "./components/NavBar";
import AboutBlood from "./pages/AboutBlood";
import BloodCentres from "./pages/BloodCentres";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<AppContent />
		</Router>
	);
}

function AppContent() {
	const location = useLocation();
	const isNotLandingPage = location.pathname !== "/";

	return (
		<>
			{isNotLandingPage && <NavBar />}
			<main className={isNotLandingPage ? "main-container" : ""}>
				<Routes>
					<Route path="/" element={<LandingScreen />} />
					<Route path="/home" element={<Home />} />
					<Route path="/about-blood" element={<AboutBlood />} />
					<Route path="/where-to-donate" element={<BloodCentres />} />
					<Route path="/can-i-give-blood" element={<CanIGiveBlood />} />
				</Routes>
			</main>
			{isNotLandingPage && <Footer />}
		</>
	);
}

export default App;
