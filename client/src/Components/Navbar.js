import React from "react";
import { Link } from "react-router-dom";
import "../Components/Navbar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../pages/utils/firebase";
// import { useNavigate } from "react-router-dom";

function Navbar(props) {
	const [user] = useAuthState(auth);
	// const navigate = useNavigate();

	// if (user) {
	// 	return navigate("/");
	// }

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
					<Link to="/register" onClick={props.onClick}>
						Register
					</Link>
				</>
			)}
			{user && (
				<>
					<a href onClick={() => auth.signOut()}>
						Sign Out
					</a>
				</>
			)}
		</>
	);
}

export default Navbar;



// import { useNavigate } from "react-router-dom";

//     const navigate = useNavigate();

//     const handleClick = () => {
//         navigate("/path/to/push");
//     }


// import React, { Component } from 'react';
// import { Redirect } from 'react-router';
// export default class LoginComponent extends Component {
//     render(){
//         if(this.state.isLoggedIn === true){
//             return (<Redirect to="/your/redirect/page" />);
//         }else{
//             return (<div>Login Please</div>);
//         }
//     }
// }