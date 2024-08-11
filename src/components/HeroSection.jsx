import React from 'react';
import '../css/HeroSection.css';
import homeImage from '../assets/images/homeimg.jpg';

function HeroSection() {
    return (
        <section className="hero-section" style={{ backgroundImage: `url(${homeImage})` }}>
            <div className="hero-content">
                <h1>Learn Music in Kathmandu</h1>
                <p>Join our classes and develop your musical skills with experienced instructors. Suitable for all levels.</p>
                <button className="join-now">Join Now</button>
            </div>
        </section>
    );
}

export default HeroSection;
