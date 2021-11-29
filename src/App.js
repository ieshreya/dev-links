import "./styles.css";
import Info from "./components/Info";
import Links from "./components/Links";
import Footer from "./components/Footer";
export default function App() {
	return (
		<div className="App">
			<div className="container">
				<Info />
				<Links />
				<Footer />
			</div>
		</div>
	);
}

// TODO:
// make figma design of this project first then code it here.
