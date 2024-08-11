import React from 'react';
import '../css/PopupForm.css'; // Corrected import path

const PopupForm = ({ closeForm }) => {
    return (
        <div className="form-popup">
            <form className="form-container">
                <h1 className="form-heading">LOGIN</h1>
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <button type="submit" className="btn">Login</button>
                <button type="button" className="btn cancel" onClick={closeForm}>Close</button>

                <p className="create-account-text">Don't have an account? <a href="#">Create an Account</a></p>
            </form>
        </div>
    );
};

export default PopupForm;
