import React from 'react';
import '../css/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>
                    &copy; 2024 ChilliesAudioWorks | Developed By{' '}
                    <a
                        href="https://sachinkhatri.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Sachin Khatri
                    </a>.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
