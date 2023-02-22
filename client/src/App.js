import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Graduates from "./pages/Graduates";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/graduates/:id" element={<Graduates />} />
		<Route path="/about/this/site" element={<About />} />
	</Routes>
);

export default App;
