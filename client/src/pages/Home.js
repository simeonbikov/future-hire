import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import GraduateCard from "./GraduateCard";

export function Home() {
	const [graduates, setGraduates] = useState([]);
	const navigate = useNavigate();

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
					{graduates.map((graduate) => {
						const openGraduateProfile = () => {
							navigate(`/graduates/${graduate.id}`);
						};
						return (
							<div key={graduate.id}>
								<GraduateCard key={graduate.id} graduate_detail={graduate} />
								<button onClick={openGraduateProfile}>View Profile</button>
							</div>
						);
					})}
				</div>
			</div>
		);
	// }, []);

	// return (
	// 	<div className="container">
	// 		<div className="row text-center ">
				// {graduates?.map((graduate) => (
				// 	<GraduateCard key={graduate.id} graduate_detail={graduate} />
				// ))}
	// 		</div>
	// 	</div>
	// );
	// >>>>>>> d49d52d7323702d4a5ad755f2ff301e78ee4ee70
}
export default Home;
