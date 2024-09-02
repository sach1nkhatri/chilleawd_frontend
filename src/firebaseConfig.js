// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database"; // Import Firebase Realtime Database

const firebaseConfig = {
    apiKey: "AIzaSyBukqwYYztU-ZC3fkP6maWmT2Xwxoz2s78",
    authDomain: "chilli-audioworks.firebaseapp.com",
    projectId: "chilli-audioworks",
    storageBucket: "chilli-audioworks.appspot.com",
    messagingSenderId: "710867049288",
    appId: "1:710867049288:web:79bd3e06c5f62059f6f17d",
    measurementId: "G-QS5JXW9PMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication
const database = getDatabase(app); // Initialize Firebase Realtime Database

export { app, analytics, auth, database }; // Export database along with app, auth, and analytics
