import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Graduates = () => {
	const [graduateData, setGraduateData] = useState([]);
	const navigate = useNavigate();
	const { id } = useParams();

	const goBack = () => {
		navigate(-1);
	};

	const getData = async () => {
		try {
			const res = await fetch(`/api/graduates/${id}`);
			if (!res.ok) {
				return;
			}
			let allData = await res.json();
			setGraduateData(allData[0]);
		} catch (err) {
			console.error(`An error occurred: ${err}`);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<main role="main">
			<div>
				<h1>{graduateData.id}</h1>
				<h1>{graduateData.full_name}</h1>
			</div>
			<button onClick={goBack}>Back</button>
		</main>
	);
};

export default Graduates;
