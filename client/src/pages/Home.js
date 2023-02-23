// import { response } from "express";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import "./Home.css";


export function Home() {
	const[graduates, setGraduates] = useState([]); // <---- Const created //

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
		</main>
	);
}

export default Home;