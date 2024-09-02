import React, { useState } from 'react';
import { auth, database } from '../firebaseConfig'; // Import the auth and database objects from firebaseConfig
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database"; // Import Realtime Database functions
import '../css/PopupForm.css';

const PopupForm = ({ closeForm }) => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState(''); // Add state for username

    const toggleForm = () => setIsSignUp(!isSignUp);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isSignUp) {
                // Sign up
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // Save user data in Realtime Database
                await set(ref(database, 'users/' + user.uid), {
                    username: username,
                    email: email,
                });

                alert("Account created successfully!");
            } else {
                // Sign in
                await signInWithEmailAndPassword(auth, email, password);
                alert("Logged in successfully!");
            }
            closeForm(); // Close the form on successful login/signup
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="form-popup">
            <form className="form-container" onSubmit={handleSubmit}>
                <h1 className="form-heading">{isSignUp ? 'SIGN UP' : 'LOGIN'}</h1>

                {isSignUp && (
                    <>
                        <label htmlFor="username"><b>Username</b></label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </>
                )}

                <label htmlFor="email"><b>Email</b></label>
                <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="psw"><b>Password</b></label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

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
