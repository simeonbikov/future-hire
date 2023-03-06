import { useState } from "react";
import { Button } from "react-bootstrap";
import "./SkillButton.css";

const SkillButton = ({ skill, handleBtnClick }) => {
	const [isActive, setIsActive] = useState(false);

	const changeColorSkillBtn = (event) => {
		event.preventDefault();
		setIsActive(!isActive);
	};

	return (
		<Button
			variant="secondary"
			size="lg"
			className={`shadow rounded-pill m-2 ${isActive ? "" : "skill-button"}`}
			onClick={(e) => {
				changeColorSkillBtn(e);
				handleBtnClick();
			}}
		>
			{skill}
		</Button>
	);
};
export default SkillButton;
