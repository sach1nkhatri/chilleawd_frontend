import React from 'react';
import soch from '../assets/images/soch.jpg';
import bandlabwhi from '../assets/images/bandlabwhi.png';
import '../css/ContentSection.css';
function Content() {
    return (
        <section id="content" className="content-section">
            <div className="section-container">
                <h2>Our Content</h2>
                <div className="content-buttons">
                    <a href="https://www.youtube.com/watch?v=S6SYWDzg9FI&list=PLVmfX13PprMvmJeRkMSGxrEtov_eBNw2h" className="content-item">
                        <img src={soch} alt="Content 1" />
                        <h3>My New Album Soch</h3>
                        <p>This Album Contains My Instrumental Songs</p>
                    </a>
                    <div className="content-item">
                        <iframe className="video-frame" width="560" height="315" src="https://www.youtube.com/watch?v=dMutMxnnSMo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <h3>Acoustica</h3>
                        <p>One of my songs from the album Soch</p>
                    </div>
                    <a href="https://www.bandlab.com/sachin_khatrii" className="content-item">
                        <img src={bandlabwhi} alt="Content 3" />
                        <h3>Bandlab Profile</h3>
                        <p>We Post Our Songs and assets here</p>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Content;
