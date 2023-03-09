import React from "react";
import "../Components/Footer.css";
import logo from "../Images/cyflogo.png";
import Facebook from "../Images/facebookicon.png";
import Instagram from "../Images/instagram.png";
import Linkedin from "../Images/Linkedin.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="social-media-container">
          <a href="https://www.linkedin.com/company/codeyourfuture/">
            <img src={Linkedin} alt="Linkedin" className="social-media-icon" />
          </a>
          <a href="https://www.facebook.com/codeyourfuture.io">
            <img src={Facebook} alt="Facebook" className="social-media-icon" />
          </a>
          <a href="https://www.instagram.com/codeyourfuture_/">
            <img src={Instagram} alt="Instagram" className="social-media-icon" />
          </a>
        </div>
        <div className="text-container">
          <p className="text">
            © All rights reserved | Registered UK and Scottish charity | Send website feedback
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
