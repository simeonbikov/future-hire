import React, { useState, useEffect } from "react";
import "./HireCard.css";

function HireCard({ graduate_detail }) {
	const [graduate, setGraduate] = useState({});

	useEffect(() => {
		setGraduate({ ...graduate_detail });
	}, [graduate_detail]);

	return (
		<div className="row m-5 text-center">
			<div className="col-xl-3 col-sm-6 mb-5">
				<div
					className="card_bg card cbg-white shadow-lg py-5 px-4 enableBlur"
					style={{ borderRadius: "25px" }}
				>
					<img
						src={graduate.photo_url}
						alt={graduate.full_name}
						width="100"
						className="img-fluid rounded-circle mb-3 img-thumbnail thumbnail shadow-sm"
					></img>
					<span className="disableBlur hired-text">
						Hired
					</span>
					<h5 className="m-2">{graduate.full_name}</h5>
					<h6 className="m-2">{graduate.professional_interest}</h6>
					<span className="small text-uppercase text-muted">
						{graduate.cohort}
					</span>
					<br />
					<ul className="social mb-0 list-inline mt-3">
						<li className="list-inline-item">
							<a href={graduate.github_link} className="social-link">
								<i className="bi bi-github"></i>
							</a>
						</li>
						<li className="list-inline-item">
							<a href={graduate.linkedin_link} className="social-link">
								<i className="bi bi-linkedin"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
export default HireCard;
