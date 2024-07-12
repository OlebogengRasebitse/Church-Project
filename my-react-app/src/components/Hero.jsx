import React from "react";
import './Hero.css';
import heroImage from '../images/Hero.jpg';

const Hero = () => {
    return (
        <div className="hero-container">
                  <img src={heroImage} alt="Hero" className="hero-image" />
            <div className="hero-content">
                <h1>Title</h1>
                <p>"Let all that you do be done in love." - 1 Corinthians 16:14</p>
            </div>
        </div>
    );
};

export default Hero;