import React, { useState } from 'react';
import '../css/PopupForm.css';

const PopupForm = ({ closeForm }) => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => setIsSignUp(!isSignUp);

    return (
        <div className="form-popup">
            <form className="form-container">
                <h1 className="form-heading">{isSignUp ? 'SIGN UP' : 'LOGIN'}</h1>

                {isSignUp && (
                    <label htmlFor="username"><b>Username</b></label>
                )}
                {isSignUp && (
                    <input type="text" placeholder="Enter Username" name="username" required />
                )}

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <button type="submit" className="btn">{isSignUp ? 'Create Account' : 'Login'}</button>
                <button type="button" className="btn cancel" onClick={closeForm}>Close</button>

                <p className="create-account-text">
                    {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                    <a href="#" onClick={toggleForm}>
                        {isSignUp ? 'Login' : 'Create an Account'}
                    </a>
                </p>
            </form>
        </div>
    );
};

export default PopupForm;
