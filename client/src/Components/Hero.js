import React from "react";
import "../Components/Hero.css";
import heroImage from "../Images/cyfteam.jpeg";
// import Typed from "react-typed";

function Hero(props) {
  // const titleOptions = {
  //   strings: [props.title],
  //   typeSpeed: 80,
  //   backSpeed: 80,
  //   loop: true,
  //   loopCount: 2,
  // };

  return (
		<div className="hero-container">
			<img src={heroImage} alt="cyf-team" className="hero-image" />
			<div className="hero-content">
				{/* <Typed {...titleOptions} /> */}
				<h1>{props.title}</h1>
			</div>
		</div>
	);
}

export default Hero;
