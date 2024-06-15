import React from "react";
import './Hero.css';
import heroImage from '../images/Hero.jpg';

const Hero = () => {
    return (
        <div className="hero-container">
                  <img src={heroImage} alt="Hero" className="hero-image" />
            <div className="hero-content">
                <h1>Your Hero Title</h1>
                <p>Your Hero Subtitle or Description</p>
            </div>
        </div>
    );
};

export default Hero;