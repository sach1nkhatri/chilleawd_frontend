import React, { useState } from 'react';
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
            const response = await fetch('http://localhost:8081/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData),
            });

            if (response.ok) {
                alert('Message sent successfully');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                const errorText = await response.text();
                setError(`Failed to send message: ${errorText}`);
            }
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
