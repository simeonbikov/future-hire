// import { response } from "express";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import "./Home.css";
// import logo from "./logo.svg";

export function Home() {
	const[students, setStudents] = useState([]);
	// const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		fetch("http://localhost:3100/api/students")
			.then((response) => response.json())
			.then((data) => {
				setStudents(data);
			});
}, []);
console.log(students);
	return (
		<main role="main">
			{students.map((student, index) =>{
				return(
					<h1 key={index}> {student.full_name} </h1>
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
