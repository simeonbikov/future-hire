// import { response } from "express";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import "./Home.css";
// import logo from "./logo.svg";

export function Home() {
	const[graduates, setGraduates] = useState([]); // <---- Const created //
	// const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		fetch("api/graduates") //<--- Listening in the port//
			.then((response) => response.json())
			.then((data) => {
				setGraduates(data);
			});
}, []);
console.log(graduates);
	return (
		<main role="main">
			{graduates.map((graduate, index) =>{
				return(
					<h1 key={index}> {graduate.full_name} </h1>  //<--- displays the full names
				);
			})}
			{/* <div>
				<img
					className="logo"
					data-qa="logo"
					src={logo}
					alt="Just the React logo"
				/>
				<h1 className="message" data-qa="message">
					{message}
				</h1>
				<Link to="/about/this/site">About</Link>

			</div> */}
		</main>
	);
}

export default Home;
