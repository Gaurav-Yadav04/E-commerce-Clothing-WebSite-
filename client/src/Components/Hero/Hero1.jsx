import React from "react";
import "./Hero1.css";
import hand_icon from '../Assets/Frontend_Assets/hand_icon.png';
import arrow_icon from '../Assets/Frontend_Assets/arrow.png';
import hero_img from '../Assets/Frontend_Assets/hero_image.png';
const Hero1 = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collections </div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero1;
