import React from "react";
import "../pages/Login.css";
import photoprofile from "../Images/25231.png";


const Login = () => {

	const github = () => {
		window.open("http://localhost:3100/api/auth/github", "_self");
	};

  return (
		<div className="login-form-container">
			<div className="login-form">
				<img src={photoprofile} alt="Logo" />
				<h2>Graduate sign in</h2>
				<div className="form-group">
					<button type="submit" className="btn-login" onClick={github}>
						Login with Github
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
