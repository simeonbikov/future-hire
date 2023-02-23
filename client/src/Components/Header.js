import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../Components/Header.css";
import logo from "../Images/cyflogo.png";
import "../Components/Navbar.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-desktop">
        <nav className="navbar-desktop">
          <Link to="/" className="navbar-desktop__logo">
            <img src={logo} alt="logo" ></img>
          </Link>
          <div className="navbar-desktop__links">
            <Navbar onClick={toggleNav} />
          </div>
        </nav>
      </div>
      <div className="header-mobile">
        <nav className="navbar-mobile">
          <div className="navbar-mobile__logo">
            <Link to="/"><img src={logo} alt="logo"></img></Link>
          </div>
          <div
            className={`navbar-mobile__hamburger ${isOpen ? "open" : ""}`}
            onClick={toggleNav}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === "") {
                toggleNav();
              }
            }}
            role="button"
            tabIndex="0"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`navbar-mobile__links ${isOpen ? "open" : ""}`}>
            <Navbar onClick={toggleNav} />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;