import React from "react";
import { Link } from "react-router-dom";
import "../Components/Navbar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
	const [user] = useAuthState(auth);
	const navigate = useNavigate();

	const btnClickHandler = () => {
		navigate("/");
		auth.signOut();
	};

	return (
		<>
			<ul className="navigation"></ul>
			<Link to="/" onClick={props.onClick}>
				Home
			</Link>
			<Link to="/contact" onClick={props.onClick}>
				Contact
			</Link>
			{!user && (
				<>
					<Link to="/Login" onClick={props.onClick}>
						Login
					</Link>
				</>
			)}
			{user && (
				<>
					<button onClick={btnClickHandler} className="button-link">
						Sign Out
					</button>
				</>
			)}
		</>
	);
}

export default Navbar;
