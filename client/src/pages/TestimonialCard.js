import React from "react";
import "./TestimonialCard.css";

export function TestimonialCard() {


	return (
		<section
			className="testimonial text-center card_sm card cbg-white shadow-lg py-3 px-4 w-50"
			style={{ "border-radius": "25px" }}
		>
			<h2 className="heading">Companies appreciation for our graduates</h2>
			<div
				id="carouselExampleControls"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				<div className="carousel-inner d-flex align-items-center">
					<div className="carousel-item active mx-auto ">
						<div className="d-flex align-items-center testimonial-item">
							<div className="flex-shrink-0 m-4">
								<img
									src="https://codeyourfuture.io/wp-content/uploads/2020/08/Madiha.jpg"
									className="img-fluid rounded-circle mb-3 img-thumbnail thumbnail shadow-md"
									alt="img"
								/>
								<div className="col">
									<h5 className="mb-3">Maria Smantha</h5>
									<h6 className="mb-3">Front end Dev</h6>
								</div>
							</div>
							<div className="flex-grow-1 m-3">
								<p className="fs-5 text-justify">
									"Your willingness and ability to collaborate with other teams
									is excellent.I saw that you learned how to use pivot tables
									for your Excel project and it really helped display the data.”
								</p>
								<p>
									<img
										src="https://codeyourfuture.io/wp-content/uploads/2019/04/Capgemini_Logo.png"
										width="120"
										height="30"
										alt="logo"
										loading="lazy"
									/>
								</p>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="d-flex align-items-center testimonial-item">
							<div className="flex-shrink-0 m-4">
								<img
									src="https://codeyourfuture.io/wp-content/uploads/2020/07/Mo-1.jpeg"
									className="img-fluid rounded-circle mb-3 img-thumbnail thumbnail shadow-md"
									alt="img"
								/>
								<div className="col">
									<h5 className="mb-3">Mohammad</h5>
									<h6 className="mb-3">Front end Dev</h6>
								</div>
							</div>
							<div className="flex-grow-1 m-3">
								<p className="fs-5 text-justify">
									"You embraces diversity and is open to growth
									opportunities.Always value teamwork so much and listen to
									colleague feedback and that matters to us."
								</p>
								<p>
									<img
										src="https://codeyourfuture.io/wp-content/uploads/2019/03/bbc.ca39ba89.png"
										width="82"
										height="24"
										alt="logo"
										loading="lazy"
									/>
								</p>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="d-flex align-items-center testimonial-item">
							<div className="flex-shrink-0 m-4">
								<img
									src="https://codeyourfuture.io/wp-content/uploads/2020/08/Nabil.png"
									className="img-fluid rounded-circle mb-3 img-thumbnail thumbnail shadow-md"
									alt="img"
								/>
								<div className="col">
									<h5 className="mb-3">Nabil</h5>
									<h6 className="mb-3">Front end Dev</h6>
								</div>
							</div>
							<div className="flex-grow-1 m-3">
								<p className="fs-5 text-justify">
									"You always work so passionately to make sure our customers
									get the best experience and insight and they really are
									reaping the rewards from your efforts! you're always so
									authentic and enthusiastic.”
								</p>
								<p>
									<img
										src="https://codeyourfuture.io/wp-content/uploads/2020/07/dixons.png"
										width="100"
										height="35"
										alt="logo"
										loading="lazy"
									/>
								</p>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="d-flex align-items-center testimonial-item">
							<div className="flex-shrink-0 m-4">
								<img
									src="https://codeyourfuture.io/wp-content/uploads/2020/08/Mona.png"
									className="img-fluid rounded-circle mb-3 img-thumbnail thumbnail shadow-md"
									alt="img"
								/>
								<div className="col">
									<h5 className="mb-3">Mona</h5>
									<h6 className="mb-3">Front end Dev</h6>
								</div>
							</div>
							<div className="flex-grow-1 m-3">
								<p className="fs-5 text-justify">
									“It’s fantastic to see how committed you are to learning and I
									wanted to recognise your commitment and effort to learning new
									parts of our system that you don’t normally have to tackle.
									Your enthusiasm and drive to learn is inspiring.”
								</p>
								<p>
									<img
										src="https://codeyourfuture.io/wp-content/uploads/2020/07/niantic.png"
										width="100"
										height="35"
										alt="logo"
										loading="lazy"
									/>
								</p>
							</div>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</section>
	);
}
export default TestimonialCard;
