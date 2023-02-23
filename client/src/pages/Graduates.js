import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { ArrowRight } from "react-bootstrap-icons";
import { Container, Row, Col, Image } from "react-bootstrap";
// import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Graduates.css";

const Graduates = () => {
	const [graduateData, setGraduateData] = useState({});
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
			setGraduateData(() => allData[0]);
		} catch (err) {
			console.error(`An error occurred: ${err}`);
		}
	};

	console.log(graduateData);

	useEffect(() => {
		getData();
	}, []);

	return (
		<main>
			<button onClick={goBack}>Back</button>

			<Container>
				<Row className="px-4 my-5">
					<Col sm={5}>
						<Image
							src={graduateData.photo_url}
							alt={graduateData.full_name}
							fluid
							roundedCircle
							thumbnail
							width={400}
						/>
						{/* <img
							src={graduateData.photo_url}
							alt={graduateData.full_name}
							width="100"
							className="img-fluid rounded-circle mb-3 img-thumbnail thumbnail shadow-sm"
						></img> */}
					</Col>
					<Col sm={7}>
						<h1>{graduateData.full_name}</h1>
						<h2>{graduateData.professional_interest}</h2>
						<h3>{graduateData.cohort}</h3>
					</Col>
				</Row>
			</Container>
			<Container>
				<h4>Summary</h4>
				<p>{graduateData.details}</p>
			</Container>
			<Container>
				<h4>Skills</h4>
				<p>{graduateData.details}</p>
			</Container>
			<Container>
				<h4>Past Experience</h4>
				<p>{graduateData.experience}</p>
			</Container>
			<Container>
				<h4>Summary</h4>
				<p>{graduateData.details}</p>
			</Container>
			{/* <i className="bi bi-linkedin"></i> */}
			{/* <div>
				<h1>{graduateData.id}</h1>
				<h1>{graduateData.full_name}</h1>
			</div> */}
			<ArrowRight />
			<a href={graduateData.linkedin_link} className="social-link">
				<i className="bi bi-linkedin"></i>
			</a>
		</main>
	);
};

export default Graduates;




{/* <pre>{JSON.stringify(graduateData, null, 2)}</pre>; */}