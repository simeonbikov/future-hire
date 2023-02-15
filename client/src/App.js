import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";


import About from "./pages/About";
import Home from "./pages/Home";

function App(){
	const [backendData, setBackendData] = useState([{}])
	useEffect(() =>{
	fetch('http://localhost:4000/students').then(    // Fetching to the port 4000 where student info is //
		response => response.json()
	).then(
		data => {
		setBackendData(data)
		}
	)
	}, []);
	return(
<div>
	{(typeof backendData.students === 'undefined') ?(   // created a if statement to return a message if the api is not returned//
		<p>Loading...</p>
	) (
		backendData.students.map((student, i) =>(
			<p key={i}>{student}</p>
		))
	)};
	      // Don't Know if we need to keep this v //
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
	</div>
	)
}

export default App;
