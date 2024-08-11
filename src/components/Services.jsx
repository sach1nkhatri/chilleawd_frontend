import React from 'react';
import '../css/ServicesSection.css';
import guitarLesson from '../assets/images/guitarlesson.png';
import studio from '../assets/images/studio.jpg';
import musicProd from '../assets/images/musicprod.png';

function Services() {
    return (
        <section className="my-services-section" id="my-services">
            <h2>Our Services</h2>
            <p>Explore the various services we offer, from music lessons to recording sessions and more.</p>
            <div className="services-grid">
                <div className="service-item">
                    <img src={guitarLesson} alt="Music Lessons" className="service-image" />
                    <h3>Music Lessons</h3>
                    <p>We offer music lessons for various instruments and skill levels. Learn from our experienced instructors.</p>
                </div>
                <div className="service-item">
                    <img src={studio} alt="Recording Sessions" className="service-image" />
                    <h3>Recording Sessions</h3>
                    <p>Book a session in our state-of-the-art recording studio. Our engineers will help you achieve the perfect sound.</p>
                </div>
                <div className="service-item">
                    <img src={musicProd} alt="Music Production" className="service-image" />
                    <h3>Music Production</h3>
                    <p>Our production services cover everything from songwriting to mixing and mastering. Get professional results.</p>
                </div>
            </div>
        </section>
    );
}

export default Services;
