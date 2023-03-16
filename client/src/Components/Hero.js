import React, { useState } from "react";
import "../Components/Hero.css";
import heroImage from "../Images/cyfteam.jpeg";
import AutotypeText from './AutotypeText';

function Hero() {
  const phrases = ["Hire a Graduate", "Hire a Talent",];
  const [phraseIndex, setPhraseIndex] = useState(0);

  function getNextPhrase() {
    const nextIndex = (phraseIndex + 1) % phrases.length;
    setPhraseIndex(nextIndex);
  }

  return (
    <div className="hero-container">
      <img src={heroImage} alt="cyf-team" className="hero-image" />
      <div className="hero-content">
        <AutotypeText text={phrases[phraseIndex]} delay={100} shouldRepeat={true} onRepeat={getNextPhrase} />
      </div>
    </div>
  );
}

export default Hero;