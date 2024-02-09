// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOoSr3cKgB8bV8IWclyMfEEuVej-sg3zQ",
  authDomain: "netflixgpt-3e56c.firebaseapp.com",
  projectId: "netflixgpt-3e56c",
  storageBucket: "netflixgpt-3e56c.appspot.com",
  messagingSenderId: "1009945333629",
  appId: "1:1009945333629:web:4142565869bac63b99c614",
  measurementId: "G-GLHEJ27SMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()