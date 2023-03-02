import React, { useState } from "react";
import "./AddGraduateForm.css";

function AddGraduateForm() {

	const [formData, setFormData] = useState({
		profilePicture_url: "",
		full_name: "",
		cohort: "",
		professionalInterest: "",
		linkedIn_url: "",
		gitHub_url: "",
		summary: "",
		position: [],
		experience: "",
	});
	const [isValid, setIsValid] = useState(true);
	const [isValidLinkedInUrl, setIsValidLinkedInUrl] = useState(true);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		if (name === "linkedIn_url") {
			linkedInValidation(value);
		}
		setFormData({ ...formData, [name]: value });
	};

	const REGEXP = "https:\\/\\/[a-z]{2,3}\\.linkedin\\.com\\/.*$";

	const linkedInValidation = (link) => {
		if (!link.includes("linkedin")) {
			setIsValidLinkedInUrl(false);
		} else {
			setIsValidLinkedInUrl(true);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		linkedInValidation(formData.linkedIn_url);

		if (
			formData.full_name.trim() === "" ||
			formData.cohort.trim() === "" ||
			formData.professionalInterest.trim() === "" ||
			formData.summary.trim() === "" ||
			!isValidLinkedInUrl
		) {
			setIsValid(false);
		}
	};

	return (
		<>
			<br />
			<br />
			<div className="d-flex justify-content-center">
				<div className="align-items-center card_lg card shadow-lg py-3 px-4 w-75">
					<p className="fs-4 text-center">
						Insert your details below to showcase your skills to potential
						employers in the CodeYourFuture Page
					</p>
					<form
						className={`w-75 requires-validation ${
							!isValid && "was-validated"
						}`}
						noValidate
						onSubmit={handleSubmit}
					>
						<div className="mb-3">
							<input
								className={`form-control ${
									!isValidLinkedInUrl && "is-invalid"
								}`}
								type="text"
								name="profilePicture_url"
								id="profilePicture_url"
								placeholder="Profile Picture URL"
								maxLength="500"
								onChange={handleInputChange}
								required
							/>
							<div id="validationLinkedIn" className="invalid-feedback">
								Please enter a valid GitHub address.
							</div>
						</div>

						<div className="mb-3">
							<input
								className="form-control"
								type="text"
								name="full_name"
								id="full_name"
								placeholder="Full Name"
								maxLength="120"
								onChange={handleInputChange}
								required
							/>
							<div className="invalid-feedback">
								Full Name field cannot be blank!
							</div>
						</div>

						<div className="mb-3">
							<input
								className="form-control"
								type="text"
								name="cohort"
								id="cohort"
								placeholder="Location"
								maxLength="200"
								onChange={handleInputChange}
								required
							/>
							<div className="invalid-feedback">
								Location Name field cannot be blank!
							</div>
						</div>

						<div className="mb-3">
							<input
								className="form-control"
								type="text"
								name="professional_interest"
								id="professional_interest"
								placeholder="Professional Interest"
								maxLength="120"
								onChange={handleInputChange}
								required
							/>
							<div className="invalid-feedback">
								Professional Interest field cannot be blank!
							</div>
						</div>

						<div className="mb-3">
							<input
								className={`form-control ${
									!isValidLinkedInUrl && "is-invalid"
								}`}
								type="text"
								name="linkedIn_url"
								id="linkedIn_url"
								placeholder="LinkedIn URL"
								maxLength="500"
								onChange={handleInputChange}
								required
							/>
							<div id="validationLinkedIn" className="invalid-feedback">
								Please enter a valid linkedin address.
							</div>
						</div>

						<div className="mb-3">
							<input
								className={`form-control ${
									!isValidLinkedInUrl && "is-invalid"
								}`}
								type="text"
								name="gitHub_url"
								id="gitHub_url"
								placeholder="GitHub URL"
								maxLength="500"
								onChange={handleInputChange}
								required
							/>
							<div id="validationLinkedIn" className="invalid-feedback">
								Please enter a valid GitHub address.
							</div>
						</div>

						<div className="mb-3">
							<textarea
								className="form-control"
								type="text"
								name="summary"
								id="summary"
								placeholder="Personal Summary"
								maxLength="500"
								onChange={handleInputChange}
								required
							/>
							<div className="invalid-feedback">
								Personal Summary field cannot be blank!
							</div>
						</div>

						<div className="mb-3">
							<textarea
								className="form-control"
								type="text"
								name="experience"
								id="experience"
								placeholder="Past Experiences"
								maxLength="500"
								onChange={handleInputChange}
								required
							/>
							<div className="invalid-feedback">
								Experience field cannot be blank!
							</div>
						</div>

						<div className="row container mt-5">
							<div className="form-control">
								<label>Skills</label>
								<select
									className="w-100"
									multiple
									data-style="bg-white rounded-pill px-4 py-3 shadow-sm "
								>
									<option>HTML/CSS</option>
									<option>JavaScript</option>
									<option>React</option>
									<option>NODE</option>
									<option>Express</option>
								</select>
							</div>
						</div>

						<div className="mt-3 d-flex justify-content-center">
							<button
								id="submit"
								type="submit"
								className="btn btn-md btn-danger"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default AddGraduateForm;
