// import { response } from "express";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";

export function Home() {
	const [graduates, setGraduates] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch("api/graduates")
			.then((response) => response.json())
			.then((data) => {
				setGraduates(data);
			});
	}, []);

	return (
		<main role="main">
			{graduates.map((graduate) => {
				const openGraduateProfile = () => {
					navigate(`/graduates/${graduate.id}`);
				};
				return (
					<div key={graduate.id}>
						<p> {graduate.full_name} </p>
						<button onClick={openGraduateProfile}>View Profile</button>
					</div>
				);
			})}
		</main>
	);
}

export default Home;
