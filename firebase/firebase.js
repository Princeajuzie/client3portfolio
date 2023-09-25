// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSE5Ttqo2PmoUyB0ZolFYMiVKzfAVu6Lk",
  authDomain: "favourphilip-a0ab4.firebaseapp.com",
  projectId: "favourphilip-a0ab4",
  storageBucket: "favourphilip-a0ab4.appspot.com",
  messagingSenderId: "212941482953",
  appId: "1:212941482953:web:0586a74e2b47e37b931618",
  measurementId: "G-L69PQHJQHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);