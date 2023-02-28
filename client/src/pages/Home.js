import { useEffect, useState } from "react";
import GraduateCard from "../Components/GraduateCard";
import HireCard from "../Components/HireCard";
import { TestimonialCard } from "../Components/TestimonialCard";
import "./Home.css";
import Hero from "../Components/Hero";

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
		<div>
			<Hero title="Hire a Graduate" />
			<div className="container">
				<div className="text-center m-3 mt-5">
					<h1>Discover the ideal candidate</h1>
					<p className="fs-5">
						Bridging the gap between talented CodeYourFuture graduates and
						companies searching for competent candidates.
					</p>
				</div>
				<div className="row m-5 text-center ">
					{graduates.map((graduate) => {
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
			<div className="new4"></div>
			<div className="d-flex justify-content-center">
				<TestimonialCard />
			</div>
		</div>
	);
}
export default Home;
