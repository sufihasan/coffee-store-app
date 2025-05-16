// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMsqWSvjysSiADA37CBvn1MXcG3lDOfAc",
    authDomain: "coffee-store-app-3c000.firebaseapp.com",
    projectId: "coffee-store-app-3c000",
    storageBucket: "coffee-store-app-3c000.firebasestorage.app",
    messagingSenderId: "1088433364482",
    appId: "1:1088433364482:web:3681ee569e1b0fede6d11b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);