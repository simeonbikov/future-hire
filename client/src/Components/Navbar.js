import React from "react";
import { Link } from "react-router-dom";
import "../Components/Navbar.css";

function Navbar(props) {
  return (
    <>
       <ul className="navigation"></ul>
      <Link to="/Login" onClick={props.onClick} >
        Login 
      </Link>
      <Link to="/contact-us" onClick={props.onClick} >
        Contact Us
      </Link>
      <Link to="https://codeyourfuture.io/donate" onClick={props.onClick} >
        Donate
      </Link>
    </>
  );
}

export default Navbar;