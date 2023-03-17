import { useEffect } from "react";
import "../pages/Login.css";
import photoprofile from "../Images/25231.png";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();


	const getData = async (email) => {
		try {
			const res = await fetch(`/api/graduates/search/${email}`);
			if (!res.ok) {
				return;
			}
			let allData = await res.json();
			const graduate = allData[0];
			if (graduate.id) {
				navigate(`/updateProfile/${graduate.id}`);
			} else {
				navigate("/register");
			}
		} catch (err) {
			console.error(`An error occurred: ${err}`);
		}
	};

	const githubProvider = new GithubAuthProvider();
	const GithubLogin = async () => {
		try {
			const result = await signInWithPopup(auth, githubProvider);
			getData(result.user.email);
			console.log(result.user.email);
		} catch (error) {
			console.log(error);
		}
	};

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

	return (
		<div className="login-form-container">
			<div className="login-form">
				<img src={photoprofile} alt="Logo" />
				<h2>Graduate sign in</h2>
				<div className="form-group">
					<button type="submit" className="btn-login" onClick={GithubLogin}>
						Login with Github
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
