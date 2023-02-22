import { useEffect, useState } from "react";
import "./Home.css";
import GraduateCard from './GraduateCard';

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