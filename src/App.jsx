import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	NavLink,
	Link,
} from "react-router-dom";

import Home from "./pages/Home";
import CanIGiveBlood from "./pages/CanIGiveBlood";
import LandingScreen from "./pages/LandingScreen";

function App() {
	return (
		<>
			<Router>
				<nav>
					<ul>
						<li>
							<Link to="/home">Home</Link>
						</li>
						<li>
							<Link to="/can-i-give-blood">Can I Give Blood</Link>
						</li>
					</ul>
				</nav>
				<main>
					<Routes>
						<Route path="/" element={<LandingScreen />} />
						<Route path="/home" element={<Home />} />
						<Route path="/can-i-give-blood" element={<CanIGiveBlood />} />
					</Routes>
				</main>
			</Router>
		</>
	);
}

export default App;
