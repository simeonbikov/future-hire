import { useEffect, useState } from "react";
import GraduateCard from "../Components/GraduateCard";
import HireCard from "../Components/HireCard";
import { TestimonialCard } from "../Components/TestimonialCard";
import "./Home.css";
import Hero from "../Components/Hero";
import SkillButton from "../Components/SkillButton";
import SearchBar from "../Components/SearchBar";
import Pagination from "../Components/pagination";



export function Home() {
	const [graduates, setGraduates] = useState([]);
	const [filteredGraduates, setFilteredGraduates] = useState([]);
	const [allSkills, setAllSkills] = useState([]);
	const [selectedSkills, setSelectedSkills] = useState([]);
   //PAGINATION //
   const [currentPage, setCurrentPage] = useState(1);
   const [postPerPage, setPostPerPage] = useState(8);

   const lastPostIndex = currentPage * postPerPage;
   const firstPostIndex = lastPostIndex - postPerPage;
   const currentPost= filteredGraduates.slice(firstPostIndex, lastPostIndex);

	useEffect(() => {
		fetch("api/graduates")
			.then((response) => response.json())
			.then((data) => {
				setGraduates(data);
				setFilteredGraduates(data);
				getSkills(data);
			});
	}, []);

	const getNotHiredGraduates = (grads) => {
		return grads.filter((grad) => !grad.hired);
	};

	const getSkills = (grads) => {
		let arraysOfSkills = [];
		grads.map((grad) => arraysOfSkills.push(grad.skills_array));
		const uniqueSkills = arraysOfSkills
			.flat()
			.reduce(
				(unique, skill) =>
					unique.includes(skill) ? unique : [...unique, skill],
				[]
			)
			.sort();
		setAllSkills(uniqueSkills);
		return;
	};

	const filterGrads = (skls) => {
		const allNotHiredGraduates = getNotHiredGraduates(graduates);
		const filteredGrads = allNotHiredGraduates.filter((gr) =>
			skls.every((skl) => gr.skills_array.includes(skl))
		);
		setFilteredGraduates(filteredGrads);
		return;
	};

	const selectSkills = (sk) => {
		let selSkills = selectedSkills;
		const isSkillInTheList = selSkills.some((s) => s === sk);
		if (isSkillInTheList) {
			const index = selSkills.indexOf(sk);
			selSkills.splice(index, 1);
		} else {
			selSkills.push(sk);
			setSelectedSkills(selSkills);
		}
		if (!selectedSkills.length) {
			setFilteredGraduates(graduates);
		} else {
			filterGrads(selectedSkills);
		}
		return;
	};

	return (
		<div>
			<Hero title="Hire a Graduate" />
			<div className="container">
				<div className="text-center m-3 mt-5">
					<SearchBar
						filterSearch={setFilteredGraduates}
						graduate={graduates}
						setGraduate={setGraduates}
						filter={filteredGraduates}
					/>
					<h1>Discover the ideal candidate</h1>
					<p className="fs-5">
						Bridging the gap between talented CodeYourFuture graduates and
						companies searching for competent candidates.
					</p>
				</div>
				<div className="skills-wrapper">
					{allSkills.map((skill) => {
						return (
							<SkillButton
								key={skill}
								skill={skill}
								handleBtnClick={() => selectSkills(skill)}
							/>
						);
					})}
				</div>
				<div className="row m-5 text-center ">
					{currentPost.map((graduate) => {
						if (graduate.hired) {
							return <HireCard key={graduate.id} graduate_detail={graduate} />;
						} else {
							return (
								<GraduateCard key={graduate.id} graduate_detail={graduate} />
							);
						}
					})}
				</div>
			</div>
			<Pagination className="btnDiv" totalPost={filteredGraduates.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} />
			<div className="new4"></div>
			<div className="d-flex justify-content-center">
				<TestimonialCard />

			</div>

		</div>
	);
}
export default Home;
