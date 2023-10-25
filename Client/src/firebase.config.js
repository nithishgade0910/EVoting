// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWScYy5fegDiliKtaku_LVW3_0FwFLDZU",
    authDomain: "evoting-96c79.firebaseapp.com",
    projectId: "evoting-96c79",
    storageBucket: "evoting-96c79.appspot.com",
    messagingSenderId: "169565336884",
    appId: "1:169565336884:web:e0c6883b7a574185d66161",
    measurementId: "G-TR5X4RPEWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);