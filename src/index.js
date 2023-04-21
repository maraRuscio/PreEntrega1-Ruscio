import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXpoI2OWgbsi3UNocZEmoRkYQTA3NCCcc",
  authDomain: "entregafinal-rusciomara.firebaseapp.com",
  projectId: "entregafinal-rusciomara",
  storageBucket: "entregafinal-rusciomara.appspot.com",
  messagingSenderId: "805170912595",
  appId: "1:805170912595:web:e44ad5c1c9fc2a541a95a6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


