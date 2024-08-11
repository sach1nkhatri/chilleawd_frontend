import React, { useState } from 'react';
import '../css/Header.css';
import logo from '../assets/images/chillilogo.png';
import PopupForm from './PopupForm';

function Header() {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const openForm = () => setIsFormVisible(true);
    const closeForm = () => setIsFormVisible(false);

    return (
        <header className="header-container">
            <div className="logo-title">
                <img src={logo} alt="Chillie AudioWorks" />
                <h1>ChilliesAudioWorks</h1>
            </div>
            <nav className="nav-links">
                <a href="#home">Home</a>
                <a href="#about-us">About Us</a>
                <a href="#my-services">Our Services</a>
                <a href="#content">Content</a>
                <a href="#contact-us">Contact Us</a>
            </nav>
            <button className="Log-in-button" onClick={openForm}>Login</button>
            {isFormVisible && <PopupForm closeForm={closeForm} />}
        </header>
    );
}

export default Header;
