import React, { useState, useEffect } from 'react';
import '../css/AboutUsSection.css';
import musicProd from '../assets/images/musicprod.png';
import guitarLesson from '../assets/images/guitarlesson.png';
import studio from '../assets/images/studio.jpg';

function AboutUs() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [musicProd, guitarLesson, studio];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [images.length]);

    return (
        <section className="about-us-section" id="about-us">
            <div className="about-us-content">
                <div className="about-us-text">
                    <h2>About Us</h2>
                    <p>Learn more about ChilliesAudioWorks and our mission to provide quality music education in Kathmandu.</p>
                </div>
                <div className="about-us-slider">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            className={`slider-image ${index === currentIndex ? 'active' : ''}`}
                            src={image}
                            alt={`Slide ${index}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
