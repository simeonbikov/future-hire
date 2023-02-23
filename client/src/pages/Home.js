import { useEffect, useState } from "react";
import "./Home.css";
import GraduateCard from "./GraduateCard";

export function Home() {
	const [graduates, setGraduates] = useState([]);

	useEffect(() => {
		fetch("api/graduates")
			.then((response) => response.json())
			.then((data) => {
				setGraduates(data);
			});
	}, []);

	return (
		<div className="container">
			<div className="row text-center ">
				{graduates?.map((graduate) => (
					<GraduateCard key={graduate.id} graduate_detail={graduate} />
				))}
			</div>
		</div>
	);
}
export default Home;

