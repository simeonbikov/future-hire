import React from "react";
import "../Components/Hero.css";
import heroImage from "../Images/cyfteam.jpeg";

function Hero(props) {
  return (
    <div className="hero-container">
      <img src={heroImage} alt="cyf-team" className="hero-image" />
      <div className="hero-content">
        <div className="hero-title autotype">{props.title}</div>
      </div>
    </div>
  );
}

export default Hero;
