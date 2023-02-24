import React from "react";
import { Link } from "react-router-dom";
import "../Components/Navbar.css";

function Navbar(props) {
  return (
    <>
       <ul className="navigation"></ul>
      <Link to="/hire-a-grad" onClick={props.onClick} >
        Hire a Grad
      </Link>
      <Link to="/contact-us" onClick={props.onClick} >
        Contact Us
      </Link>
      <Link to="/donate" onClick={props.onClick} >
        Donate
      </Link>
    </>
  );
}

export default Navbar;
