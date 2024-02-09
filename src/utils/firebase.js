// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbTKTV0m9NjDCH93-flYu51GjhzHourqA",
  authDomain: "netflixgpt-a2047.firebaseapp.com",
  projectId: "netflixgpt-a2047",
  storageBucket: "netflixgpt-a2047.appspot.com",
  messagingSenderId: "43717799838",
  appId: "1:43717799838:web:582c536e61623255a5f08f",
  measurementId: "G-FNRQH7B2G3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
