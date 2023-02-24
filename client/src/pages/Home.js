import { useEffect, useState } from "react";
import "./Home.css";
import GraduateCard from './GraduateCard';
import { TestimonialCard } from './TestimonialCard';

export function Home() {
	const[graduates, setGraduates] = useState([]); // <---- Const created //
	// const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		fetch("api/graduates") //<--- Listening in the port//
			.then((response) => response.json())
			.then((data) => {
				setGraduates(data);
			});
}, []);

return (
	<div>
		<div className="container">
			<div className="text-center m-3 mt-5">
				<h1>Discover the ideal candidate</h1>
				<p className="fs-5">
					Bridging the gap between talented CodeYourFuture graduates and
					companies searching for competent candidates.
				</p>
			</div>
			<div className="row m-5 text-center ">
				{graduates?.map((graduate) => (
					<GraduateCard key={graduate.id} graduate_detail={graduate} />
				))}
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