import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

function EditAddGraduateForm() {
	const [formData, setFormData] = useState({
		id: "",
		photo_url: "",
		full_name: "",
		email: "",
		cohort: "",
		passing_year: "",
		professional_interest: "",
		portfolio_link: "",
		linkedIn_link: "",
		github_link: "",
		details: "",
		experience: "",
		hired: "",
		skills: [],
	});
	const [hiredButtonText, setHiredButtonText] = useState("I am Hired");
	const [skills, setSkills] = useState([]);
	const [isValid, setIsValid] = useState(true);
	const [isValidLinkedInLink, setIsValidLinkedInLink] = useState(true);
	const [isValidGitHubLink, setIsValidGitHubLink] = useState(true);
	const [isSkillsSelected, setIsSkillsSelected] = useState(true);
	const [user] = useAuthState(auth);
	const navigate = useNavigate();

	const { id } = useParams();

	useEffect(() => {
		fetch("/api/skills")
			.then((res) => res.json())
			.then((data) => {
				setSkills([...data]);

				fetch(`/api/graduate_edit/${id}`)
					.then((res) => res.json())
					.then((data) => {
						let editData = {
							id: id,
							photo_url: data[0]?.photo_url || "",
							full_name: data[0]?.full_name || "",
							email:data[0]?.email || "",
							cohort: data[0]?.cohort || "",
							passing_year: data[0]?.passing_year || "",
							professional_interest: data[0]?.professional_interest || "",
							portfolio_link: data[0]?.portfolio_link || "",
							linkedIn_link: data[0]?.linkedin_link || "",
							github_link: data[0]?.github_link || "",
							details: data[0]?.details || "",
							experience: data[0]?.experience || "",
							hired: data[0]?.hired || "",
							skills: data[0]?.skills_array_id || [],
						};
						linkedInValidation(editData.linkedIn_link);
						gitHubValidation(editData.github_link);
						skillsValidation(editData.skills);
						setFormData(editData);
						hiredText(editData.hired);
					})
					.catch((error) => {
						toast.error("There was an error loading skills!");
						console.error("There was an error loading skills!", error);
					});
			})
			.catch((error) => {
				toast.error("There was an error loading details!");
				console.error("There was an error loading skills!", error);
			});
	}, [id]);

	const hiredText = (hired) => {
		if (hired) {
			setHiredButtonText("Looking for job");
		} else {
			setHiredButtonText("I am hired");
		}
	};

	const handleInputChange = (event) => {
		let { name, value } = event.target;
		if (name === "linkedIn_link") {
			linkedInValidation(value);
		} else if (name === "github_link") {
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
			setIsValidLinkedInLink(false);
		} else {
			setIsValidLinkedInLink(true);
		}
	};

	const gitHubValidation = (link) => {
		if (!link.toString().toLowerCase().includes("github.com")) {
			setIsValidGitHubLink(false);
		} else {
			setIsValidGitHubLink(true);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		linkedInValidation(formData.linkedIn_link);
		gitHubValidation(formData.github_link);
		skillsValidation(formData.skills);
		console.log(
			`linked	${isValidLinkedInLink} ${linkedInValidation(
				formData.linkedIn_link
			)}`
		);

		if (
			formData.id === "" ||
			formData.photo_url.trim() === "" ||
			formData.full_name.trim() === "" ||
			formData.email.trim() === "" ||
			formData.cohort.trim() === "" ||
			formData.professional_interest.trim() === "" ||
			formData.details.trim() === "" ||
			!isSkillsSelected ||
			formData.experience === "" ||
			formData.portfolio_link.trim() === "" ||
			!isValidLinkedInLink ||
			!isValidGitHubLink
		) {
			console.log("hello");
			setIsValid(false);
			return;
		}

		fetch(`/api/graduate/update_profile/${formData.id}`, {
			method: "PUT",
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
				toast("Thankyou for updating your profile.");
			})
			.catch((error) => {
				toast.error("Could not save!");
				console.error("There was an error", error);
			});
			navigate(`/graduates/${formData.id}`);
			auth.signOut();
	};

	const handleHired_click = () => {
		fetch(`/api/graduate/update_hired_status/${formData.id}`, {
			method: "PUT",
			body: JSON.stringify({ hired: !formData.hired }),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.status);
				} else {
					hiredText(!formData.hired);
					formData.hired = !formData.hired;
					setFormData({ ...formData });
					return response.json();
				}
			})
			.then((data) => {
				console.log("Success:", data);
				toast("Thankyou for letting us know.");
			})
			.catch((error) => {
				toast.error("Could not save!");
				console.error("There was an error", error);
			});
	};

	if (!user) {
		return navigate("/");
	}

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
					<p className="fs-4 mb-3 text-center">
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
									name="photo_url"
									id="photo_url"
									placeholder="Profile Picture URL"
									maxLength="500"
									onChange={handleInputChange}
									required
									value={formData.photo_url}
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
									type=""
									name="email"
									id="email"
									placeholder="Email Address"
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
									name="portfolio_link"
									id="portfolio_link"
									placeholder="CV Link"
									maxLength="500"
									onChange={handleInputChange}
									required
									value={formData.portfolio_link}
								/>
								<div id="validationLinkedIn" className="invalid-feedback">
									Please enter your CV link.
								</div>
							</div>

							<div className="w-75 mb-3">
								<input
									className={`form-control ${
										!isValidLinkedInLink && "is-invalid"
									}`}
									type="text"
									name="linkedIn_link"
									id="linkedIn_link"
									placeholder="LinkedIn URL"
									maxLength="500"
									onChange={handleInputChange}
									required
									value={formData.linkedIn_link}
								/>
								<div id="validationLinkedIn" className="invalid-feedback">
									Please enter your LinkedIn link.
								</div>
							</div>

							<div className="w-75 mb-3">
								<input
									className={`form-control ${
										!isValidGitHubLink && "is-invalid"
									}`}
									type="text"
									name="github_link"
									id="github_link"
									placeholder="GitHub URL"
									maxLength="500"
									onChange={handleInputChange}
									required
									value={formData.github_link}
								/>
								<div id="validationGitHub" className="invalid-feedback">
									Please enter your GitHub link.
								</div>
							</div>

							<div className="w-75 mb-3">
								<textarea
									className="form-control"
									type="text"
									name="details"
									id="details"
									placeholder="Personal details"
									maxLength="500"
									onChange={handleInputChange}
									required
									value={formData.details}
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

							<div className="w-75 row container">
								<div
									className={`form-control ${
										!isSkillsSelected && "is-invalid"
									}`}
								>
									<label htmlFor="skills" className="">
										Skills
									</label>
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
								&nbsp; &nbsp;
								<button
									id="hired_button"
									type="button"
									className="btn btn-md btn-danger"
									onClick={() => handleHired_click()}
								>
									{hiredButtonText}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default EditAddGraduateForm;
