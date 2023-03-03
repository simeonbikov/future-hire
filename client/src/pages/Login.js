import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import "../pages/LoginForm.css";
import logo from "../Images/cyflogo.png"


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email === 'example@gmail.com' && password === 'password123') {
      console.log('Login successful!');
      window.location.href = '/dashboard'; // redirect them to the CYF personal account //
    } else {
      console.error('Invalid email or password');
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-form">
      <img src={logo} alt="Logo" />
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <div className="input-group">
            <span className="input-icon">
              <FaEnvelope />
            </span>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-group">
            <span className="input-icon">
              <FaLock />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
            />
            <span className="input-icon">
              {showPassword ? (
                <FaEyeSlash onClick={handleTogglePassword} />
              ) : (
                <FaEye onClick={handleTogglePassword} />
              )}
            </span>
          </div>
        </div>
        <div className="form-group">
          <div>
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="login-button">
            Login
          </button>
        </div>
        <div className="form-group"> 
          <a href="/forgot-password">Forgot password?</a>  
        </div>
      </form>
    </div>
  );
};

export default Login;
