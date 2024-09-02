import React, { useState } from 'react';
import { database } from '../firebaseConfig'; // Import the database object from firebaseConfig
import { ref, set } from "firebase/database"; // Import Realtime Database functions
import '../css/ContactUsSection.css';

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        const contactData = { name, email, message };

        try {
            // Save contact data in Firebase Realtime Database using email as the primary key
            await set(ref(database, 'contacts/' + email.replace(/\./g, ',')), contactData);

            alert('Message sent successfully');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error:', error);
            setError(`An error occurred: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact-us" className="contact-us-section">
            <div className="section-container">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                    {error && <p className="error-message">{error}</p>}
                </form>
            </div>
        </section>
    );
}

export default ContactUs;
