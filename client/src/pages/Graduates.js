import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Image, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Graduates.css";

const Graduates = () => {
	const [graduateData, setGraduateData] = useState({});
	const [loading, setLoading] = useState(true);
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
			setLoading(false);
			setGraduateData(() => allData[0]);
		} catch (err) {
			setLoading(false);
			console.error(`An error occurred: ${err}`);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<main>
			{loading && (
				<div className="loading-message">
					<Spinner animation="border" variant="primary" /> <br />
					<span>Loading, please wait...</span>
				</div>
			)}
			{!loading && (
				<div className="profile">
					<div>
						<Button
							variant="danger"
							size="lg"
							onClick={goBack}
							className="profile-button rounded-pill"
						>
							Back to the List
						</Button>
					</div>
					<Container className="profile-container">
						<Row className="px-1 my-1">
							<Col md={6} className="profile-col">
								<Image
									src={graduateData.photo_url}
									alt={graduateData.full_name}
									fluid
									roundedCircle
									thumbnail
									width={320}
								/>
							</Col>
							<Col md={6} className="profile-col">
								<h1>{graduateData.full_name}</h1>
								<h2>{graduateData.professional_interest}</h2>
								<h3>
									{graduateData.cohort}
									<i className="bi bi-geo-alt-fill profile-geo"></i>
								</h3>
							</Col>
						</Row>
					</Container>
					<div className="d-flex flex-column">
						<h4>Summary</h4>
						<p className="align-self-center w-50 text-justify">
							{graduateData.details}
						</p>
					</div>
					<div>
						<h4>Skills</h4>
						<div>
							{graduateData.skills_array.map((skill, index) => {
								return (
									<Button
										key={index}
										variant="secondary"
										size="lg"
										className="shadow rounded-pill m-2"
										disabled
									>
										{skill}
									</Button>
								);
							})}
						</div>
					</div>
					<div className="d-flex flex-column">
						<h4>Past Experience</h4>
						<p className="align-self-center w-50 text-justify">
							{graduateData.experience}
						</p>
					</div>
					<div>
						<Button
							variant="link"
							className="m-2"
							onClick={() => window.open(graduateData.portfolio_link, "_blank")}
						>
							<i className="bi bi-file-earmark-text profile-icons"></i>
						</Button>
						<Button
							variant="link"
							className="m-2"
							onClick={() => window.open(graduateData.github_link, "_blank")}
						>
							<i className="bi bi-github profile-icons"></i>
						</Button>
						<Button
							variant="link"
							className="m-2"
							onClick={() => window.open(graduateData.linkedin_link, "_blank")}
						>
							<i className="bi-linkedin profile-icons"></i>
						</Button>
					</div>
					<div>
						<Button
							variant="danger"
							size="lg"
							className="profile-button rounded-pill"
						>
							<a
								href={`mailto:someone@yoursite.com?subject=Need Information about ${graduateData.full_name}&body=I need more information about this graduate`}
							>
								Contact CodeYourFuture
							</a>
						</Button>
					</div>
				</div>
			)}
		</main>
	);
};

export default Graduates;


