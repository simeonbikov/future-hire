import React from "react";
import "../pages/Login.css";
import photoprofile from "../Images/25231.png";

const Login = () => {
  return (
    <div className="login-form-container">
      <div className="login-form">
        <img src={photoprofile} alt="Logo" />
        <h2>Graduate sign in</h2>
        <div className="form-group">
          <button type="submit" className="btn-login">
            Login with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
