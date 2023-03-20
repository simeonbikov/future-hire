import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function AddGraduateForm() {
	const [user] = useAuthState(auth);
	const [formData, setFormData] = useState({
		profilePicture_url: "",
		full_name: "",
		email: user.email,
		cohort: "",
		professional_interest: "",
		cv_link: "",
		linkedIn_url: "",
		gitHub_url: "",
		summary: "",
		experience: "",
		skills: [],
	});
	const [skills, setSkills] = useState([]);
	const [isValid, setIsValid] = useState(true);
	const [isValidLinkedInUrl, setIsValidLinkedInUrl] = useState(true);
	const [isValidGitHubUrl, setIsValidGitHubUrl] = useState(true);
	const [isSkillsSelected, setIsSkillsSelected] = useState(true);

	useEffect(() => {
		fetch("/api/skills")
			.then((res) => res.json())
			.then((data) => {
				setSkills([...data]);
			})
			.catch((error) => {
				toast.error("There was an error loading skills.");
				console.error("There was an error loading skills!", error);
			});
	}, []);

	const handleInputChange = (event) => {
		let { name, value } = event.target;
		if (name === "linkedIn_url") {
			linkedInValidation(value);
		} else if (name === "gitHub_url") {
			gitHubValidation(value);
		} else if (name === "skills") {
			value = Array.from(
				event.target.selectedOptions,
				(option) => option.value
			);
			skillsValidation(value);
		}
		setFormData({ ...formData, [name]: value });
	};

	const skillsValidation = (skills) => {
		if (skills.length === 0) {
			setIsSkillsSelected(false);
		} else {
			setIsSkillsSelected(true);
		}
	};

	const linkedInValidation = (link) => {
		if (!link.toString().toLowerCase().includes("linkedin.com")) {
			setIsValidLinkedInUrl(false);
		} else {
			setIsValidLinkedInUrl(true);
		}
	};

	const gitHubValidation = (link) => {
		if (!link.toString().toLowerCase().includes("github.com")) {
			setIsValidGitHubUrl(false);
		} else {
			setIsValidGitHubUrl(true);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		linkedInValidation(formData.linkedIn_url);
		gitHubValidation(formData.gitHub_url);
		skillsValidation(formData.skills);

		if (
			formData.profilePicture_url.trim() === "" ||
			formData.full_name.trim() === "" ||
			formData.email.trim() === "" ||
			formData.cohort.trim() === "" ||
			formData.professional_interest.trim() === "" ||
			formData.summary.trim() === "" ||
			!isSkillsSelected ||
			formData.experience === "" ||
			formData.cv_link.trim() === "" ||
			!isValidLinkedInUrl ||
			!isValidGitHubUrl
		) {
			setIsValid(false);
			return;
		}

		fetch("/api/graduate/register", {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.status);
				} else {
					return response.json();
				}
			})
			.then((data) => {
				console.log("Success:", data);
				resetForm();
				toast("Thankyou for registering with us.");
			})
			.catch((error) => {
				toast.error("Could not save!");
				console.error("There was an error", error);
			});
	};

	const resetForm = () => {
		setFormData({
			profilePicture_url: "",
			full_name: "",
			email: "",
			cohort: "",
			professional_interest: "",
			cv_link: "",
			linkedIn_url: "",
			gitHub_url: "",
			summary: "",
			experience: "",
			skills: [],
		});
	};

	return (
		<>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<br />
			<br />
			<div className="d-flex justify-content-center">
				<div className="card_lg card shadow-lg py-5 px-5 w-75">
					<p className="fs-4  mb-3 text-center">
						Enter your details below to showcase your skills to potential
						employers in the CodeYourFuture Page
					</p>
					<div className="w-100 mt-3 d-flex justify-content-center">
						<form
							className={`w-75 requires-validation ${
								!isValid && "was-validated"
							}`}
							noValidate
							onSubmit={handleSubmit}
						>
							<div className="w-75 mb-3 ">
								<input
									className="form-control"
									type="text"
									name="profilePicture_url"
									id="profilePicture_url"
									placeholder="Profile Picture URL"
									maxLength="500"
									onChange={handleInputChange}
									required
									value={formData.profilePicture_url}
								/>
								<div id="validationLinkedIn" className="invalid-feedback">
									Please enter your profile picture link.
								</div>
							</div>

							<div className="w-75 mb-3">
								<input
									className="form-control"
									type="text"
									name="full_name"
									id="full_name"
									placeholder="Full Name"
									maxLength="120"
									onChange={handleInputChange}
									required
									value={formData.full_name}
								/>
								<div className="invalid-feedback">
									Full Name field cannot be blank!
								</div>
							</div>

							<div className="w-75 mb-3">
								<input
									className="form-control"
									type="email"
									name="email"
									id="email"
									placeholder={user.email}
									maxLength="500"
									onChange={handleInputChange}
									required
									value={formData.email}
									readOnly="readonly"
								/>
								<div id="validationLinkedIn" className="invalid-feedback">
									Please enter your email address.
								</div>
							</div>

							<div className="w-75 mb-3">
								<input
									className="form-control"
									type="text"
									name="cohort"
									id="cohort"
									placeholder="Location"
									maxLength="200"
									onChange={handleInputChange}
									required
									value={formData.cohort}
								/>
								<div className="invalid-feedback">
									Location Name field cannot be blank!
								</div>
							</div>

							<div className="w-75 mb-3">
								<input
									className="form-control"
									type="text"
									name="professional_interest"
									id="professional_interest"
									placeholder="Professional Interest"
									maxLength="120"
									onChange={handleInputChange}
									required
									value={formData.professional_interest}
								/>
								<div className="invalid-feedback">
									Professional Interest field cannot be blank!
								</div>
							</div>

							<div className="w-75 mb-3">
								<input
									className="form-control"
									type="text"
									name="cv_link"
									id="cv_link"
									placeholder="CV Link"
									maxLength="500"
									onChange={handleInputChange}
									required
									value={formData.cv_link}
								/>
								<div id="validationLinkedIn" className="invalid-feedback">
									Please enter your CV link.
								</div>
							</div>

							<div className="w-75 mb-3">
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
									value={formData.linkedIn_url}
								/>
								<div id="validationLinkedIn" className="invalid-feedback">
									Please enter your LinkedIn link.
								</div>
							</div>

							<div className="w-75 mb-3">
								<input
									className={`form-control ${
										!isValidGitHubUrl && "is-invalid"
									}`}
									type="text"
									name="gitHub_url"
									id="gitHub_url"
									placeholder="GitHub URL"
									maxLength="500"
									onChange={handleInputChange}
									required
									value={formData.gitHub_url}
								/>
								<div id="validationGitHub" className="invalid-feedback">
									Please enter your GitHub link.
								</div>
							</div>

							<div className="w-75 mb-3">
								<textarea
									className="form-control"
									type="text"
									name="summary"
									id="summary"
									placeholder="Personal Summary"
									maxLength="500"
									onChange={handleInputChange}
									required
									value={formData.summary}
								/>
								<div className="invalid-feedback">
									Personal Summary field cannot be blank!
								</div>
							</div>

							<div className="w-75 mb-3">
								<textarea
									className="form-control"
									type="text"
									name="experience"
									id="experience"
									placeholder="Past Experiences"
									maxLength="500"
									onChange={handleInputChange}
									required
									value={formData.experience}
								/>
								<div className="invalid-feedback">
									Experience field cannot be blank!
								</div>
							</div>

							<div className="w-75 row container mt-5">
								<div
									className={`form-control ${
										!isSkillsSelected && "is-invalid"
									}`}
								>
									<label htmlFor="skills">Skills</label>
									<select
										className="w-100"
										name="skills"
										id="skills"
										multiple
										data-style="bg-white rounded-pill px-4 py-3 shadow-sm "
										onChange={handleInputChange}
										value={formData.skills}
									>
										{skills?.map((skill, key) => {
											return (
												<option value={skill.id} key={key}>
													{skill.skill}
												</option>
											);
										})}
									</select>
								</div>
								<div id="validationSkills" className="invalid-feedback">
									Please select at-least one skill.
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
			</div>
		</>
	);
}

export default AddGraduateForm;
